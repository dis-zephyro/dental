$('.slide-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
});

$('.side-slider-body').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
});




$(".btn-popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});

$('.close-link').click(function(){
    $.fancybox.close();
});

$(".certification-item, .gallery a").fancybox({
    'padding' : 0
});

// menu --------

$(function Faq() {
// Указываем переменные
    var accordion_head = $('.faq-title'),
        accordion_body = $('.faq-section');

// Функция клика
    accordion_head.on('click', function() {
// Скрывает открытый раздел по повторному клику
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal');
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(function Quest() {
// Указываем переменные
    var accordion_head = $('.question'),
        accordion_body = $('.answer');

// Функция клика
    accordion_head.on('click', function() {
// Скрывает открытый раздел по повторному клику
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal');
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});


// Подключние Яндекс-Карты

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.8118,37.7830],
        zoom: 13,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ООО ДенталВей'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemark.png',
        // Размеры метки.
        iconImageSize: [120, 128],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-60, -100]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}


$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate-lib.css" />'); //подключение файла animation.css если не мобильник
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animation.css" />'); //подключение файла animation.css если не мобильник
    }


});