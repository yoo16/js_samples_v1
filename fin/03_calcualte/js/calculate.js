// ブラウザのキャッシュ対策
// Win: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// 定数と変数
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var subTotalPrice = 0;
var totalPrice = 0;
var taxWithoutPrice = 0;
var tax = 0;
var isMember = true
var discount = 0;

// TODO: 個数 quantity を増減
quantity++;

// TODO: 小計金額計算: subTotalPrice
subTotalPrice = price * quantity;

// TODO: 三項演算子を使って割引額を設定: discount
discount = isMember ? subTotalPrice * 0.1 : 0;

// TODO: 合計金額 = 小計金額 - 割引: totalPrice
totalPrice = subTotalPrice - discount;

// TODO: 税抜き金額 = 合計金額 / (1 + 税率): taxWithoutPrice
taxWithoutPrice = totalPrice / (1 + TAX_RATE);

// TODO: 税抜き金額を四捨五入: toFixed()
taxWithoutPrice = Number(taxWithoutPrice.toFixed(0));

// TODO: 税額 = 合計金額 - 税抜き金額: tax
tax = totalPrice - taxWithoutPrice;

// オーダーコード
var tableNo = 3;
var orderNo = 20341;

// TODO: オーダーコード生成（数値連結）※ 注意)文字列連結ではない
var orderCode = tableNo * 100000 + orderNo;

// TODO: オーダーコード生成（テキスト連結） xx-xxxx 形式
orderCode = `${tableNo}-${orderNo}`;

// HTML表示
document.getElementById('item-name').textContent = itemName;
document.getElementById('price').textContent = `¥${price}`;
document.getElementById('quantity').textContent = quantity;
document.getElementById('discount').textContent = `¥${discount}`;
document.getElementById('sub-total-price').textContent = `¥${subTotalPrice}`;
document.getElementById('total-price').textContent = `¥${totalPrice}`;
document.getElementById('tax').textContent = `¥${tax}`;
document.getElementById('tax-without-price').textContent = `¥${taxWithoutPrice}`;
document.getElementById('order-code').textContent = orderCode;