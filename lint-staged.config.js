/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,cjs,cts,mjs,mts,json,jsonc,css,svelte,vue,astro,graphql,gql}":
    "biome check --write --no-errors-on-unmatched --error-on-warnings",
  "schema.prisma": (filenames) =>
    filenames.flatMap((filename) => [
      `prisma format --schema=${filename}`,
      `prisma-case-format --file ${filename}`,
    ]),
};
