/**
 * BitSecure Modal Cart
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
     * Add to compare
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(document).on("click", "#bitsecureid_zok li button", function() {

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
         * @type {Array}
         */
        var dataValue = $(this).val();

        var removeCookies = [];
        var check = getCookie("bitsecure-modal-cart");
        if (check != "") {
            // Split string (-) & return array
            removeCookies = check.split("-");
            const index = removeCookies.indexOf(dataValue);

            if (index > -1) {
                removeCookies.splice(index, 1);
            }
            if (removeCookies == "" || removeCookies == null) {
                removeCookies = 0;
            }
        } else {
            removeCookies = 0;
        }

        /**
         * Data passing to the server with ajax
         * @param  {[type]}      [description]
         * @return {[type]}      [description]
         */
        var data = {
            value: removeCookies,
            action: bitsecureremovecart_obj.action,
            security: bitsecureremovecart_obj.security
        };
        var form = $(this);

        $.ajax({
            type: "POST",
            dataType: "json",
            url: bitsecureremovecart_obj.ajax_url,
            data: data,
            success: function(response) {
                if (response["data"]["exists"]["insert"] == "success") {
                    $("#bitsecureid_zok").html(response["data"]["outputHtml"]);
                    if (response["data"]["length"] > 0) {
                        $("#bitsecureid_wco").addClass("bitsecure-active");
                    }
                    if (response["data"]["length"] > 3) {
                        $("#bitsecureid_5gv").closest(".bitsecureout-2v9").children(".bitsecure-alert").addClass("bitsecure-active");
                    } else {
                        $("#bitsecureid_5gv").closest(".bitsecureout-2v9").children(".bitsecure-alert").removeClass("bitsecure-active");
                    }
                } else {
                    $("#bitsecureid_zok").html(response["data"]["outputHtml"]);
                    $(".bitsecuresec-vyc").removeClass("bitsecure-active");
                    $("#bitsecureid_wco").removeClass("bitsecure-active");
                }
            }
        });
    });
})(jQuery, window, document);