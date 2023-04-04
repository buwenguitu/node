const fs = require("fs");
const process = require("process");
// 方法一   使用readFileSync直接读取后使用writeFileSync直接写入
const data = fs.readFileSync("./files/pic.jpg");
fs.writeFileSync("./files/pic-3.jpg", data);
console.log(process.memoryUsage()); //23097344字节   22.02734375MB


// 方法二
// 创建读取文件流
const rs = fs.createReadStream("./files/pic.jpg");

// 创建写入文件流
const ws = fs.createWriteStream("./files/pic-2.jpg");

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on('end',()=>{
//     console.log(process.memoryUsage());   //23642112
// })

// 方法二简洁写法   pipe：管道，通道
rs.pipe(ws);

// 总结：方法二在大文件读取上有优势 小文件读取无所谓都行  大文件用第二种