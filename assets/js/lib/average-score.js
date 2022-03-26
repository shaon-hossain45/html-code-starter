/**
 * BitSecure Average Score
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
     * Average score - phone info
     * @param  {[type]} value    [description]
     * @return {[type]} value    [description]
     */
    $(function() {
        var slider = $(".bitsecurepin-ak0");
        var range = $(".bitsecure-xv3");
        var spanelement = $(".bitsecure-3fg");

        slider.each(function() {

            spanelement.each(function() {
                var spanvalue = $(this).prev().attr("value");
                $(this).html(spanvalue + "%");
            });
            // Range value auto adjustment
            range.on("input", function() {
                var sumdata = 0;
                $(this).next().html(this.value + "%");
                //Each index sumdata
                range.each(function(index, value) {
                    sumdata += parseFloat($(this).val());
                });
                // Percentage score
                function bitsecurepublic_percentage(num, per) {
                    return (num / 100) * per;
                }
                var percentagescore = bitsecurepublic_percentage(sumdata, 10) / 4;
                var modify = (percentagescore * 10).toFixed(1);

                $("#bitsecureid_k0v").html(parseFloat(modify) + "%");

            });
        });
    });
})(jQuery, window, document);