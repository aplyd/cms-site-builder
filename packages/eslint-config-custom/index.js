module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
    "overrides": [
    {
      "files": ["*.js"],
      "parser": "espree",
      "parserOptions": {
        "ecmaVersion": 2020
      }
    }
  ]
};
