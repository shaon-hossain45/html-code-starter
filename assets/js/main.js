/**
 * iTechPublic Main js
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
     * Scroll bottom to top header animation
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        // Justify constant variable
        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var stpvalue = $(this).scrollTop();
            // When scroll bottom to top
            if (stpvalue < lastScrollTop) {
                // Topper finishing remove
                if (stpvalue <= 750) {
                    $("body").removeClass("itechscr-xre");
                    $("header").removeClass("itechscr-xnu");
                } else {
                    $("body").addClass("itechscr-xre");
                    $("header").addClass("itechscr-xnu");
                }
            } else {
                // When scroll top to bottom
                $("body").removeClass("itechscr-xre");
                $("header").removeClass("itechscr-xnu");
            }
            // Store data
            lastScrollTop = stpvalue;
        });
    });

    /**
     * Hamburger responsive navmenu
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        // Hamburger click
        $("#itechid_uba").on("click", function(event) {
            var thisby = $(this);
            // Thumb bar animation
            thisby.toggleClass("itech-active");
            $("#itechid_xhw").addClass("itech-active");
            // Modal responsive nav part
            thisby.closest("body").find(".itechpart-8xo").addClass("itech-active");
            // White flow animation part
            thisby.closest("body").addClass("itechscr-2mv");
        });

        // Thumb crosbar click
        $("#itechid_xhw").on("click", function(event) {
            var thisby = $(this);
            thisby.removeClass("itech-active");
            // Thumb bar remove
            $("#itechid_uba").removeClass("itech-active");
            // Modal responsive nav part remove
            thisby.closest("body").find(".itechpart-8xo").removeClass("itech-active");
            // White flow animation part remove
            thisby.closest("body").removeClass("itechscr-2mv");
        });
    });

    /**
     * Search modal open
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#itechid_4xl, #itechid_v4a").on("click", function(event) {
            event.stopPropagation();

            var thisby = $(this);
            var navdropdown = $(".itechout-mrp");
            var form = $("form#itechid_ohk");
            var searchsec = $(".itechsec-hud");
            var seacrhcon = $(".itechsec-hud .itech-pxb");
            var searchclose = $("#itechid_yqr");
            searchclose.addClass("itech-active");
            form[0].reset();
            navdropdown.removeClass("itech-active");
            thisby.closest("body").toggleClass("itechscr-vbn");
            searchsec.toggleClass("itech-active");

            // Search content stop
            seacrhcon.click(function(event) {
                event.stopPropagation();
            });

            // Close search modal
            $("body,#itechid_k6m").click(function() {
                $("body").removeClass("itechscr-vbn");
                searchsec.removeClass("itech-active");
                searchclose.removeClass("itech-active");
                form[0].reset();
            });

        });
    });

    /**
     * Back bottom to top
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        var scrollid = $("#itechid_lxo");
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 500) {
                scrollid.addClass("itech-active");
            } else {
                scrollid.removeClass("itech-active");
            }
        });
        scrollid.on("click", function() {
            $("html, body").animate({ scrollTop: 0 }, 800);
        });
    });

    /**
     * Responsive dropdown submenu
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        var navlidrop = $("#itechid_qv4 li.dropdown");
        navlidrop.removeClass("itech-active");
        navlidrop.on("click", function(event) {
            // Event only work in this - not working children element
            if (event.target !== this)
                return;
            var thisby = $(this);
            if (thisby.hasClass("itech-active")) {
                thisby.removeClass("itech-active");
                thisby.find(".itechpart-vxy").slideUp();
            } else {
                thisby.siblings().removeClass("itech-active");
                thisby.siblings().children(".itechpart-vxy").slideUp();
                thisby.toggleClass("itech-active");
                thisby.find(".itechpart-vxy").slideToggle();
            }
        });
    });

    /**
     * Compare modal
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        var modalWrap = $("#itechid_grt");
        var closeElement = $("#itechid_vrc");
        var balanceElement = $("#itechid_wco");
        var compareButton = $("#itechid_5gv");

        $(".itechspl-cxz input[type='checkbox'],.itechspl-z9b input[type='checkbox']").change(function() {
            // Modal open
            if ($(this).is(":checked")) {
                if (!modalWrap.hasClass("itech-active")) {
                    modalWrap.addClass("itech-active");
                    closeElement.addClass("itech-active");
                }
            }
        });
        // Close button
        closeElement.on("click", function(event) {
            var thisby = $(this);
            thisby.removeClass("itech-active");
            thisby.closest("body").find(".itechsec-vyc").removeClass("itech-active");
        });

        var liLength = modalWrap.find("ul").children().length;

        if (liLength > 0) {
            balanceElement.addClass("itech-active");
        }
        if (liLength > 3) {
            compareButton.closest(".itechout-2v9").children(".itech-alert").addClass("itech-active");
        }
        // Balance button
        balanceElement.on("click", function(event) {
            modalWrap.toggleClass("itech-active");
            closeElement.toggleClass("itech-active");
        });
    });

    /**
     * Popular tab setting active class adjust
     * @param  {[type]}     [description]
     * @return {[type]}     [description]
     */
    $(function() {
        var current = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        var semi_current = window.location.pathname + window.location.search;
        $("#itechid_low li a").each(function() {
            var $this = $(this);
            // if the current path is like this link, make it active
            if (($this.attr("href") == current) || ($this.attr("href") == semi_current)) {
                $this.parent("li").addClass("itech-active");
            }
        });
        $(".itechpin-zju a").each(function() {
            var $this = $(this);
            // if the current path is like this link, make it active
            if (($this.attr("href") == current) || ($this.attr("href") == semi_current)) {
                $this.addClass("itech-active");
            }
        })
    });

    /**
     * Dropdown navmore button & extra button
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#itechid_7kn, #itechid_o1g, #itechid_lkd, #itechid_wrq").on("click", function(event) {
            event.stopPropagation();

            var searchsec = $(".itechsec-hud");
            var form = $("form#itechid_ohk");

            $("body").removeClass("itechscr-vbn");
            searchsec.removeClass("itech-active");
            form[0].reset();

            var thisby = $(this);
            var navdropdown = $(".itechout-mrp");
            navdropdown.not(thisby.next()).removeClass("itech-active");
            thisby.next(".itechout-mrp").toggleClass("itech-active");

            navdropdown.click(function(event) {
                event.stopPropagation();
            });

            $("body").click(function() {
                navdropdown.removeClass("itech-active");
            });

        });
    });

    /**
     * Focus search string
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#itechid_ohk input[type='search']").focus(function() {
            var thisby = $(this);
            thisby.addClass("itech-active");
            thisby.closest("form").find("button.itech-xu1").addClass("itech-active");
        });

        $("#itechid_ohk input[type='search']").blur(function() {
            var thisby = $(this);
            var inputVal = thisby.val();
            if (inputVal) {
                thisby.addClass("itech-active");
                thisby.closest("form").find("button.itech-xu1").addClass("itech-active");
            } else {
                thisby.removeClass("itech-active");
                thisby.closest("form").find("button.itech-xu1").removeClass("itech-active");
            }
        });
        var inputVal = $("#itechid_ohk input[type='search']").val();
    });

    /**
     * Dependable search select type
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("select#itechid_4bv, select#itechid_iye").change(function() {
            var thisby = $(this);
            var selected = thisby.children("option:selected").val();
            if (selected == "phone") {
                thisby.next("select").removeAttr("disabled");
            } else {
                thisby.next("select.itech-dependable").prop("disabled", true);
            }
        }).trigger("change");
    });

    /**
     * Compare reset button popover
     * @param  {String}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("button.itechpart-fux[data-toggle='popover']").popover();
    });

})(jQuery, window, document);