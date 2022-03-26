/**
 * iTechPublic Review
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
     * iTechPublic - Review form variable
     * @type {Boolean}
     */
    var isNameValid = true;
    var isEmailValid = true;
    var isDescriptionValid = true;
    var isScoreValid = true;

    /**
     * Review form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_k9u", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Review form name validation
         * @return {[type]} [description]
         */
        reviewNameValid();

        function reviewNameValid() {
            isNameValid = true;
            var reviewname = $("#itechid_qql");
            var reviewnameval = reviewname.val();
            var reviewnameregex = /^[a-zA-Z]+((['. -][a-zA-Z])?[a-zA-Z]*)*$/g;

            if (reviewnameval == "") {
                isNameValid = false;
                reviewname.addClass("itech-error");
            } else if (!reviewnameval.match(reviewnameregex)) {
                isNameValid = false;
                reviewname.addClass("itech-error");
                reviewname.next("span").html("Please use A-Za-z.'- characters");
            } else if (reviewnameval.length > 50) {
                isNameValid = false;
                reviewname.addClass("itech-error");
                reviewname.next("span").html("Please use a maximum of 50 characters");
            } else {
                reviewname.removeClass("itech-error");
                reviewname.next("span").html("");
            }
        }

        /**
         * Review form email validation
         * @return {[type]} [description]
         */
        reviewEmailValid();

        function reviewEmailValid() {
            isEmailValid = true;
            var reviewemail = $("#itechid_h5y");
            var reviewemailval = reviewemail.val();
            var emailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (reviewemailval == "") {
                isEmailValid = false;
                reviewemail.addClass("itech-error");
            } else if (!reviewemailval.match(emailregex)) {
                isEmailValid = false;
                reviewemail.addClass("itech-error");
                reviewemail.next("span").html("Please use a valid email address");
            } else {
                reviewemail.removeClass("itech-error");
                reviewemail.next("span").html("");
            }
        }


        /**
         * Review form Description validation
         * @return {[type]} [description]
         */
        reviewDescriptionValid();

        function reviewDescriptionValid() {
            isDescriptionValid = true;
            var reviewdescription = $("#itechid_yqe");
            var reviewdescriptionval = reviewdescription.val();
            if (reviewdescriptionval == "" || reviewdescriptionval.trim().length == 0) {
                isDescriptionValid = false;
                reviewdescription.addClass("itech-error");
            } else if (reviewdescriptionval.length > 500) {
                isDescriptionValid = false;
                reviewdescription.addClass("itech-error");
                reviewdescription.next("span").html("Please use a maximum of 500 characters");
            } else {
                reviewdescription.removeClass("itech-error");
                reviewdescription.next("span").html("");
            }
        }

        /**
         * Review form Score validation
         * @return {[type]} [description]
         */
        reviewScoreValid();

        function reviewScoreValid() {
            isScoreValid = true;
            var reviewdisplay = $("#itechid_9qe").val();
            var reviewcamera = $("#itechid_hnj").val();
            var reviewbattery = $("#itechid_z8t").val();
            var reviewfeatures = $("#itechid_clx").val();
            if (reviewdisplay == 0 && reviewcamera == 0 && reviewbattery == 0 && reviewfeatures == 0) {
                isScoreValid = false;
                $("#itechid_k0v").addClass("itech-error");
            } else {
                $("#itechid_k0v").removeClass("itech-error");
            }
        }

        if (isNameValid == true && isEmailValid == true && isDescriptionValid == true && isScoreValid == true) {
            $(this).find("button[type='submit']").attr("disabled", true);

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: form.attr("action"),
                data: form.serialize(),
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    form.find("button[type='submit']").removeAttr("disabled");
                    $("#itechid_b9f").addClass("itech-active");
                    $("#itechid_b9f .itechpin-wjj h4").html("Thank you for your review & Wait for approval.");
                    form[0].reset();
                    $("#itechid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                    form.find(".itech-dnk input").next("span.itech-3fg").html("0%");
                    form.find("#itechid_k0v").html("0%");
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