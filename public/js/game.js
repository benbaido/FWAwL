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
    
    //avatar
    $avatar_content = $('#avatar_content');
    
    //body types
    $body_size_box = $('#body_sizes_box');
    $body_type_female_straight_box = $('#size_female_straight');
    $body_type_female_pear_box = $('#size_female_pear');
    $body_type_female_spoon_box = $('#size_female_spoon');
    $body_type_female_hourglass_box = $('#size_female_hourglass');
    $body_type_female_triangle_box = $('#size_female_triangle');
    $body_type_female_oval_box = $('#size_female_oval');
    $body_type_female_daimond_box = $('#size_female_daimond');
    $body_type_male_straight_box = $('#size_male_straight');
    $body_type_male_oval_box = $('#size_male_oval');
    
    //skin tones
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
    
    
    //order page
    $checkitoutbtn = $('#checkoutnow_btn');
    $order_items_box = $('#order_items_box');
    //item list for the order page
    $itemlist = '';
    
    
    //var hidenumber = '500px';
    
    /*
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
    
    */
    
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
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone01_FAE7D0 copy 2.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone01_FAE7D0.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone01_FAE7D0.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone01_FAE7D0.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_2_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone2.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone02_FFCC99.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone02_FFCC99.png ") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone02_FFCC99.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone02_FFCC99.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_3_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone3.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone03_FEB186.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone03_FEB186.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone03_FEB186.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone03_FEB186.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_4_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone4.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone04_B98865.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone04_B9886B.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone04_B98865.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone04_B98865.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_5_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone5.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone05_aa724B.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone05_aa724B.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone05_aa724B.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone05_aa724B.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });
    
    $skin_tone_6_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone6.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone06_C18e74.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone06_C18e74.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone06_C18e74.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone06_C18e74.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_7_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone7.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone07_1935D37.png") no-repeat');
        } */
        
       if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone07_935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamondskintone07_935D37.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone07_1935D37.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone07_935D37.png") no-repeat');
            }
            
        }   //end is male avatar 
        
    });     //end tone
    
    $skin_tone_8_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone8.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone08_7B4B2A.png") no-repeat');
        } */
        
        if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone08_7B4B2A.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone08_7B4B2A.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone08_7B4B2A.png") no-repeat');
            }
            
        }   //end is male avatar
        
    });     //end tone
    
    $skin_tone_9_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone9.png") no-repeat');
        }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone09_573719.png") no-repeat');
        } */
        
      if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone09_573719.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone09_573719.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone09_573719.png") no-repeat');
            }
            
        }   //end is male avatar  
        
    });     //end tone
    
    $skin_tone_10_btn.click(function(){
        /*
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone10.png") no-repeat');
            }
        else if($avatar_content.hasClass('is_male_avatar')) {
            $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone10_483728.png") no-repeat');
        } */
        
      if($avatar_content.hasClass('is_female_avatar')){
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_pear_body')){
                //pear body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_spoon_body')){
                //spoon body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_hourglass_body')){
                //hourglass body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_triangle_body')){
                //triangle body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_daimond_body')){
                //daimond body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone10_483728.png") no-repeat');
            }
            
        }      //end is female avatar
        else if($avatar_content.hasClass('is_male_avatar')) {
            if($avatar_content.hasClass('is_straight_body')){
                //straight body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone10_483728.png") no-repeat');
            }
            else if($avatar_content.hasClass('is_oval_body')){
                //oval body
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone10_483728.png") no-repeat');
            }
            
        }   //end is male avatar  
        
    });     //end tone
    
    $body_size_box.find('.size_icon_male').each(function(){
        $(this).hide();
    });
    $options_container.find('.clothes_male').each(function(){
        $(this).hide();
    });
    
    //other setting buttons
    $setting_male_btn.click(function(){
        if($avatar_content.hasClass('is_female_avatar')){
            $avatar_content.removeClass('is_female_avatar');
            
        }
        if(!$avatar_content.hasClass('is_male_avatar')){
            $avatar_content.addClass('is_male_avatar');
        }
        
        $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/dressup_d-body_type_01_male_straight_skintone09_573719.png") no-repeat');
        
        $body_size_box.find('.size_icon_male').each(function(){
            $(this).show();
        });
        $body_size_box.find('.size_icon_female').each(function(){
            $(this).hide();
        });
        $options_container.find('.clothes_female').each(function(){
            $(this).hide();
        });
        $options_container.find('.clothes_male').each(function(){
            $(this).show();
        });
        //hide all the divs in the avatar content with the female tag
        
    });
    
    $setting_female_btn.click(function(){
        if($avatar_content.hasClass('is_male_avatar')){
            $avatar_content.removeClass('is_male_avatar');
        }
        if(!$avatar_content.hasClass('is_female_avatar')){
            $avatar_content.addClass('is_female_avatar');
            
            //hide all the divs in the avatar content with the male tag
        }
        
        $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/d_body_type_placeholder_260_tone9.png") no-repeat');
        
        $body_size_box.find('.size_icon_female').each(function(){
            $(this).show();
        });
        $body_size_box.find('.size_icon_male').each(function(){
            $(this).hide();
        });
        
        $options_container.find('.clothes_female').each(function(){
            $(this).show();
        });
        $options_container.find('.clothes_male').each(function(){
            $(this).hide();
        });
        
    });
    
    $setting_reset_btn.click(function(){
        $('#avatar_content > .dug_clothes_box').hide();
        //$avatar_content.find('.size_icon').each(function(){
        //   $(this).show();
        //});
        //$('#avatar_content > #body_sizes_box').show();
    });
    
    $setting_png_btn.click(function(){
        
    });
    
    $setting_jpg_btn.click(function(){
        
    });
    
    $setting_save_btn.click(function(){
        
    });
    
    //body size icons
    //$avatar_content
    $(document).on('click', '#body_sizes_box', function(){
        
        $body_type_female_straight_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_straight_body')){
                    $avatar_content.addClass('is_straight_body');
                    $body_type_female_straight_box.hide();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/straight_301/dressup_d_body_type01_female_straight_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_pear_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_pear_body')){
                    $avatar_content.addClass('is_pear_body');
                    $body_type_female_pear_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/pear_301/dressup_d_body_type02_female_pear_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_spoon_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.addClass('is_spoon_body');
                    $body_type_female_spoon_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/spoon_301/dressup_d_body_type03_female_spoon_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_hourglass_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.addClass('is_hourglass_body');
                    $body_type_female_hourglass_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/hourglass_301/dressup_d_body_type04_female_hourglass_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_triangle_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.addClass('is_triangle_body');
                    $body_type_female_triangle_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/triangle_301/d_body_type05_female_triangle_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_oval_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_oval_body')){
                    $avatar_content.addClass('is_oval_body');
                    $body_type_female_oval_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                    $body_type_female_daimond_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/oval_301/d_body_type06_female_oval_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_female_daimond_box.click(function(){
            if($avatar_content.hasClass('is_female_avatar')) {
                if(!$avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.addClass('is_daimond_body');
                    $body_type_female_daimond_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_female_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                    $body_type_female_pear_box.show();
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                    $body_type_female_spoon_box.show();
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                    $body_type_female_hourglass_box.show();
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                    $body_type_female_triangle_box.show();
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_female_oval_box.show();
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/female/daimond_301/d_body_type07_female_diamond_skintone10_483728.png") no-repeat');
                
            }
        });
        
        $body_type_male_straight_box.click(function(){
            if($avatar_content.hasClass('is_male_avatar')) {
                if(!$avatar_content.hasClass('is_straight_body')){
                    $avatar_content.addClass('is_straight_body');
                    $body_type_male_straight_box.hide();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                }
                
                if($avatar_content.hasClass('is_oval_body')){
                    $avatar_content.removeClass('is_oval_body');
                    $body_type_male_oval_box.show();
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                }
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/straight_301/dressup_d_01_male_straight_skintone10_483728.png") no-repeat');
                
            }
        }); 
        
        $body_type_male_oval_box.click(function(){
            if($avatar_content.hasClass('is_male_avatar')) {
                if(!$avatar_content.hasClass('is_oval_body')){
                    $avatar_content.addClass('is_oval_body');
                    $body_type_male_oval_box.hide();
                }
                
                if($avatar_content.hasClass('is_straight_body')){
                    $avatar_content.removeClass('is_straight_body');
                    $body_type_male_straight_box.show();
                }
                
                if($avatar_content.hasClass('is_pear_body')){
                    $avatar_content.removeClass('is_pear_body');
                }
                
                if($avatar_content.hasClass('is_spoon_body')){
                    $avatar_content.removeClass('is_spoon_body');
                }
                
                if($avatar_content.hasClass('is_hourglass_body')){
                    $avatar_content.removeClass('is_hourglass_body');
                }
                
                if($avatar_content.hasClass('is_triangle_body')){
                    $avatar_content.removeClass('is_triangle_body');
                }
                
                if($avatar_content.hasClass('is_daimond_body')){
                    $avatar_content.removeClass('is_daimond_body');
                } 
                
                $avatar_content.css('background', 'url("http://198.199.102.40/partials/dressupgame/img/d_images/male/oval_301/dressup_d_03_male_oval_skintone10_483728.png") no-repeat');
                
            }
        });
        
        
    });
    
    //make clothes draggable
    $('.dug_clothes_box').draggable();
    
    //dressing the doll
    $options_container.on('click', '.selection_img', function(e){
        e.preventDefault();
        //console.log('this:' + $(this));
        
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
        } // non african stops here ---| african clothes starts ------>
        else if($(this).parent('#clothes_purpledress').length){
            $avatar_content.find('#clothes_full_test3').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_orangeress').length){
            $avatar_content.find('#clothes_full_test4').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_orangedress1').length){
            $avatar_content.find('#clothes_full_test5').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_bluedress').length){
            $avatar_content.find('#clothes_full_test6').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_angelinedress').length){
            $avatar_content.find('#clothes_full_test7').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_circleshirt').length){
            $avatar_content.find('#clothes_top_test4').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_orangeswirlshirt').length){
            $avatar_content.find('#clothes_top_test3').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_greentop').length){
            $avatar_content.find('#clothes_top_test5').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_croptop').length){
            $avatar_content.find('#clothes_top_test6').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_aztecskirt').length){
            $avatar_content.find('#clothes_bottom_test3').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_browngreyskirt').length){
            $avatar_content.find('#clothes_bottom_test4').toggle().toggleClass('clothes_puton');
        } //this is where angela's clothes come in --------------------------------------
        else if($(this).parent('#clothes_straight_tunic').length){
            $avatar_content.find('#clothes_top_male_oval_tunic14').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_oval_tunic').length){
            $avatar_content.find('#clothes_top_male_oval_tunic14').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_straight_dress').length){
            $avatar_content.find('#clothes_full_01_female_straight_dress').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#clothes_daimond_dress').length){
            $avatar_content.find('#clothes_full_10_female_daimond_dress').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#oval_leggings').length){
            $avatar_content.find('#clothes_leggings_oval_01').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#oval_leggings_pattern').length){
            $avatar_content.find('#clothes_leggings_oval_pattern').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#oval_leggings_pattern01').length){
            $avatar_content.find('#clothes_leggings_oval_pattern01').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#straight_leggings').length){
            $avatar_content.find('#clothes_leggings_straight_01').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#straight_leggings_pattern').length){
            $avatar_content.find('#clothes_leggings_straight_pattern').toggle().toggleClass('clothes_puton');
        }
        else if($(this).parent('#straight_leggings_pattern01').length){
            $avatar_content.find('#clothes_leggings_straight_pattern01').toggle().toggleClass('clothes_puton');
        }
        
    });
    
    //filtering search
    $options_container.on('change', 'select', function(){
        var selected_option = $('#options_nav_select option:selected').val();
        
        $options_container.find('.selection_box').each(function(){
            if($(this).hasClass('clothes_filter_out')) {
                $(this).show();
                $(this).removeClass('clothes_filter_out');
                //console.log('no more filters');
            }
        });
        
        if(selected_option === 'none') {
            console.log('nothing selected');
        }
        else if(selected_option === 'fulloutfit') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_type_full')) {
                    //$(this).hide();
                    $(this).addClass('clothes_filter_out');
                    //console.log('fulloutfit - I am not the cloth you are looking for');
                    //console.log($(this));
                }
            });
        }
        else if(selected_option === 'onepiece') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_type_onepiece')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'tops') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_type_top')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'bottoms') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_type_bottom')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_fabric_kente') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_fabric_kente')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_fabric_batik') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_fabric_batik')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_fabric_angelica') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_fabric_angelica')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_fabric_ankara') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_fabric_ankara')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_rainbow') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_rainbow')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_red') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_red')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_pink') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_pink')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_orange') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_orange')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_yellow') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_yellow')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_green') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_green')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_blue') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_blue')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_purple') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_purple')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_brown') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_brown')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_white') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_white')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_grey') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_grey')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        else if(selected_option === 'styles_color_black') {
            $options_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('clothes_color_black')) {
                    $(this).addClass('clothes_filter_out');
                }
            });
        }
        
        //filter out list
        $options_container.find('.selection_box').each(function(){
            if($(this).hasClass('clothes_filter_out')) {
                $(this).hide();
                //console.log($(this));
            }
        }); //end hide
        
    }); //end select_img filter
    
    //add things to the rack
    var max_clothes_on_rack = 5;
    var clothes_count = 0;
    
    $options_container.on('click', '.glyphicon', function(e){
        //console.log('this (outside): ' + $(this));
        
        e.preventDefault();
        
        if(clothes_count < max_clothes_on_rack) {
            clothes_count++;
            //console.log('clothes count: ' + clothes_count);
            
            var imglink = '';
            var title = '';
            //console.log('this (inside): ' + $(this));
            //console.log('this parent: ' + $(this).parent('.selection_box'));
            imglink = $(this).parents('.selection_box').find('.selection_img img').attr('src');
            title = $(this).siblings('.selection_title:first').val()//.attr('content');
            console.log('title: '+ title);
            //imglink = $(this).parent('.selection_box img').attr('src');
            
            /*
            if($(this).parents('#clothes_redcoat').length){
                imglink = '/public/partials/dressupgame/img/clothes/outfit/thumbnail/thmb_testdress1.png';
            }
            else if($(this).parents('#clothes_greydress').length){
                imglink = '/public/partials/dressupgame/img/clothes/outfit/thumbnail/thmb_testdress2.png';
            }
            else if($(this).parents('#clothes_unicornsweater').length){
                imglink = '/public/partials/dressupgame/img/clothes/tops/thumbnail/thmb_shirt1.png';
            }
            else if($(this).parents('#clothes_cosmosshirt').length){
                imglink = '/public/partials/dressupgame/img/clothes/tops/thumbnail/thmb_shirt2.png';
            }
            else if($(this).parents('#clothes_ruffleskirt').length){
                imglink = '/public/partials/dressupgame/img/clothes/bottoms/thumbnail/thmb_skirt1.png';
            }
            else if($(this).parents('#clothes_hippyskirt').length){
                imglink = '/public/partials/dressupgame/img/clothes/bottoms/thumbnail/thmb_skirt2.png';
            }
            */
            
            //console.log('imglink: ' + imglink);
            
            $('#myrack_content').append('<div class="selection_box hanger_box"><div class="selection_header hanger_header"><span>' + title + '</span><span class="glyphicon glyphicon-remove"></span></div><div class="selection_img hanger_img"><img src="' + imglink + '"/></div></div>');
        }
        else {
            alert("There are too many clothes on the rack!");
        }
        
    });
    
    $rack_container.on('click', '.glyphicon', function(e){
        e.preventDefault();
        $(this).parents('.hanger_box').remove();
        clothes_count--;
    }); //end hang on rack function
    
    $picks_container.on('change', 'select', function() {
        var selected_option = $('#mypicks_select_country option:selected').val();
        
        $picks_container.find('.selection_box').each(function(){
            if($(this).hasClass('results_filter_out')) {
                $(this).show();
                $(this).removeClass('results_filter_out');
                //console.log('no more filters');
            }
        });
        if(selected_option === 'none') {
            //console.log('nothing selected');
        }
        else if(selected_option === 'Ghana') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_ghana')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Nigeria') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_nigeria')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Ivory_Coast') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_ivory_coast')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Burkina_Faso') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_burkina_faso')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Togo') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_togo')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Benin') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_benin')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Liberia') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_liberia')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Sierra_Leone') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_sierra_leone')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Guinea') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_guinea')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Guinea_Bissau') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_guinea_bissau')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Senegal') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_senegal')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'The_Gambia') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_the_gambia')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Cape_Verde') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_cape_verde')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Mali') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_mali')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        else if(selected_option === 'Niger') {
            $picks_container.find('.selection_box').each(function(){
                if(!$(this).hasClass('from_niger')) {
                    $(this).addClass('results_filter_out');
                }
            });
        }
        
        //filter out list
        $picks_container.find('.selection_box').each(function(){
            if($(this).hasClass('results_filter_out')) {
                $(this).hide();
                //console.log($(this));
            }
        }); //end hide
        
    });
    
    //var picks_items_array = [];
    
    
    $picks_container.on('click', '.glyphicon', function(e){
        e.preventDefault();
        //var picks_itemlist = '';
        //var imgsrc = '';
        
        console.log("mypicks - got the click");
        console.log($(this));
        
        if($(this).hasClass('glyphicon-plus')) {
            $(this).removeClass('glyphicon-plus');
            $(this).addClass('glyphicon-minus');
            
            console.log("mypicks - added minus");
            
        }
        else if($(this).hasClass('glyphicon-minus')) {
            $(this).removeClass('glyphicon-minus');
            $(this).addClass('glyphicon-plus');
            
            console.log("mypicks - added plus");
        }
        
        /*
        $picks_container.find('.selection_box').each(function(){
            if($(this).hasClass('glyphicon-minus')) {
                imgsrc = $(this).find('.selection_img img').attr('src');
                picks_itemlist += '<div class="selection_box"><div class="selection_header"><span></span></div><div class="selection_img"><img src="'+ imgsrc +'" /></div></div>';
                console.log(imgsrc);
                
            }
            
            //add to item list
            console.log('pickslist: ' + picks_itemlist);
            itemlist += picks_itemlist;
            console.log('itemslist: ' + itemlist);
            
            
        }); //end hide */
        
    });     //end on glyphicon for picks container
    
    
}); //end document.ready



$(document).on('click', '.dressup_tab', function(){
    /*
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
    
    */
    
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
            
            //console.log('avatar left: ' + avatar_left);
            //console.log('avatar display: ' + avatar_display);
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
            
            //console.log('options left: ' + options_left);
            //console.log('options display: ' + options_display);
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
            
            //console.log('rack left: ' + rack_left);
            //console.log('rack display: ' + rack_display);
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
            
            //console.log('picks left: ' + picks_left);
            //console.log('picks display: ' + picks_display);
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


//not gonna work lmao I hate this
$(document).on('click', '#checkoutnow_btn', function(){
    
    var pick_items = '';
    var imgsrc = '';
    
    $picks_container.find('.selection_box').each(function(){
        if($('#mypicks_select_content > .selection_box > .glyphicon').hasClass('glyphicon-minus')) {
            imgsrc = $(this).find('.selection_img img').attr('src');
            pick_items += '<div class="selection_box"><div class="selection_header"><span></span></div><div class="selection_img"><img src="'+ imgsrc +'" /></div></div>';
            console.log('imgsrc: ' + imgsrc);
            
            console.log('pickslist: ' + pick_items);
            itemlist += pick_items;
            console.log('itemslist: ' + itemlist);
        }
    });
    
    $order_items_box.html(itemlist);
    
    
});