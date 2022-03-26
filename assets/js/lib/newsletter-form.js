/**
 * BitSecure Newsletter
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
     * Newsletter form variable
     * @type {Boolean}
     */
    var isEmailValid = true;

    /**
     * Newsletter form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form.bitsecurepart_ee1", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        var form = $(this);
        /**
         * Newsletter form email validation
         * @return {[type]} [description]
         */
        newslEmailValid();

        function newslEmailValid() {
            isEmailValid = true;
            var newslemail = form.find("input.bitsecurepin_1tf");
            var newslemailval = newslemail.val();
            var newslemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (newslemailval == "") {
                isEmailValid = false;
                newslemail.addClass("bitsecure-error");
            } else if (!newslemailval.match(newslemailregex)) {
                isEmailValid = false;
                newslemail.addClass("bitsecure-error");
            } else {
                newslemail.removeClass("bitsecure-error");
            }
        }

        if (isEmailValid == true) {
            $(this).find("button[type='submit']").attr("disabled", "true");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: form.find("input.bitsecurepin_1tf").val(),
                action: bitsecurenewsl_obj.action,
                security: bitsecurenewsl_obj.security
            };

            $.post(bitsecurenewsl_obj.ajax_url, data, function(response) {
                if (response["data"]["exists"]["insert"] == "success") {
                    form.find("button[type='submit']").removeAttr("disabled");
                    $("#bitsecureid_b9f").addClass("bitsecure-active");
                    $("#bitsecureid_b9f .bitsecurepin-wjj h4").html("Thanks for the subscription.");
                    form[0].reset();
                    $("#bitsecureid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                } else if (response["data"]["exists"]["insert"] == "email_exists") {
                    $("#bitsecureid_1tf").addClass("bitsecure-error");
                    $("#bitsecureid_b9f").addClass("bitsecure-active");
                    $("#bitsecureid_b9f .bitsecurepin-wjj h4").html("You are already subscriber.");
                    $("#bitsecureid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                    form.find("button[type='submit']").removeAttr("disabled");
                } else {
                    $("#bitsecureid_1tf").addClass("bitsecure-error");
                    $("#bitsecureid_b9f").addClass("bitsecure-active");
                    $("#bitsecureid_b9f .bitsecurepin-wjj h4").html("Please try again later.");
                    $("#bitsecureid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                    form.find("button[type='submit']").removeAttr("disabled");
                }
            }, "json");
        } else {
            // Stop Multiple form submission
            e.preventDefault();
        }
        // Stop form submission
        return false;

    });

})(jQuery, window, document);