/**
 * iTechPublic Dark Mode
 * 
 * @package    itechpublic
 * @subpackage itechpublic/assets/js/lib
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://itechpublic.com/
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

    const itechdm = readCookie("itech-dark-mode");
    //console.log("cookie= " + itechdm);

    //var isDarkClass = document.documentElement.classList.contains('itech-dark');
    //console.log("class= " + isDarkClass);

    if (itechdm == "false") {
        document.documentElement.classList.remove("itech-dark");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-sun").classList.add("itech-active");
        document.documentElement.querySelector("#itechid_dark").classList.remove("itech-darkmode");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-moon").classList.remove("itech-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else if (((currentTheme == "dark") || (prefersDarkScheme.matches)) && (itechdm == null)) {
        // ...let's toggle the .dark-theme class on the body
        document.documentElement.classList.toggle("itech-dark");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-sun").classList.remove("itech-active");
        document.documentElement.querySelector("#itechid_dark").classList.toggle("itech-darkmode");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-moon").classList.toggle("itech-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else if (itechdm == "true") {
        // ...let's toggle the .dark-theme class on the body
        //document.documentElement.classList.toggle("itech-dark");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-sun").classList.remove("itech-active");
        document.documentElement.querySelector("#itechid_dark").classList.toggle("itech-darkmode");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-moon").classList.toggle("itech-active");
        // Otherwise, if the user's preference in localStorage is light...
    } else {
        document.documentElement.classList.remove("itech-dark");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-sun").classList.add("itech-active");
        document.documentElement.querySelector("#itechid_dark").classList.remove("itech-darkmode");
        document.documentElement.querySelector("#itechid_dark .itech-dlw a.itech-moon").classList.remove("itech-active");
    }

    var theme = currentTheme;
    // Toggle button
    var darkmodeElement = $("#itechid_dark");

    // Dark
    darkmodeElement.children(".itech-dlw").find("a.itech-moon").on("click", function(event) {
        var thisby = $(this);
        var body = thisby.closest("html");
        if (!thisby.hasClass("itech-active") && (!body.hasClass("itech-dark"))) {
            thisby.toggleClass("itech-active");
            thisby.closest(darkmodeElement).toggleClass("itech-darkmode");
            thisby.siblings("a.itech-sun").removeClass("itech-active");
            thisby.closest("html").toggleClass("itech-dark");
        }
        createCookie("itech-dark-mode", "true");
        theme = document.documentElement.classList.contains("itech-dark") ? "dark" : "light";
        //console.log(theme);
    });

    // Light
    darkmodeElement.children(".itech-dlw").find("a.itech-sun").on("click", function(event) {
        var thisby = $(this);
        var body = thisby.closest("html");
        if (!thisby.hasClass("itech-active") && (body.hasClass("itech-dark"))) {
            thisby.toggleClass("itech-active");
            thisby.closest(darkmodeElement).removeClass("itech-darkmode");
            thisby.siblings("a.itech-moon").removeClass("itech-active");
            thisby.closest("html").removeClass("itech-dark");
        }
        createCookie("itech-dark-mode", "false");
        theme = document.documentElement.classList.contains("itech-dark") ? "dark" : "light";
        //console.log(theme);
    });

    localStorage.setItem("theme", theme);

});