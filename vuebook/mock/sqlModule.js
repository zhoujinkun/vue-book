// 对外暴露操作数据库的方法
exports.sqlModule = (sql,data,callback)=>{
    //使用node操作数据库必须先有第三方依赖mysql才行
//npm install mysqljs/mysql;
const mysql = require('mysql');
// 创建链接数据库
const connection = mysql.createConnection({
  host     : 'localhost', //主机地址
  user     : 'root',  //数据库主机名
  password : '123456',//密码
  database : 'vuebook' //链接的数据库名字
});
//  连接数据库
connection.connect();

connection.query(sql,data,function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  callback(results);//把results当做实参传入回调函数中
});
 //关闭数据库
connection.end();
}