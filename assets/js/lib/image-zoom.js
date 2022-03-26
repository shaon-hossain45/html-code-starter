/**
 * BitSecure Image Zoom
 * 
 * @package    bitsecurepublic
 * @subpackage bitsecurepublic/assets/js/lib
 * @since      1.0.0
 * @author     Shaon Hossain
 * @license    GNU General Public License v2 or later
 * @link       https://bitsecurepublic.com/
 */

/**
 * Gallery Zoom by iv viewer plugin - js
 * @param  {Function}   [description]
 * @return {[type]}     [description]
 */
$(function() {

    const viewer = new ImageViewer.FullScreenViewer();

    Array.from(document.querySelectorAll(".penable-items")).forEach(elem => {
        elem.closest(".bitsecurescr-zoom").addEventListener("click", function(ev) {
            const imgSrc = elem.src;
            const highResolutionImage = elem.getAttribute("data-hrsrc");
            viewer.show(imgSrc, highResolutionImage);
        });
    });

});