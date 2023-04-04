const fs = require("fs");

// 创建写入流对象
const ws = fs.createWriteStream("./files/流式文件");

// 写入
ws.write("第一句\r\n");
ws.write("第二句\r\n");
ws.write("第三句\r\n");
ws.write("第四句\r\n");
ws.write("第五句");

// 关闭通道
ws.close();
