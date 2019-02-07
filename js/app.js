
$(document).ready(function () {

    //pre-loader
    const $containerPreloader = $(".container-preloader");

    $(window).on('load',(function () {
        setTimeout(
            function(){
                $containerPreloader.fadeOut();
        }, 3000);
    }));

    //hamburger menu
    const $hamburgerWrapper = $(".hamburger-wrapper");
    const $navigation = $(".nav-list");

    $hamburgerWrapper.on("click", (function () {
        $hamburgerWrapper.toggleClass("active");
        $navigation.toggleClass("show-menu");
    }));

});