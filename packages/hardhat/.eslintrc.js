module.exports = {
  env: {
    mocha: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["babel"],
  ignorePatterns: ["*.config.js"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "prefer-template": "off",
    "no-console": "off",
    "func-names": "off",
  },
};
