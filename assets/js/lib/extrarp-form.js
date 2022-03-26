/**
 * iTechPublic Extra Reset Password
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
     * Extrarp form variable
     * @type {Boolean}
     */
    var isPasswordValid = true;
    var isConPasswordValid = true;

    /**
     * Extrarp form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_7er", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Extrarp form password validation
         * @return {[type]} [description]
         */
        erpPasswordValid();

        function erpPasswordValid() {
            isPasswordValid = true;
            var erppassword = $("#itechid_yo3");
            var erppasswordval = erppassword.val();
            var erppasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){6,20}$/g;

            if (erppasswordval == "") {
                isPasswordValid = false;
                erppassword.addClass("itech-error");
                erppassword.next("span").html("");
            } else if (!erppasswordval.match(erppasswordregex)) {
                isPasswordValid = false;
                erppassword.addClass("itech-error");
                erppassword.next("span").html("Password use A-Za-z0-9 with 6-20 characters");
            } else {
                erppassword.removeClass("itech-error");
                erppassword.next("span").html("");
            }
        }

        /**
         * Extrarp form confirm password validation
         * @return {[type]} [description]
         */
        erpConPasswordValid();

        function erpConPasswordValid() {
            isConPasswordValid = true;
            var erpconpassword = $("#itechid_rmc");
            var erpconpasswordval = erpconpassword.val();
            var erpconpasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){6,20}$/g;

            var erppassword = $("#itechid_yo3");
            var erppasswordval = erppassword.val();

            if (erpconpasswordval == "") {
                isConPasswordValid = false;
                erpconpassword.addClass("itech-error");
                erpconpassword.next("span").html("");
            } else if (!erpconpasswordval.match(erpconpasswordregex)) {
                isConPasswordValid = false;
                erpconpassword.addClass("itech-error");
                erpconpassword.next("span").html("Confirm password use A-Za-z0-9 with 6-20 characters");
            } else if ((erppasswordval != erpconpasswordval) && (erpconpasswordval !== "")) {
                isConPasswordValid = false;
                erpconpassword.addClass("itech-error");
                erpconpassword.next("span").html("Password & Confirm password do not match");
            } else {
                erpconpassword.removeClass("itech-error");
                erpconpassword.next("span").html("");
            }
        }

        if (isPasswordValid == true && isConPasswordValid == true) {
            $(this).find("button[type='submit']").attr("disabled", "true");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: $(this).serialize(),
                action: itecherp_obj.action,
                security: itecherp_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: itecherp_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.find("button[type='submit']").removeAttr("disabled");
                        $("#itechid_b9f").addClass("itech-active");
                        $("#itechid_b9f .itechpin-wjj h4").html("Password Reset Success");
                        form[0].reset();
                        window.location.href = response["data"]["exists"]["url"];
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