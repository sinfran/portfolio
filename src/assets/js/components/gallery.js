//=================================================
// Gallery
//
// Shows whole gallery with filters
//=================================================

(function( $ ) {
    "use strict";
    
    var gallery_items_name        = '.gallery-items';
    var gallery_item_name         = '.gallery-item';
    var gallery_filter_name       = '.gallery-filter';
    var gallery_filter_click_name = '.click';
    var gallery_active_class_name = 'active';
    
    $(gallery_items_name).imagesLoaded(function() {
        var $grid = $(gallery_items_name).isotope({
            itemSelector: gallery_item_name,
            masonry: {
                horizontalOrder: true
            }
        });
            
        $(gallery_filter_name).on('click', gallery_filter_click_name, function() {
            var filterValue = $(this).attr('data-filter');
            
            $(gallery_filter_name).find(gallery_filter_click_name).removeClass(gallery_active_class_name);
            $(this).addClass(gallery_active_class_name);
            $(gallery_item_name).removeClass(gallery_active_class_name);
            
            $grid.isotope({
                filter: filterValue,
            });
            
            return false;
        });

        $(gallery_filter_name).on('click', 'li:first-child() .click', function() {
            $(gallery_item_name).addClass(gallery_active_class_name);
            
            $grid.isotope();
        });
    });
})(jQuery);
