const tsconfig = require("./tsconfig.json");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [...tsconfig.exclude, "**/*.js"],
  rules: {
    eqeqeq: ["error", "smart"],
    "no-unused-expressions": "warn",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/self-closing-comp": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "never",
        pathGroups: [
          {
            pattern: "@*/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
