$(document).ready(function () {
    navbarController();
});

var OFFSET = 0;
function navbarController() {
    var triggerPosition = $('.nav-trigger').position().top + OFFSET;
    console.log(triggerPosition)
    $(window).on("scroll", function () {
            var scrollPosition = scrollY || pageYOffset;
            if (scrollPosition > triggerPosition) {
                console.log("triggered!")

                $('nav').addClass('navbar-fixed-top');
                var navHeight = $(".nav-container").css('height');
                $('.nav-ghost').height(navHeight);
                $('.nav-ghost').show();
            } else {
                $('header').removeClass('navbar-fixed-top');
            }


        }
    )
    ;
}