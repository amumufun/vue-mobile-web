module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
    'no-restricted-syntax': 'off',
    semi: 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'arrow-parens': [
      'warn',
      'always',
    ],
    'max-len': 'off',
    'no-useless-escape': 'off',
    'no-continue': 'off',
    'no-labels': 'off',
    'no-plusplus': 'off',
    'for-direction': 'off',
    'prefer-destructuring': 'off',
    'func-names': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
