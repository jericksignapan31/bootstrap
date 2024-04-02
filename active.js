$(document).ready(function(){
    
    var path = window.location.pathname;
    
    $('.navbar-nav a').each(function(){
       
        if ($(this).attr('href') === path) {
            $(this).addClass('active');
        }
    });
});