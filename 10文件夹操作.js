const fs = require("fs");

// recursive 递归   mkdirSync同步
// fs.mkdir("./test/1.txt", { recursive: true }, (err) => {
//   if (err) {
//     console.log("创建文件夹失败！");
//     return;
//   }
//   console.log("创建文件夹成功！");
// });

// rmdir方式删除 rmSync同步 会报警告  推荐你用rm删除
// fs.rmdir("./test", {recursive:true},(err) => {
//   if (err) {
//     console.log("删除文件夹失败！");
//     return;
//   }
//   console.log("删除文件夹成功！");
// });

// rm方式删除   rmSync同步
fs.rm("./test", { recursive: true }, (err) => {
  if (err) {
    console.log("删除文件夹失败！");
    return;
  }
  console.log("删除文件夹成功！");
});
