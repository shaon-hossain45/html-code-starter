/**
 * BitSecure Quick View Modal js
 * 
 * @package    bitsecurepublic
 * @subpackage bitsecurepublic/assets/js
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://bitsecurepublic.com/
 */

(function($, window, document, undefined) {
    "use strict";

    /**
     * Quick View
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $("button.quickview-modal").click(function(e) {
        // Stop Multiple form submission
        //e.preventDefault();

        var thisby = $(this);
        var phoneid = thisby.data("pid");

        /**
         * Data passing to the server with ajax
         * @param  {[type]}      [description]
         * @return {[type]}      [description]
         */
        var data = {
            value: phoneid,
            action: bitsecurequickview_obj.action,
            security: bitsecurequickview_obj.security
        };

        $.ajax({
            type: "POST",
            dataType: "json",
            url: bitsecurequickview_obj.ajax_url,
            data: data,
            beforeSend: function(xhr) {
                $("#bitsecureid_modal").find("span.spinner-grow").removeClass("d-none");
                $("#bitsecureid_modal").find(".bitsecurescr-tew").html("");
            },
            success: function(response) {
                if (response["data"]["exists"]["insert"] == "success") {
                    $("#bitsecureid_modal").find(".bitsecurescr-tew").html(response["data"]["outputHtml"]);
                    /**
                     * OwlCarousel load in modal
                     * @param  {[type]} value    [description]
                     * @return {[type]} value    [description]
                     */
                    $(function() {
                        $("#bitsecureid_wkt").owlCarousel({
                            loop: true,
                            margin: 5,
                            dots: false,
                            nav: true,
                            items: 4,
                            responsiveClass: true,
                            responsive: {
                                0: {
                                    items: 3,
                                },
                                576: {
                                    items: 4,
                                },
                                992: {
                                    items: 4,
                                }
                            }
                        });
                    });
                    $(function() {
                        $("#bitsecureid_wkt .bitsecure-ogt").on("click", "button", function(e) {
                            var thumbnailSrc = $(this).find("img").attr("src");
                            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("data-hrsrc", thumbnailSrc);
                            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("src", thumbnailSrc);
                            $(this).closest(".bitsecurescr-f4d").find("[data-preview='bitsecure-gallery'] img").attr("srcset", thumbnailSrc);
                        });
                    });
                }
            },
            complete: function(xhr, textStatus) {
                $("#bitsecureid_modal").find("span.spinner-grow").addClass("d-none");
            }
        });
    });
})(jQuery, window, document);