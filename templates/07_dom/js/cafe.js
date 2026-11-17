// キャッチコピーの文字
let message = "日常に、純白の余白を。";
// 背景画像の配列
const images = [
    'images/cafe-1.avif',
    'images/cafe-2.avif',
    'images/cafe-3.avif',
];
// 画像の指定インデックス
let imageIndex = 0;
// アニメーションテキストのディレイ時間
const animationTextDelay = 200;
// 背景画像のフェードイン時間
const fadeInTime = 1000;
// 背景画像の切り替え時間
const backgroundSwitchTime = 5000;

// キャッチコピーのElement
const copyElement = document.getElementById('copy');
// 背景画像のElement
const backgroundImage = document.getElementById('background-image');

/**
 * animationText()
 * アニメーションテキスト
 */
function animationText(text) {
    // 現在、何文字目かのインデックス
    let index = 0;
    function displayNextChar() {
        // TODO: spanタグ作成 createElement()

        // TODO: spanに、text の index番目の文字を設定

        // TODO: class=fade-in を設定: classList.add()

        // TODO: copyElement に spanタグを追加: appendChild()


        // 文字インデックスを増やす
        index++;
        // TODO: 現在の文字インデックスが、文字数より小さければ、アニメーションテキスト継続
        // 1. 条件: index が text.length より小さい
        // 2. animationTextDelay ミリ秒後に displayNextChar() を実行: setTimeout()
        if (false) {
            // setTimeout(...)
        } else {
            // 初回背景画像表示
            switchBackground();
            // 背景画像スライドショー
            setInterval(switchBackground, backgroundSwitchTime);
        }
    }
    displayNextChar();
}

/**
 * switchBackground()
 * 背景画像のスライドショー
 */
function switchBackground() {
    // 背景画像のインデックス更新
    imageIndex = (imageIndex + 1) % images.length;

    // TODO: Imageオブジェクト作成 
    let image = document.createElement('img')

    // TODO: Imageオブジェクトに配列 images の画像パス設定: image.src

    // 画像がロードされたら実行
    image.onload = () => {
        // TODO: backgroundImage のフェードアウト: style.opacity

        // フェードインで画像表示
        setTimeout(() => {
            copyElement.classList.add("text-white");

            // TODO: backgroundImageの src 更新

            // TODO: backgroundImage のフェードイン: style.opacity
        }, fadeInTime);
    };
}

(function () {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // テキストアニメーションを開始
    animationText(message);
})()