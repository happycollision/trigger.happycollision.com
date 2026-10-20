import { test } from "node:test";
import assert from "node:assert/strict";
import { initial, mixLevels, requestMix } from "../../public/in-ear/routing.js";
test("shared feed retains proportions; local volume does not affect the stage", () => {
  const s = initial();
  s.shared = [80, 40, 20, 0];
  s.ear = 25;
  assert.deepEqual(mixLevels(s), [0.2, 0.1, 0.05, 0]);
  s.destination = "stage";
  assert.deepEqual(mixLevels(s), [0.8, 0.4, 0.2, 0]);
});
test("direct mic bypasses all board sends and cannot contain other stems", () => {
  const s = initial();
  s.setup = 1;
  s.shared = [0, 100, 100, 100];
  s.ear = 70;
  assert.deepEqual(mixLevels(s), [0.7, 0, 0, 0]);
  s.destination = "stage";
  assert.deepEqual(mixLevels(s), [0, 1, 1, 1]);
});
test("board requests reach only destinations connected to that bus", () => {
  for (const setup of [0, 1, 2]) {
    const s = initial();
    s.setup = setup;
    requestMix(s, "voice");
    assert.deepEqual(
      mixLevels(s),
      setup === 1 ? [0.5, 0, 0, 0] : [0.975, 0.275, 0.3, 0.325],
    );
    requestMix(s, "drums");
    assert.deepEqual(
      mixLevels(s),
      setup === 1 ? [0.5, 0, 0, 0] : [0.325, 0.275, 0.3, 0.025],
    );
    s.destination = "stage";
    assert.deepEqual(
      mixLevels(s),
      setup === 2 ? [0.65, 0.55, 0.6, 0.65] : [0.65, 0.55, 0.6, 0.05],
    );
    requestMix(s, "original");
    assert.deepEqual(mixLevels(s), [0.65, 0.55, 0.6, 0.65]);
  }
});
test("two-input mixer preserves the band balance locally; drums require a board request", () => {
  const s = initial();
  s.setup = 3;
  s.personal[0] = 95;
  assert.deepEqual(mixLevels(s), [0.475, 0.20625, 0.225, 0.24375]);
  s.personal = [65, 37];
  const levels = mixLevels(s);
  assert.equal(levels[0], 0.325);
  assert.ok(Math.abs(levels[1] / levels[3] - 55 / 65) < 1e-12);
  s.personal = [65, 75];
  requestMix(s, "drums");
  assert.deepEqual(mixLevels(s), [0.325, 0.20625, 0.225, 0.01875]);
  assert.equal(s.band[0], 0, "band feed must not duplicate the direct vocal");
  s.personal = [100, 0];
  assert.deepEqual(mixLevels(s), [0.5, 0, 0, 0]);
  s.personal = [0, 100];
  assert.deepEqual(mixLevels(s), [0, 0.275, 0.3, 0.025]);
  s.destination = "stage";
  s.ear = 0;
  assert.deepEqual(mixLevels(s), [0.65, 0.55, 0.6, 0.65]);
  s.destination = "ears";
  assert.deepEqual(mixLevels(s), [0, 0, 0, 0]);
});
