/**
 * iTechPublic Login
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
     * Login form variable
     * @type {Boolean}
     */
    var isEmailValid = true;
    var isPasswordValid = true;
    var isRememeberValid = true;

    /**
     * Login form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_evk", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Login form email validation
         * @return {[type]} [description]
         */
        sinEmailValid();

        function sinEmailValid() {
            isEmailValid = true;
            var sinemail = $("#itechid_aio");
            var sinemailval = sinemail.val();
            var sinemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (sinemailval == "") {
                isEmailValid = false;
                sinemail.addClass("itech-error");
                sinemail.next("span").html("");
            } else if (!sinemailval.match(sinemailregex)) {
                isEmailValid = false;
                sinemail.addClass("itech-error");
                sinemail.next("span").html("Please use a valid email address");
            } else {
                sinemail.removeClass("itech-error");
                sinemail.next("span").html("");
            }
        }

        /**
         * Login form password validation
         * @return {[type]} [description]
         */
        sinPasswordValid();

        function sinPasswordValid() {
            isPasswordValid = true;
            var sinpassword = $("#itechid_pyg");
            var sinpasswordval = sinpassword.val();
            var sinpasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){6,20}$/g;

            if (sinpasswordval == "") {
                isPasswordValid = false;
                sinpassword.addClass("itech-error");
                sinpassword.next("span").html("");
            } else if (!sinpasswordval.match(sinpasswordregex)) {
                isPasswordValid = false;
                sinpassword.addClass("itech-error");
                sinpassword.next("span").html("Password use A-Za-z0-9 with 6-20 characters");
            } else {
                sinpassword.removeClass("itech-error");
                sinpassword.next("span").html("");
            }
        }

        if (isEmailValid == true && isPasswordValid == true) {
            $(this).find("button[type='submit']").attr("disabled", "true");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: $(this).serialize(),
                action: itechsin_obj.action,
                security: itechsin_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: itechsin_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        window.location.href = response["data"]["exists"]["url"];
                    } else if (response["data"]["exists"]["insert"] == "username_failed") {
                        $("#itechid_aio").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Your email address do not match");
                        form.find("button[type='submit']").removeAttr("disabled");
                    } else if (response["data"]["exists"]["insert"] == "password_failed") {
                        $("#itechid_pyg").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Your password do not match");
                        form.find("button[type='submit']").removeAttr("disabled");
                    } else if (response["data"]["exists"]["insert"] == "verify_required") {
                        $("#itechid_pyg").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Please verify your email.");
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