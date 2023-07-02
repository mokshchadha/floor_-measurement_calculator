import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestforPlugin = {
  registerType: "prompt",
  includeAssets: ["calc.png"],
  manifest: {
    name: "Floor Measurement Calculator",
    short_name: "Floor Calculator",
    description:
      "An app that can calculate and print pdfs of your floor calculations",
    type: "image/png",
    purpose: "any maskable",
    theme_color: "#171717",
    background_color: "#eebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestforPlugin)],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // the default entry point
  //       app: "./index.html",

  //       // 1️⃣
  //       serviceWorker: "./serviceWorker.js",
  //     },
  //     output: {
  //       // 2️⃣
  //       entryFileNames: (assetInfo) => {
  //         return assetInfo.name === "serviceWorker"
  //           ? "[name].js" // put service worker in root
  //           : "assets/js/[name]-[hash].js"; // others in `assets/js/`
  //       },
  //     },
  //   },
  // },
});
