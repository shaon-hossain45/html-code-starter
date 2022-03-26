/**
 * iTechPublic Newsletter
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
     * Newsletter form variable
     * @type {Boolean}
     */
    var isEmailValid = true;

    /**
     * Newsletter form submit
     * @param  {[type]}    [description]
     * @return {[type]}    [description]
     */
    $(document).on("submit", "form.itechpart_ee1", function(e) {
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
            var newslemail = form.find("input.itechpin_1tf");
            var newslemailval = newslemail.val();
            var newslemailregex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g;

            if (newslemailval == "") {
                isEmailValid = false;
                newslemail.addClass("itech-error");
            } else if (!newslemailval.match(newslemailregex)) {
                isEmailValid = false;
                newslemail.addClass("itech-error");
            } else {
                newslemail.removeClass("itech-error");
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
                value: form.find("input.itechpin_1tf").val(),
                action: itechnewsl_obj.action,
                security: itechnewsl_obj.security
            };

            $.post(itechnewsl_obj.ajax_url, data, function(response) {
                if (response["data"]["exists"]["insert"] == "success") {
                    form.find("button[type='submit']").removeAttr("disabled");
                    $("#itechid_b9f").addClass("itech-active");
                    $("#itechid_b9f .itechpin-wjj h4").html("Thanks for the subscription.");
                    form[0].reset();
                    $("#itechid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                } else if (response["data"]["exists"]["insert"] == "email_exists") {
                    $("#itechid_1tf").addClass("itech-error");
                    $("#itechid_b9f").addClass("itech-active");
                    $("#itechid_b9f .itechpin-wjj h4").html("You are already subscriber.");
                    $("#itechid_b9f").on("click", function() {
                        window.location.href = response["data"]["exists"]["url"];
                    })
                    form.find("button[type='submit']").removeAttr("disabled");
                } else {
                    $("#itechid_1tf").addClass("itech-error");
                    $("#itechid_b9f").addClass("itech-active");
                    $("#itechid_b9f .itechpin-wjj h4").html("Please try again later.");
                    $("#itechid_b9f").on("click", function() {
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