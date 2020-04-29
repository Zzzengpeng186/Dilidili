$('.lunbo-center-left ol li').on('click', function () {
    // console.log(this);
    index = $(this).attr("name");
    $('.lunbo-center-left ul li').stop().eq(index).fadeIn(800).siblings('li').fadeOut(800)
    $(this).addClass("active").siblings("li").removeClass("active")
})
$(function () {
    var index = 0;
    setInterval(function () {
        index++
        if (index == 4) index = 0
        $('.banner li').eq(index).addClass('current').siblings('.current').removeClass('current')
        $('.banner2 li').eq(index).addClass('active').siblings('.active').removeClass('active')
    }, 3000)
})

// 返回顶部
$(document).scroll(function () {
    // 判断页面跑出浏览器顶部的高度 是否大于500
    if ($(document).scrollTop() >= 500) {
        $('.back-top').show(200);
    } else {
        $('.back-top').hide(200);
    }
})
// 2，点击a标签让他返回顶部
$('.back-top').click(function () {
    $(document).scrollTop(0);
})