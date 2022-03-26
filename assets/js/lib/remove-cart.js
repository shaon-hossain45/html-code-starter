/**
 * iTechPublic Modal Cart
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
     * Add to compare
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(document).on("click", "#itechid_zok li button", function() {

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
        var check = getCookie("itech-modal-cart");
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
            action: itechremovecart_obj.action,
            security: itechremovecart_obj.security
        };
        var form = $(this);

        $.ajax({
            type: "POST",
            dataType: "json",
            url: itechremovecart_obj.ajax_url,
            data: data,
            success: function(response) {
                if (response["data"]["exists"]["insert"] == "success") {
                    $("#itechid_zok").html(response["data"]["outputHtml"]);
                    if (response["data"]["length"] > 0) {
                        $("#itechid_wco").addClass("itech-active");
                    }
                    if (response["data"]["length"] > 3) {
                        $("#itechid_5gv").closest(".itechout-2v9").children(".itech-alert").addClass("itech-active");
                    } else {
                        $("#itechid_5gv").closest(".itechout-2v9").children(".itech-alert").removeClass("itech-active");
                    }
                } else {
                    $("#itechid_zok").html(response["data"]["outputHtml"]);
                    $(".itechsec-vyc").removeClass("itech-active");
                    $("#itechid_wco").removeClass("itech-active");
                }
            }
        });
    });
})(jQuery, window, document);