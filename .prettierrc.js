/*
 * @Author: xiaoming
 * @Date: 2021-05-06 10:37:33
 * @LastEditors: xiaoming
 * @LastEditTime: 2021-05-07 11:32:30
 * @Description: prettier配置文件
 */
/** @format */

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [{ files: '.prettierrc', options: { parser: 'json' } }],
};
