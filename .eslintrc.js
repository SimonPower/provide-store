module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/naming-convention": [
      "off",
      {
        "selector": "default",
        "format": null
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/member-delimiter-style": "off"
  }
}
