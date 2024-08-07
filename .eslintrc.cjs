module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-typescript/base",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/extensions": ["off", "never"],
    "import/no-extraneous-dependencies": ["off", "never"],
    "import/no-unresolved": 0,
    "import/prefer-default-export": "on",
    "comma-dangle": 0,
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        "leadingUnderscore": "allow"
      }
    ],
    "max-len": [
      "error",
      {
        "ignoreComments": true,
        "code": 120,
        "tabWidth": 2,
        "ignoreStrings": true
      }
    ],
    "operator-linebreak": "off",
    "sort-imports": ["error", { "ignoreDeclarationSort": true }]
  },
  parserOptions: {
    project: "./tsconfig.json"
  }
};
