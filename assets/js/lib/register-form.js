/**
 * iTechPublic Register
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
     * Register form variable
     * @type {Boolean}
     */
    var isFNameValid = true;
    var isLNameValid = true;
    var isUserNameValid = true;
    var isEmailValid = true;
    var isPasswordValid = true;
    var isConPasswordValid = true;
    var isRadiovalid = true;
    var isSelectDayvalid = true;
    var isSelectMonthvalid = true;
    var isSelectYearvalid = true;
    var isPrivacyvalid = true;

    /**
     * Register form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form#itechid_ouh", function(e) {
        // Stop Multiple form submission
        e.preventDefault();

        /**
         * Register form first name validation
         * @return {[type]} [description]
         */
        supFnameValid();

        function supFnameValid() {
            isFNameValid = true;
            var supfname = $("#itechid_h6i");
            var supfnameval = supfname.val();
            var supfnameregex = /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

            if (supfnameval == "") {
                isFNameValid = false;
                supfname.addClass("itech-error");
                supfname.next("span").html("");
            } else if (!supfnameval.match(supfnameregex)) {
                isFNameValid = false;
                supfname.addClass("itech-error");
                supfname.next("span").html("Please use A-Za-z.'- characters");
            } else if (supfnameval.length > 25) {
                isFNameValid = false;
                supfname.addClass("itech-error");
                supfname.next("span").html("Please use a maximum of 25 characters");
            } else {
                supfname.removeClass("itech-error");
                supfname.next("span").html("");
            }
        }

        /**
         * Register form last name validation
         * @return {[type]} [description]
         */
        supLnameValid();

        function supLnameValid() {
            isLNameValid = true;
            var suplname = $("#itechid_ip5");
            var suplnameval = suplname.val();
            var suplnameregex = /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

            if (suplnameval == "") {
                isLNameValid = false;
                suplname.addClass("itech-error");
                suplname.next("span").html("");
            } else if (!suplnameval.match(suplnameregex)) {
                isLNameValid = false;
                suplname.addClass("itech-error");
                suplname.next("span").html("Please use A-Za-z.'- characters");
            } else if (suplnameval.length > 25) {
                isLNameValid = false;
                suplname.addClass("itech-error");
                suplname.next("span").html("Please use a maximum of 25 characters");
            } else {
                suplname.removeClass("itech-error");
                suplname.next("span").html("");
            }
        }

        /**
         * Register form user name validation
         * @return {[type]} [description]
         */
        supUsernameValid();

        function supUsernameValid() {
            isUserNameValid = true;
            var supusername = $("#itechid_puu");
            var supusernameval = supusername.val();
            var supusernameregex = /^[a-zA-Z]+(([._][a-zA-Z0-9])?[a-zA-Z0-9]*)*$/g;

            if (supusernameval == "") {
                isUserNameValid = false;
                supusername.addClass("itech-error");
                supusername.next("span").html("");
            } else if (!supusernameval.match(supusernameregex)) {
                isUserNameValid = false;
                supusername.addClass("itech-error");
                supusername.next("span").html("Please use A-Za-z._0-9 characters & First/Last ._ is invalid");
            } else if (supusernameval.length > 50) {
                isUserNameValid = false;
                supusername.addClass("itech-error");
                supusername.next("span").html("Please use a maximum of 50 characters");
            } else {
                supusername.removeClass("itech-error");
                supusername.next("span").html("");
            }
        }

        /**
         * Register form email validation
         * @return {[type]} [description]
         */
        supEmailValid();

        function supEmailValid() {
            isEmailValid = true;
            var supemail = $("#itechid_4ke");
            var supemailval = supemail.val();
            var supemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (supemailval == "") {
                isEmailValid = false;
                supemail.addClass("itech-error");
                supemail.next("span").html("");
            } else if (!supemailval.match(supemailregex)) {
                isEmailValid = false;
                supemail.addClass("itech-error");
                supemail.next("span").html("Please use a valid email address");
            } else {
                supemail.removeClass("itech-error");
                supemail.next("span").html("");
            }
        }

        /**
         * Register form password validation
         * @return {[type]} [description]
         */
        supPasswordValid();

        function supPasswordValid() {
            isPasswordValid = true;
            var suppassword = $("#itechid_ysj");
            var suppasswordval = suppassword.val();
            var suppasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){6,20}$/g;

            if (suppasswordval == "") {
                isPasswordValid = false;
                suppassword.addClass("itech-error");
                suppassword.next("span").html("");
            } else if (!suppasswordval.match(suppasswordregex)) {
                isPasswordValid = false;
                suppassword.addClass("itech-error");
                suppassword.next("span").html("Password use A-Za-z0-9 with 6-20 characters");
            } else {
                suppassword.removeClass("itech-error");
                suppassword.next("span").html("");
            }
        }

        /**
         * Register form confirm password validation
         * @return {[type]} [description]
         */
        supConPasswordValid();

        function supConPasswordValid() {
            isConPasswordValid = true;
            var supconpassword = $("#itechid_oxe");
            var supconpasswordval = supconpassword.val();
            var supconpasswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){6,20}$/g;

            var suppassword = $("#itechid_ysj");
            var suppasswordval = suppassword.val();

            if (supconpasswordval == "") {
                isConPasswordValid = false;
                supconpassword.addClass("itech-error");
                supconpassword.next("span").html("");
            } else if (!supconpasswordval.match(supconpasswordregex)) {
                isConPasswordValid = false;
                supconpassword.addClass("itech-error");
                supconpassword.next("span").html("Confirm password use A-Za-z0-9 with 6-20 characters");
            } else if ((suppasswordval != supconpasswordval) && (supconpasswordval !== "")) {
                isConPasswordValid = false;
                supconpassword.addClass("itech-error");
                supconpassword.next("span").html("Password & Confirm password do not match");
            } else {
                supconpassword.removeClass("itech-error");
                supconpassword.next("span").html("");
            }
        }

        /**
         * Register form radio validation
         * @return {[type]} [description]
         */
        supRadiobtnValid();

        function supRadiobtnValid() {
            isRadiovalid = true;
            var supradio = $("input[name='supcustomradio']");
            //"input[name='customRadioInline']:checked"
            if (!supradio.is(":checked")) {
                isRadiovalid = false;
                supradio.next().addClass("itech-error");
            } else if (supradio.is(":checked")) {
                supradio.next().removeClass("itech-error");
            }
        }

        /**
         * Register form day validation
         * @return {[type]} [description]
         */
        supSelectDayValid();

        function supSelectDayValid() {
            isSelectDayvalid = true;
            var supselectday = $("#itechid_pjx option:selected");
            var supselectdayval = supselectday.val();
            if (supselectdayval === "") {
                isSelectDayvalid = false;
                $("#itechid_pjx").addClass("itech-error");
            } else {
                $("#itechid_pjx").removeClass("itech-error");
            }
        }

        /**
         * Register form month validation
         * @return {[type]} [description]
         */
        supSelectMonthValid();

        function supSelectMonthValid() {
            isSelectMonthvalid = true;
            var supselectmonth = $("#itechid_qer option:selected");
            var supselectmonthval = supselectmonth.val();
            if (supselectmonthval === "") {
                isSelectMonthvalid = false;
                $("#itechid_qer").addClass("itech-error");
            } else {
                $("#itechid_qer").removeClass("itech-error");
            }
        }

        /**
         * Register form year validation
         * @return {[type]} [description]
         */
        supSelectYearValid();

        function supSelectYearValid() {
            isSelectYearvalid = true;
            var supselectyear = $("#itechid_sk9 option:selected");
            var supselectyearval = supselectyear.val();
            if (supselectyearval === "") {
                isSelectYearvalid = false;
                $("#itechid_sk9").addClass("itech-error");
            } else {
                $("#itechid_sk9").removeClass("itech-error");
            }
        }

        /**
         * Register form privacy validation
         * @return {[type]} [description]
         */
        supPrivacyValid();

        function supPrivacyValid() {
            isPrivacyvalid = true;
            var supPrivacy = $("#itechid_giv");
            if (!supPrivacy.is(":checked")) {
                isPrivacyvalid = false;
                supPrivacy.next().addClass("itech-error");
            } else if (supPrivacy.is(":checked")) {
                supPrivacy.next().removeClass("itech-error");
            }
        }

        if (isFNameValid == true && isLNameValid == true && isUserNameValid == true && isEmailValid == true && isPasswordValid == true && isConPasswordValid == true && isRadiovalid == true && isSelectDayvalid == true && isSelectMonthvalid == true && isSelectYearvalid == true && isPrivacyvalid == true) {
            $(this).find("button[type='submit']").attr("disabled", "true");

            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */
            var data = {
                value: $(this).serialize(),
                action: itechsup_obj.action,
                security: itechsup_obj.security
            };

            var form = $(this);
            //$.ajax used instead of $.post function - Because of preloader setup easily
            $.ajax({
                type: "POST",
                dataType: "json",
                url: itechsup_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='submit']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.find("button[type='submit']").removeAttr("disabled");
                        $("#itechid_b9f").addClass("itech-active");
                        $("#itechid_b9f .itechpin-wjj h4").html("Registration complete. Please check your email for the confirmation link.");
                        form[0].reset();
                        $("#itechid_b9f").on("click", function() {
                            window.location.href = response["data"]["exists"]["url"];
                        })
                    } else if (response["data"]["exists"]["insert"] == "username_exist") {
                        $("#itechid_puu").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Your username is already exists");
                        form.find("button[type='submit']").removeAttr("disabled");
                    } else if (response["data"]["exists"]["insert"] == "email_exist") {
                        $("#itechid_4ke").addClass("itech-error");
                        $("#itechid_hdr").addClass("itech-active");
                        $("#itechid_hdr .itech-zpu span").html("Your email is already exists");
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