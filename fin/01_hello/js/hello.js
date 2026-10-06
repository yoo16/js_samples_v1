// ウィンドウタイトル
document.title = "はじめてのJavaScript";

// コンソール表示
console.log('Hello!');

// ----------------------------------------
// 参考: console のいろいろな出力
// DevTools の Console タブで表示の違いを確認しましょう
// ----------------------------------------

// 情報・警告・エラー
console.info('情報メッセージ');
console.warn('警告メッセージ');
console.error('エラーメッセージ');

// 表形式で出力
console.table([
    { name: 'コーヒー', price: 500 },
    { name: '紅茶', price: 450 },
]);

// 処理時間の計
console.time('計測');
for (let i = 0; i < 100000; i++) { }
console.timeEnd('計測');
