// 表の行を作成する関数
function addRow(label, value) {
    // id = resultTable の要素を取得
    const table = document.getElementById("resultTable")

    // 新しい行用の div 要素を作成
    const row = document.createElement("div")
    row.className = "flex justify-between p-2 hover:bg-gray-50"

    // 左側の div 要素を作成
    const left = document.createElement("div")
    left.textContent = label
    left.className = "font-medium text-gray-700"

    // 右側の div 要素を作成
    const right = document.createElement("div")
    right.textContent = value
    right.className = "text-gray-600"

    // div に左側の要素を追加
    row.appendChild(left)
    // div に右側の要素を追加
    row.appendChild(right)
    table.appendChild(row)
}

// ======================================
// 条件式チェック
// ======================================
let price = 500
let money = 1000
let result = null;

// TODO: price が 500 と等しい
addRow("price == 500", result)

// TODO: price が 0 より小さい
addRow("price < 0", result)

// TODO: price が 500 より大きい
addRow("price > 500", result)

// TODO: price が 500 以上
addRow("price >= 500", result)

// TODO: If statement: money が price 以上 の時に "決済完了"

// TODO: If Else: 
let message2 = ""
// 1. price が 0 未満 の時に "価格エラー"
// 2. money が price 以上 の時に "決済完了"
// 3. それ以外 の時に "残高不足"
addRow("Else if:", message2)

// switchゴミ曜日
// 曜日インデックス（0:日 1:月 2:火 3:水 4:木 5:金 6:土）
let weekday = 4
let trash = ""

// TODO:weekday に応じて switch 文でゴミの種類を設定

addRow(`曜日(${weekday})`, trash)