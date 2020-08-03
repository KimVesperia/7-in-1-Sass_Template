// jQuery

// MINIFY HERE: https://www.minifier.org/

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {

    // reload the page
    $(".js--reload").click(function () { 
        location.reload();
    });

    // sticky plugin waypoint
    // use direction to decide if user is scrolling up or down
    // back to top
    $(".main").waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // add class btt (back to top) with fade
            $(".js--wp-back").fadeIn("fast", function() {
                $(this).addClass("btt");
            });
        } else {
            // remove the class when back on top with fade
            $(".js--wp-back").fadeOut("slow", function() {
                $(this).removeClass("btt");
            });
        }
    }, {
        // delay
        offset: "3rem"
    });

    // the last section / before the footer
    $("section").last().waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // add class btt (back to top) with fade
            $(".btt").css("position", "absolute");
            $(".btt").css("bottom", "0");
            $(".btt").css("right", "5%");
        } else {
            // remove the class when back on top with fade
            $(".btt").css("position", "fixed");
            $(".btt").css("bottom", "5%");
            $(".btt").css("right", "5%");
        }
    }, {
        // delay
        offset: "100rem"
    });

    // smooth scroll navigations
    // scroll to header
    $(".js--scroll-to-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $("body").offset().top}, 1000);
    });

});
