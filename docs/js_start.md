## HTML作成

### ファイル構成
この章では、次のファイルを作成します。

```txt
basic/
├── hello.html
└── hello.js
```

### プロジェクト作成
#### VSCodeでプロジェクトを開く
プロジェクトフォルダ `basic` を作成し、`VSCode` で開きます。

<img src="/storage/teaching_material/vscode_create_project.gif" class="w-[500px]" alt="">

#### HTMLファイル作成
プロジェクトフォルダに `hello.html` を作成します。

<img src="/storage/teaching_material/html_hello.png" width="300">

#### HTML基本タグ入力
`HTML` の基本タグは、`VSCode` に標準搭載されている **`Emmet`（エメット）を利用すると一括で入力**できます。

> `Emmet` は、短い記号や略語から `HTML` のコードを展開する入力補助機能です。

<img src="/storage/teaching_material/html_snippets_create.gif" width="">

`HTML` ファイルに `!` を入力すると、候補が表示されます。

<img src="/storage/teaching_material/vscode_emmet_html1.png" width="500">

候補から `!`（Emmet Abbreviation）を選択すると、`HTML` の基本タグが自動で挿入されます。

<img src="/storage/teaching_material/vscode_emmet_html2.png" width="600">

#### lang属性の変更
`Emmet` で挿入した `html` タグは `lang="en"`（英語）になっています。日本語のページなので `lang="ja"` に変更します。

###### hello.html
```html
<html lang="ja">
```

#### ページタイトル
`h1` タグを入力して、ページの見出しをつけます。

###### hello.html
```html
...
<body>
    <h1>Top Page</h1>
</body>
...
```

> ファイルを編集したら、**必ず保存**しましょう。保存しないとブラウザに反映されません（macOS: `Cmd + S`、Windows: `Ctrl + S`）。

## ブラウザで確認する

### 確認方法の種類
作成した `HTML` をブラウザで確認する方法はいくつかあります。理想は **Webサーバー経由で `HTTP` アクセスする方法**です。

| 方法 | 特徴 | おすすめ度 |
| ---- | ---- | ---- |
| Webサーバー（Apache・Nginx） | 本番環境と同じ仕組み。構築に手間がかかる | ◎ |
| 簡易サーバー（Python・Node.js） | コマンド1つで起動。学習用に手軽 | ○ |
| VSCode拡張機能（Live Server） | ボタン1つで起動。保存時に自動リロード | ○ |
| ファイルを直接開く | 手軽だが本番と動作が異なる | ✕（非推奨） |

###### ブラウザの表示
<img src="/storage/teaching_material/js_hello_top.png" class="w-[500px]" alt="">

### Webサーバーの仕組み
`Web` 開発では、`Apache` や `Nginx` などの **Webサーバーに `HTML` や `JavaScript` のファイルを配置**し、ブラウザから `URL` を指定して `HTTP` でアクセスします。

<img src="/storage/teaching_material/js_web_server_flow.svg" width="600">

1. ブラウザが `URL` を指定して、Webサーバーにリクエストを送ります
2. Webサーバーが、配置されているファイルをブラウザに返します
3. ブラウザが受け取った `HTML` を表示し、`JavaScript` を実行します

<div class="flex gap-4">
<img src="/storage/teaching_material/icon_apache.png" class="h-20 object-contain">
<img src="/storage/teaching_material/icon_nginx.png" class="w-20 h-20 object-contain">
</div>

> Webサーバーを構築するには、`OS` に直接インストールする方法や、`Docker` などの仮想環境を利用する方法があります。

#### URLアクセス
`URL` は `http`（または `https`）プロトコルではじまり、ホスト名、フォルダ名、ファイル名の順に指定します。

###### URL
```txt
http://ホスト名/プロジェクトフォルダ/HTMLファイル
```

###### URLの例
```txt
http://localhost/basic/hello.html
```

> `localhost` は「自分自身の `PC`」を表すホスト名です。

<img src="/storage/teaching_material/js_hello_webserver.gif" class="w-[500px]" alt="">

<img src="/storage/teaching_material/js_hello_url.png" class="w-[600px]">

### Pythonで簡易サーバーを起動
Webサーバーの構築が難しい場合は、`Python` や `Node.js` で簡易 Webサーバーを起動できます。

`Python` がインストールされていれば、**標準機能だけで Webサーバーを起動**できます。ターミナルでプロジェクトフォルダに移動して、次のコマンドを実行します。

###### ターミナル
```bash
cd basic
python3 -m http.server 8000
```

ブラウザで次の `URL` にアクセスします。

###### URL
```txt
http://localhost:8000/hello.html
```

> `Windows` では `python3` ではなく `python` や `py` コマンドの場合があります。サーバーを停止するには、ターミナルで `Ctrl + C` を押します。

### Node.jsで簡易サーバーを起動
`Node.js` がインストールされていれば、`npx` コマンドで Webサーバーを起動できます。**事前のインストール作業は不要**です。

###### ターミナル
```bash
cd basic
npx serve .
```

ブラウザで次の `URL` にアクセスします。

###### URL
```txt
http://localhost:3000/hello.html
```

> 初回実行時に `Ok to proceed? (y)` と表示されたら `y` を入力します。`serve` では `/hello.html` が `/hello` に自動で変換されますが、問題ありません。

`npx` で利用できる主な Webサーバーは次のとおりです。

| コマンド | 初期ポート | 特徴 |
| ---- | ---- | ---- |
| npx serve . | 3000 | シンプルで手軽 |
| npx http-server . | 8080 | -c-1 オプションでキャッシュ無効化 |
| npx live-server | 8080 | ファイル保存時に自動リロード |

### Live Serverで確認
`VSCode` の拡張機能 `Live Server` を利用すると、**ボタン1つで Webサーバーを起動**できます。ファイルを保存すると、ブラウザが自動で再読み込みされます。

1. `VSCode` の拡張機能から `Live Server` を検索してインストールします
2. `hello.html` を右クリックし、「Open with Live Server」を選択します
3. ブラウザで `http://127.0.0.1:5500/hello.html` が開きます

> 画面右下のステータスバーにある「Go Live」をクリックしても起動できます。

### ファイルを直接開く（非推奨）
`HTML` ファイルをブラウザで直接開いても、ページは表示されます。

<img src="/storage/teaching_material/js_html_browser.png" class="w-[200px]">

#### 直接開くのが非推奨な理由
直接開いた場合、`URL` は `file://` ではじまり、`HTTP` 通信ではありません。そのため、**本番の `Web` サイトと動作が異なり、一部の機能が使えません。**

<img src="/storage/teaching_material/js_open_file_html.png" class="w-[600px]" alt="">

| 機能 | 直接開く（file://） | Webサーバー経由（http://） |
| ---- | ---- | ---- |
| fetch() によるデータ通信 | 利用不可 | 利用可 |
| モジュール（import・export） | 利用不可 | 利用可 |
| 本番環境との動作 | 異なる | 同じ |

**Webアプリは Webサーバー経由でアクセスする**習慣をつけましょう。

### ブラウザのキャッシュ対策
ブラウザは一度読み込んだファイルを保存（キャッシュ）するため、ファイルを修正しても**古い内容が表示される**ことがあります。その場合は、キャッシュを無視して再読み込みします。

| OS | ショートカット |
| ---- | ---- |
| macOS | Cmd + Shift + R |
| Windows | Ctrl + Shift + R |

## JavaScriptをはじめる

### scriptタグ
`JavaScript` を実行するには、`script` タグの中に `JavaScript` のコードを記述します。

```html
<script>
    // JavaScriptのコード
</script>
```

#### scriptスニペット
<img src="/storage/teaching_material/html_snippets_script.gif" width="">

`body` タグの中で `scr` と入力し、候補から `script` を選択します。

<img src="/storage/teaching_material/vscode_snippet_srcipt.png" width="400">

`script` タグが入力できました。

###### hello.html
```html
...
<body>
    <h1>Top Page</h1>

    <script></script>
</body>
...
```

> `script` タグは、**`body` の閉じタグ `</body>` の直前に書く**のが基本です。理由は「JavaScriptの実行タイミング」で説明します。

### アラートダイアログ
#### alert() とは
`alert()` は、ブラウザに**アラートダイアログを表示**し、指定したメッセージを表示する命令です。

```js
alert(メッセージ);
```

#### alert() 入力
<img src="/storage/teaching_material/js_alert_script.gif" class="w-[600px]">

`script` タグの中で `ale` と入力し、候補から `alert` を選択します。

<img src="/storage/teaching_material/vscode_snippet_ale.png" class="w-[400px]">

`alert` が入力されました。

<img src="/storage/teaching_material/vscode_snippet_alert.png" class="w-[300px]">

続けて `(` を入力すると、`( )` が自動で入力されます。

<img src="/storage/teaching_material/vscode_snippet_alert_blacket.png" width="400">

#### alert() にテキスト入力
`( )` の中に、表示するテキストを記述します。**テキスト（文字列）は `' '` または `" "` で囲みます。**

###### hello.html
```html
<script>
    alert('Hello, JavaScript');
</script>
```

> テキストを `' '` で囲み忘れると、エラーになり実行されません。コードを入力したら、忘れずにファイルを保存しましょう。

#### セミコロン
`JavaScript` では、文の終わりに `;`（セミコロン）をつけます。省略しても自動で補われるため動作しますが、まれに意図しない動作の原因になります。**この教材では、セミコロンをつけて記述します。**

###### hello.html
```html
<script>
    // セミコロンあり（推奨）
    alert('Hello, JavaScript');

    // セミコロンなしでも動作する
    alert('Hello, JavaScript')
</script>
```

### 動作確認
ブラウザを再読み込みすると、アラートダイアログが表示されます。「OK」ボタンを押すと、ダイアログが閉じます。

<img src="/storage/teaching_material/js_hello_alert.gif" class="w-[500px]" alt="">

<img src="/storage/teaching_material/js_hello_alert.png" class="w-[500px]" alt="">

### JavaScriptの実行タイミング
ブラウザは `HTML` を上から順に読み込み（解析し）ます。**`script` タグが解析されると、その時点ですぐに `JavaScript` が実行**されます。実行が終わるまで、`HTML` の続きの解析は止まります。

<img src="/storage/teaching_material/js_script_execution_flow.svg" width="600">

そのため、`script` タグを `head` タグの中に書くと、まだ読み込まれていない `HTML` 要素を `JavaScript` から操作できません。**`script` タグは `</body>` の直前に書く**のが基本です。

> `script` タグに `defer` 属性をつけると、`HTML` の解析が終わってから実行されるため、`head` タグの中にも書けます。

### コンソール出力
#### console.log() とは
`console.log()` は、ブラウザの**開発者ツールのコンソールにメッセージを出力**する命令です。`alert()` と違い画面の操作を止めないため、プログラムの動作確認でよく利用します。

###### hello.html
```html
<script>
    console.log('Hello, Console');
</script>
```

#### 開発者ツールを開く
ブラウザで開発者ツールを開き、「Console」タブを選択すると、出力されたメッセージを確認できます。

| OS | ショートカット |
| ---- | ---- |
| macOS | Cmd + Option + I |
| Windows | Ctrl + Shift + I または F12 |

> コードに誤りがあると、コンソールに**赤色でエラーが表示**されます。プログラムが動かないときは、まずコンソールを確認しましょう。

## 外部JSファイル

### 外部ファイルに分ける
`JavaScript` のコードは、`HTML` とは別の `.js` ファイルに記述して読み込むこともできます。**実際の開発では、外部ファイルに分けるのが一般的**です。

<img src="/storage/teaching_material/js_external_script.svg" width="600">

| 書き方 | 特徴 |
| ---- | ---- |
| HTML に直接記述 | 手軽。ちょっとした動作確認向き |
| 外部 JS ファイル | HTML と分離して管理しやすい。複数ページで再利用可能 |

### hello.js作成
プロジェクトフォルダに `hello.js` を作成し、コードを記述します。

###### hello.js
```js
console.log('Hello, hello.js');
```

> 外部 `JS` ファイルには、`script` タグを書きません。`JavaScript` のコードだけを記述します。

### scriptタグで読み込む
`script` タグの `src` 属性に、読み込む `JS` ファイルのパスを指定します。

###### hello.html
```html
...
<body>
    <h1>Top Page</h1>

    <script src="hello.js"></script>
</body>
...
```

> `src` 属性を指定した `script` タグの中にコードを書いても、実行されません。

### 動作確認
ブラウザを再読み込みし、開発者ツールのコンソールに `Hello, hello.js` と表示されることを確認します。

## コメント

### コメントとは
コメントは、プログラムコード内に**メモや説明を残す機能で、コードの実行には影響しません。**
コメントを使うことで、コードの可読性や保守性が向上します。

### コメントの種類
| 種類 | 記号 | 用途 |
| ---- | ---- | ---- |
| シングルラインコメント | // | 1行のメモ、コードの一時的な無効化 |
| マルチラインコメント | /* */ | 複数行の説明 |
| HTMLコメント | &lt;!-- --&gt; | HTML 部分のメモ |

#### シングルラインコメント（1行コメント）
<img src="/storage/teaching_material/js_comment_out.gif" class="w-[600px]" alt="">

`//` を使って1行のコメントを記述します。`//` から行の終わりまでが、コメントとして扱われます。

###### hello.html
```html
<script>
    // アラート表示
    // alert('Hello, JavaScript');
</script>
```

コードの先頭に `//` をつけて実行されないようにすることを、**コメントアウト**といいます。

#### ショートカットキー
コメントはショートカットキーを利用すると便利です。

| OS | ショートカット |
| ---- | ---- |
| macOS | Cmd + / |
| Windows | Ctrl + / |

> `VSCode` のショートカットでは、カーソルの位置に応じて `JavaScript` のコメント `//` と `HTML` のコメント `<!-- -->` が自動で切り替わります。

#### マルチラインコメント（複数行コメント）
`/*` と `*/` の間にテキストを入力すると、複数行にわたるコメントが記述できます。

<img src="/storage/teaching_material/js_commnet_multi.gif" class="w-[600px]" alt="">

###### hello.html
```html
<script>
    /**
     * はじめてのJavaScript
     * 複数行のコメント
     */

    // アラート表示
    alert('Hello, JavaScript');
</script>
```

> `/**` ではじまるコメントは、関数などの説明を書くときによく使われる書き方です。`/*` ではじめても同じくコメントになります。

### 動作確認
ブラウザを再読み込みして、動作を確認します。**コメントアウトしたコードは実行されない**ため、アラートダイアログは表示されません。

###### hello.html
```html
<script>
    /**
     * はじめてのJavaScript
     * 複数行のコメント
     */

    // アラート表示
    // コメントアウトすると実行されない
    // alert('Hello, JavaScript');
</script>
```

###### ブラウザ
<img src="/storage/teaching_material/js_hello_top.png" class="w-[500px]" alt="">

## フォーマッター

### フォーマッターとは
インデントが揃っていないコードは、人間にとって読みにくくなります。高機能エディタには `Formatter`（フォーマッター）というコード整形の機能があり、**コードのインデントや崩れを自動で修正**してくれます。

<img src="/storage/teaching_material/js_formatter.gif" class="w-[600px]" alt="">

#### ショートカットキー
フォーマッターはショートカットキーを利用すると便利です。

| OS | ショートカット |
| ---- | ---- |
| macOS | Shift + Option + F |
| Windows | Shift + Alt + F |

> `VSCode` の設定で `Format On Save` を有効にすると、**ファイル保存時に自動で整形**されます。

### 完成コード
###### hello.html
```html
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Page</title>
</head>

<body>
    <h1>Top Page</h1>

    <!-- HTMLにJSを記述して実行 -->
    <script>
        /**
         * はじめてのJavaScript
         * 複数行のコメント
         */

        // アラート表示
        // コメントアウトすると実行されない
        // alert('Hello, JavaScript');

        // コンソール出力
        console.log('Hello, Console');
    </script>

    <!-- hello.js 読み込み -->
    <script src="hello.js"></script>
</body>

</html>
```

###### hello.js
```js
console.log('Hello, hello.js');
```

## まとめ

| 項目 | 内容 |
| ---- | ---- |
| Emmet | ! の入力で HTML の基本タグを一括挿入する機能 |
| Webサーバー | HTML や JS を配置し、HTTP でブラウザに返すサーバー |
| 簡易サーバー | python3 -m http.server や npx serve で起動するサーバー |
| ファイル直接表示 | file:// で開く方法。本番と動作が異なるため非推奨 |
| scriptタグ | HTML の中で JavaScript を実行するタグ。&lt;/body&gt; の直前に記述 |
| alert() | アラートダイアログでメッセージを表示する命令 |
| console.log() | 開発者ツールのコンソールにメッセージを出力する命令 |
| 外部JSファイル | src 属性で読み込む .js ファイル |
| コメント | 実行に影響しないメモ。// と /* */ の2種類 |
| フォーマッター | インデントや崩れを自動修正する機能 |
