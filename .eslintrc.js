/*
 * @Author: xiaoming
 * @Date: 2021-05-06 10:37:33
 * @LastEditors: xiaoming
 * @LastEditTime: 2021-05-08 17:57:50
 * @Description: file content
 */
/** @format */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['eslint-comments', '@typescript-eslint', 'prettier'],
  rules: {},
};
