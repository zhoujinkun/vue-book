
// 将json文件转化成Mysql插入语法
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'books.json'),'utf8',(err,data)=>{
    if(err)return;
    // console.log(data);
    let dataObj = JSON.parse(data);
    dataObj.forEach((item)=>{
        let sql = `INSERT INTO hotbooks(bookCover,bookName,bookContent,bookPrice) VALUES('${item.bookCover}','${item.bookName}','${item.bookContent}','${item.bookPrice}');`;
        console.log(sql);
    })
})