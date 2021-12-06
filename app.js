$(function(){

    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight(); // Чтобы узнать высоту блока с отступами
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function(){

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos,introH ){
        if(scrollPos > introH){
            header.addClass('fixed');
        } else{
            header.removeClass('fixed');
        }
    }

    $("[data-scroll]").on("click", function(event){

        event.preventDefault(); // отменяет стандартное поведение ссылки

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

    });



    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });



    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });


});

let button = document.querySelector('#button');
let number = 89644931253;

button.addEventListener('click', function(){
    button.innerText = number;
});




