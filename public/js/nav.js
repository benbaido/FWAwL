$(document).ready(function(){
    $navbar = $('#inside_nav');
    
    
    $(window).resize(function(){
        if(window.innerWidth < 768) {
            if(!$navbar.hasClass('collapse')) {
                $navbar.addClass('collapse');
            }
        }
        else if(window.innerWidth >= 768) {
            if($navbar.hasClass('collapse')) {
                $navbar.removeClass('collapse');
            }
        }
    });
     
});