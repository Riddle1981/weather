const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
const lint = getESLintConfig('react');
module.exports = Object.assign(lint, {
  root: true, // 作用的目录是根目录
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  settings: {},
  parserOptions: {
    // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
    sourceType: 'module', // 按照模块的方式解析
    // ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  // 重新覆盖 extends: 'standard'的规则
  rules: {
    'no-new': 0,
    'no-multiple-empty-lines': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'prettier/prettier': 0,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'prefer-promise-reject-errors': 0,
    'Missing semicolon': 0
  },
  // 允许全局变量,将$设置为true，表示允许使用全局变量$
  globals: {
    document: true,
    localStorage: true,
    window: true,
    jQuery: true,
    $: true
  }
})
