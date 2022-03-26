/**
 * iTechPublic Quick View Modal js
 * 
 * @package    itechpublic
 * @subpackage itechpublic/assets/js
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://itechpublic.com/
 */

(function($, window, document, undefined) {
    "use strict";
    /**
     * Quick view modal with bootstrap
     * @param  {String}   [description]
     * @return {[type]}   [description]
     */
    $(".btn.quickview-modal").data("toggle", "modal").click(function() {
        $("#itechid_modal").modal('show');
    });
})(jQuery, window, document);