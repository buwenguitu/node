const fs = require("fs");

// unlink为异步方法  unlinkSync为同步方法
// fs.unlink("./1.txt", (err) => {
//   if (err) {
//     console.log("删除失败!");
//     return;
//   }
//   console.log("删除成功!");
// });

// rm为异步方法  rmSync为同步方法
fs.rm("./2.txt", (err) => {
  if (err) {
    console.log("删除失败！");
    return;
  }
  console.log("删除成功！");
});
