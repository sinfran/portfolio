//=================================================
// ScrollTop functions
// 
// Scroll to top function
//=================================================

(function( $ ) {
    'use strict';

    // Accessing a specific section of the page by clicking a link.
    $('.scroll-to-id').click(function() {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // window.location.hash = hash;
            });
        }
    });

    // This function finds an ID defining a container which can be used as fixed.
    if ( $('#sticky').length ) {
        $(window).scroll( function () {
            var position = $(window).scrollTop() - $('#sticky').offset().top;
            
            if ( position > 0 ) {
                $('#sticky >').addClass('sticky-fixed-md');
                $('#sticky >').css('top', position);
            } else {
                $('#sticky >').removeClass('sticky-fixed-md');
                $('#sticky >').css('top', 0);
            }
        });
    }
})(jQuery);
