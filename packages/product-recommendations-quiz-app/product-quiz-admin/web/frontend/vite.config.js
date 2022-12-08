import { defineConfig } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

if (
  process.env["npm_lifecycle_event"] === "build" &&
  !process.env["CI"] &&
  !process.env["SHOPIFY_API_KEY"]
) {
  console.warn(
    "Building the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command."
  );
}

const FRONTEND_PORT = 3000;

let hmrConfig = {
  protocol: "ws",
  host: "localhost",
  port: FRONTEND_PORT,
  clientPort: FRONTEND_PORT,
};

export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react()],
  define: {
    process: {
      env: {
        SHOPIFY_API_KEY: process.env["SHOPIFY_API_KEY"],
      },
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    host: "localhost",
    port: FRONTEND_PORT,
    hmr: hmrConfig,
  },
});
