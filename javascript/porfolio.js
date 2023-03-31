$(document).ready(function () {

    $(window).on('load', (e) => {
        $(window).scrollTop(0);        
    })

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }

        if(this.scrollY > 2500){
            $('.contact_form_iframe').addClass('show');
        }
        else{
            $('.contact_form_iframe').removeClass('show');
        }
    });


    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // toggle menue/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.menu li a').click(function(){
        if(window.innerWidth <= 950)
        {
            $('.navbar .menu').removeClass('active');
            $('.menu-btn i').removeClass('active');
        }
    });+

    // owl carousel script
    $('.owl-carousel').owlCarousel({
        margin: 40,
        loop: true,
        autoPlayTimeout: 2000,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    });
});



// typing animation
var typed = new Typed(".typed",{
    strings: [
        "Engineer", 
        "Administrator",
        "Developer",
        "Designer",
        "Veteran",
        "Leader",
        "Architect",
        "Thinker",
        "Tinkerer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
