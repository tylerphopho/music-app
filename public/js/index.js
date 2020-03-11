$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    });

    $(".modal").modal();

    pricePage = $("#pricing");
    bgImg = $("")
    pricePage.click(function(){
    
    })
});