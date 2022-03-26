/**
 * BitSecure Sticky Newsletter
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
     * Sticky newsletter scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var sideNewsletter = $("#bitsecureid_hmw.bitsecureout-rtx");
        var winHeight = $(document).height() - 1500;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 700) {
                if (sideNewsletter.hasClass("bitsecureout-rtx")) {
                    sideNewsletter.addClass("bitsecure-active");
                }
            } else {
                sideNewsletter.removeClass("bitsecure-active");
            }
            if ($(window).scrollTop() >= winHeight) {
                sideNewsletter.removeClass("bitsecure-active");
            }
        });

        sideNewsletter.find(".bitsecure-remove").on("click", function() {
            sideNewsletter.removeClass("bitsecureout-rtx bitsecure-active");
        });

    });
})(jQuery, window, document);