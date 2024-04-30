import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import i18n from "@astrolicious/i18n";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    i18n({
      defaultLocale: "en",
      locales: ["en", "fr"]
    }),
    sanity({
      projectId: "t9cmnozc",
      dataset: "production",
      useCdn: false
    })
  ]
});