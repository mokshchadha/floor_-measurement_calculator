import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestforPlugin = {
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  includeAssets: ["192.png", "512.png"],
  manifest: {
    name: "Floor Measurement Calculator",
    short_name: "Floor Calc",
    description: "Floor Measurement Calculator",
    theme_color: "#317EFB",
    icons: [
      {
        src: "192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestforPlugin)],
});
