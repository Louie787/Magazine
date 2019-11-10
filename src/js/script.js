$(function() {
  $(".gallery__slider").slick({
    arrows: false,
    infinite: true,
    slidesToScroll: 4,
    slidesToShow: 4,
    variableWidth: true
  });

  $(".articles__slider").slick({
    autoplay: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplaySpeed: 5000,
    variableWidth: true
  });

  $(".gallery__slider-link").magnificPopup({
    type: "image",
    callbacks: {
      open: () => {
        tl2.fromTo(
          ".mfp-container",
          0.3,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1 }
        );
      }
    }
  });

  $(".nav__list-link, .footer__logo").on("click", function() {
    if ($(".hamburger").hasClass("hamburger_active")) {
      $(".hamburger").removeClass("hamburger_active");
      // Hamburger animation
      tl.to(".hamburger__line:first-of-type", 0.2, { rotation: 0 })
        .to(".hamburger__line:last-of-type", 0.2, { rotation: 0 }, "-=0.2")
        .to(".hamburger__line:first-of-type", 0.2, { y: "0" })
        .to(".hamburger__line:last-of-type", 0.2, { y: "0" }, "-=0.2")
        .to(".hamburger__line:nth-of-type(2)", 0.2, { opacity: "1" }, "-=0.1")
        .to(".hamburger", 0.2, { backgroundColor: "#cc171e" }, "-=0.3")
        .to("nav", 0.3, { transform: "translateX(-101vw)" }, "-=0.2");

      $("body").css("overflow-y", "initial");
    }
    if (this.hash !== "") {
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top
        },
        600
      );
    }
  });

  $(".hamburger").on("click", function() {
    if ($(this).hasClass("hamburger_active")) {
      $(this).removeClass("hamburger_active");

      // Hamburger animation
      tl.to(".hamburger__line:first-of-type", 0.2, { rotation: 0 })
        .to(".hamburger__line:last-of-type", 0.2, { rotation: 0 }, "-=0.2")
        .to(".hamburger__line:first-of-type", 0.2, { y: "0" })
        .to(".hamburger__line:last-of-type", 0.2, { y: "0" }, "-=0.2")
        .to(".hamburger__line:nth-of-type(2)", 0.2, { opacity: "1" }, "-=0.1")
        .to(".hamburger", 0.2, { backgroundColor: "#cc171e" }, "-=0.3")
        .to("nav", 0.3, { transform: "translateX(-101vw)" }, "-=0.2");

      $("body").css("overflow-y", "initial");
    } else {
      $(this).addClass("hamburger_active");

      // Hamburger animation
      tl.to(".hamburger__line:first-of-type", 0.2, { y: "9.5px" })
        .to(".hamburger__line:last-of-type", 0.2, { y: "-9.5px" }, "-=0.2")
        .to(".hamburger__line:nth-of-type(2)", 0.2, { opacity: "0" }, "-=0.1")
        .to(".hamburger__line:first-of-type", 0.2, { rotation: 45 })
        .to(".hamburger__line:last-of-type", 0.2, { rotation: -45 }, "-=0.2")
        .to(".hamburger", 0.2, { backgroundColor: "#060f16" }, "-=0.4")
        .to("nav", 0.3, { transform: "translateX(0)" }, "-=0.2")
        .staggerFrom(heroNavItems, 0.25, { y: "25px", opacity: "0" }, 0.1);

      $("body").css("overflow-y", "hidden");
    }
  });
});
