const imgUrl = 'https://raw.githubusercontent.com/haisheng-lin/js-animation/master/chapter1-1/rabbit-big.png';
const ele = $('demo-img');
let loaded = false;

const scrollHandler = function () {
  if (isElementInView(ele) && !loaded) {
    ele.src = imgUrl;
    loaded = true;
  }
};

ele.onload = function () {
  console.log('image loaded');
};

window.addEventListener('scroll', scrollHandler);

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

function $ (id) {
  return document.querySelector('#' + id);
}