module.exports = {
  root: true,
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'no-empty-source': null, // 不允许空的来源
    'max-empty-lines': null,
    'declaration-colon-space-after': null,
    'color-hex-case': null,
    'rule-empty-line-before': null,
    'declaration-block-trailing-semicolon': null,
    'selector-pseudo-element-colon-notation': null,
    'declaration-block-semicolon-space-after': null,
    'comment-empty-line-before': null,
    'color-hex-length': null,
    'comment-whitespace-inside': null,
    'no-eol-whitespace': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
  },
};
