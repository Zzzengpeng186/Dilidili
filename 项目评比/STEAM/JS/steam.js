var navone = document.querySelector('.navone');
var navlis = navone.querySelectorAll('li');
var items = document.querySelectorAll('.navitem')
for (var i = 0; i < navlis.length; i++) {
    navlis[i].setAttribute('index', i)
    // 对应的搜索框
    navlis[i].onmouseover = function () {
        let index = this.getAttribute('index')
        for (var j = 0; j < items.length; j++) {
            items[j].style.display = 'none'
        }
        items[index].style.display = 'block'
    }

}
// 翻译框
var dlyyright = document.querySelector('.dlyy-right');
var fanyi = document.querySelector('.fanyi');
var flag = 0;
dlyyright.onclick = function () {
    if (flag == 0) {
        fanyi.style.display = 'block'
        flag = 1;
    } else {
        fanyi.style.display = 'none'
        flag = 0;
    }

}

