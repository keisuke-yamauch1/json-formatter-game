# JSON Formatter Game 🎮

これは、テスト駆動開発（TDD）の練習としてJavaScriptで作成したシンプルなJSONフォーマッターです。あらかじめ用意されたテストケースをすべてパスする`formatJson`関数を実装することを目指します。

## ✨ 特徴

-   JSON文字列を人間が読みやすい形式に整形します。
-   2スペースのインデントに対応しています。
-   ネストされたオブジェクトや配列を正しく処理します。
-   Jestを使用したテストスイート一式が含まれています。

## 🚀 始め方

### 前提条件

このプロジェクトを実行するには、[Node.js](https://nodejs.org/ja) (LTS版を推奨) がインストールされている必要があります。

### インストール

1.  このリポジトリをクローンします。
    ```bash
    git clone git@github.com:keisuke-yamauch1/json-formatter-game.git
    ```
2.  プロジェクトディレクトリに移動します。
    ```bash
    cd json-formatter-game
    ```
3.  必要な依存関係（Jest）をインストールします。
    ```bash
    npm install
    ```

## 使い方

このプロジェクトの目的は、`formatJson.test.js`ファイル内の`formatJson`関数を完成させることです。

ファイルを開いてロジックを実装したら、以下のコマンドでテストを実行します。

```bash
npm test
```

すべてのテストが`PASS`と表示されれば、ゲームクリアです！ 🎉

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。