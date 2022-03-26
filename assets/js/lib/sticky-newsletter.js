/**
 * iTechPublic Sticky Newsletter
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
     * Sticky newsletter scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var sideNewsletter = $("#itechid_hmw.itechout-rtx");
        var winHeight = $(document).height() - 1500;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 700) {
                if (sideNewsletter.hasClass("itechout-rtx")) {
                    sideNewsletter.addClass("itech-active");
                }
            } else {
                sideNewsletter.removeClass("itech-active");
            }
            if ($(window).scrollTop() >= winHeight) {
                sideNewsletter.removeClass("itech-active");
            }
        });

        sideNewsletter.find(".itech-remove").on("click", function() {
            sideNewsletter.removeClass("itechout-rtx itech-active");
        });

    });
})(jQuery, window, document);