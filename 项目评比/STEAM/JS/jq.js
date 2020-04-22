// jq轮播图
let index = 0;
$('.arrow-right').on('click', function () {
    index++;
    if (index > $('.lunbobox1-left ul li').length - 1) {
        index = 0;
    }
    $('.lunbobox1-left ul li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox1-right ul li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox1-left ol li').stop().eq(index).addClass("current").siblings("li").removeClass("current")
})
$('.arrow-left').on('click', function () {
    index--;
    if (index < 0) {
        index = $('.lunbobox1-left ul li').length - 1;
    }
    $('.lunbobox1-left ul li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox1-right ul li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox1-left ol li').stop().eq(index).addClass("current").siblings("li").removeClass("current")
})
// 圆点切换
$('.lunbobox1-left ol li').on('click', function () {
    // console.log(this);
    index = $(this).attr("name");
    $('.lunbobox1-left ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $('.lunbobox1-right ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $(this).addClass("current").siblings("li").removeClass("current")
})
//第二个轮播图=====================================================================================
// jq轮播图
let index1 = 0;
$('.lunbobox2-arrow-right').on('click', function () {
    index1++;
    if (index1 > $('.lunbobox2 ul li').length - 1) {
        index1 = 0;
    }
    $('.lunbobox2 ul li').eq(index1).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox2 ol li').stop().eq(index1).addClass("current").siblings("li").removeClass("current")
})
$('.lunbobox2-arrow-left').on('click', function () {
    index1--;
    if (index1 < 0) {
        index1 = $('.lunbobox2 ul li').length - 1;
    }
    $('.lunbobox2 ul li').eq(index1).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox2 ol li').stop().eq(index1).addClass("current").siblings("li").removeClass("current")
})

// 圆点切换
$('.lunbobox2 ol li').on('click', function () {
    // console.log(this);
    index = $(this).attr("name");
    $('.lunbobox2 ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $(this).addClass("current").siblings("li").removeClass("current")
})

// 第三个轮播图 ================================================================================
let index2 = 0;
$('.lunbobox3-arrow-right').on('click', function () {
    index2++;
    if (index2 > $('.lunbobox3-left ul li').length - 1) {
        index2 = 0;
    }
    $('.lunbobox3-left ul li').eq(index2).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox3-right ul li').eq(index2).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox3 ol li').stop().eq(index2).addClass("current").siblings("li").removeClass("current")
})
$('.lunbobox3-arrow-left').on('click', function () {
    index2--;
    if (index2 < 0) {
        index2 = $('.lunbobox3-left ul li').length - 1;
    }
    $('.lunbobox3-left ul li').eq(index2).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox3-right  ul li').eq(index2).fadeIn(500).siblings('li').fadeOut(500)
    $('.lunbobox3 ol li').stop().eq(index2).addClass("current").siblings("li").removeClass("current")
})

// 圆点切换
$('.lunbobox3 ol li').on('click', function () {
    // console.log(this);
    index = $(this).attr("name");
    $('.lunbobox3-left ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $('.lunbobox3-right ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $(this).addClass("current").siblings("li").removeClass("current")
})
// 自动播放
setInterval(function () {
    $('.arrow-right').click();
}, 5000)

setInterval(function () {
    $('.lunbobox2-arrow-right').click();
}, 5000)
setInterval(function () {
    $('.lunbobox3-arrow-right').click();
}, 5000)

