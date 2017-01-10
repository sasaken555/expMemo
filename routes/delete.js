var express = require('express');
var router = express.Router();

router.get('/:memoId', function(req, res, next) {
  var targetMemo = {
    id: 1,
    title: "Initial",
    memo: "This is a Sample.",
    created: "2016-10-04 15:25:07",
    modified: "2016-10-04 15:25:07"
  };
  res.render('deleteMemo', { pageTitle: 'メモ削除', targetMemo: targetMemo });
});

router.post('/:memoId', function(req, res, next) {
  var memoId = req.param.memoId;
  console.log(`memoId: ${memoId}`);
  res.redirect('/');
});

module.exports = router;
