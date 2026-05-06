import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://el-garaje-de-hompa.pages.dev",
  integrations: [sitemap()],
});
