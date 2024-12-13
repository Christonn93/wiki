import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
 base: "/wiki/",
 plugins: [react()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "src"),
  },
 },
 server: {
  port: 5235,
 },
 build: {
  target: "esnext",
  outDir: "dist",
  minify: "esbuild",
 },
 optimizeDeps: {
  include: ["react", "react-dom", "react-router-dom"],
 },
});
