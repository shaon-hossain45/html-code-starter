(function($) {
    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    $.fn.showclock = function() {

        var currentDate = new Date();
        var fieldDate = $(this).data('date').split('-');
        // Modify by shaon
        var fieldTime = [0, 0, 0];
        if ($(this).data('time') != undefined)
            fieldTime = $(this).data('time').split(':');
        // Modify by shaon
        var futureDate = new Date(fieldDate[0], fieldDate[1] - 1, fieldDate[2], fieldTime[0], fieldTime[1], fieldTime[2]);
        var seconds = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        // Modify by shaon
        if (seconds <= 0 || isNaN(seconds)) {
            //this.hide();
            this.closest(".bitsecure-ryl").hide();
            return this;
        }

        var days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;

        var hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;

        var minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);

        var html = "";

        if (days != 0) {
            html += "<div class='countdown-container days'>"
            html += "<span class='countdown-heading days-top'>D</span>";
            html += "<span class='countdown-value days-bottom'>" + pad(days) + "</span>";
            html += "</div>";
        }

        html += "<div class='countdown-container hours'>"
        html += "<span class='countdown-heading hours-top'>H</span>";
        html += "<span class='countdown-value hours-bottom'>" + pad(hours) + "</span>";
        html += "</div>";

        html += "<div class='countdown-container minutes'>"
        html += "<span class='countdown-heading minutes-top'>M</span>";
        html += "<span class='countdown-value minutes-bottom'>" + pad(minutes) + "</span>";
        html += "</div>";

        html += "<div class='countdown-container seconds'>"
        html += "<span class='countdown-heading seconds-top'>S</span>";
        html += "<span class='countdown-value seconds-bottom'>" + pad(seconds) + "</span>";
        html += "</div>";

        this.html(html);
    };

    $.fn.countdown = function() {
        var el = $(this);
        el.showclock();
        setInterval(function() {
            el.showclock();
        }, 1000);

    }

}(jQuery));

jQuery(document).ready(function() {
    if (jQuery(".countdown").length > 0) {
        jQuery(".countdown").each(function() {
            jQuery(this).countdown();
        })

    }
})