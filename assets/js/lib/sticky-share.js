/**
 * iTechPublic Sticky Share
 * 
 * @package    itechpublic
 * @subpackage itechpublic/assets/js/lib
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://itechpublic.com/
 */

(function($, window, document, undefined) {
    "use strict";

    /**
     * Sticky share scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var sideShare = $(".itechout-ucv");
        var winHeight = $(document).height() - 1000;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                sideShare.addClass("itech-active");
            } else {
                sideShare.removeClass("itech-active");
            }
            if ($(window).scrollTop() >= winHeight) {
                sideShare.removeClass("itech-active");
            }
        });
    });
})(jQuery, window, document);