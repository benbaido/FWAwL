/* mobile page for the homepage */

$(document).ready(function() {
    
    $main_container = $('#main_container');
    $landing_container = $('#landing_container');
    $dressup_container = $('#dressup_container');
    $catalog_container = $('#catalog_container');
    $culture_container = $('#culture_container');
    
    //$window_width = window.innerWidth.toString();
    $window_width = '500px';
    //$expand_div_width = '300px';
    $expand_div_width = $window_width;
    
    console.log('innerWidth: '+window.innerWidth + ' outerWidth: '+window.outerWidth);
    
    $expnded_divs = $('.expand_out');
    $landing_expanded = $('#landing_expanded');
    $dressup_expanded = $('#dressup_expanded');
    $catalog_expanded = $('#catalog_expanded');
    $culture_expanded = $('#culture_expanded');
    
    
    /*
    $landing_expanded.css('width', $window_width);
    $dressup_expanded.css('width', $window_width);
    $catalog_expanded.css('width', $window_width);
    $culture_expanded.css('width', $window_width);
    */
    
    $expnded_divs.css('width', $window_width);
    
    /*
    $landing_expanded.css('right', '-'+$window_width);
    $dressup_expanded.css('right', '-'+$window_width);
    $catalog_expanded.css('right', '-'+$window_width);
    $culture_expanded.css('right', '-'+$window_width);
    */
    
    $expnded_divs.css('right', '-'+$window_width);
    
    
    $landing_container.click(function(){
        /*
        $dressup_expanded.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '-'+$window_width);
        $culture_expanded.css('right', '-'+$window_width);
        */
        $expnded_divs.css('right', '-'+$window_width);
        $landing_expanded.css('right', '0px');
    });
    
    $dressup_container.click(function(){
        /*
        $landing_expanded.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '-'+$window_width);
        $culture_expanded.css('right', '-'+$window_width);
        */
        $expnded_divs.css('right', '-'+$window_width);
        $dressup_expanded.css('right', '0px');
    });
    
    $catalog_container.click(function(){
        /*
        $landing_expanded.css('right', '-'+$window_width);
        $dressup_expanded.css('right', '-'+$window_width);
        $culture_expanded.css('right', '-'+$window_width);
        */
        $expnded_divs.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '0px');
    });
    
    $culture_container.click(function(){
        /*
        $landing_expanded.css('right', '-'+$window_width);
        $dressup_expanded.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '-'+$window_width);
        */
        $expnded_divs.css('right', '-'+$window_width);
        $culture_expanded.css('right', '0px');
    });
    
    
    //TODO: fix this...
    //panels don't work.
    //red panel doesn't go to the 
    
    /*
    $landing_container.click(function() {
        if(!$dressup_expanded.hasClass('no_display')){
            $dressup_expanded.addClass('no_display');
            $dressup_container.css('width', '20px');
        }
        if(!$catalog_expanded.hasClass('no_display')){
            $catalog_expanded.addClass('no_display');
            $catalog_container.css('width', '20px');
        }
        if(!$culture_expanded.hasClass('no_display')){
            $culture_expanded.addClass('no_display');
            $culture_container.css('width', '20px');
        }
        if($landing_expanded.hasClass('no_display')){
            $landing_expanded.removeClass('no_display');
        }
        
        if($dressup_container.prop('left')) {
            $dressup_container.removeProp('left');
            //$dressup_container.removeAttr('style');
            $dressup_container.prop('right', '40px');
        }
        
        
        $catalog_container.css('right', '20px');
        $culture_container.css('right', '0px');
        
        $landing_container.css('right', '60px');
        
    });
    
    $dressup_container.click(function() {
        if(!$catalog_expanded.hasClass('no_display')){
            $catalog_expanded.addClass('no_display');
            $catalog_container.css('width', '20px');
        }
        if(!$culture_expanded.hasClass('no_display')){
            $culture_expanded.addClass('no_display');
            $culture_container.css('width', '20px');
        }
        if(!$landing_expanded.hasClass('no_display')){
            $landing_expanded.addClass('no_display');
            $landing_container.css('width', '20px');
        }
        if($dressup_expanded.hasClass('no_display')){
            $dressup_expanded.removeClass('no_display');
            $dressup_container.removeAttr('style');
            $dressup_container.css('left', '20px');
            $dressup_container.css('width', '95%');
        }
        
        if($landing_container.attr('right')) {
            $landing_container.removeAttr('right');
        }
        
        //$dressup_container.css('right', '40px');
        $catalog_container.css('right', '20px');
        $culture_container.css('right', '0px');
        
        
    });
    */
    
}); //end document.ready