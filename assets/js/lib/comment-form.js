/**
 * iTechPublic Comment
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
     * Add rules field jQuery validation
     * @param  {[type]} value    [description]
     * @return {[type]}          [description]
     */
    $.validator.addMethod("itechFullName", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+((['. -][a-zA-Z])?[a-zA-Z]*)*$/g.test(value);
    }, "Please enter a valid Full Name.");

    $.validator.addMethod("itechEmail", function(value, element) {
        return this.optional(element) || /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g.test(value);
    }, "Please enter a valid email address.");

    /**
     * jQuery validation comment form
     * @param  {[type]} error    [description]
     * @return {[type]}          [description]
     */
    $("form#commentform").validate({
        errorClass: "itech-error",
        rules: {
            author: {
                required: true,
                itechFullName: true,
                maxlength: 25
            },
            email: {
                required: true,
                itechEmail: true
            },
            comment: {
                required: true,
                minlength: 1
            }
        },
        errorPlacement: function(error, element) {
            return false;
        },
    });

    /**
     * Comment form submit with button disabled
     * @param  {[type]}     [description]
     * @return {[type]}     [description]
     */
    $("form#commentform").on("submit", function() {
        var eleButton = $(this).find("button[type='submit']");
        eleButton.attr("disabled", true);
        if ($("form#commentform").valid()) {
            eleButton.attr("disabled");
            eleButton.children("span.spinner-grow").removeClass("d-none");
        } else {
            eleButton.removeAttr("disabled");
            eleButton.children("span.spinner-grow").addClass("d-none");
        };
    })
})(jQuery, window, document);