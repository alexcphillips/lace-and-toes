import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// mode - development
export default ({ mode }: { mode: string }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    plugins: [react()],
    define: {
      "window.l": "console.log",
      l: "console.log",
    },
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_BASE_URL,
          changeOrigin: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
  return defineConfig(config);
};
