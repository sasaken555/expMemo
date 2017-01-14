var express = require('express');
var router = express.Router();

// DB接続定義
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'EditUser',
  password: 'EditYourPass',
  database: 'memopad',
  port: 3306,
  dateStrings: true,
  timezone: 'jst'
});


/* 一覧画面表示処理 */
router.get('/', function(req, res, next) {
  // メモ一覧をDBから取り出してsampleMemosに格納
  var  memoItems = [];

  // DB接続処理
  // connection(), end()はそれぞれエラーが出るため記述しない
  // query()で接続している
  var sql = 'SELECT * FROM memo ORDER BY id ASC;'
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    memoItems = results;
    res.render('index', { pageTitle: 'メモ一覧', memoItems: memoItems });
  });
});


/* 詳細画面表示処理 */
// 正規表現(\\d)で /new とルーティングを区別している
router.get('/:memoId(\\d+)', function(req, res, next) {
  var memoId = req.params.memoId;
  var targetMemo = [];

  var sql = `SELECT * FROM memo WHERE id = ${memoId};`
  console.log(sql);
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    targetMemo = results[0];
    res.render('memoDetail', { pageTitle: 'メモ詳細', targetMemo: targetMemo });
  });
});

module.exports = router;
