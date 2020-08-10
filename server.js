// 引入结构件
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');

// 引入路由器
var users = require("./router/users");
var index = require("./router/index");
var article = require("./router/article");


// 使用express构建web服务器
var app = express();
var server = app.listen(4000, () => {
  console.log("- LocalServer:http://localhost:4000",)
})

// 托管静态文件
app.use(express.static("public"));

// 重定向URL到主页index
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html");
})

// var whitelist = ['http://www.huanlublog.com', 'http://paris.huanlublog.com', 'http://localhost:8080','http://www.huanlublog.com:4000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))

// 配置跨域模块，允许那个地址可以跨域访问
app.use(cors({
  orign: [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://www.huanlublog.com:8080",
    ],
    credentials:true
}));
 
// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:true}));


// 使用路由器来管理路由
app.use("/users", users);
app.use("/index", index);
app.use("/article", article);


