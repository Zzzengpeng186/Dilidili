// // jq轮播图
let index1 = 0;
$('.box2-body-arrow-right').on('click', function () {
    index1++;
    if (index1 > $('.Popular-left-box2-body ul').length - 1) {
        index1 = 0;
    }
    $('.Popular-left-box2-body ul ').eq(index1).fadeIn(500).siblings('ul').fadeOut(500)
})
$('.box2-body-arrow-left').on('click', function () {
    index1--;
    if (index1 < 0) {
        index1 = $('.Popular-left-box2-body ul').length - 1;
    }
    $('.Popular-left-box2-body ul').eq(index1).fadeIn(500).siblings('ul').fadeOut(500)
})
// alert(12)

