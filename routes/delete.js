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


/* 削除確認画面表示処理 */
router.get('/:memoId', function(req, res, next) {
  var memoId = req.params.memoId;
  var targetMemo = [];

  var sql = `SELECT * FROM memo WHERE id = ${memoId};`
  console.log(sql);
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    targetMemo = results[0];
    res.render('deleteMemo', { pageTitle: 'メモ削除', targetMemo: targetMemo });
  });
});


/* 削除処理 */
router.post('/:memoId', function(req, res, next) {
  var memoId = req.params.memoId;

  // SQLの作成
  var sql = `DELETE FROM memo WHERE id = ${memoId}`;

  // 削除実行
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    res.redirect('/');
  });
});

module.exports = router;
