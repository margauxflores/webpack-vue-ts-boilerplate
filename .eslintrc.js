module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',

    // eslint-plugin-vue
    'plugin:prettier/recommended',

    // eslint-plugin-prettier
    'prettier/vue',
  ],
  parserOptions: {
    // Needs to be added here instead of adding it in parser.
    // See https://github.com/vuejs/eslint-plugin-vue/issues/186#issuecomment-329426553
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    // This fixes the no-unused-vars error when using TS types inside Vue SFCs.
    // https://github.com/vuejs/eslint-config-typescript/issues/14#issuecomment-749916416
    {
      files: ['*.vue'],
      rules: require('@typescript-eslint/eslint-plugin').configs[
        'eslint-recommended'
      ].overrides[0].rules,
    },
    {
      files: ['**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
