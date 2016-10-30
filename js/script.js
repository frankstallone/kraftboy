/* Author: Frank Stallone

*/


$(window).load(function() {
  $('.testimonials').flexslider({
	  animation: "slide",
	  pauseOnHover: true,
	  randomize: true,
	  directionNav: false,
	  controlNav: false,
	  slideshowSpeed: 10000,
  });
});

/*
 *
 * Shadowbox 
 *
 */

Shadowbox.init();
window.onload = function() {

    // set up all anchor elements with a "photo-gallery" class to work with Shadowbox
    Shadowbox.setup("a.photo-gallery", {
        gallery:	"Photographs",
    });

};  


/*
 *
 * Spam Proof Email Links 
 *
 */

var nic="bill";
var at="@";
var dom="kraftboy.com"














