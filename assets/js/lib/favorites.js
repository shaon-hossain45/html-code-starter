/**
 * BitSecure Favourite
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

    $(".bitsecurepin-yj3 button.bitsecurescr-poe").on("click", function(event) {
        // Stop Multiple form submission
        event.preventDefault();

        if (bitsecurefav_obj.logged_in == true) {
            $(this).popover("hide");

            $(this).toggleClass("bitsecure-already");

            var dataCollect = $(this).data("post_id");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: dataCollect,
                action: bitsecurefav_obj.action,
                security: bitsecurefav_obj.security
            };
            var formButton = $(this);

            $.ajax({
                type: "POST",
                dataType: "json",
                url: bitsecurefav_obj.ajax_url,
                data: data,
                success: function(response) {
                    if (response["success"] = true) {
                        if (response["data"]["exists"]["count"] == "0") {
                            formButton.next("span").html("0 Fan");
                        } else if (response["data"]["exists"]["count"] == "1") {
                            formButton.next("span").html(response["data"]["exists"]["count"] + " Fan");
                        } else {
                            formButton.next("span").html(response["data"]["exists"]["count"] + " Fans");
                        }
                    }
                }
            });
        } else {
            $(this).popover("show");
        };
    });
})(jQuery, window, document);