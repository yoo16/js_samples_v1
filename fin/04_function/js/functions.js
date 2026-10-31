// ブラウザのキャッシュ対策
// Win: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// ==============================
// ビルトイン関数
// ==============================
let numberString = "0005";

// 文字列を数値に変換: parseInt()
let number = parseInt(numberString);

// 数値でない: isNaN()
let nan1 = isNaN("コーヒー");    // 文字列
let nan2 = isNaN("0005");        // 数値に変換可能な文字列
let nan3 = isNaN(5);             // 数値

// Math
let height = 169.5;
let rounded = Math.round(height);       // 四捨五入
let ceiled = Math.ceil(height);         // 切り上げ
let floored = Math.floor(height);       // 切り捨て
let maxValue = Math.max(1, 5, 10, 3);   // 最大値
let minValue = Math.min(1, 5, 10, 3);   // 最小値

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
setInterval(function () {
    seconds++;
    document.getElementById("count").textContent = seconds + "秒";
}, 1000);

// ==============================
// ユーザ定義関数
// ==============================
function calculate(x) {
    let y = x ** 2;
    return y;
}

document.getElementById("calc1").textContent = calculate(8);
document.getElementById("calc2").textContent = calculate(71);

// ==============================
// 無名関数
// ==============================
const hello1 = function (name) {
    let message = name + "さん、いらっしゃい";
    return message;
};
document.getElementById("hello1").textContent = hello1("東京 太郎");

// ==============================
// アロー関数
// ==============================
const hello2 = (name) => {
    let message = name + "さん、いらっしゃい";
    return message;
};
document.getElementById("hello2").textContent = hello2("東京 太郎");

// ==============================
// 実行のタイミング
// ==============================
function showTokyo() {
    document.getElementById("message").textContent += "東京";
}

function showYokohama() {
    document.getElementById("message").textContent += "横浜";
}

// ページの読み込み後に実行（( ) は付けない）
window.onload = showTokyo;

// すぐに実行
showYokohama();
