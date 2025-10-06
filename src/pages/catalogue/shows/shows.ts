import { getCollection, type CollectionEntry } from "astro:content"
type SongSlug = CollectionEntry<"songs">["slug"]
type ShowSong =
  | { slug: SongSlug | SongSlug[]; title?: never; feat?: string | undefined; banter?: string | undefined }
  | { title: string; slug?: never; feat?: string | undefined; banter?: string | undefined }
type ShowSet = ShowSong[]
type Show = { name: string; slug: string; sets: ShowSet[] }

const allSongs = await getCollection("songs", (s) => {
  return !s.slug.includes("_")
})

export const shows: Show[] = [
  { name: "All Songs", slug: "all-songs", sets: [allSongs.map((s) => ({ slug: s.slug }))] },
  {
    name: "St. Patrick's 2023 (proposed list)",
    slug: "2023-03_proposed",
    sets: [
      [
        { slug: "boys-are-back", feat: "WP" },
        { slug: "drink-the-night-away", feat: "WP" },
        { slug: "bvb", feat: "WP" },
        { slug: "paddy-murphy-died", feat: "WP" },
        { slug: "father-mallorys-dance", feat: "Don" },
        { slug: "nelsons-blood", feat: "Don" },
        { slug: "fightin-nolan", feat: "WP" },
        { slug: "kiss-me-im-irish", feat: "WP" },
        { slug: "peggy-gordon", feat: "Nick" },
        { slug: "dirty-old-town", feat: "WP" },
        { slug: "irish-rover", feat: "WP" },
        { slug: "spanish-lady", feat: "Don" },
        { slug: "rattlin-bog", feat: "Adam" },
        { slug: "galway-girl", feat: "Nick" },
        { slug: ["caledonia_a", "caledonia_g"], feat: "Don" },
        { slug: "wild-rover", feat: "WP" },
        { slug: "come-my-friends", feat: "Don" },
        { slug: ["drunken-sailor_csm", "drunken-sailor_am"], feat: "WP" },
        { slug: "big-strong-man_c", feat: "Aaron" },
        { slug: "paddy-on-the-railway", feat: "WP" },
        { slug: "son-never-shines", feat: "Don" },
        { slug: "molly-malone_g", feat: "WP" },
        { slug: "jack-dolan", feat: "WP" },
        { slug: "danny-boy", feat: "Don" },
        { slug: "new-york-girls", feat: "WP" },
        { slug: "mary-mac", feat: "Adam" },
        { slug: "road-to-ruin", feat: "WP" },
      ],
      [
        { slug: "nancy-whiskey", feat: "WP" },
        { slug: ["star-of-the-county-down_don", "star-of-the-county-down_old"], feat: "Don" },
        { slug: "tell-me-ma", feat: "WP" },
        { slug: "black-and-tans", feat: "WP" },
        { slug: "wagon-wheel", feat: "Don" },
        { slug: ["jock-stuart_f", "jock-stuart_d", "jock-stuart_c"], feat: "WP" },
        { slug: "go-lassie-go", feat: "Nick" },
        { slug: "mike-dempsey", feat: "WP" },
        { slug: "water-is-wide", feat: "Don" },
        { slug: "scotsman", feat: "Adam" },
        { slug: "queen-of-argyll", feat: "WP" },
        { slug: "whiskey-in-the-world", feat: "WP" },
        { slug: "parting-glass", feat: "Don" },
        { slug: "whiskey-in-the-jar", feat: "WP" },
      ],
    ],
  },
  {
    name: "St. Patrick's 2023 (rehearsal list)",
    slug: "2023-03",
    sets: [
      [
        { slug: "boys-are-back", feat: "WP" },
        { slug: "drink-the-night-away", feat: "WP" },
        { slug: "bvb", feat: "WP" },
        { slug: "paddy-murphy-died", feat: "WP" },
        { slug: "father-mallorys-dance", feat: "Don" },
        { slug: "nelsons-blood", feat: "Don" },
        { slug: "fightin-nolan", feat: "WP" },
        { slug: "kiss-me-im-irish", feat: "WP" },
        { slug: "peggy-gordon", feat: "Nick" },
        { slug: "dirty-old-town", feat: "WP" },
        { slug: "irish-rover", feat: "WP" },
        { slug: "spanish-lady", feat: "Don" },
        { slug: "rattlin-bog", feat: "Adam" },
        { slug: "galway-girl", feat: "Nick" },
        { slug: "wild-rover", feat: "WP" },
      ],
      [
        { slug: "drunken-sailor_dm", feat: "WP" },
        { slug: "paddy-on-the-railway", feat: "WP" },
        { slug: "big-strong-man_c", feat: "Aaron" },
        { slug: "molly-malone_g", feat: "WP" },
        { slug: ["oh-maggie_g", "oh-maggie_a"], feat: "Nick" },
        { slug: "come-my-friends", feat: "Don" },
        { slug: "son-never-shines", feat: "Don" },
        { slug: "danny-boy", feat: "Don" },
        { slug: ["caledonia_a", "caledonia_g"], feat: "Don" },
        { slug: "road-to-ruin", feat: "WP" },
        { slug: "jack-dolan", feat: "WP" },
        { slug: "new-york-girls", feat: "WP" },
        { slug: "mary-mac", feat: "Adam" },
      ],
      [
        { slug: "nancy-whiskey", feat: "WP" },
        { slug: ["star-of-the-county-down_old", "star-of-the-county-down_don"], feat: "Don" },
        { slug: "rosie", feat: "WP" },
        { slug: "tell-me-ma", feat: "WP" },
        { slug: "black-and-tans", feat: "WP" },
        { slug: "wagon-wheel", feat: "Don" },
        { slug: "jock-stuart_c", feat: "WP" },
        { slug: "go-lassie-go", feat: "Nick" },
        { slug: "water-is-wide", feat: "Don" },
        { slug: "mike-dempsey", feat: "WP" },
        { slug: "scotsman", feat: "Adam" },
        { slug: "whiskey-in-the-world", feat: "WP" },
        { slug: "queen-of-argyll", feat: "WP" },
        { slug: "parting-glass", feat: "Don" },
        { slug: "whiskey-in-the-jar", feat: "WP" },
      ],
    ],
  },
  {
    name: "Don and Paige at Alexian",
    slug: "alexian-04-2024",
    sets: [
      [
        {
          slug: "chapel",
          feat: "Paige",
          banter:
            "**Paige**: hey everyone! My name is Paige and this is my husband Don. We have three children, the oldest one is 4. So our daily lives are very chaotic and busy, and we are thrilled to be able to take a break from chasing our babies around to be here with you and sing some songs! I want to encourage you to please help us out and sing along if you know the words to any of these- or hum along even if you don’t know the words! Hopefully you’ll recognize this first song. It’s always been a favorite of mine. I remember singing it on the playground at Lutheran Elementary school at recess. And making my friends do the harmony. Now I make my husband do the harmony. Hit it honey.",
        },
        {
          slug: "jambalaya",
          feat: "Don",
          banter:
            "**Don**: do we have any Hank Williams fans? I had the honor of playing the role of Hank Williams onstage at a theatre in the northwest corner of Nebraska at the where Paige and I met. I loved playing the role of Hank and getting to learn so many of his songs.\n\n**Paige**: and I played the waitress in it!",
        },
        {
          slug: "dream-lover",
          feat: "Paige",
          banter: "**Paige**: This next song is a 1959 Bobby Darin song but I wanted to sing this one so we’re making it a girl song today.",
        },
        {
          slug: "wild-rover",
          feat: "Don",
          banter:
            "**Don:** Once a year, around St. Patrick’s day, I get to perform with my buddies in our Irish band in Chicago where I used to live. This year, our performance is in May- so if it’s alright with you I wanted to preview a few of those songs for you today. This one’s called the Wild Rover and if you’d like to clap along (explain the clapping part).",
        },
        {
          slug: "edelweiss",
          feat: "Don",
          banter:
            "**Paige**: this next one is from the musical The Sound Of Music. Don and I were in a production of this, but we didn’t get to play opposite each other in this one. He was Captain Von Trapp but I was the Baroness. But today I’m gonna be Maria.",
        },
        {
          slug: "down-to-the-river-to-pray",
          feat: "Paige",
          banter: "**Paige**: Next we have a song that I just love and have always thought was so beautiful. It’s an Allison Krauss song called Down to the River to Pray",
        },
        {
          slug: "folsom-prison-blues",
          feat: "Don",
          banter: "**Don**: next up we have a song made so famous by Johnny Cash that it doesn’t really need an introduction.",
        },
        {
          slug: "til-there-was-you",
          feat: "Don & Paige",
          banter: "**Paige:** Now we have a song from the Music Man. This one we did get to play opposite each other at a theatre in the Quad Cities where we lived for a while.",
        },
        {
          slug: "lollipop",
          feat: "Paige",
          banter:
            "**Paige**: Next we have just a fun song from 1958 made popular by the group the Chordettes. It takes a lot of deep breaths to get through this one, and when Don makes me laugh I can’t get through it. So fingers crossed we make it through.",
        },
        {
          slug: "tell-me-ma",
          feat: "Don",
          banter: "**Don**: Now we’ve got another Irish song for you. This one is a favorite of our kids- Marvin, Darby, and Trilby. It’s called Tell Me Ma.",
        },
        {
          slug: "hey-good-lookin",
          feat: "Don",
          banter: "**Don**: Next we have another Hank Williams for you.",
        },
        {
          slug: "walking-after-midnight",
          feat: "Paige",
          banter:
            "**Paige**: Now I’m going to take my turn at a country song. This one is a Patsy Cline hit from 1957. This was the first one she ever sang on national television and it’s the one that made her famous. Anyone know which one?",
        },
        {
          slug: "lovesick-blues",
          feat: "Don",
          banter:
            "**Don**: Here’s another Hank Williams song.\n\n**Paige**: This is one I got to sit onstage and watch Don sing every night in the show we were in, and I had to act like I really enjoyed listening to him. And I didn’t have to act of course.",
        },
        {
          slug: "allegheny-moon",
          feat: "Paige",
          banter:
            "**Paige**: this next one is a Patti Page song that I had never heard until I was in a musical that had a lot of 50s and 60s songs in it called Marvelous Wonderettes. And I got to sing this beautiful one called Allegheny Moon.",
        },
        {
          slug: "bvb",
          feat: "Don",
          banter:
            "**Paige**: Don has another Irish song next. Now this song I have a personal connection to because my mom loves this song, and when I was in high school and first starting to get into singing, she always tried to get me to sing this one. And I always thought in my teenage brain- no mom, that song is so not cool. But then later Don sang it with his Irish band and I thought oh my gosh, it is a cool song when he sings it! And my mom (who is babysitting our 3 children right now) still says it was meant to be that I’d marry Don since he sings this song that she always wanted me to sing.",
        },
        {
          slug: "parting-glass",
          feat: "Don",
          banter: "**Don**: ~Now we’d like to sing one that we just think is pretty.~ (Better ad lib)",
        },
        {
          slug: "save-the-last-dance-for-me",
          feat: "Don",
          banter:
            "**Don**: Next we’ve got one you’ll probably recognize- again, please sing along if you feel like it! A 1960 song recorded by the Drifters called Save the Last Dance For Me.",
        },
        {
          slug: "go-lassie-go",
          feat: "Don",
        },
        {
          slug: "its-my-party",
          feat: "Paige",
          banter:
            "**Paige**: Now, we mentioned we have three kids at home. We have a 4 year old boy, a 2 year old boy, and an 8 month old girl. There’s a lot of crying at our house on a typical day. So I’d like to dedicate this Lesley Gore song to our children. It’s called “It’s My Party, and I’ll Cry if I Want to.”",
        },
        {
          slug: "do-i-ever-cross-your-mind",
          feat: "Paige",
          banter: "**Paige**: The next song is a Dolly Parton song that I heard one day and just thought it was cool and wanted to learn it, so here’s “Do I Ever Cross Your Mind”",
        },
        {
          slug: "your-cheating-heart",
          feat: "Don",
          banter: "**Don:** next we have a couple last Hank Williams songs for you.",
        },
        {
          slug: "i-saw-the-light",
          feat: "Don",
        },
        {
          slug: "take-me-home-country-roads",
          feat: "Don",
          banter:
            "**Paige**: We want to thank you so much for being here with us today and appreciating this music. Now that we’re parents, we don’t get the opportunity to perform as much anymore. So this has been a huge treat for us, and we thank you for it! We’re going to sing one last song and it’s about going home, which we’re about to do- go back to the babies.",
        },
      ],
    ],
  },
  {
    name: "Paige Big Band",
    slug: "big-band-02-2025",
    sets: [
      [
        { slug: "only-you" },
        { slug: "caught-a-touch-of-your-love" },
        { slug: "almost-like-being-in-love" },
        { slug: "nature-boy" },
        { slug: "come-rain-or-come-shine" },
        { slug: "fever" },
      ],
    ],
  },
  {
    name: "Paige Alexian",
    slug: "alexian-01-2025",
    sets: [
      [
        { slug: "i-got-rhythm" },
        { slug: "detour-ahead" },
        { slug: "popular" },
        { slug: "never-never-land" },
        { slug: "fever" },
        { slug: "my-favorite-things" },
        { slug: "if-i-were-a-bell" },
        { slug: "in-my-own-little-corner" },
        { slug: "cant-help-falling-in-love" },
      ],
    ],
  },
  {
    name: "Paige Alexian February",
    slug: "alexian-02-2025",
    sets: [
      [
        { slug: "walking-after-midnight" },
        { slug: "hound-dog" },
        { slug: "part-of-your-world" },
        { slug: "popular", banter: "Jordan's piano solo precedes this one." },
        { slug: "im-gonna-wash-that-man" },
        { slug: "on-my-own", banter: "Jordan's piano solo precedes this one." },
        { slug: "cant-help-falling-in-love" },
        { slug: "whos-sorry-now", banter: "Jordan's piano solo precedes this one." },
        { slug: "i-got-rhythm" },
        { slug: "fever" },
      ],
    ],
  },
  {
    name: "Paige Monday Night Big Band (March 2025)",
    slug: "mnbb-03-2025",
    sets: [
      [
        { slug: "i-remember-you" },
        { slug: "quiet-nights-of-quiet-stars" },
        { slug: "i-told-ya-i-love-ya" },
        { slug: "do-nothing-til-you-hear-from-me" },
        { slug: "teach-me-tonight" },
        { slug: "what-a-difference-a-day-makes" },
        { slug: "the-beat-goes-on" },
      ],
    ],
  },
  {
    name: "Paige Alexian March 2025",
    slug: "alexian-03-2025",
    sets: [
      [
        { slug: "beauty-and-the-beast" },
        { slug: "these-boots-are-made-for-walkin" },
        { slug: "walking-after-midnight", banter: "AFTER THIS SONG: Jordan solo." },
        { slug: "oh-what-a-beautiful-morning" },
        { slug: "good-morning" },
        { slug: "on-my-own", banter: "AFTER THIS SONG: Jordan solo." },
        { slug: "killing-me-softly" },
        { slug: "my-favorite-things" },
        { slug: "i-got-rhythm", banter: "AFTER THIS SONG: End of show. Next song is the Encore" },
        { slug: "cant-help-falling-in-love" },
      ],
    ],
  },
  {
    name: "Paige Alexian April 2025",
    slug: "alexian-04-2025",
    sets: [
      [
        { slug: "almost-like-being-in-love" },
        { slug: "im-gonna-wash-that-man" },
        { slug: "taylor-the-latte-boy", banter: "AFTER THIS SONG: Jordan solo." },
        { slug: "natural-woman" },
        { slug: "all-of-me" },
        { slug: "killing-me-softly", banter: "AFTER THIS SONG: Jordan solo." },
        { slug: "detour-ahead" },
        { slug: "simple-life" },
        { slug: "unforgettable" },
      ],
    ],
  },
  {
    name: "Family Jam August 2025",
    slug: "family-jam-08-2025",
    sets: [
      [
        { slug: "lodi" },
        { slug: "jolene" },
        { slug: "ordinary-world" },
        { slug: "me-and-bobby-mcgee" },
        { slug: "ticket-to-ride" },
        { slug: "rooster" },
        { slug: "dreams" },
        { slug: "linger" },
        { slug: "kiss-from-a-rose" },
        { slug: "jenny-jenny-8675309" },
        { slug: "cant-cry-anymore" },
        { slug: "maybe-im-amazed" },
        { slug: "change-the-world" },
        { slug: "kiss-the-girl" },
        { slug: "sweet-child-o-mine" },
        { slug: "rocky-top" },
        { slug: "southern-cross" },
        { slug: "amie" },
        { slug: "pink-pony-club" },
        { slug: "i-want-you-back" },
        { slug: "folsom-prison-blues" },
      ],
      [
        { slug: "dont-worry-baby" },
        { slug: "hound-dog" },
        { slug: "these-boots-are-made-for-walkin" },
        { slug: "walking-after-midnight" },
        { slug: "cant-help-falling-in-love" },
        { slug: "fever" },
        { slug: "its-my-party" },
        { slug: "killing-me-softly" },
        { slug: "natural-woman" },
        { slug: "summertime" },
        { slug: "unforgettable" },
        { slug: "you-are-my-sunshine" },
        { slug: "take-me-home-country-roads" },
        { slug: "mary-janes-last-dance" },
        { slug: "down-by-the-river" },
      ],
    ],
  },
  {
    name: "Monday Night August 2025",
    slug: "mnbb-08-2025",
    sets: [
      [
        // this comment prevents a single line list
        { slug: "besame-mucho" },
        { slug: "youve-changed" },
        { slug: "i-remember-you" },
        { slug: "a-foggy-day" },
        { slug: "nature-boy" },
        { slug: "fever" },
      ],
    ],
  },
  {
    name: "Alexian September 2025",
    slug: "alx-09-2025",
    sets: [
      [
        // this comment prevents a single line list
        // { title: "Groovin' Hard" },
        // { title: "How High the Moon" },
        // { title: "Wave" },
        { slug: "it-had-better-be-tonight-baby-go-go" },
        { slug: "blue-skies" },
        { slug: "teach-me-tonight" },
        // { title: "Nice and Easy" },
        // { title: "Nose (Mexicali Nose)" },
      ],
      [
        // this comment prevents a single line list
        // { title: "On the Street Where You Live" },
        // { title: "Polka Dots and Moonbeams" },
        { slug: "too-close-for-comfort" },
        { slug: "somethings-gotta-give" },
        // { title: "Slide Show" },
        { slug: "caught-a-touch-of-your-love" },
        // { title: "Time After Time" },
      ],
    ],
  },
  {
    name: "Monday Night October 2025",
    slug: "mnbb-10-2025",
    sets: [
      [
        // this comment prevents a single line list
        { slug: "besame-mucho" },
        { slug: "youve-changed" },
        { slug: "only-you" },
        { slug: "almost-like-being-in-love" },
        { slug: "do-nothing-til-you-hear-from-me" },
        { slug: "what-a-difference-a-day-makes" },
      ],
    ],
  },
]
