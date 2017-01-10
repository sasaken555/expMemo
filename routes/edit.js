var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:memoId', function(req, res, next) {
  var targetMemo = {
    id: 1,
    title: "Initial",
    memo: "This is a Sample.",
    created: "2016-10-04 15:25:07",
    modified: "2016-10-04 15:25:07"
  };
  res.render('editMemo', { pageTitle: 'メモ更新', targetMemo: targetMemo });
});

router.post('/:memoId', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
