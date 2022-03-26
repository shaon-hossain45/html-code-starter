/**
 * iTechPublic Hide Eye Icon
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
     * Hide icon password field
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        $(".itechout-klh input[type='password']+.itech-eyeicon").on("click", function() {
            $(this).toggleClass("itech-active");

            var input = $($(this).attr("data-toggle"));

            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    });
})(jQuery, window, document);