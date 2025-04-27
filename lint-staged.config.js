/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{cjs,cts,js,json,jsonc,jsx,mjs,mts,ts,tsx}":
    "biome check --write --no-errors-on-unmatched",
  "schema.prisma": (filenames) =>
    filenames.flatMap((filename) => [
      `prisma format --schema=${filename}`,
      `prisma-case-format --file ${filename}`,
    ]),
};
