export class Player {
  constructor() {
    this.song = "making-me-nervous";
  }
  select(song) {
    this.pause();
    this.song = song;
    this.offset = 0;
    this.buffers = null;
  }
  async play(levels) {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.6;
      this.master.connect(this.ctx.destination);
    }
    await this.ctx.resume();
    if (this.sources) return;
    // Publish the cache only after every stem loads, so a failed load can be retried.
    if (!this.buffers) {
      const buffers = await Promise.all(
        ["voice", "guitar", "bass", "drums"].map(async (name) => {
          const response = await fetch(`assets/audio/${this.song}/${name}.mp3`);
          if (!response.ok) throw new Error(`Could not load ${name}`);
          return this.ctx.decodeAudioData(await response.arrayBuffer());
        }),
      );
      if (buffers.some((buffer) => Math.abs(buffer.duration - 40) > 0.01))
        throw new Error("Stem duration mismatch");
      this.buffers = buffers;
    }
    this.duration = 40;
    this.start = this.ctx.currentTime + 0.05;
    this.gains = this.buffers.map((_, i) => {
      const gain = this.ctx.createGain();
      gain.gain.value = levels[i];
      gain.connect(this.master);
      return gain;
    });
    this.sources = this.buffers.map((buffer, i) => {
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.loopEnd = this.duration;
      source.connect(this.gains[i]);
      source.start(this.start, (this.offset || 0) % this.duration);
      return source;
    });
  }
  get position() {
    return this.sources
      ? ((this.offset || 0) + Math.max(0, this.ctx.currentTime - this.start)) %
          this.duration
      : this.offset || 0;
  }
  update(levels) {
    this.gains?.forEach((gain, i) =>
      gain.gain.setTargetAtTime(levels[i], this.ctx.currentTime, 0.04),
    );
  }
  pause() {
    this.offset = this.position;
    this.sources?.forEach((source) => {
      source.stop();
      source.disconnect();
    });
    this.gains?.forEach((gain) => gain.disconnect());
    this.sources = null;
    this.gains = null;
  }
}
