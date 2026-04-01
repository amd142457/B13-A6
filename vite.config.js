import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/B13-A6/", // এই লাইনটি আপনার প্রোজেক্টের নাম অনুযায়ী যোগ করা হয়েছে
});
