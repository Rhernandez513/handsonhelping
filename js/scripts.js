// By Robert David Hernandez
// http://RobertHernandez.io/
// LICENSE under MIT License which can be found here http://RobertHernandez.io/license.html
// Requires JQuery 1.10+
//

/***************** Email ******************/
$(document).ready(function () {
  $('#emailForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url : $(this).attr('action') || window.location.pathname,
      type: "POST",
      data: $(this).serialize(),
      success: function (data) {
        alert("Thank you!");
      },
      error: function (jXHR, textStatus, errorThrown) {
        alert(errorThrown);
      }
    });
  });
});

/***************** Waypoints ******************/

$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });

});

/***************** Smooth Scrolling ******************/

$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
  });

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".img").click(function(e){
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".img").mouseenter(function(){
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
      $(this).removeClass("hover");
    });
  }
});

/***************** Flexsliders ******************/

$(window).load(function() {

  $('#portfolioSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: false,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

  $('#servicesSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

  $('#teamSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

});

/***************** FancyBox ******************/
$(document).ready(function() {
  $(".fancybox").fancybox();
  $(".single_image_1").fancybox({
    helpers: {
      title : {
        type : 'float'
      }
    }
  });

  $("#single_2").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',

    helpers : {
      title : {
        type : 'inside'
      }
    }
  });

  $("#single_3").fancybox({
    openEffect : 'none',
    closeEffect: 'none',
    helpers : {
      title : {
        type : 'outside'
      }
    }
  });

  $("#single_4").fancybox({
    helpers : {
      title : {
        type : 'over'
      }
    }
  });
});
