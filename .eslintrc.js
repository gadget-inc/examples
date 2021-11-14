module.exports = {
  extends: "@gadgetinc/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["chakra-theme/tsconfig.json", "related-products/tsconfig.json", "login-logout/tsconfig.json"],
  },
};
