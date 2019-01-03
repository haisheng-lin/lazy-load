const imgUrls = [
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-big.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-lose.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-win.png',
];
const imageDomCount = 12;

const scrollHandler = function () {
  for (let i = 0; i < imageDomCount; i++) {
    const $image = $('image' + (i + 1));
    if (isElementInView($image) && !$image.src) {
      $image.src = getRandomItem(imgUrls);
    }
  }
};

for (let i = 0; i < imageDomCount; i++) {
  const $image = $('image' + (i + 1));
  $image.onload = function () {
    console.log('image' + i + ' loaded');
  };
}

window.addEventListener('scroll', scrollHandler);
window.onload = function () {
  for (let i = 0; i < imageDomCount; i++) {
    const $image = $('image' + (i + 1));
    if (isElementInView($image) && !$image.src) { // 页面加载后也要判断
      $image.src = getRandomItem(imgUrls);
    }
  }
};

/**
 * 判断元素是否在 view 中
 *
 * @param  {Element} ele
 * @return {boolean}
 */
function isElementInView (ele) {
  const scroll = window.scrollY || window.pageYOffset; // 当前页面往下滚动了多少 px
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
   * ele.getBoundingClientRect().top 表示元素顶部相对于当前视口的高度差
   * 加上 scroll 就是指元素顶部离页面顶部的高度差
   */
  const boundsTop = ele.getBoundingClientRect().top + scroll;
  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };
  const bounds = {
    top: boundsTop, // 元素顶部离页面顶部的高度差
    buttom: boundsTop + ele.clientHeight, // 元素底部离页面顶部的高度差
  };
  return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || // 元素下半部在 viewport 中
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top); // 元素上半部在 viewport 中
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