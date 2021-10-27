module.exports = {
  extends: "@gadgetinc/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./packages/**/*/tsconfig.json"],
  },
  rules: {
    "lodash/import-scope": "off",
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          { target: "./packages/web/src/components/app", from: "./packages/web/src/components/edit" },
          { target: "./packages/web/src/state-trees", from: "./packages/web/src/components" },
          { target: "./packages/web/src/state-trees", from: "./packages/web/src/client-state-trees" },
        ],
      },
    ],
  },
};
