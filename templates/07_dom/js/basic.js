// ===========================
// 1. getElementById() と textContent
// ===========================
// id="greeting" の要素を取得
const greeting = document.getElementById("greeting");
const SELECTED_COLOR = "#fde68a";

function setGreeting(text) {
    // TODO: 要素の中の文字を書き換える
    // greeting.textContent に text を代入

}

function readGreeting() {
    // TODO: 要素の中の文字を読み取る
    // greeting.textContent を、変数 text に代入
    const text = "";
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
    // TODO: textContent: タグも「ただの文字」として表示される
    // textBox.textContent に tagString を代入

    // TODO: innerHTML: タグとして解釈され、太字になる
    // htmlBox.innerHTML に tagString を代入

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
    // TODO: 最初に見つかった1つだけ取得
    // querySelector(".fruit") の結果を、変数 first に代入
    const first = ""
    // TODO: スタイルの背景色を変更
    // first.style.backgroundColor に selectedColor を代入

}

// 3-2. querySelectorAll() で複数取得してハイライト
function highlightAll() {
    clearFruits();
    // 見つかったすべてを取得（複数）
    // TODO: querySelectorAll(".fruit") の結果を、変数 fruits に代入
    const fruits = []

    // fruits を繰り返し
    fruits.forEach((fruit) => {
        // style.backgroundColor に SELECTED_COLOR を代入
        fruit.style.backgroundColor = SELECTED_COLOR;
    });

    // 見つかった数を表示
    const message = `${fruits.length} 件`;
    // TODO: id="fruitCount" の textContent に message を代入
}

// 4. CSS セレクタで指定してハイライト
function highlightSelector(selector) {
    clearFruits();
    // CSS と同じ書き方で指定できる
    // TODO: querySelector(selector) の結果を、変数 target に代入
    const target = {}
    // TODO: target.style.backgroundColor に SELECTED_COLOR を代入
}

// 5. 選択を解除
function clearFruits() {
    document.querySelectorAll(".fruit").forEach((fruit) => {
        fruit.style.backgroundColor = "";
    });
    document.getElementById("fruitCount").textContent = "";
}
