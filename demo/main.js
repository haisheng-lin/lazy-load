const lazyLoad = window['lazy-load'];
const imgUrls = [
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-big.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-lose.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-win.png',
];
const imageDomCount = 12;

function loadImage () {
  for (let i = 0; i < imageDomCount; i++) {
    const $image = $('image' + (i + 1));
    const randomImgUrl = getRandomItem(imgUrls);
    lazyLoad().lazyLoad($image, randomImgUrl);
    $image.onload = function () {
      console.log('image' + (i + 1) + ' loaded');
    }
  }
}

/**
 * 根据元素 id 获取对应的 dom
 *
 * @param {string} id
 */
function $ (id) {
  return document.querySelector('#' + id);
}

/**
 * 随机抽取数组的元素
 *
 * @param {Array} array
 */
function getRandomItem (array) {
  const length = array.length;
  const index = Math.floor(Math.random() * length);
  return array[index];
}

loadImage();