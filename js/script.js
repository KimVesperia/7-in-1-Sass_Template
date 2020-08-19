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

});
