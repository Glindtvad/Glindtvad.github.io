
function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
jQuery(window).resize(function(){
  var vw = (viewport().width/100);
  jQuery('html').css({
      'font-size' : vw + 'px'
  });
});