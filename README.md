### quiz_app
プログラミング教室BINGO、シンプルクイズアプリの教材リポジトリ

### 起動の仕方(node_modulesファイルがないと思うので作るところから始めてみましょう。)
↓のコマンドでnode_modulesを生成しましょう。
```
npm install live-server --save-dev
```
package.jsonを開いて、scriptsプロパティに以下を追加してください。
```
"scripts":{
  "start":"live-server"
}
```
いよいよ起動！
```
npm start
```


