/**
 * iTechPublic Sticky Aside More Reviews
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
     * Sticky Aside scroll
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var toggleAslideBtn = $("#itechid_kxo");
        var modalAslideWrap = $("#itechid_slp");
        var closeElement = $("#itechid_ytr");
        toggleAslideBtn.on("click", function() {
            modalAslideWrap.toggleClass("itech-active");
            closeElement.toggleClass("itech-active");
        });

        // Close button
        closeElement.on("click", function(event) {
            var thisby = $(this);
            thisby.removeClass("itech-active");
            thisby.closest("body").find(".itechsec-oi3").removeClass("itech-active");
            thisby.removeClass("itech-active");
        });
    });
})(jQuery, window, document);