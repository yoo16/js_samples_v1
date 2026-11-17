// id="age-select" の selectタグ取得​
const ageSelect = document.getElementById('age-select');
// デフォルト年齢​
const defaultAge = 30;
const minAge = 0;
const maxAge = 100;

// TODO: 年齢プルダウン作成
// for文 で addOptionTag() を繰り返し : minAge から maxAge まで
// 1. for構文の作成: for と入力して For Loop を選択
// 2. 初期値: index = minAge
// 3. 条件: index <= maxAge
// 4. 更新: index++
// 5. 繰り返す処理: addOptionTag(index)


// デフォルト年齢を選択状態にする​
ageSelect.value = defaultAge;

/**
 * select に optionタグを生成
 */
function addOptionTag(age) {
    // optionタグ生成​
    const option = document.createElement('option');
    // index を value に設定
    option.value = age;
    // index + " 歳" を表示
    option.innerHTML = age + ' 歳';
    // selectタグに optionタグを追加​
    ageSelect.appendChild(option);
}

// 入力欄とボタンの要素取得
const interestRateInput = document.getElementById('saving-interest-rate');
const annualDepositInput = document.getElementById('annual-deposit');
const savingTargetInput = document.getElementById('saving-target');
const calculateButton = document.getElementById('calculate-button');
const yearOutput = document.getElementById('year');
const monthOutput = document.getElementById('month');
const interestOutput = document.getElementById('interest');
const savingOutput = document.getElementById('saving');

/**
 * 積立預金計算 
 */
function calculateSaving() {
    // 月の積立額
    const annualDeposit = parseFloat(annualDepositInput.value);
    // 年利（％ → 小数）
    const interestRate = parseFloat(interestRateInput.value) / 100;
    // 目標金額
    const savingTarget = parseFloat(savingTargetInput.value);

    // 入力チェック
    if (
        isNaN(annualDeposit) || isNaN(interestRate) || isNaN(savingTarget) ||
        annualDeposit <= 0 || interestRate <= 0 || savingTarget <= 0
    ) {
        alert('すべての入力欄に正の数値を入力してください。');
        return;
    }

    let month = 0;
    let currentSaving = 0;
    let totalInterest = 0;  // ←累計利息を追加

    // TODO: 複利＋積立で目標まで計算
    // while 文で、currentSaving が savingTarget より小さい間、繰り返す
    // 1. 今月の利息 interestEarned = currentSaving * (interestRate / 12)
    // 2. 累計利息 totalInterest に、今月の利息を足す
    // 3. 貯金額 currentSaving に、利息と積立額(annualDeposit)を足す
    // 4. 月 month を 1 増やす

    // 年数へ変換
    const years = Math.floor(month / 12);

    // 年数表示
    yearOutput.innerHTML = years;
    monthOutput.innerHTML = month % 12;
    // 預金額
    savingOutput.innerHTML = Math.floor(currentSaving).toLocaleString();
    // 累計利息
    interestOutput.innerHTML = Math.floor(totalInterest).toLocaleString(); 
}
