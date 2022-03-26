/**
 * BitSecure Sticky Share
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
     * Sticky share scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var sideShare = $(".bitsecureout-ucv");
        var winHeight = $(document).height() - 1000;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                sideShare.addClass("bitsecure-active");
            } else {
                sideShare.removeClass("bitsecure-active");
            }
            if ($(window).scrollTop() >= winHeight) {
                sideShare.removeClass("bitsecure-active");
            }
        });
    });
})(jQuery, window, document);