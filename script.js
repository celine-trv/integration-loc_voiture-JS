$(document).ready(function(){ 

    // MENU BURGER
    $(".burger").on("click", function() {
        $("header nav").fadeToggle(300)
    });



    // HEADER CAROUSEL
    function bgHeader() {

        // select all img of carousel
        var bg_img = $("#header_background").find("img");

        // get data-img html value
        var visible_img = $("#header_background").attr("data-img");
            visible_img = parseInt(visible_img);

        // as long as there are images next to the current, displaying the next
        if(visible_img < bg_img.length) {
            $("#header_img" + visible_img).animate({"opacity" : 0}, 500);
            $("#header_img" + (visible_img + 1)).animate({"opacity" : 1}, 500);
            $("#header_background").attr("data-img", visible_img + 1);
        }
        // else back to the 1st
        else {
            $("#header_img" + visible_img).animate({"opacity" : 0}, 500);
            $("#header_img1").animate({"opacity" : 1}, 500);
            $("#header_background").attr("data-img", "1");
        }
    };
    setInterval(bgHeader, 10000);



    // CARS CAROUSELS
    // arrow_right  ->
    $(".arrow_right").each(function() {
        // select all img of carousel attached to the arrow
        var car_img = $(this).siblings(".car_img").find("img");

        $(this).on("click", function() {
            // get data-img html value
            var visible_img = $(this).siblings(".car_img").attr("data-img");
                visible_img = parseInt(visible_img);
            
            // as long as there are images next to the current, displaying the next
            if(visible_img < car_img.length) {
                $(this).siblings(".car_img").find(".img" + visible_img).css("opacity", 0);
                $(this).siblings(".car_img").find(".img" + (visible_img + 1)).css("opacity", 1);
                $(this).siblings(".car_img").attr("data-img", visible_img + 1);
            }
        });
    });


    // arrow_left   <-
    $(".arrow_left").each(function() {
        // select all img of carousel attached to the arrow
        var car_img = $(this).siblings(".car_img").find("img");

        $(this).on("click", function() {
            // get data-img html value
            var visible_img = $(this).siblings(".car_img").attr("data-img");
                visible_img = parseInt(visible_img);
            
            // as long as there are images previous to the current, displaying the previous
            if(visible_img > 1 && visible_img <= car_img.length) {
                $(this).siblings(".car_img").find(".img" + visible_img).css("opacity", 0);
                $(this).siblings(".car_img").find(".img" + (visible_img - 1)).css("opacity", 1);
                $(this).siblings(".car_img").attr("data-img", visible_img - 1);
            }
        });
    });



    // SCROLL LOAD
    $(window).on("scroll", function() {
        if($(window).scrollTop() >= $(document).height() - $(window).height() - 80) {
            $(".scroll_load").fadeIn(1500);
            $(".scroll_load").css("display", "flex");
        }
    });
});  
