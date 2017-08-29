module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'vuefix'
  ],
  // add your custom rules here
  'rules': {
    "vuefix/vuefix": [2, {"auto": true}],
    'indent': ['error', 4],
    'eqeqeq': 2
  }
}
