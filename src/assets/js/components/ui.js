//=================================================
// UI
//
// Script prevents example anchor links from working.
//=================================================

(function( $ ) {
    'use strict';
    
    // Cancel the default action
    $('.bd-example a').click(function(e) {
        e.preventDefault();
    });
})(jQuery);
