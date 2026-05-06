import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://100495807.github.io",
  base: "/el-garaje-de-hompa",
  integrations: [sitemap()],
});
