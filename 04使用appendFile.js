const fs = require("fs");

// 异步
// fs.appendFile("./files/book.txt", "\r\n我是appendFile追加的", (err) => {
//   if (err) {
//     console.log("追加失败");
//     return;
//   }
//   console.log("追加成功");
// });

// 同步    换行:\r\n
// fs.appendFileSync('./files/book.txt','\r\n哦')

// writeFile实现追加写入
fs.writeFile("./files/book.txt", "\r\n我是writeFile追加写入的", { flag: 'a' }, (err) => {
  if (err) {
    console.log("追加写入失败");
    return;
  }
  console.log("追加写入成功");
});
