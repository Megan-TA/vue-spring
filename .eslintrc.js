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
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'always'],
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0,
    // 最大空行为3
    'no-multiple-empty-lines': [1, { "max": 3 }],
    // 块语句内行首行尾是否要空行
    "padded-blocks": 0,
    // 不以新行开始的块{前面必须要有1个空格
    "space-before-blocks": [1, "always"],
    // 允许变量声明未赋值
    "no-unused-vars": 0,
  }
}
