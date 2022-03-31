/**
 * BitSecure Main js
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
                    $("body").removeClass("bitsecurescr-xre");
                    $("header").removeClass("bitsecurescr-xnu");
                } else {
                    $("body").addClass("bitsecurescr-xre");
                    $("header").addClass("bitsecurescr-xnu");
                }
            } else {
                // When scroll top to bottom
                $("body").removeClass("bitsecurescr-xre");
                $("header").removeClass("bitsecurescr-xnu");
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
        $("#bitsecureid_uba").on("click", function(event) {
            var thisby = $(this);
            // Thumb bar animation
            thisby.toggleClass("bitsecure-active");
            $("#bitsecureid_xhw").addClass("bitsecure-active");
            // Modal responsive nav part
            thisby.closest("body").find(".bitsecurepart-8xo").addClass("bitsecure-active");
            // White flow animation part
            thisby.closest("body").addClass("bitsecurescr-2mv");
        });

        // Thumb crosbar click
        $("#bitsecureid_xhw").on("click", function(event) {
            var thisby = $(this);
            thisby.removeClass("bitsecure-active");
            // Thumb bar remove
            $("#bitsecureid_uba").removeClass("bitsecure-active");
            // Modal responsive nav part remove
            thisby.closest("body").find(".bitsecurepart-8xo").removeClass("bitsecure-active");
            // White flow animation part remove
            thisby.closest("body").removeClass("bitsecurescr-2mv");
        });
    });

    /**
     * Search modal open
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#bitsecureid_1fc").on("click", function(event) {
            event.stopPropagation();

            var thisby = $(this);
            //var navdropdown = $(".bitsecureout-mrp");
            var form = $("form#bitsecureid_ohk");
            var searchsec = $(".cms-modal-search");
            var seacrhcon = $(".cms-modal-content");
            //var searchclose = $("#bitsecureid_yqr");

            //searchclose.addClass("bitsecure-active");
            //form[0].reset();
            //navdropdown.removeClass("bitsecure-active");
            thisby.closest("body").toggleClass("bitsecurescr-vbn");
            searchsec.toggleClass("bitsecure-active");

            // Search content stop
            seacrhcon.click(function(event) {
                event.stopPropagation();
            });

            // Close search modal
            $("body,.cms-modal-search").click(function() {
                //$("body").removeClass("bitsecurescr-vbn");
                searchsec.removeClass("bitsecure-active");
                //searchclose.removeClass("bitsecure-active");
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
        var scrollid = $("#bitsecureid_lxo");
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 500) {
                scrollid.addClass("bitsecure-active");
            } else {
                scrollid.removeClass("bitsecure-active");
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
        var navlidrop = $("#bitsecureid_qv4 li.dropdown");
        navlidrop.removeClass("bitsecure-active");
        navlidrop.on("click", function(event) {
            // Event only work in this - not working children element
            if (event.target !== this)
                return;
            var thisby = $(this);
            if (thisby.hasClass("bitsecure-active")) {
                thisby.removeClass("bitsecure-active");
                thisby.find(".bitsecurepart-vxy").slideUp();
            } else {
                thisby.siblings().removeClass("bitsecure-active");
                thisby.siblings().children(".bitsecurepart-vxy").slideUp();
                thisby.toggleClass("bitsecure-active");
                thisby.find(".bitsecurepart-vxy").slideToggle();
            }
        });
    });

    /**
     * Dropdown navmore button & extra button
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#bitsecureid_7kn, #bitsecureid_o1g, #bitsecureid_lkd, #bitsecureid_wrq").on("click", function(event) {
            event.stopPropagation();

            var searchsec = $(".bitsecuresec-hud");
            var form = $("form#bitsecureid_ohk");

            $("body").removeClass("bitsecurescr-vbn");
            searchsec.removeClass("bitsecure-active");
            form[0].reset();

            var thisby = $(this);
            var navdropdown = $(".bitsecureout-mrp");
            navdropdown.not(thisby.next()).removeClass("bitsecure-active");
            thisby.next(".bitsecureout-mrp").toggleClass("bitsecure-active");

            navdropdown.click(function(event) {
                event.stopPropagation();
            });

            $("body").click(function() {
                navdropdown.removeClass("bitsecure-active");
            });

        });
    });

    /**
     * Focus search string
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("#bitsecureid_ohk input[type='search']").focus(function() {
            var thisby = $(this);
            thisby.addClass("bitsecure-active");
            thisby.closest("form").find("button.bitsecure-xu1").addClass("bitsecure-active");
        });

        $("#bitsecureid_ohk input[type='search']").blur(function() {
            var thisby = $(this);
            var inputVal = thisby.val();
            if (inputVal) {
                thisby.addClass("bitsecure-active");
                thisby.closest("form").find("button.bitsecure-xu1").addClass("bitsecure-active");
            } else {
                thisby.removeClass("bitsecure-active");
                thisby.closest("form").find("button.bitsecure-xu1").removeClass("bitsecure-active");
            }
        });
        var inputVal = $("#bitsecureid_ohk input[type='search']").val();
    });

    /**
     * Dependable search select type
     * @param  {[type]}   [description]
     * @return {[type]}   [description]
     */
    $(function() {
        $("select#bitsecureid_4bv, select#bitsecureid_iye").change(function() {
            var thisby = $(this);
            var selected = thisby.children("option:selected").val();
            if (selected == "phone") {
                thisby.next("select").removeAttr("disabled");
            } else {
                thisby.next("select.bitsecure-dependable").prop("disabled", true);
            }
        }).trigger("change");
    });

    $(document).ready(function() {
        $("#bitsecureid_jfj").owlCarousel({
            loop: true,
            //margin: 10,
            items: 1,
            nav: true,
            dots: true,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            smartSpeed: 1000,
            //fluidSpeed: 5,
            //autoHeight: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
        $("#bitsecureid_jij").owlCarousel({
            loop: true,
            margin: 20,
            items: 6,
            nav: false,
            dots: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            smartSpeed: 1000,
            //fluidSpeed: 5,
            //autoHeight: true,
            responsive: {
                0: {
                    items: 3,
                    nav: false
                },
                600: {
                    items: 4,
                    nav: false
                },
                1000: {
                    items: 6,
                    nav: false,
                    loop: true
                }
            }
        });
    });
    $("#bitsecureid_hfj").owlCarousel({
        loop: true,
        //margin: 10,
        items: 1,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        //autoplay: true,
        //autoplayTimeout: 3000,
        //autoplayHoverPause: true,
        responsiveClass: true,
        smartSpeed: 1000,
        //fluidSpeed: 5,
        //autoHeight: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

})(jQuery, window, document);