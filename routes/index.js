var express = require('express');
var router = express.Router();
var model = require('../model')

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function(db){
    db.collection('users').find().toArray(function(err,docs){ // 查询,转换数组
      console.log('用过户列表',docs)
      var data = JSON.stringify(docs)
      res.render('index', { title: 'Express',data}); // 响应客户端
    })
  })
});

// 渲染注册页面
router.get('/regist',function(req, res, next){
  res.render('regist', {})
})

// 渲染登录页面
router.get('/login',function(req, res, next){
  res.render('login', {}) // 页面传递数据
})

module.exports = router;
