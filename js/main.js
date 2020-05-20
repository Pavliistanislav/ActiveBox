$(function () {
  "use strict"

  //Fixed
  var header = $("#header")
  var intro = $("#intro")
  var introHeight = intro.innerHeight()
  var scrollPos = $(window).scrollTop()

  checkScroll(scrollPos, introHeight)

  $(window).on("scroll resize", function () {
    introHeight = intro.innerHeight()
    scrollPos = $(this).scrollTop()

    checkScroll(scrollPos, introHeight)
  })

  function checkScroll(scrollPos, introHeight) {
    if (scrollPos > introHeight) {
      header.addClass("fixed")
    } else {
      header.removeClass("fixed")
    }
  }

  //Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault()

    var elementId = $(this).data("scroll")
    var elementOfSet = $(elementId).offset().top

    nav.removeClass("show")

    $("html, body").animate(
      {
        scrollTop: elementOfSet - 39,
      },
      800,
    )
  })

  //NavMenu
  var nav = $("#nav")
  var navMenu = $("#navMenu")

  navMenu.on("click", function (event) {
    event.preventDefault()
    console.log(event.preventDefault())

    nav.toggleClass("show")
  })

 

  //Reviews

  var slider = $("#reviewsSlider")
  slider.slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
  })
})
