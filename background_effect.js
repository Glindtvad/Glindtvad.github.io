
jQuery(document).scroll(function() {
  var fromTopPx = 3500; // distance to trigger
  var scrolledFromtop = jQuery(document).scrollTop();

  if (scrolledFromtop > fromTopPx) {
    jQuery('body').addClass('scrolled');
  }
  else {
    jQuery('body').removeClass('scrolled');
  }
});