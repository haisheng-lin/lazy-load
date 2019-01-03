const { isElementInView } = require('./util');

class LazyLaod {
  /**
   * 图片懒加载
   *
   * @param {HTMLImageElement} ele
   * @param {string} imgUrl
   */
  lazyLoad (ele, imgUrl) {
    const me = this;
    window.addEventListener('load', function () {
      if (me._shouldLoadImage(ele)) {
        ele.src = imgUrl;
      }
    });
    window.addEventListener('scroll', function () {
      if (me._shouldLoadImage(ele)) {
        ele.src = imgUrl;
      }
    });
  }
  /**
   * 判断是否需要加载图片
   *
   * @param  {HTMLImageElement} ele
   * @returns {boolean}
   */
  _shouldLoadImage (ele) {
    return isElementInView(ele) && !ele.src;
  }
}

function createLazyLoadInstance () {
  return new LazyLaod();
}

module.exports = createLazyLoadInstance;
