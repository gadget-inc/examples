module.exports = {
  extends: "@gadgetinc/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["packages/*/tsconfig.json"],
  },
};
