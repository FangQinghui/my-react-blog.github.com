/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 14:17:41
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 14:17:42
 * @Description: 一个对 create-react-app 进行自定义配置的社区解决方案
 */

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
};
