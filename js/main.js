"use strict";
(function ($) {
  $("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51,
  });

  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // You are in mobile browser
    $(".fade-animate").addClass("hide-el").viewportChecker({
      classToAdd: "show-el animated fadeInUp",
      offset: 80,
    });
  }

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").on("click", function () {
    $(".navbar-toggle:visible").trigger("click");
  });

  // Offset for Main Navigation
  $("#mainNav").affix({
    offset: {
      top: 100,
    },
  });

  var $grid = $(".grid").masonry({
    itemSelector: ".grid-item",
    percentPosition: true,
    columnWidth: ".grid-sizer",
  });
  $grid.imagesLoaded().progress(function () {
    $grid.masonry();
  });

  var toolbar = document.querySelector(".portfolio-nav");
  toolbar.addEventListener("click", function (e) {
    $(".portfolio-nav a.active").removeClass("active");
    $(e.target).addClass("active");
    var anchor = $(e.target).attr("data-name");
    if (!anchor) {
      return false;
    }
    runFunc(anchor);
    e.preventDefault();
    e.stopPropagation();
  });

  var toolbar = document.querySelector("header");
  toolbar.addEventListener("click", function (e) {
    var $anchor = $(e.target).attr("href");
    if (!$anchor) {
      return false;
    }
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor).offset().top - 50,
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
    event.stopPropagation();
  });

  $(".carousel").bcSwipe({ threshold: 50 });
  jQuery(window).scroll(function () {
    var offset = 250;
    var duration = 300;
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".back-to-top").fadeIn(duration);
    } else {
      jQuery(".back-to-top").fadeOut(duration);
    }
  });
})(jQuery); // End of use strict

function runFunc(type) {
  switch (type) {
    case "all":
      $(".item1").show();
      $(".item2").show();
      $(".item3").show();
      $(".item4").show();
      $(".item5").show();
      $(".item6").show();
      break;
    case "first":
      $(".item1").hide();
      $(".item2").hide();
      $(".item3").hide();
      $(".item6").hide();
      $(".item4").show();
      $(".item5").show();
      break;
    case "second":
      $(".item4").hide();
      $(".item5").hide();
      $(".item6").hide();
      $(".item1").show();
      $(".item2").show();
      $(".item3").show();
      break;
    case "third":
      $(".item2").hide();
      $(".item3").hide();
      $(".item1").show();
      $(".item4").show();
      $(".item5").show();
      $(".item6").show();
      break;
  }
  $(".grid").masonry();
}
