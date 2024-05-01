export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}":
    "biome check --apply --no-errors-on-unmatched",
  "schema.prisma": (filenames) =>
    filenames.flatMap((filename) => [
      `prisma format --schema=${filename}`,
      `prisma-case-format --file ${filename}`,
    ]),
};
