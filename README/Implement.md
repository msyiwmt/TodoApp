## 参考サイト：
https://qiita.com/Yasushi-Mo/items/3f6af80b871e2ff22568#cros%E8%A8%AD%E5%AE%9A

===
## ソースコード修正後のgit反映手順：
```
git add . 
git commit -m "update something"
git push
```

## VSCodeで表示されるアルファベットの意味：
| アルファベット | 単語      | 意味                          |
| -------------- | --------- | ----------------------------- |
| A              | added     | 新規追加                      |
| M              | modified  | 変更あり                      |
| U              | untracked | gitが密遺跡(新規作成 , add前) |
| D              | delete    | 削除済                        |
| C              | conflict  | コンフリクト発生中            |
| R              | renamed   | ファイル名変更済              |
| S              | submodule | サブモジュール                |



## Construction of Backend：
1. package.jsonの作成
- node.jsでアプリ開発を行う
- serverディレクトリ配下で実行

```
yarn init -y
```
```package.json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js", <- server.jsファイルに変更
  "license": "MIT",
}
```

2. パッケージのインストール
- typescriptを使えるように2つのパッケージをインストール
```
yarn add -D typescript @types/node
```

```package.json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "license": "MIT",
  "type": "module",
  "devDependencies": {
    "@types/node": "^25.0.3",
    "typescript": "^5.9.3"
  },
}

```