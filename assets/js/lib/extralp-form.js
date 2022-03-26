/**
 * iTechPublic Extra Lost Password
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
     * Extralp form variable
     * @type {Boolean}
     */
    var isEmailValid = true;

    /**
     * Extralp form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_roh", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Extralp form email validation
         * @return {[type]} [description]
         */
        elpEmailValid();

        function elpEmailValid() {
            isEmailValid = true;
            var elpemail = $("#itechid_lzz");
            var elpemailval = elpemail.val();
            var elpemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (elpemailval == "") {
                isEmailValid = false;
                elpemail.addClass("itech-error");
                elpemail.next("span").html("");
            } else if (!elpemailval.match(elpemailregex)) {
                isEmailValid = false;
                elpemail.addClass("itech-error");
                elpemail.next("span").html("Please use a valid email address");
            } else {
                elpemail.removeClass("itech-error");
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
                action: itechelp_obj.action,
                security: itechelp_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: itechelp_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.find("button[type='submit']").removeAttr("disabled");
                        $("#itechid_b9f").addClass("itech-active");
                        $("#itechid_b9f .itechpin-wjj h4").html("Please check your email for new password.");
                        form[0].reset();
                        $("#itechid_b9f").on("click", function() {
                            window.location.href = response["data"]["exists"]["url"];
                        })
                    } else if (response["data"]["exists"]["insert"] == "failed_email") {
                        $("#itechid_lzz").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Your email address do not match");
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