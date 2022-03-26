/**
 * iTechPublic List Grid
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
     * Short limit characters
     * @param  {[type]} ) {$(".itechsec-hyp .itechpart-2pc .itechpin-hu1 ul li").each(function(){var str [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $(".itechsec-hyp .itechpart-2pc .itechpin-tdg h3").each(function() {
            var str = $(this).children("a").text();
            if (str.length > 20) {
                var updateString = str.substring(0, 16).concat("...");
                $(this).children("a").html(updateString);
            }
        });
        $(".itechsec-hyp .itechpart-2pc .itechpin-hu1 ul li").each(function() {
            var str = $(this).children("span.itech-details").text();
            if (str.length > 16) {
                var updateString = str.substring(0, 12).concat("...");
                $(this).children("span.itech-details").html(updateString);
            }
        });
        $(".itechsec-hyp .itechpart-2pc .itechpin-tdg h5").each(function() {
            var str = $(this).children("a").text();
            if (str.length > 24) {
                var updateString = str.substring(0, 17).concat("...");
                $(this).children("a").html(updateString);
            }
        });
        $(".itechpart-phd .itechspl-xns, .itechpart-phd .card, .itechpart-ynv").each(function() {
            var str = $(this).find("h3.entry-title a").text();

            if (str.length > 40) {
                var updateString = str.substring(0, 35).concat("...");
                $(this).find("h3.entry-title a").html(updateString);
            }
        });
        $(".itechspl-pjv .post .card").each(function() {
            var str = $(this).find("h3.entry-title a").text();

            if (str.length > 75) {
                var updateString = str.substring(0, 70).concat("...");
                $(this).find("h3.entry-title a").html(updateString);
            }
        });
    });
})(jQuery, window, document);