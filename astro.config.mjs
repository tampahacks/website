import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/counterspell": "https://counterspell.hackclub.com/tampa",
    "/2026/rsvp": "https://forms.hackclub.com/tampahacks2026",
  },
});
