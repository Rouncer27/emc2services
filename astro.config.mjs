import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://emc2services.ca/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["emc2services.swbdatabases3.com"],
  },
});
