var slide = $('.slide-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
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