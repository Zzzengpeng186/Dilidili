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
// nav栏
var lunboboxnav = document.querySelector('.lunbobox-one-right-nav');
var navdivs = lunboboxnav.querySelectorAll('div');
var lunbonavitems = document.querySelectorAll('.lunbonav-item');
for (let i = 0; i < navdivs.length; i++) {
    navdivs[i].setAttribute('index', i)
    // 对应的搜索框
    navdivs[i].onmouseover = function () {
        let index = this.getAttribute('index')
        for (let j = 0; j < lunbonavitems.length; j++) {
            lunbonavitems[j].style.display = 'none'
        }
        lunbonavitems[index].style.display = 'block'
    }
}


// tab切换
var tabsearch = document.querySelector('.tab-search-head-center');
var tablis = tabsearch.querySelectorAll('li')
var tabitems = document.querySelectorAll('.tabitem');
for (let i = 0; i < tablis.length; i++) {
    tablis[i].setAttribute('index', i)
    tablis[i].onclick = function () {
        for (let i = 0; i < tablis.length; i++) {
            tablis[i].className = '';
        }
        this.className = 'tabcurrent'
        var index = this.getAttribute('index')
        // console.log(index);
        for (var i = 0; i < tabitems.length; i++) {
            tabitems[i].style.display = 'none'
        }
        tabitems[index].style.display = 'block'
    }
}
