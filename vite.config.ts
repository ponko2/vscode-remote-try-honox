import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
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
        },
      },
      plugins: [client()],
    };
  }
  return {
    ssr,
    plugins: [
      honox({
        devServer: {
          adapter,
        },
      }),
      pages(),
    ],
  };
});
