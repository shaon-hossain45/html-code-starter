/**
 * BitSecure Extra Lost Password
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
     * Extralp form variable
     * @type {Boolean}
     */
    var isEmailValid = true;

    /**
     * Extralp form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#bitsecureid_roh", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Extralp form email validation
         * @return {[type]} [description]
         */
        elpEmailValid();

        function elpEmailValid() {
            isEmailValid = true;
            var elpemail = $("#bitsecureid_lzz");
            var elpemailval = elpemail.val();
            var elpemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (elpemailval == "") {
                isEmailValid = false;
                elpemail.addClass("bitsecure-error");
                elpemail.next("span").html("");
            } else if (!elpemailval.match(elpemailregex)) {
                isEmailValid = false;
                elpemail.addClass("bitsecure-error");
                elpemail.next("span").html("Please use a valid email address");
            } else {
                elpemail.removeClass("bitsecure-error");
                elpemail.next("span").html("");
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
                value: $(this).serialize(),
                action: bitsecureelp_obj.action,
                security: bitsecureelp_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: bitsecureelp_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.find("button[type='submit']").removeAttr("disabled");
                        $("#bitsecureid_b9f").addClass("bitsecure-active");
                        $("#bitsecureid_b9f .bitsecurepin-wjj h4").html("Please check your email for new password.");
                        form[0].reset();
                        $("#bitsecureid_b9f").on("click", function() {
                            window.location.href = response["data"]["exists"]["url"];
                        })
                    } else if (response["data"]["exists"]["insert"] == "failed_email") {
                        $("#bitsecureid_lzz").addClass("bitsecure-error");
                        $("#bitsecureid_hdr").addClass("bitsecure-active");
                        $("#bitsecureid_hdr .bitsecure-zpu span").html("Your email address do not match");
                        form.find("button[type='submit']").removeAttr("disabled");
                    }
                },
                complete: function(xhr, textStatus) {
                    form.find("button[type='submit']").children("span.spinner-grow").addClass("d-none");
                }
            });
        } else {
            // Stop Multiple form submission
            e.preventDefault();
        }
        // Stop form submission
        return false;

    });

})(jQuery, window, document);