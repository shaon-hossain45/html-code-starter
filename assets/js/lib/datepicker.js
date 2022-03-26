/**
 * BitSecure Date Picker
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
     * Date picker plugin
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $.dobPicker({
            daySelector: "#bitsecureid_pjx",
            /* Required */
            monthSelector: "#bitsecureid_qer",
            /* Required */
            yearSelector: "#bitsecureid_sk9",
            /* Required */
            dayDefault: "Day",
            /* Optional */
            monthDefault: "Month",
            /* Optional */
            yearDefault: "Year",
            /* Optional */
            minimumAge: 15,
            /* Optional */
            maximumAge: 85 /* Optional */
        });
    });
})(jQuery, window, document);