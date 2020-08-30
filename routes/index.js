var express = require('express');
var router = express.Router();
var model = require('../model')

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function(db){
    db.collection('users').find().toArray(function(err,docs){ // 查询
      console.log('用过户列表',docs)
      res.render('index', { title: 'Express' }); // 响应客户端
    })
  })
});

module.exports = router;
