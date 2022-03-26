/**
 * BitSecure Sticky Aside More Reviews
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
     * Sticky Aside scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var toggleAslideBtn = $("#bitsecureid_kxo");
        var modalAslideWrap = $("#bitsecureid_slp");
        var closeElement = $("#bitsecureid_ytr");
        toggleAslideBtn.on("click", function() {
            modalAslideWrap.toggleClass("bitsecure-active");
            closeElement.toggleClass("bitsecure-active");
        });

        // Close button
        closeElement.on("click", function(event) {
            var thisby = $(this);
            thisby.removeClass("bitsecure-active");
            thisby.closest("body").find(".bitsecuresec-oi3").removeClass("bitsecure-active");
            thisby.removeClass("bitsecure-active");
        });
    });
})(jQuery, window, document);