$(document).ready(function(){
    
    //navbtns
    $avatar_tab = $('#tab_avatar');
    $options_tab = $('#tab_options');
    $rack_tab = $('#tab_myrack');
    $picks_tab = $('#tab_mypicks');
    
    //containers
    $avatar_container = $('#left_contaienr');
    $right_container = $('#right_container');
    $options_container = $('#options_container');
    $rack_container = $('#myrack_container');
    $picks_container = $('#mypicks_container');
    $to_expanded = $('.content_to_expand');
    
    //clothes containers
    $clothes_top_conatiner = $('#clothes_top');
    $clothes_bottom_container = $('#clothes_bottom');
    $clothes_fulloutfit_container = $('#clothes_full');
    
    //settings buttons
    $setting_male_btn = $('#settings_male');
    $setting_female_btn = $('#settings_female');
    $setting_reset_btn = $('#settings_reset');
    $setting_png_btn = $('#settings_png');
    $setting_jpg_btn = $('#settings_jpg');
    $setting_save_btn = $('#settings_save');
    
    //skin tones
    $avatar_content = $('#avatar_content');
    
    $skin_tone_1_btn = $('#skin_tone_1');
    $skin_tone_2_btn = $('#skin_tone_2');
    $skin_tone_3_btn = $('#skin_tone_3');
    $skin_tone_4_btn = $('#skin_tone_4');
    $skin_tone_5_btn = $('#skin_tone_5');
    $skin_tone_6_btn = $('#skin_tone_6');
    $skin_tone_7_btn = $('#skin_tone_7');
    $skin_tone_8_btn = $('#skin_tone_8');
    $skin_tone_9_btn = $('#skin_tone_9');
    $skin_tone_10_btn = $('#skin_tone_10');
    
    
    var hidenumber = '500px';
    
    var avatar_element = document.getElementById('left_contaienr');
    var options_element = document.getElementById('options_container');
    var rack_element = document.getElementById('myrack_container');
    var picks_element = document.getElementById('mypicks_container');
    
    var avatar_style = window.getComputedStyle(avatar_element, null);
    var options_style = window.getComputedStyle(options_element, null);
    var rack_style = window.getComputedStyle(rack_element, null);
    var picks_style = window.getComputedStyle(picks_element, null);
    
    var avatar_left = avatar_style.getPropertyValue('left');
    var options_left = options_style.getPropertyValue('left');
    var rack_left = rack_style.getPropertyValue('left');
    var picks_left = picks_style.getPropertyValue('left');
    
    var avatar_display = avatar_style.getPropertyValue('display');
    var options_display = options_style.getPropertyValue('display');
    var rack_display = rack_style.getPropertyValue('display');
    var picks_display = picks_style.getPropertyValue('display');
    
    //var avatar_width = landing_style.getPropertyValue('width');
    //var options_width = dressup_style.getPropertyValue('width');
    //var rack_width = catalog_style.getPropertyValue('width');
    //var picks_width = culture_style.getPropertyValue('width');
    
    //$window_width = window.innerWidth.toString() + "px";
    
    $(window).resize(function(){
        //$window_width = window.innerWidth.toString() + "px";
        //console.log("window_width: " + $window_width);
        //$expnded_divs.css('width', $window_width);
        //$expnded_divs.css('right', '-'+$window_width);
        //$expanded_element.css('right', '0px');
        if(window.innerWidth < 768) {
            $to_expanded.css('display', 'none');
            $avatar_container.css('display', "block");
        }
        else{
            $to_expanded.css('display', 'none');
            $avatar_container.css('display', "block");
            $options_container.css('display', "block");
            $right_container.css('display', 'inline-block');
            $rack_container.css('display', "inline-block");
            $picks_container.css('display', "block");
        }
    });
    
    /*
    if(window.innerWidth < 768) {
        $avatar_tab.click(function(){
            $to_expanded.css('display', 'none');
            $avatar_container.css('display', "block");
            
            if(!$avatar_container.hasClass('is_expanded')){
                $avatar_container.addClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('avatar left: ' + avatar_left);
            console.log('avatar display: ' + avatar_display);
        });
        
        $options_tab.click(function(){
            $to_expanded.css('display', 'none');
            $right_container.css('display', 'block');
            $options_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if(!$options_container.hasClass('is_expanded')){
                $options_container.addClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('options left: ' + options_left);
            console.log('options display: ' + options_display);
        });
        
        $rack_tab.click(function(){
            $to_expanded.css('display', 'none');
            $right_container.css('display', 'block');
            $rack_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if(!$rack_container.hasClass('is_expanded')){
                $rack_container.addClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('rack left: ' + rack_left);
            console.log('rack display: ' + rack_display);
        });
        
        $picks_tab.click(function(){
            $to_expanded.css('display', 'none');
            $picks_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if(!$picks_container.hasClass('is_expanded')){
                $picks_container.addClass('is_expanded');
            }
            
            console.log('picks left: ' + picks_left);
            console.log('picks display: ' + picks_display);
        });
    }
    else{
        $to_expanded.css('display', 'none');
        $avatar_container.css('display', "block");
        $options_container.css('display', "block");
        $right_container.css('display', 'inline-block');
        $rack_container.css('display', "inline-block");
        $picks_container.css('display', "block");
        
    }
    */
    
    //change skin tones
    
    $skin_tone_1_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone1.png) no-repeat');
    });
    $skin_tone_2_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone2.png) no-repeat');
    });
    $skin_tone_3_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone3.png) no-repeat');
    });
    $skin_tone_4_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone4.png) no-repeat');
    });
    $skin_tone_5_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone5.png) no-repeat');
    });
    $skin_tone_6_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone6.png) no-repeat');
    });
    $skin_tone_7_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone7.png) no-repeat');
    });
    $skin_tone_8_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone8.png) no-repeat');
    });
    $skin_tone_9_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone9.png) no-repeat');
    });
    $skin_tone_10_btn.click(function(){
        $avatar_content.css('background', 'url(img/d_images/d_body_type_placeholder_260_tone10.png) no-repeat');
    });
    
    $setting_male_btn.click(function(){
        
    });
    
    $setting_female_btn.click(function(){
        
    });
    
    $setting_reset_btn.click(function(){
        $('#avatar_content > div').hide();
    });
    
    $setting_png_btn.click(function(){
        
    });
    
    $setting_jpg_btn.click(function(){
        
    });
    
    $setting_save_btn.click(function(){
        
    });
    
    $options_container.on('click', '.selection_img', function(e){
        e.preventDefault();
        if($(this).parent('#clothes_redcoat').length){
            console.log("redcoat clicked!");
            $avatar_content.find('#clothes_full_test1').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_greydress').length){
            console.log("greydress clicked!");
            $avatar_content.find('#clothes_full_test2').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_unicornsweater').length){
            console.log("unicornsweater clicked!");
            $avatar_content.find('#clothes_top_test1').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_cosmosshirt').length){
            console.log("cosmosshirt clicked!");
            $avatar_content.find('#clothes_top_test2').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_ruffleskirt').length){
            console.log("ruffleskirt clicked!");
            $avatar_content.find('#clothes_bottom_test1').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_hippyskirt').length){
            console.log("hippyskirt clicked!");
            $avatar_content.find('#clothes_bottom_test2').toggle().toggleClass('clothes_puton');
        }
    });
    
});

$(document).on('click', '.dressup_tab', function(){
    
    var avatar_element = document.getElementById('left_contaienr');
    var options_element = document.getElementById('options_container');
    var rack_element = document.getElementById('myrack_container');
    var picks_element = document.getElementById('mypicks_container');
    
    var avatar_style = window.getComputedStyle(avatar_element, null);
    var options_style = window.getComputedStyle(options_element, null);
    var rack_style = window.getComputedStyle(rack_element, null);
    var picks_style = window.getComputedStyle(picks_element, null);
    
    var avatar_left = avatar_style.getPropertyValue('left');
    var options_left = options_style.getPropertyValue('left');
    var rack_left = rack_style.getPropertyValue('left');
    var picks_left = picks_style.getPropertyValue('left');
    
    var avatar_display = avatar_style.getPropertyValue('display');
    var options_display = options_style.getPropertyValue('display');
    var rack_display = rack_style.getPropertyValue('display');
    var picks_display = picks_style.getPropertyValue('display');
    
    if(window.innerWidth < 768) {
        $avatar_tab.click(function(){
            $to_expanded.css('display', 'none');
            $avatar_container.css('display', "block");
            
            if(!$avatar_container.hasClass('is_expanded')){
                $avatar_container.addClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('avatar left: ' + avatar_left);
            console.log('avatar display: ' + avatar_display);
        });
        
        $options_tab.click(function(){
            $to_expanded.css('display', 'none');
            $right_container.css('display', 'block');
            $options_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if(!$options_container.hasClass('is_expanded')){
                $options_container.addClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('options left: ' + options_left);
            console.log('options display: ' + options_display);
        });
        
        $rack_tab.click(function(){
            $to_expanded.css('display', 'none');
            $right_container.css('display', 'block');
            $rack_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if(!$rack_container.hasClass('is_expanded')){
                $rack_container.addClass('is_expanded');
            }
            if($picks_container.hasClass('is_expanded')){
                $picks_container.removeClass('is_expanded');
            }
            
            console.log('rack left: ' + rack_left);
            console.log('rack display: ' + rack_display);
        });
        
        $picks_tab.click(function(){
            $to_expanded.css('display', 'none');
            $picks_container.css('display', "block");
            
            if($avatar_container.hasClass('is_expanded')){
                $avatar_container.removeClass('is_expanded');
            }
            if($options_container.hasClass('is_expanded')){
                $options_container.removeClass('is_expanded');
            }
            if($rack_container.hasClass('is_expanded')){
                $rack_container.removeClass('is_expanded');
            }
            if(!$picks_container.hasClass('is_expanded')){
                $picks_container.addClass('is_expanded');
            }
            
            console.log('picks left: ' + picks_left);
            console.log('picks display: ' + picks_display);
        });
    }
    else{
        $to_expanded.css('display', 'none');
        $avatar_container.css('display', "block");
        $options_container.css('display', "block");
        $right_container.css('display', 'inline-block');
        $rack_container.css('display', "inline-block");
        $picks_container.css('display', "block");
        
    }
});

//$(document).on('', '', function(){
    //if()
//});