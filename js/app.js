
$(document).ready(function () {

    //pre-loader

    $(window).on('load',(function () {
        setTimeout(
            function(){
            $(".container-preloader").fadeOut();
        }, 3000);
    }));

});