import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    domains: ["emc2services.swbdatabases3.com"],
  },
});
