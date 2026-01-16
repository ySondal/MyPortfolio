// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: template.website_url,
    base: template.base,
    output: 'static',
    integrations: [react(), tailwind(), sitemap()],
    outDir: './dist'
});
