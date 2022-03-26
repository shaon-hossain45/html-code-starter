/**
 * iTechPublic Date Picker
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
     * Date picker plugin
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $.dobPicker({
            daySelector: "#itechid_pjx",
            /* Required */
            monthSelector: "#itechid_qer",
            /* Required */
            yearSelector: "#itechid_sk9",
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