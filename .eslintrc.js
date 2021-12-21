module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
  },
};
