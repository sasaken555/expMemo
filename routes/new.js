var express = require('express');
var router = express.Router();

// DB接続定義
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'IrukaAdmin555',
  database: 'memopad',
  port: 3306,
  dateStrings: true
});

/* 新規登録画面表示処理 */
router.get('/', function(req, res, next) {
  res.render('newMemo', { pageTitle: '新規メモ作成' });
});

/* 新規登録処理 */
router.post('/', function(req, res, next) {
  var title = req.body.title;
  var memo = req.body.memo;
  console.log(`title: ${title}, memo: ${memo}`);
  res.redirect('/');
});

module.exports = router;
