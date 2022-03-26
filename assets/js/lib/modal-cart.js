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
    $(".bitsecurespl-cxz input[type='checkbox'], .bitsecurespl-z9b input[type='checkbox']").change(function() {

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
        var dataCookies = [];

        var check = getCookie("bitsecure-modal-cart");
        if (check != "" && check != null) {
            // Split string (-) & return array
            dataCookies = check.split("-");
        }

        var dataCollect = [];

        if ($(this).is(":checked")) {
            var dataValue = $(this).val();

            if (dataCookies != "") {

                if (dataCookies.indexOf(dataValue) !== -1) {
                    dataCollect = dataCookies;
                } else {
                    dataCollect = dataCookies.concat(dataValue);
                }
            } else {
                dataCollect = dataValue.split(" ");
            }

            $(this).attr("disabled", true);
        }

        /**
         * Data passing to the server with ajax
         * @param  {[type]}      [description]
         * @return {[type]}      [description]
         */
        var data = {
            value: dataCollect,
            action: bitsecuremodal_obj.action,
            security: bitsecuremodal_obj.security
        };
        var form = $(this);

        $.ajax({
            type: "POST",
            dataType: "json",
            url: bitsecuremodal_obj.ajax_url,
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
                }
            }
        });
    });
})(jQuery, window, document);