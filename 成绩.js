const fs = require("fs");

fs.readFile("./files/成绩.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败!");
  }

  const arr = dataStr.split(" ");
  const newArr = [];
  arr.forEach((e) => {
    newArr.push(e.replace("=", ":"));
  });
  const newStr = newArr.join("\r\n");
  console.log("newStr: ", newStr);

  fs.writeFile("./files/成绩-ok.txt", newStr, "utf8", function (err) {
    if (err) {
      return console.log("写入文件失败!");
    }
  });
});
