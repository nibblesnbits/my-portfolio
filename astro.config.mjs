// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://junothreadborne.me",
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/story/village": "https://elsebeneath.online/story/village",
    "/story/valley": "https://elsebeneath.online/story/valley",
    "/story/elsewhere": "https://elsebeneath.online/story/elsewhere",
    "/story/hair": "https://elsebeneath.online/story/hair",
    "/story/brynn": "https://elsebeneath.online/story/brynn",
    "/story/mountain": "https://elsebeneath.online/story/mountain",
  },
  integrations: [react(), sitemap()],
});
