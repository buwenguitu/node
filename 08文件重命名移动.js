const fs = require("fs");

// 文件重命名  rename为异步方法  renameSync为同步方法
fs.rename("./作用.txt", "./node作用.txt", (err) => {
  if (err) {
    console.log("重命名失败！");
    return;
  }
  console.log("操作成功！");
});

// 文件移动
// fs.rename("./node作用.txt", "./files/node作用.txt", (err) => {
//   if (err) {
//     console.log("文件移动失败!");
//     return;
//   }
//   console.log("操作成功!");
// });
