// ブラウザのキャッシュ対策
// Win: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// ==============================
// ビルトイン関数
// ==============================
let numberString = "0005";

// TODO: 文字列を数値に変換: parseInt()
let number;

// TODO: 数値でないか調べる: isNaN()
let nan1;    // "コーヒー"（文字列）
let nan2;    // "0005"（数値に変換可能な文字列）
let nan3;    // 5（数値）

// Math
let height = 169.5;
// TODO: 四捨五入: Math.round()
let rounded;
// TODO: 切り上げ: Math.ceil()
let ceiled;
// TODO: 切り捨て: Math.floor()
let floored;
// TODO: 最大値 1, 5, 10, 3: Math.max()
let maxValue;
// TODO: 最小値 1, 5, 10, 3: Math.min()
let minValue;

// HTML表示
document.getElementById("parseInt_input").textContent = numberString;
document.getElementById("parseInt_output").textContent = number;
document.getElementById("isNaN_1").textContent = nan1;
document.getElementById("isNaN_2").textContent = nan2;
document.getElementById("isNaN_3").textContent = nan3;
document.getElementById("math_round").textContent = rounded;
document.getElementById("math_ceil").textContent = ceiled;
document.getElementById("math_floor").textContent = floored;
document.getElementById("math_max").textContent = maxValue;
document.getElementById("math_min").textContent = minValue;

// 1秒（1000ms）ごとに関数を実行: setInterval()
let seconds = 0;
// TODO: setInterval() で1秒ごとに seconds を +1 して、#count に「n秒」と表示する
//       第1引数: 実行する関数、第2引数: 間隔（ミリ秒）

// ==============================
// ユーザ定義関数
// ==============================
// TODO: 引数 x を2乗して返す関数 calculate を定義: x ** 2
function calculate(x) {

}

document.getElementById("calc1").textContent = calculate(8);
document.getElementById("calc2").textContent = calculate(71);

// ==============================
// 無名関数
// ==============================
// TODO: name + "さん、いらっしゃい" を返す無名関数を hello1 に代入: const hello1 = function (name) { };
const hello1 = null;
// document.getElementById("hello1").textContent = hello1("東京 太郎");

// ==============================
// アロー関数
// ==============================
// TODO: hello1 と同じ処理をアロー関数で hello2 に代入: const hello2 = (name) => { };
const hello2 = null;
// document.getElementById("hello2").textContent = hello2("東京 太郎");

// ==============================
// 実行のタイミング
// ==============================
// TODO: #message に「東京」を追加する関数 showTokyo を定義: textContent +=
// TODO: #message に「横浜」を追加する関数 showYokohama を定義: textContent +=

// TODO: showTokyo をページの読み込み後に実行: window.onload = ...（( ) は付けない）

// TODO: showYokohama をすぐに実行
