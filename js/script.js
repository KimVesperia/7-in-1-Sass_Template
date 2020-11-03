// jQuery

// MINIFY HERE: https://www.minifier.org/

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {

    // reload the page
    // remove # url
    $(".js--reload").click(function () { 
        if (window.location.href.indexOf('#') > -1, !window.location.href.indexOf('#') > -1) {
            window.location.href = window.location.pathname;
        }
    });
    
    // clone the title once
    $flag = true;
    if($flag) {  
        $name = document.title; 
        $flag=false;  
    }

    $(window).focus(function() {
        document.title = $name;
    });
    
    // change title after delay and when tab is not focused
    $(window).blur(function() {
        setTimeout(function() { document.title = "Come back soon!"; }, 15000);
    });

});
