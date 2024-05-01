import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import { type SSROptions, defineConfig } from "vite";

const ssr = {
  external: ["@prisma/client"],
} satisfies SSROptions;

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      ssr,
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
      plugins: [client()],
    };
  }
  return {
    ssr,
    plugins: [honox(), pages()],
  };
});
