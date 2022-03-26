/**
 * BitSecure Modal Cart
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
     * Compare search
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $("#bitsecureid_hns, #bitsecureid_rxz, #bitsecureid_u1t").on("keypress", function(event) {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            //alert("You pressed the Enter key!!");
            event.preventDefault();
            return false;
        }
    });

    $("button.bitsecurescr-gay").on("click", function(e) {

        // Stop Multiple form submission
        //e.preventDefault();

        var thisby = $(this);
        /**
         * Compare form variable
         * @type {Boolean}
         */
        var isCompareValid = true;

        /**
         * Form validation
         * @return {[type]} [description]
         */
        comSearchValid();

        function comSearchValid() {
            isCompareValid = true;
            var searchinput = thisby.closest("form").find("input[type='search']");
            var searchinputval = searchinput.val();

            if (searchinputval == "") {
                isCompareValid = false;
                searchinput.addClass("bitsecure-error");
            } else {
                searchinput.removeClass("bitsecure-error");
            }
        }

        if (isCompareValid == true) {
            /**
             * Data passing to the server with ajax
             * @param  {[type]}      [description]
             * @return {[type]}      [description]
             */

            var data = {
                value: thisby.closest("form").serialize(),
                action: bitsecurecomsearch_obj.action,
                security: bitsecurecomsearch_obj.security
            };

            var form = thisby.closest("form");

            $.ajax({
                type: "POST",
                dataType: "json",
                url: bitsecurecomsearch_obj.ajax_url,
                data: data,
                beforeSend: function(xhr) {
                    form.find("button[type='button']").children("span.spinner-grow").removeClass("d-none");
                },
                success: function(response) {
                    if (response["data"]["exists"]["insert"] == "success") {
                        form.next(".bitsecurescr-jk7").removeClass('d-none');
                        form.next(".bitsecurescr-jk7").find(".bitsecurescr-ivf").html(response["data"]["outputHtml"]);
                    }
                },
                complete: function(xhr, textStatus) {
                    form.find("button[type='button']").children("span.spinner-grow").addClass("d-none");
                }
            });
        };
        // Stop form submission
        //return false;
    });
})(jQuery, window, document);