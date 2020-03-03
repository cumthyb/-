/**
 * 图片盒子完全露出才加载图片
 * 图片完全显示出来的条件
 * 一屏高度+浏览器卷去高度>=盒子底边框距离body(页面最顶端)的距离
 */


let imgBox = document.getElementById("imgBox")
_img = imgBox.querySelector('img');


function check() {

  // 一屏高度 document.documentElement.clientHeight
  // 卷去高度 document.documentElement.scrollTop
  // 盒子高度 imgBox.offsetHeight
  // 盒子顶部距页面顶端高度  imgBox.offsetTop
  var src = _img.getAttribute('src')
  if (!src) {
    if (imgBox.offsetHeight + imgBox.offsetTop <= document.documentElement.clientHeight + document.documentElement.scrollTop) {
      _img.setAttribute('src', _img.dataset.src)
      _img.onload = function () {
        _img.style.display = 'block'
      }
    }
  }

}

function check2() {
  var rect = imgBox.getBoundingClientRect()
  var rectTop = rect.top;
  var clientHeight = document.documentElement.clientHeight
  if (rectTop <= clientHeight) {
    _img.setAttribute('src', _img.dataset.src)
    _img.onload = function () {
      _img.style.display = 'block'
    }
  }
}

window.onscroll = check;