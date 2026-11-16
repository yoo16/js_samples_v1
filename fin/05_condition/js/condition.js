// ======================================
// 条件式チェック
// ======================================
let price = 500
let money = 1000
let result1 = null
let result2 = null
let result3 = null
let result4 = null
let message1 = ""

// TODO: price が 500 と等しい
result1 = (price == 500)

// TODO: price が 0 より小さい
result2 = (price < 0)

// TODO: price が 500 より大きい
result3 = (price > 500)

// TODO: price が 500 以上
result4 = (price >= 500)

// TODO: If statement: money が price 以上 の時に "決済完了"
if (money >= price) {
    message1 = "決済完了"
}

// TODO: If Else: 
let message2 = ""
if (price < 0) {
    message2 = "価格エラー"
} else if (money >= price) {
    message2 = "決済完了"
} else {
    message2 = "残高不足"
}

// switchゴミ曜日
// 曜日インデックス（0:日 1:月 2:火 3:水 4:木 5:金 6:土）
let weekday = 4
let trash = ""

// TODO:weekday に応じて switch 文でゴミの種類を設定
switch (weekday) {
    case 1:
    case 5:
        trash = "燃えるゴミ"
        break
    case 4:
        trash = "燃えないゴミ"
        break
    default:
        trash = "回収なし"
}

// ======================================
// 結果を HTML に表示（id を指定して代入）
// ======================================
document.getElementById("result1").textContent = result1
document.getElementById("result2").textContent = result2
document.getElementById("result3").textContent = result3
document.getElementById("result4").textContent = result4
document.getElementById("message1").textContent = message1
document.getElementById("message2").textContent = message2
document.getElementById("trashResult").textContent = `${trash}（曜日 ${weekday}）`
