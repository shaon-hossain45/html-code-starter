/**
 * BitSecure Dark Mode
 * 
 * @package    bitsecurepublic
 * @subpackage bitsecurepublic/assets/js/lib
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://bitsecurepublic.com/
 */

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$(function() {

    // Check for dark mode preference at the OS level
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    //console.log(prefersDarkScheme);

    // Get the user's theme preference from local storage, if it's available
    const currentTheme = localStorage.getItem("theme");
    //console.log("theme= " + currentTheme);

    const bitsecuredm = readCookie("bitsecure-dark-mode");
    //console.log("cookie= " + bitsecuredm);

    //var isDarkClass = document.documentElement.classList.contains('bitsecure-dark');
    //console.log("class= " + isDarkClass);

    if (bitsecuredm == "false") {
        document.documentElement.classList.remove("bitsecure-dark");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-sun").classList.add("bitsecure-active");
        document.documentElement.querySelector("#bitsecureid_dark").classList.remove("bitsecure-darkmode");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-moon").classList.remove("bitsecure-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else if (((currentTheme == "dark") || (prefersDarkScheme.matches)) && (bitsecuredm == null)) {
        // ...let's toggle the .dark-theme class on the body
        document.documentElement.classList.toggle("bitsecure-dark");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-sun").classList.remove("bitsecure-active");
        document.documentElement.querySelector("#bitsecureid_dark").classList.toggle("bitsecure-darkmode");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-moon").classList.toggle("bitsecure-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else if (bitsecuredm == "true") {
        // ...let's toggle the .dark-theme class on the body
        //document.documentElement.classList.toggle("bitsecure-dark");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-sun").classList.remove("bitsecure-active");
        document.documentElement.querySelector("#bitsecureid_dark").classList.toggle("bitsecure-darkmode");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-moon").classList.toggle("bitsecure-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else {
        document.documentElement.classList.remove("bitsecure-dark");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-sun").classList.add("bitsecure-active");
        document.documentElement.querySelector("#bitsecureid_dark").classList.remove("bitsecure-darkmode");
        document.documentElement.querySelector("#bitsecureid_dark .bitsecure-dlw a.bitsecure-moon").classList.remove("bitsecure-active");
    }

    var theme = currentTheme;
    // Toggle button
    var darkmodeElement = $("#bitsecureid_dark");

    // Dark
    darkmodeElement.children(".bitsecure-dlw").find("a.bitsecure-moon").on("click", function(event) {
        var thisby = $(this);
        var body = thisby.closest("html");
        if (!thisby.hasClass("bitsecure-active") && (!body.hasClass("bitsecure-dark"))) {
            thisby.toggleClass("bitsecure-active");
            thisby.closest(darkmodeElement).toggleClass("bitsecure-darkmode");
            thisby.siblings("a.bitsecure-sun").removeClass("bitsecure-active");
            thisby.closest("html").toggleClass("bitsecure-dark");
        }
        createCookie("bitsecure-dark-mode", "true");
        theme = document.documentElement.classList.contains("bitsecure-dark") ? "dark" : "light";
        //console.log(theme);
    });

    // Light
    darkmodeElement.children(".bitsecure-dlw").find("a.bitsecure-sun").on("click", function(event) {
        var thisby = $(this);
        var body = thisby.closest("html");
        if (!thisby.hasClass("bitsecure-active") && (body.hasClass("bitsecure-dark"))) {
            thisby.toggleClass("bitsecure-active");
            thisby.closest(darkmodeElement).removeClass("bitsecure-darkmode");
            thisby.siblings("a.bitsecure-moon").removeClass("bitsecure-active");
            thisby.closest("html").removeClass("bitsecure-dark");
        }
        createCookie("bitsecure-dark-mode", "false");
        theme = document.documentElement.classList.contains("bitsecure-dark") ? "dark" : "light";
        //console.log(theme);
    });

    localStorage.setItem("theme", theme);

});