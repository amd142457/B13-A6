import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // এই লাইনটা খুব জরুরি GitHub Pages এর জন্য
  base: "/B13-A6/", // ← তোমার repository নাম exactly এভাবে দাও (শেষে / সহ)
});
