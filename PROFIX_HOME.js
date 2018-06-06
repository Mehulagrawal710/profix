
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $("#yt").removeClass("background");
      $("#yt").addClass("testbg");	
      $("#tt").removeClass("logo");
      $("#tt").addClass("test");
    } else {
      $("#yt").removeClass("testbg");
      $("#yt").addClass("background");
      $("#tt").removeClass("test");
      $("#tt").addClass("logo");
    }
  });
});

