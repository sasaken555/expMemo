# Expressで作るメモアプリ

## 目標
"JavaScriptでWebアプリってどうやって作るのか？"の探求その１。  
JavaScriptでアプリケーションを作ることの有用性、および得手不得手を検証します。  
今回はJavaScriptのWebアプリケーションフレームワークの中で最もシンプルな"Express"を使います。  


## 前提
*やっていること*
+  Webアプリケーションフレームワークの利用
+  DB(今回はMySQL)との通信を含むCRUD処理


*やっていないこと*
+ ES6の記法
+ ORM (O/R マッパー) の利用
+ NoSQLDB(MongoDBとか)の利用


*実行環境*  

|名称                |バージョン|説明                   |
|:-------------------|:---------|:----------------------|
|Node.js             |7.4.0     |JavaScriptのランタイム |
|NPM                 |3.10.9    |パッケージを管理する   |
|Express             |4.14.0    |Webアプリケーションフレームワーク |
|MySQL               |5.7       |リレーショナルデータベース |
|node-mysql          |2.12.0    |Node.jsとMySQLを橋渡し |
|Foundation for Site |6         |画面装飾用のCSSフレームワーク |

動作確認はWindows10 GoogleChrome から実施しています。

## 使い方
コンソールから、以下のコマンドを叩いて必要なファイル・パッケージを入れます
```
$ git clone git@github.com:sasaken555/expMemo.git
$ npm install
```

次に上記で入れたexpMemoディレクトリに移動して、以下のコマンドを叩く
```
$ npm start
```

あとはブラウザから `localhost:3000` を入力すれば一覧画面が立ち上がります！

## 参考
+ Express 公式
  - [Express](http://expressjs.com/)
+ NodejsのMySQLドライバ node-mysql
  - [node-mysql](https://github.com/mysqljs/mysql)
+ CSSフレームワークのFoundation
  - [Foundation for Site6](http://foundation.zurb.com/sites.html)

*以上。*
