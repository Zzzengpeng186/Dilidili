let index = 0;
$('.arrow-right').on('click', function () {
    index++;
    if (index > $('.lunbo-left ul').length - 1) {
        index = 0;
    }

    $('.lunbo-left ul').eq(index).fadeIn(500).siblings('ul').fadeOut(500)
})

$('.arrow-left').on('click', function () {
    index--;
    if (index < 0) {
        index = $('.lunbo-left ul').length - 1;
    }
    // 2.1.3 让图片进行切换
    $('.lunbo-left ul').eq(index).fadeIn(500).siblings('ul').fadeOut(500)
})
setInterval(function () {
    $('.arrow-right').click();
}, 4000)