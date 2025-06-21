// biome-ignore lint/correctness/noUnusedImports: false positive
import type {} from "hono";

declare module "hono" {
  interface Env {
    // biome-ignore lint/complexity/noBannedTypes: false positive
    Variables: {};
    // biome-ignore lint/complexity/noBannedTypes: false positive
    Bindings: {};
  }
}
