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
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [2, 'always'],
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0,
    // 最大空行为3
    'no-multiple-empty-lines': [1, { "max": 3 }],
    // 禁用行尾空格
    "no-trailing-spaces": 0,
    // 块语句内行首行尾是否要空行
    "padded-blocks": 0,
    // 禁止属性前有空白
    "no-whitespace-before-property":0,
    // 要求 return 语句之前有一空行
    "newline-before-return":0,
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": 0,
    // 不以新行开始的块{前面必须要有1个空格
    "space-before-blocks": [1, "always"],
    // 数组和对象键值对禁止使用拖尾逗号
    "comma-dangle": 2,
    // 在非空文件末尾至少存在一行空行 1: always 2: never
    "eol-last": 2,

    //////////////
    // ES6.相关 //
    //////////////

    // 要求箭头函数体使用大括号
    "arrow-body-style": 2,
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members":2,
  }
}
