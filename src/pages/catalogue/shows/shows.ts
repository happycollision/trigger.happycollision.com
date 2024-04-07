type ShowSong = { slug: string | string[]; feat?: string | undefined }
type ShowSet = ShowSong[]
type Show = { name: string; slug: string; sets: ShowSet[] }

export const shows: Show[] = [
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
        { slug: "chapel", feat: "Paige" },
        { slug: "jambalaya", feat: "Don" },
        { slug: "dream-lover", feat: "Paige" },
        { slug: "wild-rover", feat: "Don" },
        { slug: "edelweiss", feat: "Don" },
        { slug: "down-to-the-river-to-pray", feat: "Paige" },
        { slug: "folsom-prison-blues", feat: "Don" },
        { slug: "til-there-was-you", feat: "Don & Paige" },
        { slug: "lollipop", feat: "Paige" },
        { slug: "tell-me-ma", feat: "Don" },
        { slug: "hey-good-lookin", feat: "Don" },
        { slug: "walking-after-midnight", feat: "Paige" },
        { slug: "lovesick-blues", feat: "Don" },
        { slug: "allegheny-moon", feat: "Paige" },
        { slug: "bvb", feat: "Don" },
        { slug: "parting-glass", feat: "Don" },
        { slug: "save-the-last-dance-for-me", feat: "Don" },
        { slug: "go-lassie-go", feat: "Don" },
        { slug: "its-my-party", feat: "Paige" },
        { slug: "do-i-ever-cross-your-mind", feat: "Paige" },
        { slug: "your-cheating-heart", feat: "Don" },
        { slug: "i-saw-the-light", feat: "Don" },
        { slug: "take-me-home-country-roads", feat: "Don" },
      ],
    ],
  },
]
