// 税率
const TAX_RATE = 0.1;
// ドリンクバー（1人あたり）
const DRINK_PRICE = 500;

/**
 * 30分あたりの1人料金を返す関数
 * getPricePer30min()
 *
 * @param {string} type - "adult" | "student" | "child"
 * @param {boolean} isHoliday - 土日祝かどうか
 * @return 30分あたりの料金
 */
function getPricePer30min(type, isHoliday) {
    // 平日 / 土日祝 の料金表
    const weekday = { adult: 300, student: 200, child: 100 };
    const holiday = { adult: 400, student: 300, child: 200 };

    let table = isHoliday ? holiday : weekday;
    return table[type];
}

/**
 * ルーム料金を計算する関数
 * calcRoomFee()
 *
 * @param {number} people - 人数
 * @param {number} pricePer30min - 30分あたりの1人料金
 * @param {number} minutes - 利用時間（分）
 * @return ルーム料金
 */
function calcRoomFee(people, pricePer30min, minutes) {
    // 30分単位の回数
    let units = minutes / 30;
    return people * pricePer30min * units;
}

/**
 * 割引後の金額を返す関数
 * applyDiscount()
 *
 * @param {number} price - 割引前の金額
 * @param {number} rate - 割引率（省略時は 0.1 = 10%）
 * @return 割引後の金額
 */
function applyDiscount(price, rate = 0.1) {
    return Math.floor(price * (1 - rate));
}

/**
 * 税込金額を返す関数
 * addTax()
 *
 * @param {number} price - 税抜金額
 * @return 税込金額
 */
function addTax(price) {
    return Math.floor(price * (1 + TAX_RATE));
}

/**
 * 小計を計算する関数
 * calcSubtotal()
 *
 * @param {number} roomFee - ルーム料金
 * @param {number} drinkFee - ドリンクバー料金
 * @return 小計
 */
function calcSubtotal(roomFee, drinkFee) {
    return roomFee + drinkFee;
}

/**
 * 税込合計を計算する関数（会員なら割引してから税を加える）
 * calcTotal()
 *
 * @param {number} subtotal - 小計
 * @param {boolean} isMember - 会員かどうか
 * @return 税込合計
 */
function calcTotal(subtotal, isMember) {
    // 会員なら割引、会員でなければ小計のまま
    let discounted = isMember ? applyDiscount(subtotal) : subtotal;
    // 税込にして返す
    return addTax(discounted);
}

/**
 * 金額を「1,234円」の形式に整える関数
 * formatYen()
 *
 * @param {number} price
 * @return 整形した文字列
 */
function formatYen(price) {
    return price.toLocaleString() + "円";
}

/**
 * 計算結果をレシート形式で表示する関数
 * renderResult()
 *
 * @param {number} roomFee - ルーム料金
 * @param {number} drinkFee - ドリンクバー料金
 * @param {number} subtotal - 小計
 * @param {number} total - 税込合計
 * @param {number} people - 合計人数
 * @param {boolean} isMember - 会員かどうか
 */
function renderResult(roomFee, drinkFee, subtotal, total, people, isMember) {
    document.getElementById("result").innerHTML = `
        <dl class="text-left text-sm text-slate-700 space-y-2">
            <div class="flex justify-between"><dt>ルーム料金</dt><dd>${formatYen(roomFee)}</dd></div>
            <div class="flex justify-between"><dt>ドリンクバー</dt><dd>${formatYen(drinkFee)}</dd></div>
            <div class="flex justify-between border-t border-dashed border-slate-300 pt-2"><dt>小計</dt><dd>${formatYen(subtotal)}</dd></div>
            <div class="flex justify-between"><dt>会員割引</dt><dd>${isMember ? "10%OFF" : "なし"}</dd></div>
        </dl>
        <div class="mt-4 border-t-2 border-slate-900 pt-3 text-center">
            <div class="text-xs text-slate-500">税込合計</div>
            <div class="text-4xl font-black text-sky-500">${formatYen(total)}</div>
            <div class="mt-1 text-sm text-slate-600">1人あたり ${formatYen(Math.ceil(total / people))}</div>
        </div>
    `;
}

/**
 * 画面の入力値を読み取り、料金を計算して表示する関数
 * simulate()
 */
function simulate() {
    // 入力値の取得
    let isHoliday = document.querySelector('input[name="day"]:checked').value === "holiday";
    let adult = Number(document.getElementById("adult").value);
    let student = Number(document.getElementById("student").value);
    let child = Number(document.getElementById("child").value);
    let minutes = Number(document.getElementById("minutes").value);
    let useDrink = document.getElementById("drink").checked;
    let isMember = document.getElementById("member").checked;

    let people = adult + student + child;
    if (people === 0) {
        document.getElementById("result").textContent = "人数を入力してください";
        return;
    }

    // 30分あたりの料金（区分ごと）
    let adultPrice = getPricePer30min("adult", isHoliday);
    let studentPrice = getPricePer30min("student", isHoliday);
    let childPrice = getPricePer30min("child", isHoliday);

    // 区分ごとのルーム料金
    let adultFee = calcRoomFee(adult, adultPrice, minutes);
    let studentFee = calcRoomFee(student, studentPrice, minutes);
    let childFee = calcRoomFee(child, childPrice, minutes);
    let roomFee = adultFee + studentFee + childFee;

    // ドリンクバー
    let drinkFee = useDrink ? people * DRINK_PRICE : 0;

    // 小計 → 税込合計（会員割引を含む）
    let subtotal = calcSubtotal(roomFee, drinkFee);
    let total = calcTotal(subtotal, isMember);

    // 結果表示
    renderResult(roomFee, drinkFee, subtotal, total, people, isMember);
}

/**
 * ＋ − ボタンで人数を増減する関数
 * changeCount()
 *
 * @param {string} id - 対象の input の id
 * @param {number} step - 増減する数（+1 / -1）
 */
function changeCount(id, step) {
    let input = document.getElementById(id);
    // 現在の人数を数値に変換
    let count = Number(input.value);
    // 0 未満にはしない
    input.value = Math.max(0, count + step);
}

// 人数ボタン
document.querySelectorAll(".stepper").forEach(function (button) {
    button.addEventListener("click", function () {
        changeCount(button.dataset.target, Number(button.dataset.step));
    });
});

document.getElementById("calc-button").addEventListener("click", simulate);
