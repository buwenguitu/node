const fs = require("fs");

// 创建读取文件流对象
const rs = fs.createReadStream("./files/pic.jpg");

// 绑定data事件
rs.on("data", (chunk) => {
  console.log("chunk: ", chunk.length); //65536字节 => 64kb
});

// end事件   读取完成后走的回调
rs.on("end", () => {
  console.log("读取完成");
});
