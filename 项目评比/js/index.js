var topli = document.querySelector('.topli');
var toplis = topli.querySelectorAll('li');
var items = document.querySelectorAll('.item')
for (var i = 0; i < toplis.length; i++) {
    toplis[i].setAttribute('index', i)
    toplis[i].onclick = function () {
        for (var i = 0; i < toplis.length; i++) {
            toplis[i].className = ''
        }
        this.className = 'current'
        // 对应的搜索框
        var index = this.getAttribute('index')
        // console.log(index);
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none'
        }
        items[index].style.display = 'block'
    }
}
// 选栏
var gdtopli = document.querySelector('.topguding');
var gdtoplis = gdtopli.querySelectorAll('li');
var gditems = document.querySelectorAll('.gditem')
for (var i = 0; i < gdtoplis.length; i++) {
    gdtoplis[i].setAttribute('index', i)
    gdtoplis[i].onclick = function () {
        for (var i = 0; i < gdtoplis.length; i++) {
            gdtoplis[i].className = ''
        }
        this.className = 'gdcurrent'
        // 对应的搜索框
        var index = this.getAttribute('index')
        // console.log(index);
        for (var i = 0; i < gditems.length; i++) {
            gditems[i].style.display = 'none'
        }
        gditems[index].style.display = 'block'
    }
}
// 推荐
var leftnav = document.querySelector('.left-nav');
var leftnavlis = leftnav.querySelectorAll('li');
var navitems = document.querySelectorAll('.navitem')
for (var i = 0; i < leftnavlis.length; i++) {
    leftnavlis[i].setAttribute('index', i)
    leftnavlis[i].onmouseover = function () {
        for (var i = 0; i < leftnavlis.length; i++) {
            leftnavlis[i].className = ''
        }
        this.className = 'nav-current'
        var index = this.getAttribute('index')
        // 对应的身体
        for (var i = 0; i < navitems.length; i++) {
            navitems[i].style.display = 'none'
        }
        navitems[index].style.display = 'block'
    }
}