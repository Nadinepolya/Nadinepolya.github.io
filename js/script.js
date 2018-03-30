$(document).ready(function(){
02
    $("#about").on("click","a", function (event) {
03
        //отменяем стандартную обработку нажатия по ссылке
04
        event.preventDefault();
05
 
06
        //забираем идентификатор бока с атрибута href
07
        var id  = $(this).attr('href'),
08
 
09
        //узнаем высоту от начала страницы до блока на который ссылается якорь
10
            top = $(id).offset().top;
11
         
12
        //анимируем переход на расстояние - top за 1500 мс
13
        $('body,html').animate({scrollTop: top-100}, 1500);
14
    });
15
});
