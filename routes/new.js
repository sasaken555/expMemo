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


/*
  日本時間返却処理
  mysqlJpTime(date)
  date: Date型のUTC時間の値
*/
function mysqlJpTime() {
  // UTC時間
  var date = new Date();
  // UTC時間を日本時間に修正
  date.setTime(date.getTime() + 32400000);
  // JSのDate型をMySQLのDateTime型に変換
  var mysqlJpTime = date.toISOString().slice(0, 19).replace('T', ' ');
  return mysqlJpTime;
}


/* 新規登録画面表示処理 */
router.get('/', function(req, res, next) {
  res.render('newMemo', { pageTitle: '新規メモ作成' });
});


/* 新規登録処理 */
router.post('/', function(req, res, next) {
  var title = req.body.title;
  var memo = req.body.memo;
  var createdTime = mysqlJpTime();

  var post = {title: title, memo: memo, created: createdTime};
  var sql = `INSERT INTO memo SET ?`
  connection.query(sql, post, function(error, results, fields) {
    if (error) throw error;
    res.redirect('/');
  });
});

module.exports = router;
