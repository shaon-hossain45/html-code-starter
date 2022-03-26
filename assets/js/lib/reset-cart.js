/**
 * iTechPublic Reset Cart
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
     * Reset cart to compare
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $("button.itechpart-fux").on("click", function() {

        /**
         * Get Cookie from browser
         * @param  {[type]} name [description]
         * @return {[type]}      [description]
         */
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        /**
         * Check Cookie / isn"t exists ?
         * @type {[type]}
         */
        var check = getCookie("itech-modal-cart");
        if (check != "" && check != null) {
            delCookie("itech-modal-cart", "", 365);
        }

        function delCookie(cname, cvalue, exdays) {

            var now = new Date();
            var daysToExpire = exdays;
            now.setTime(now.getTime() - (daysToExpire * 24 * 60 * 60 * 1000));

            document.cookie = cname + "=" + cvalue + "; expires= +" + now.toUTCString() + "; path=/ ";

            $(".itechsec-vyc").removeClass("itech-active");
            $("#itechid_wco").removeClass("itech-active");
        }

    });
})(jQuery, window, document);