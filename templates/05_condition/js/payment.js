// ===========================
// DOM要素
// ===========================
const paymentDisplay = document.getElementById("paymentDisplay");
const stepMessages = document.querySelectorAll(".step-message");
const walletDisplay = document.getElementById("walletDisplay");
const cashArea = document.getElementById("cashArea");
const qrArea = document.getElementById("qrArea");
const payButton = document.getElementById("payButton");
const resultDisplay = document.getElementById("resultDisplay");
const stepPanels = document.querySelectorAll(".step-panel");
const stepDots = document.querySelectorAll(".step-dot");
const audioBeep = document.getElementById("beep");
const audioFanfare = document.getElementById("fanfare");
// オーディオ再生フラグ
const isAudioPlay = true;
// オーディオ音量設定
audioBeep.volume = 0.1;
audioFanfare.volume = 0.1;

// ===========================
// 金額の設定
// ===========================
const ITEM_AMOUNT = 1500;   // 商品の合計
const BAG_PRICE = 3;        // レジ袋の値段
const POINT_RATE = 0.01;    // ポイント還元率（1%）

// ===========================
// 状態（レジの中で覚えておく値）
// ===========================
let useBag = false;          // レジ袋を使うか
let hasPointCard = false;    // ポイントカードを読み取ったか
let selectedMethod = "";     // 選択された決済方法
let money = 0;               // 所持金（現金用）

// 表示用ラベル
const METHOD_LABEL = {
    transit: "交通系IC",
    emoney: "電子マネー",
    credit: "クレジットカード",
    cash: "現金",
    qr: "QR決済"
};

// ===========================
// 共通の関数
// ===========================
// 円表記関数
function yen(value) {
    return "¥" + Number(value).toLocaleString();
}

// お会計の合計金額（レジ袋を使うときは加算）
function getTotal() {
    return ITEM_AMOUNT + (useBag ? BAG_PRICE : 0);
}

// お会計の表示更新
function updateTotal() {
    paymentDisplay.textContent = yen(getTotal());
}

// 所持金表示更新
function updateWallet() {
    walletDisplay.textContent = yen(money);
}

// ステータス表示更新
function showStatus(msg) {
    // 今の選択画面に表示（画面ごとに用意した step-message へ）
    stepMessages.forEach((el) => (el.textContent = msg));
}

// ===========================
// 画面（ステップ）の切り替え
// ===========================
function showStep(n) {
    // 前の画面のメッセージを消す（メッセージは showStep のあとに出す）
    showStatus("");

    // すべての画面を隠して、n 番の画面だけ表示
    stepPanels.forEach((panel) => panel.classList.add("hidden"));
    document.getElementById("step" + n).classList.remove("hidden");

    // 上の進行バーの色を更新
    stepDots.forEach((dot) => {
        // ステップを番号で取得
        const step = Number(dot.dataset.step);
        // ステップの基本スタイル
        let cls = "flex-1 rounded-lg py-2 text-center text-sm font-bold ";

        // TODO: ステップによってスタイル(cls)を変更
        // switch(true) を利用すると、条件式を自由に書ける
        // 1. step が n と等しい(今の画面) の時に "bg-sky-600 text-white"
        // 2. step が n より小さい(終わった画面) の時に "bg-sky-100 text-sky-700"
        // 3. それ以外(これからの画面) の時に "bg-slate-100 text-slate-400"

        dot.className = cls;
    });
}

// ===========================
// 1. レジ袋の選択
// ===========================
function chooseBag(flag) {
    useBag = flag;
    // 合計金額を更新
    updateTotal();
    // ステップ2へ進む
    showStep(2);
    // TODO: レジ袋の選択に応じてメッセージを表示
    // 1. useBag が true の時に `レジ袋を追加しました。（+${yen(BAG_PRICE)}）`
    // 2. それ以外 の時に "レジ袋は使いません。"
    // showStatus(メッセージ) で表示

}

// ===========================
// 2. ポイントカード（バーコード読み取りは仮想ボタン）
// ===========================
function scanPointCard() {
    // ポイントカードを読み取ったことを記録
    hasPointCard = true;
    // ステップ3へ進む
    showStep(3);
    // メッセージを表示
    showStatus("ポイントカードを読み取りました。");
}

function skipPointCard() {
    // ポイントカードを使わないことを記録
    hasPointCard = false;
    // ステップ3へ進む
    showStep(3);
    // メッセージを表示
    showStatus("ポイントカードは使いません。");
}

// ===========================
// 3. 決済方法を選択
// ===========================
function selectMethod(methodKey) {
    // 選択された決済方法を記録
    selectedMethod = methodKey;
    // 選択された決済方法のラベルを取得
    let methodLabel = METHOD_LABEL[methodKey];
    // 選択された決済方法を表示
    showStatus(`決済方法：${methodLabel}`);

    // すべて非表示
    cashArea.classList.add("hidden");
    qrArea.classList.add("hidden");

    // TODO: 選択された決済方法に応じて表示
    // 1. 現金(cash) の時に cashArea を表示
    // 2. QR決済(qr) の時に showQrCode() を実行し、qrArea を表示
    // 3. 他の決済方法の時は特に表示なし
    if (false) {
        // 現金: 入金エリアを表示
        cashArea.classList.remove("hidden");
    } else if (false) {
        // QR決済: QRコードを表示
        showQrCode();
        qrArea.classList.remove("hidden");
    }
    // 他の決済方法の時は特に表示なし
}

// チャージ（現金用）
function charge(amount) {
    money += amount;
    // 所持金を更新
    updateWallet();
    // チャージした金額を表示
    let charge = yen(amount)
    const message = `${charge} チャージしました。`
    showStatus(message);
}

function resetWallet() {
    // 所持金をリセット
    money = 0;
    updateWallet();
    showStatus("所持金をクリアしました。");
}

// QRコード表示
function showQrCode() {
    showStatus("QRコードを読み取ってください。");
}

// ===========================
// 3 → 4. 確認画面へ進む前のチェック
// ===========================
function goToConfirm() {
    // TODO: 決済方法選択チェック
    // selectedMethod が空(false) : "決済方法を選択してください。" を表示して return
    showStatus("決済方法を選択してください。");

    // TODO: 現金だけ残高チェック
    // selectedMethod が cash かつ money < getTotal()
    // : "残高不足です。チャージしてください。" を表示して return
    showStatus("残高不足です。チャージしてください。");

    // レンダリング（確認画面の内容を作る）
    renderSummary();
    // ステップを 4 に進める
    showStep(4);
    // 確認メッセージを表示
    showStatus("内容をご確認ください。");
}

// 確認画面の内容を作る
function renderSummary() {
    document.getElementById("sumItem").textContent = yen(ITEM_AMOUNT);
    document.getElementById("sumBag").textContent = useBag ? yen(BAG_PRICE) : "なし";
    document.getElementById("sumPoint").textContent = hasPointCard ? "あり" : "なし";
    document.getElementById("sumMethod").textContent = METHOD_LABEL[selectedMethod];
    document.getElementById("sumTotal").textContent = yen(getTotal());
}

// ===========================
// 4. 決済（決済端末の仮想ボタン）
// ===========================
function handlePayment() {
    // 二重に押せないようにする
    payButton.disabled = true;

    showStatus("決済処理中です...");
    // TODO: ビープ音再生: if (isAudioPlay)
    // isAudioPlay=true の時: audioBeep.play()

    // 疑似処理待機: setTimeout() で 1.8 秒後に completePayment() を実行
    setTimeout(() => completePayment(), 1800);
}

function completePayment() {
    // TODO: 現金決済の場合、所持金から引く
    // 1. money -= getTotal()
    // 2. updateWallet() を実行

    // TODO: 決済完了ファンファーレ再生
    // isAudioPlay=true の時: audioFanfare.play()

    // TODO: ポイントカードを読み取っていれば、ポイントを付与
    // 1. hasPointCard が true の時
    //    point = Math.floor(getTotal() * POINT_RATE)
    //    resultDisplay.textContent = `${point} ポイント付与しました。`
    // 2. それ以外 の時
    //    resultDisplay.textContent = "ポイントカードは使用されませんでした。"

    // 決済完了メッセージ表示
    payButton.disabled = false;
    showStep(5);
    showStatus("決済が完了しました。");
}

// ===========================
// 5. 最初に戻る
// ===========================
function restart() {
    useBag = false;
    hasPointCard = false;
    selectedMethod = "";
    money = 0;
    // 所持金をリセット
    updateWallet();
    // 決済方法をリセット
    cashArea.classList.add("hidden");
    qrArea.classList.add("hidden");
    // 合計金額を更新
    updateTotal();
    // ステップを 1 に戻す
    showStep(1);
    // 確認メッセージを表示
    let message = `レジ袋は1枚 ${yen(BAG_PRICE)} です。`;
    showStatus(message);
}

// ===========================
// 初期表示
// ===========================
restart();
