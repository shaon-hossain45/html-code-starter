/**
 * iTechPublic Contact Us
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
     * Contact Us form variable
     * @type {Boolean}
     */
    var isFullNameValid = true;
    var isEmailValid = true;
    var isSubjectValid = true;
    var isMessageValid = true;
    var isPrivacyValid = true;

    /**
     * Contact Us form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_aub", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Contact Us form first name validation
         * @return {[type]} [description]
         */
        contFullnameValid();

        function contFullnameValid() {
            isFullNameValid = true;
            var contfullname = $("#itechid_9mr");
            var contfullnameval = contfullname.val();
            var contfullnameregex = /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

            if (contfullnameval == "") {
                isFullNameValid = false;
                contfullname.addClass("itech-error");
                contfullname.next("span").html("");
            } else if (!contfullnameval.match(contfullnameregex)) {
                isFullNameValid = false;
                contfullname.addClass("itech-error");
                contfullname.next("span").html("Please use A-Za-z.'- characters");
            } else if (contfullnameval.length > 50) {
                isFullNameValid = false;
                contfullname.addClass("itech-error");
                contfullname.next("span").html("Please use a maximum of 50 characters");
            } else {
                contfullname.removeClass("itech-error");
                contfullname.next("span").html("");
            }
        }

        /**
         * Contact Us form email validation
         * @return {[type]} [description]
         */
        contEmailValid();

        function contEmailValid() {
            isEmailValid = true;
            var contemail = $("#itechid_c4r");
            var contemailval = contemail.val();
            var contemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (contemailval == "") {
                isEmailValid = false;
                contemail.addClass("itech-error");
                contemail.next("span").html("");
            } else if (!contemailval.match(contemailregex)) {
                isEmailValid = false;
                contemail.addClass("itech-error");
                contemail.next("span").html("Please use a valid email address");
            } else {
                contemail.removeClass("itech-error");
                contemail.next("span").html("");
            }
        }

        /**
         * Contact Us form subject validation
         * @return {[type]} [description]
         */
        contSubjectValid();

        function contSubjectValid() {
            isSubjectValid = true;
            var contSubject = $("#itechid_7tj");
            var contSubjectval = contSubject.val();

            if (contSubjectval == "") {
                isSubjectValid = false;
                contSubject.addClass("itech-error");
                contSubject.next("span").html("");
            } else if (contSubjectval.length > 150) {
                isSubjectValid = false;
                contSubject.addClass("itech-error");
                contSubject.next("span").html("Please use a maximum of 150 characters");
            } else {
                contSubject.removeClass("itech-error");
                contSubject.next("span").html("");
            }
        }

        /**
         * Contact Us form title validation
         * @return {[type]} [description]
         */
        contMessageValid();

        function contMessageValid() {
            isMessageValid = true;
            var contMessage = $("#itechid_7k8");
            var contMessageval = contMessage.val();

            if (contMessageval == "") {
                isMessageValid = false;
                contMessage.addClass("itech-error");
                contMessage.next("span").html("");
            } else if (contMessageval.length > 2000) {
                isMessageValid = false;
                contMessage.addClass("itech-error");
                contMessage.next("span").html("Please use a maximum of 2000 characters");
            } else {
                contMessage.removeClass("itech-error");
                contMessage.next("span").html("");
            }
        }

        /**
         * Contact Us form privacy validation
         * @return {[type]} [description]
         */
        contPrivacyValid();

        function contPrivacyValid() {
            isPrivacyValid = true;
            var contPrivacy = $("#itechid_f4j");
            if (!contPrivacy.is(":checked")) {
                isPrivacyValid = false;
                contPrivacy.next().addClass("itech-error");
            } else if (contPrivacy.is(":checked")) {
                contPrivacy.next().removeClass("itech-error");
            }
        }

        if (isFullNameValid == true && isEmailValid == true && isSubjectValid == true && isMessageValid == true && isPrivacyValid == true) {
            $(this).find("button[type='submit']").attr("disabled", "true");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: $(this).serialize(),
                action: itechcont_obj.action,
                security: itechcont_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: itechcont_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.find("button[type='submit']").removeAttr("disabled");
                        $("#itechid_b9f").addClass("itech-active");
                        $("#itechid_b9f .itechpin-wjj h4").html("Thank you for contact us.");
                        form[0].reset();
                        $("#itechid_b9f").on("click", function() {
                            window.location.href = response["data"]["exists"]["url"];
                        })
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