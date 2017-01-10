var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newMemo', { pageTitle: '新規メモ作成' });
});

router.post('/', function(req, res, next) {
  var title = req.body.title;
  var memo = req.body.memo;
  console.log(`title: ${title}, memo: ${memo}`);
  res.redirect('/');
});

module.exports = router;
