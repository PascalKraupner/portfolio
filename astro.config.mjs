import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

import vue from "@astrojs/vue";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, vue()],
  server: {
    host: true,
  },
});
