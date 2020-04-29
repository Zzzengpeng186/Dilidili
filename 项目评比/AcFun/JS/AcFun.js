var input = document.querySelector('.head-input-input');
var resou = document.querySelector('.resou')
var flag = 0;
input.onclick = function () {
    if (flag == 0) {
        resou.style.display = 'block'
        flag = 1;
    } else {
        resou.style.display = 'none'
        flag = 0;
    }
}
// 固定
// let tab = document.querySelector('.tab1');
// let tab1Top = tab.offsetTop;
// window.onscroll = function () {
//     let pageScroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
//     if (pageScroll >= tab1Top) {
//         tab.style.position = 'fixed';
//         tab.style.top = 0;
//     } else {
//         tab.style.position = "static";
//     }
// }
// 选栏
var tab1 = document.querySelector('.tab1');
var tab1lis = tab1.querySelectorAll('li');
var tab1items = document.querySelectorAll('.tab1-item')
for (var i = 0; i < tab1lis.length; i++) {
    tab1lis[i].setAttribute('index', i)
    tab1lis[i].onmouseover = function () {
        for (var i = 0; i < tab1lis.length; i++) {
            tab1lis[i].className = ''
        }
        this.className = 'tab1-current'
        // 对应的搜索框
        var index = this.getAttribute('index')
        // console.log(index);
        for (var i = 0; i < tab1items.length; i++) {
            tab1items[i].style.display = 'none'
        }
        tab1items[index].style.display = 'block'
    }
}

var main = document.querySelector('.body-center-box2-right-main');
var mainlis = main.querySelectorAll('li');
var items = document.querySelectorAll('.item')
for (var i = 0; i < mainlis.length; i++) {
    mainlis[i].setAttribute('index', i)
    mainlis[i].onmouseover = function () {
        // 对应的搜索框
        var index = this.getAttribute('index')
        // console.log(index);
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none'
        }
        items[index].style.display = 'block'
    }
}