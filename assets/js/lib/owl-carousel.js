/**
 * BitSecure Owl Carousel
 * 
 * @package    bitsecurepublic
 * @subpackage bitsecurepublic/assets/js/lib
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://bitsecurepublic.com/
 */

(function($, window, document, undefined) {
    "use strict";

    /**
     * OwlCarousel single phone
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        $("#bitsecureid_wkr").owlCarousel({
            loop: true,
            margin: 5,
            dots: false,
            nav: true,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                },
                576: {
                    items: 4,
                },
                992: {
                    items: 4,
                }
            }
        });
    });
})(jQuery, window, document);