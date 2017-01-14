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


/* 更新画面表示処理 */
router.get('/:memoId', function(req, res, next) {
  var memoId = req.params.memoId;
  var targetMemo = [];

  var sql = `SELECT * FROM memo WHERE id = ${memoId};`
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    targetMemo = results[0];
    res.render('editMemo', { pageTitle: 'メモ更新', targetMemo: targetMemo });
  });
});


/* 更新処理 */
router.post('/:memoId', function(req, res, next) {
  // 更新する値
  var title = req.body.title;
  var memo = req.body.memo;
  var modifiedTime = mysqlJpTime();
  var memoId = req.params.memoId;

  // SQLの作成
  var sql = 'UPDATE memo SET title = ?, memo = ?, modified = ? WHERE id = ?';
  var post = [title, memo, modifiedTime, memoId];
  sql = mysql.format(sql, post);

  // 更新実行
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    res.redirect('/');
  });
});

module.exports = router;
