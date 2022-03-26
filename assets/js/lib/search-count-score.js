/**
 * iTechPublic Search Counter Score
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
     * Search counter jquery
     * @param  {[type]} ) {             var sumdata [description]
     * @return {[type]}   [description]
     */
    $(function() {
        var sumdata = 0;
        $(".itecsec-em8").find(".itechspl-avr").each(function() {
            sumdata += Number($(this).data("count"));
        });
        if (sumdata < 2) {
            $(".itecsec-em8").find(".itech-count").html("About " + sumdata + " result");
        } else {
            $(".itecsec-em8").find(".itech-count").html("About " + sumdata + " results");
        }
    });
})(jQuery, window, document);