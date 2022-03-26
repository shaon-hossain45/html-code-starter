/**
 * iTechPublic List Grid
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
     * List grid gallery
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#itechid_9xj").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".itechout-irm").children("li").removeClass("itech-active");
            thisby.parent("li").addClass("itech-active");
            thisby.closest(".itechout-vv0").find(".itechout-3bh").removeClass("row-cols-lg-3 row-cols-xl-4");
            thisby.closest(".itechout-vv0").find(".itechout-3bh").addClass("itechscr-xy7 row-cols-lg-2 row-cols-xl-2");
        });
        $("#itechid_30u").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".itechout-irm").children("li").removeClass("itech-active");
            thisby.parent("li").addClass("itech-active");
            thisby.closest(".itechout-vv0").find(".itechout-3bh").removeClass("itechscr-xy7 row-cols-lg-2 row-cols-xl-2");
            thisby.closest(".itechout-vv0").find(".itechout-3bh").addClass("row-cols-lg-3 row-cols-xl-4");
        });
    });
})(jQuery, window, document);