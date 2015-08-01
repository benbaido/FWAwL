/*
 styles_color_rainbow
 styles_color_red
 styles_color_pink
 styles_color_orange
 styles_color_yellow
 styles_color_green
 styles_color_blue
 styles_color_purple
 styles_color_brown
 styles_color_white
 styles_color_grey
 styles_color_black
 
 styles_fabric_angelica
 styles_fabric_batik
 styles_fabric_ankara
 styles_fabric_kente
 styles_fabric_wax
 
 
*/

$(document).ready(function(){
    
    $catalog_nav = $('#catalog_nav');
    $catalog_content = $('#catalog_content');
    
    
    
    $catalog_nav.on('click', 'li', function(){
        //var clicked_option = $('#catalog_nav li:mousedown').val();
        var clicked_option = $(this).attr('value');//.val();
        console.log('clicked val: ' + clicked_option);
        
        $catalog_content.find('.selection_box').each(function(){
            if($(this).hasClass('item_filter_out')) {
                $(this).show();
                $(this).removeClass('item_filter_out');
                //console.log('no more filters');
            }
        });
        
        if(clicked_option === 'none') {
            console.log('nothing selected');
        }
        else if(clicked_option === 'fabric_ankara') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_fabric_ankara')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'fabric_wax') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_fabric_wax')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'fabric_kente') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_fabric_kente')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'fabric_batik') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_fabric_batik')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'fabric_angelica') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_fabric_angelica')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_rainbow') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_rainbow')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_red') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_red')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_pink') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_pink')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_orange') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_orange')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_yellow') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_yellow')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_green') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_green')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_blue') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_blue')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_purple') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_purple')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_brown') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_brown')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_white') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_white')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_grey') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_grey')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        else if(clicked_option === 'color_black') {
            $catalog_content.find('.selection_box').each(function(){
                if(!$(this).hasClass('styles_color_black')) {
                    $(this).addClass('item_filter_out');
                }
            });
        }
        
        //filter out list
        $catalog_content.find('.selection_box').each(function(){
            if($(this).hasClass('item_filter_out')) {
                $(this).hide();
                //console.log($(this));
            }
        }); //end hide
        
    }); //end select_img filter
});//end document.ready