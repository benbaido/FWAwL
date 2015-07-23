/* for mobile */

$(document).ready(function() {
    //change the panels on tab click
    $tab_avatar = $('#tab_avatar');
    $tab_options = $('#tab_options');
    $tab_myrack = $('#tab_myrack');
    $tab_mypicks = $('#tab_mypicks');
    
    $avatar_container = $('#avatar_container');
    $options_container = $('#options_box');
    $myrack_container = $('#myRack_box');
    $mypicks_container = $('#myPicks_box');
    
    $tab_avatar.click(function() {
        if(!$options_container.hasClass('no_display')) {
            $options_container.addClass('no_display');
        }
        
        if(!$myrack_container.hasClass('no_display')) {
            $myrack_container.addClass('no_display');
        }
        
        if(!$mypicks_container.hasClass('no_display')) {
            $mypicks_container.addClass('no_display');
        }
        
        if($avatar_container.hasClass('no_display')) {
            $avatar_container.removeClass('no_display');
        }
        
        $('body').css('background-color', 'blue');
        
    }); //end tab avatar click
    
    $tab_options.click(function() {
        if(!$myrack_container.hasClass('no_display')) {
            $myrack_container.addClass('no_display');
        }
        
        if(!$mypicks_container.hasClass('no_display')) {
            $mypicks_container.addClass('no_display');
        }
        
        if(!$avatar_container.hasClass('no_display')) {
            $avatar_container.addClass('no_display');
        }
        
        if($options_container.hasClass('no_display')) {
            $options_container.removeClass('no_display');
        }
        
        $('body').css('background-color', 'red');
        
    }); //end tab options click
    
    $tab_myrack.click(function() {
        if(!$mypicks_container.hasClass('no_display')) {
            $mypicks_container.addClass('no_display');
        }
        
        if(!$avatar_container.hasClass('no_display')) {
            $avatar_container.addClass('no_display');
        }
        
        if(!$options_container.hasClass('no_display')) {
            $options_container.addClass('no_display');
        }
        
        if($myrack_container.hasClass('no_display')) {
            $myrack_container.removeClass('no_display');
        }
        
        $('body').css('background-color', 'gold');
    }); //end tab myracks click
    
    $tab_mypicks.click(function() {
        if(!$avatar_container.hasClass('no_display')) {
            $avatar_container.addClass('no_display');
        }
        
        if(!$options_container.hasClass('no_display')) {
            $options_container.addClass('no_display');
        }
        
        if(!$myrack_container.hasClass('no_display')) {
            $myrack_container.addClass('no_display');
        }
        
        if($mypicks_container.hasClass('no_display')) {
            $mypicks_container.removeClass('no_display');
        }
        
        $('body').css('background-color', 'green');
    }); //end tab mypicks click
});