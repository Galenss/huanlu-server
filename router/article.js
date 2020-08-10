// user模块
const express=require('express');
var router = express.Router();
// 引入链接池
const pool = require('../config/db');

// 测试页面
router.get('/', (req, res) => {
  res.send("This is ArticlePage")
})

// 创建文章
router.post("/create", (req, res) => {
  // console.log(req.body)
  var addSql = 'INSERT INTO article(title,content,update_time, author,create_time,subhead,ontop) VALUES(?,?,?,?,?,?,?)'
  var addSqlParams = [
    req.body.title,
    req.body.content,
    req.body.update_time,
    req.body.author,
    req.body.create_time,
    req.body.subhead,
    req.body.ontop,
  ]
  pool.query(addSql,addSqlParams,(err,result) => {
    // console.log("文章创建失败",err)
    // console.log("文章创建成功",result)
    res.send(result);
  })

})

// 删除文章
router.post("/delete",(req,res) => {
  console.log(req.body)
  var addSql = 'DELECT FROM article WHERE id = ?'
  pool.query(addSql,[id],(err,result) => {
    // console.log(err, result)
    if (err) console.log(err);
    res.send({code:400,msg:'删除成功！'})
  })
})

//修改文章
router.post("/update",(req,res) => {
  console.log("修改文章",req.body)
}) 

// 查询所有文章
router.post("/all",(req,res) => {
  var page = 1
  var pageSize = 10
  if (req.body.page) {
    var page = (req.body.page - 1) * req.body.pageSize;
  }
  if (req.body.pageSize) {
    var pageSize = req.body.pageSize
  }
  var sql = 'SELECT COUNT(*) FROM article;SELECT * FROM article LIMIT ' + page + ',' + pageSize
  pool.query(sql, (err, result) => {
    var allCount = result[0][0]['COUNT(*)']
    var List = result[1];
    // console.log("navbar+总条数===>",List,allCount)
    if (err) {
      res.send(err)
    } else {
      res.send({ "total": allCount,'rows':List});
    }
  })
})

// 根据文章id查询文章
router.get("/getOne",(req,res) => {
  // console.log("查询单条",req.query)
  var getSqlParams = [
    req.query.id
  ]
  var getSql = 'SELECT * FROM article WHERE article_id = ?'
  pool.query(getSql,getSqlParams,(err,result) => {
    // console.log("查询所有文章",err,result)
    res.send(result)
  })
})

module.exports = router;
//http://localhost:4000/article