var express = require('express');
var router = express.Router();
var model =  require('../model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册接口
router.post('/regist', function(req, res, next) {
 var data = {
   username: req.body.username,
   password: req.body.password,
   password2: req.body.password2
 }
 // 校验数据
 model.connect(function(db){
   db.collection('user').insertOne(data,function(err,ret){
    if(err){
      console.log('注册失败')
      res.redirect('/regist')
    } else {
      res.redirect('/login')
    }
   })
 })
//  res.send(data) // 路由页面打印显示数据
});

// 登录接口
router.post('/login', function(req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password,
  }
  // 校验数据
  // model.connect(function(db){    
  //   db.collection('user').insertOne(data,function(err,ret){
  //    if(err){
  //      console.log('注册失败')
  //      res.redirect('/regist')
  //    } else {
  //      res.redirect('/login')
  //    }
  //   })
  // })
  console.log('data:',data) //  控制台打印
 });

module.exports = router;
