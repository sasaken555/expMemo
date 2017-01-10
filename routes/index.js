var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sampleMemos = [
    {
      id: 1,
      title: "Initial",
      memo: "This is a Sample.",
      created: "2016-10-04 15:25:07",
      modified: "2016-10-04 15:25:07"
    },
    {
      id: 2,
      title: "10/18 TODO",
      memo: "先輩に宿題の提出",
      created: "2016-10-17 18:31:54",
      modified: "2016-10-18 09:00:12"
    },
    {
      id: 3,
      title: "開発進捗報告",
      memo: "1.デモを作る 2.説明用スライドを作る",
      created: "2016-11-25 12:03:22",
      modified: ""
    }
  ];
  res.render('index', { pageTitle: 'メモ一覧', memoItems: sampleMemos });
});

router.get('/:memoId(\\d+)', function(req, res, next) {
  var targetMemo = {
    id: 1,
    title: "Initial",
    memo: "This is a Sample.",
    created: "2016-10-04 15:25:07",
    modified: "2016-10-04 15:25:07"
  };
  res.render('memoDetail', { pageTitle: 'メモ詳細', targetMemo: targetMemo});
});

module.exports = router;
