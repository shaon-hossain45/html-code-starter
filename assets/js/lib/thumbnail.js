/**
 * BitSecure Thumbnail
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
     * Phone thumbnail transfer
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        $("#bitsecureid_wkr .bitsecure-ogt").on("click", "button", function(e) {
            var thumbnailSrc = $(this).find("img").attr("src");
            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("data-hrsrc", thumbnailSrc);
            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("src", thumbnailSrc);
            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("srcset", thumbnailSrc);
        });
    });

})(jQuery, window, document);