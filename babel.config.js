/*
 * @Author: xiaoming
 * @Date: 2021-05-13 17:17:19
 * @LastEditors: xiaoming
 * @LastEditTime: 2021-05-13 18:14:02
 * @Description: file content
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      plugins: ['dynamic-import-node'],
    },
  },
};
