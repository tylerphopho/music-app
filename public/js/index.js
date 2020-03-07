$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150) {
            $(".nav").addClass("stick-nav");
        }
    });

    $(".modal").modal();
});