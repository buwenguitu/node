const fs = require("fs");

// 异步
fs.writeFile("./files/book.txt", "我是writeFile写入的", "utf8", function (err) {
  // 如果文件写入成功err的值为null
  // 如果文件存在 写入内容则会覆盖原内容
  // 如果文件不存在则会自动创建
  if (err) {
    return console.log("文件写入失败: ", err.message);
  }
  console.log("写入成功");
});

// 同步
// fs.writeFileSync()
