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
            // add class btt__sticky (back to top) with fade
            $(".js--wp-back").fadeIn("fast", function() {
                $(this).addClass("btt__sticky");
                // reapply animation, because other wp
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
            });
        } else {
            // remove the class when back on top with fade
            $(".js--wp-back").fadeOut("slow", function() {
                $(this).removeClass("btt__sticky");
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
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
            // stop before footer
            $(".btt").insertBefore($(".footer"));
            // remove animation, because only needed at heading
            $(".btt__sticky").css("animation", "none");
            // stick on top of footer
            $(".btt__sticky").css("position", "absolute");
            $(".btt__sticky").css("bottom", "0");
            $(".btt__sticky").css("right", "5%");
        } else {
            // back to fixed when scrolled up
            $(".btt__sticky").css("position", "fixed");
            $(".btt__sticky").css("bottom", "5%");
            $(".btt__sticky").css("right", "5%");
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
