/**
 * iTechPublic Thumbnail
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
     * Phone thumbnail transfer
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        $("#itechid_wkr .itech-ogt").on("click", "button", function(e) {
            var thumbnailSrc = $(this).find("img").attr("src");
            $(this).closest(".itechscr-f4d").find("[data-preview='itech-gallery'] img").attr("data-hrsrc", thumbnailSrc);
            $(this).closest(".itechscr-f4d").find("[data-preview='itech-gallery'] img").attr("src", thumbnailSrc);
            $(this).closest(".itechscr-f4d").find("[data-preview='itech-gallery'] img").attr("srcset", thumbnailSrc);
        });
    });

})(jQuery, window, document);