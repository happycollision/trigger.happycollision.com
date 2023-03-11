import { defineConfig } from "astro/config"
import AstroPWA from "@vite-pwa/astro"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://trigger.happycollision.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    tailwind(),
    AstroPWA({
      registerType: "autoUpdate",
      injectRegister: null,
      manifest: {
        name: "Finger on the Trigger",
        short_name: "FoTT",
        description: "Finger on the Trigger band info", // Change this to your websites description.
        theme_color: "#df993a", // Change this to your primary color.
        background_color: "#ffffff", // Change this to your background color.
        display: "standalone",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
})
