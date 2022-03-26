/**
 * BitSecure List Grid
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
     * List grid gallery
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#bitsecureid_9xj").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".bitsecureout-irm").children("li").removeClass("bitsecure-active");
            thisby.parent("li").addClass("bitsecure-active");
            thisby.closest(".bitsecureout-vv0").find(".bitsecureout-3bh").removeClass("row-cols-lg-3 row-cols-xl-4");
            thisby.closest(".bitsecureout-vv0").find(".bitsecureout-3bh").addClass("bitsecurescr-xy7 row-cols-lg-2 row-cols-xl-2");
        });
        $("#bitsecureid_30u").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".bitsecureout-irm").children("li").removeClass("bitsecure-active");
            thisby.parent("li").addClass("bitsecure-active");
            thisby.closest(".bitsecureout-vv0").find(".bitsecureout-3bh").removeClass("bitsecurescr-xy7 row-cols-lg-2 row-cols-xl-2");
            thisby.closest(".bitsecureout-vv0").find(".bitsecureout-3bh").addClass("row-cols-lg-3 row-cols-xl-4");
        });
    });
})(jQuery, window, document);