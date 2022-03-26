/**
 * BitSecure Compare Table
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
     * Compare table td class adjust with width
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var element = $(".bitsecurepart-2ep table").find("tr").first().children();
        var elementTd = $(".bitsecurepart-2ep table").find("tr").children("td").not("td.bitsecure-active");
        if (element.length == 3) {
            elementTd.addClass("bitsecure-col2");
        };
        if (element.length == 4) {
            elementTd.addClass("bitsecure-col3");
        };
        if (element.length == 2) {
            elementTd.addClass("bitsecure-col1");
        };
    });
    /**
     * Compare modal event
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var compareModal = $(".bitsecurescr-jk7");

        compareModal.click(function(event) {
            event.stopPropagation();
        });
        if (compareModal.hasClass() !== "d-none") {
            $("body").click(function() {
                compareModal.addClass("d-none");
            });
        }
    });

    /**
     * Compare full / difference option
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        $("#diff-toggle span.toggle-diff").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".bitsecurepin-zju").children("span").removeClass("bitsecure-active");
            thisby.toggleClass("bitsecure-active");
            $("table.bitsecurespl-table").addClass("diff-show");
            //window.location.hash = 'diff';

            var tds;
            $('table.bitsecurespl-table.diff-show tr').each(function(i, item) {
                tds = $(this).find('td:not(:first-child):not(.bitsecure-title):not(.bitsecure-image):not(.bitsecure-cform)');
                tds.each(function(j, elem1) {
                    tds.each(function(k, elem2) {
                        if ($(elem1)[0] != $(elem2)[0] && $(elem1).text() == $(elem2).text()) {
                            var text = $(elem1).text();
                            $(elem1).html('<span class="bitsecure-diff">' + text + '</span>');
                        }
                    });
                });
            });
        });

        $("#diff-toggle span.toggle-full").on("click", function(event) {
            event.preventDefault();
            var thisby = $(this);
            thisby.closest(".bitsecurepin-zju").children("span").removeClass("bitsecure-active");
            thisby.toggleClass("bitsecure-active");
            $("table.bitsecurespl-table").removeClass("diff-show");
            //window.location.hash = "";

            var tds;
            $('table.bitsecurespl-table tr').each(function(i, item) {
                tds = $(this).find('td:not(:first-child):not(.bitsecure-title):not(.bitsecure-image):not(.bitsecure-cform)');
                tds.each(function(j, elem1) {
                    tds.each(function(k, elem2) {
                        if ($(elem1)[0] != $(elem2)[0] && $(elem1).text() == $(elem2).text()) {
                            var text = $(elem1).text();
                            $(elem1).html(text);
                        }
                    });
                });
            });
        });

    });

})(jQuery, window, document);