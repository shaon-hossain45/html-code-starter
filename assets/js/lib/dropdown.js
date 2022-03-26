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
     * Url based sort by get
     * @param  {[type]} [description]
     * @return {[type]} [description]
     */
    $(function() {
        var current = window.location.search;

        $(".itechspl-7nx ul li a").each(function() {
            var $this = $(this);
            if ($this.attr("href") == current) {
                $this.parent("li").addClass("itech-active");
                var $htmlData = $this.html();
                $this.closest(".itechpin-upk").find("button span.itech-span").html($htmlData);
            }
        })

    });

    /**
     * Dropdown href joining
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        // Number 1 Dropdown
        $("#itechid_o1g").next(".itechspl-7nx").find("ul li a").each(function() {
            var href = $(this).attr("href");

            if (urlParams.has("pbrand")) {
                const pbrand = urlParams.get("pbrand");
                var url = window.location.protocol + "//" + window.location.host + window.location.pathname + href + "&" + "pbrand=" + pbrand;
                $(this).attr("href", url);
            }

        });

        // Number 2 Dropdown
        $("#itechid_7kn").next(".itechspl-7nx").find("ul li a").each(function() {
            var href = $(this).attr("href");

            if (urlParams.has("sort")) {
                const sort = urlParams.get("sort");
                var url = window.location.protocol + "//" + window.location.host + window.location.pathname + href + "&" + "sort=" + sort;
                $(this).attr("href", url);
            }
        });

    });
})(jQuery, window, document);