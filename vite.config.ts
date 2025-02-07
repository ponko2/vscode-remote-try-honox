import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    external: ["@prisma/client"],
  },
  plugins: [
    tailwindcss(),
    honox({
      client: {
        input: ["/app/style.css"],
      },
      devServer: {
        adapter,
      },
    }),
    build(),
  ],
  server: {
    host: "127.0.0.1",
  },
});
