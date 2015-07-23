/* mobile page for the homepage */

$(document).ready(function() {
    
    $main_container = $('#main_container');
    $landing_container = $('#landing_container');
    $dressup_container = $('#dressup_container');
    $catalog_container = $('#catalog_container');
    $culture_container = $('#culture_container');
    
    $expnded_divs = $('.expand_out');
    $landing_expanded = $('#landing_expanded');
    $dressup_expanded = $('#dressup_expanded');
    $catalog_expanded = $('#catalog_expanded');
    $culture_expanded = $('#culture_expanded');
    
    $expanded_element = $landing_expanded;
    
    $window_width = window.innerWidth.toString() + "px";
    console.log("window_width: " + $window_width);
    //$window_width = '300px';
    
    /*
    var element = document.getElementById('landing_expanded');
    var style = window.getComputedStyle(element, null);
    $window_width = style.getPropertyValue('right');
    console.log("Expanded right: " + $window_width);
    $window_width = $window_width.substring(1);
    console.log("Expanded right (substring 1): " + $window_width);
    */
    
    //$expand_div_width = '300px';
    $expand_div_width = $window_width;
    
    console.log('innerWidth: '+window.innerWidth + ' outerWidth: '+window.outerWidth);
    
    
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
    
    //expand landing
    $landing_expanded.css('right', '0px');
    $landing_expanded.addClass('expanded_content')
    
    /*
    $landing_container.click(function(){
        
        //$dressup_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $landing_expanded.css('right', '0px');
        console.log("landing expanded!");
        
    });
    
    $dressup_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $dressup_expanded.css('right', '0px');
        
        console.log("dress up expanded!");
    });
    
    $catalog_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$dressup_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '0px');
        
        console.log("catalog expanded!");
    });
    
    $culture_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$dressup_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $culture_expanded.css('right', '0px');
        
        console.log("culture expanded!");
    });
    */
    
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
    
    $(window).resize(function(){
        $window_width = window.innerWidth.toString() + "px";
        console.log("window_width: " + $window_width);
        $expnded_divs.css('width', $window_width);
        $expnded_divs.css('right', '-'+$window_width);
        $expanded_element.css('right', '0px');
    });
    
}); //end document.ready




$(document).on('click', '.panel', function(){
    
    //for debugging
    var landing_element = document.getElementById('landing_expanded');
    var dressup_element = document.getElementById('dressup_expanded');
    var catalog_element = document.getElementById('catalog_expanded');
    var culture_element = document.getElementById('culture_expanded');
    
    var landing_style = window.getComputedStyle(landing_element, null);
    var dressup_style = window.getComputedStyle(dressup_element, null);
    var catalog_style = window.getComputedStyle(catalog_element, null);
    var culture_style = window.getComputedStyle(culture_element, null);
    
    var landing_right = landing_style.getPropertyValue('right');
    var dressup_right = dressup_style.getPropertyValue('right');
    var catalog_right = catalog_style.getPropertyValue('right');
    var culture_right = culture_style.getPropertyValue('right');
    
    var landing_width = landing_style.getPropertyValue('width');
    var dressup_width = dressup_style.getPropertyValue('width');
    var catalog_width = catalog_style.getPropertyValue('width');
    var culture_width = culture_style.getPropertyValue('width');
    
    //var element = document.getElementById('landing_expanded');
    //var style = window.getComputedStyle(element, null);
    //$window_width = landing_style.getPropertyValue('right');
    //console.log("Expanded right: " + $window_width);
    //$window_width = $window_width.substring(1);
    //console.log("Expanded right (substring 1): " + $window_width);
    
    $window_width = window.innerWidth.toString() + "px";
    console.log("window_width: " + $window_width);
    
    //$expand_div_width = '300px';
    $expand_div_width = $window_width;
    
    console.log('innerWidth: '+window.innerWidth + ' outerWidth: '+window.outerWidth);
    
    //console.log("Landing right: " + landing_right);
    //console.log("Landing width: " + landing_width);
    //console.log("dressup right: " + dressup_right);
    //console.log("dressup width: " + dressup_width);
    //console.log("catalog right: " + catalog_right);
    //console.log("catalog width: " + catalog_width);
    //console.log("culture right: " + culture_right);
    //console.log("culture width: " + culture_width);
    
    //$expnded_divs.css('width', $window_width);
    
    //$landing_expanded.css('right', '-'+$window_width);
    //$dressup_expanded.css('right', '-'+$window_width);
    //$catalog_expanded.css('right', '-'+$window_width);
    //$culture_expanded.css('right', '-'+$window_width);
    
    
    //$expnded_divs.css('right', '-'+$window_width);
    
    
    $landing_container.click(function(){
        
        //$dressup_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $landing_expanded.css('right', '0px');
        
        if(!$landing_expanded.hasClass('expanded_content')){
            $landing_expanded.addClass('expanded_content')
        }
        if($dressup_expanded.hasClass('expanded_content')){
            $dressup_expanded.removeClass('expanded_content')
        }
        if($catalog_expanded.hasClass('expanded_content')){
            $catalog_expanded.removeClass('expanded_content')
        }
        if($culture_expanded.hasClass('expanded_content')){
            $culture_expanded.removeClass('expanded_content')
            $expanded_element = $landing_expanded;
        }
        
        console.log("landing expanded!");
        console.log("Landing right: " + landing_right);
        console.log("Landing width: " + landing_width);
        
    });
    
    $dressup_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $dressup_expanded.css('right', '0px');
        
        if($landing_expanded.hasClass('expanded_content')){
            $landing_expanded.removeClass('expanded_content')
        }
        if(!$dressup_expanded.hasClass('expanded_content')){
            $dressup_expanded.addClass('expanded_content')
            $expanded_element = $dressup_expanded;
        }
        if($catalog_expanded.hasClass('expanded_content')){
            $catalog_expanded.removeClass('expanded_content')
        }
        if($culture_expanded.hasClass('expanded_content')){
            $culture_expanded.removeClass('expanded_content')
        }
        
        console.log("dress up expanded!");
        console.log("dressup right: " + dressup_right);
        console.log("dressup width: " + dressup_width);
        
    });
    
    $catalog_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$dressup_expanded.css('right', '-'+$window_width);
        //$culture_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $catalog_expanded.css('right', '0px');
        
        if($landing_expanded.hasClass('expanded_content')){
            $landing_expanded.removeClass('expanded_content')
        }
        if($dressup_expanded.hasClass('expanded_content')){
            $dressup_expanded.removeClass('expanded_content')
        }
        if(!$catalog_expanded.hasClass('expanded_content')){
            $catalog_expanded.addClass('expanded_content')
            $expanded_element = $catalog_expanded;
        }
        if($culture_expanded.hasClass('expanded_content')){
            $culture_expanded.removeClass('expanded_content')
        }
        
        console.log("catalog expanded!");
        console.log("catalog right: " + catalog_right);
        console.log("catalog width: " + catalog_width);
    });
    
    $culture_container.click(function(){
        
        //$landing_expanded.css('right', '-'+$window_width);
        //$dressup_expanded.css('right', '-'+$window_width);
        //$catalog_expanded.css('right', '-'+$window_width);
        
        $expnded_divs.css('right', '-'+$window_width);
        $culture_expanded.css('right', '0px');
        
        if($landing_expanded.hasClass('expanded_content')){
            $landing_expanded.removeClass('expanded_content')
        }
        if($dressup_expanded.hasClass('expanded_content')){
            $dressup_expanded.removeClass('expanded_content')
        }
        if($catalog_expanded.hasClass('expanded_content')){
            $catalog_expanded.removeClass('expanded_content')
        }
        if(!$culture_expanded.hasClass('expanded_content')){
            $culture_expanded.addClass('expanded_content')
            $expanded_element = $culture_expanded;
        }
        
        console.log("culture expanded!");
        console.log("culture right: " + culture_right);
        console.log("culture width: " + culture_width);
    });
    
});