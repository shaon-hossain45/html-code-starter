/**
 * iTechPublic Progress Score Animation
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
     * Phone score progress
     * @param  {String}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("li a[href='#itechid_syk']").one("click", function() {
            $(".progress-bar").each(function() {
                var Proval = $(this).attr("aria-valuenow") + "%";
                $(this).animate({ width: Proval }, { duration: 700, easing: "easeOutCirc" });
            });
        });
    });
})(jQuery, window, document);