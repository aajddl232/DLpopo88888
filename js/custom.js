$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
        speed: 1000
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });



});