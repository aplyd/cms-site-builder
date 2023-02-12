module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
    "overrides": [
    {
      // Adapt to your needs (e.g. some might want to only override "next.config.js")
      "files": ["*.js"],
      // This is the default parser of ESLint
      "parser": "espree",
      "parserOptions": {
        "ecmaVersion": 2020
      }
    }
  ]
};
