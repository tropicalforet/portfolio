import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Halaman proyek dibuat sebagai proyek/<slug>.html agar link relatif bekerja di semua hosting.
  build: { format: "file", inlineStylesheets: "always" },
  trailingSlash: "never",
  vite: { plugins: [tailwindcss()] },
});
