// ===========================
// 1. getElementById() と textContent
// ===========================
// id="greeting" の要素を取得
const greeting = document.getElementById("greeting");

function setGreeting(text) {
    // 要素の中の文字を書き換える
    greeting.textContent = text;
}

function readGreeting() {
    // 要素の中の文字を読み取る
    const text = greeting.textContent;
    // id="greetingLog" の要素に読み取った文字を表示する
    document.getElementById("greetingLog").textContent = `読み取った文字：${text}`;
}

// ===========================
// 2. textContent と innerHTML の違い
// ===========================
const textBox = document.getElementById("textBox");
const htmlBox = document.getElementById("htmlBox");

// タグを含む文字列
const tagString = "<strong>太字</strong>の文字";

function showTagString() {
    // textContent: タグも「ただの文字」として表示される
    textBox.textContent = tagString;
    // innerHTML: タグとして解釈され、太字になる
    htmlBox.innerHTML = tagString;
}

function clearBoxes() {
    textBox.textContent = "";
    htmlBox.innerHTML = "";
}

// ===========================
// 3. querySelector() と querySelectorAll()
// ===========================
function highlightFirst() {
    clearFruits();
    // 最初に見つかった1つだけ取得
    const first = document.querySelector(".fruit");
    first.style.backgroundColor = "#fde68a";
}

function highlightAll() {
    clearFruits();
    // 見つかったすべてを取得（複数）
    const fruits = document.querySelectorAll(".fruit");
    fruits.forEach((fruit) => {
        fruit.style.backgroundColor = "#fde68a";
    });
    // 見つかった数
    document.getElementById("fruitCount").textContent = `${fruits.length} 件`;
}

function highlightSelector(selector) {
    clearFruits();
    // CSS と同じ書き方で指定できる
    const target = document.querySelector(selector);
    target.style.backgroundColor = "#fde68a";
}

function clearFruits() {
    document.querySelectorAll(".fruit").forEach((fruit) => {
        fruit.style.backgroundColor = "";
    });
    document.getElementById("fruitCount").textContent = "";
}
