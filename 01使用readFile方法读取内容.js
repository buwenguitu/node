/*
 * @Author: PC-20220916IUOV\Administrator 12312@qq.com
 * @Date: 2023-03-14 18:29:09
 * @LastEditors: PC-20220916IUOV\Administrator 12312@qq.com
 * @LastEditTime: 2023-03-20 13:33:19
 * @FilePath: \node\01使用readFile方法读取内容.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入fs模块 来操作文件
const fs = require("fs");

// 使用fs.readFile读取文件
// 参数1.路径
// 参数2.读取文件时采用的编码格式 一般默认为utf8
// 参数3.读取文件的回调函数
fs.readFile("./files/book.txt", "utf8", function (err, dataStr) {
  // 操作成功err为null   dataStr返回值
  // 如读取失败err返回错误对象  dataStr为undefined
  console.log(err);
  console.log("--------");
  console.log(dataStr);
});
