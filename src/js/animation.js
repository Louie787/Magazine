const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const tl4 = new TimelineMax();
const tl5 = new TimelineMax();
const tl6 = new TimelineMax();
const controller = new ScrollMagic.Controller();

// Hero
const heroBefore = CSSRulePlugin.getRule(".hero:before");
const heroAfter = CSSRulePlugin.getRule(".hero:after");
const heroNavItems = $(".hero .nav .nav__list-item");

const heroTween = tl
  .to(".loader", 0.001, { display: "none" })
  .from(".hero", 0.8, { backgroundPositionX: "-200vw" })
  .from(".hero", 0.2, { borderWidth: "0" })
  .from(".gallery", 0.2, { borderWidth: "0" }, "-=0.2")
  .from(".blog", 0.2, { borderWidth: "0" }, "-=0.2")
  .from(".articles", 0.2, { borderWidth: "0" }, "-=0.2")
  .from(".magazine-section", 0.2, { borderWidth: "0" }, "-=0.2")
  .from(".hero .border-text_top", 0.5, { x: "-20px", opacity: 0 })
  .from(
    ".articles .border-text_bottom",
    0.5,
    { x: "-20px", opacity: 0 },
    "-=0.5"
  )
  .from(heroBefore, 0.3, { bottom: "-12.6565vw" }, "-=0.4")
  .from(heroAfter, 0.3, { bottom: "-240px" }, "-=0.25")
  .from(".line-vertical", 2, { y: "-100%" }, "-=0.1")
  .from(".hero .line-horizontal", 0.4, { x: "-100vw" }, "-=1.85")
  .from(".hero .rotated-text_bottom", 0.5, { y: "20px", opacity: 0 }, "-=1.85")
  .from(".hero .rotated-text_top", 0.5, { y: "20px", opacity: 0 }, "-=1.7")
  .to(".hero .hamburger", 0.25, { opacity: 1 }, "-=1.6")
  .from(".hero .nav > .logo", 0.25, { x: "-30px", opacity: 0 }, "-=1.6")
  .staggerFrom(heroNavItems, 0.25, { x: "20px", opacity: 0 }, 0.1, "-=1.2")
  .from(".hero .magazine__title", 0.5, { y: "20xp", opacity: 0 }, "-=0.9")
  .from(
    ".hero .magazine__article-date",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.7"
  )
  .from(
    ".hero .magazine__article-heading",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.6"
  )
  .from(
    ".hero .magazine__article-text",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.5"
  );

const heroScene = new ScrollMagic.Scene({
  triggerElement: "#hero",
  reverse: false
})
  .setTween(heroTween)
  .addTo(controller);

// Gallery
const galleryItems = $(".gallery__slider-item");
const galleryLinks = $(".gallery__slider-link");
const galleryTexts = $(".gallery__slider-text");

const tweenGallery = tl2
  .from(".gallery__title", 0.5, { x: "40px", opacity: 0 })
  .staggerFrom(galleryItems, 0.6, { x: "100vw", opacity: 0 }, 0.2, "-=0.3")
  .staggerFrom(galleryTexts, 0.5, { y: "20px", opacity: 0 }, 0.2, "-=0.8")
  .staggerFrom(galleryLinks, 0.3, { opacity: 0 }, 0.2, "-=1.2");

const galleryScene = new ScrollMagic.Scene({
  triggerElement: "#gallery",
  reverse: false
})
  .setTween(tweenGallery)
  .addTo(controller);

// Blog
const blogParagraphs = $(".blog__text-col p");

const tweenBlog = tl3
  .from(".blog__breadcrumbs", 0.4, { x: "30px", opacity: 0 })
  .from(".blog__rotated-text", 0.4, { y: "30px", opacity: 0 }, "-=0.2")
  .from(".blog__title", 0.5, { x: "40px", opacity: 0 }, "-=0.1")
  .from(".blog__theme-descr", 0.5, { x: "40px", opacity: 0 }, "-=0.3")
  .staggerFrom(blogParagraphs, 0.7, { y: "40px", opacity: 0 }, 0.1, "-=0.3");

const blogScene = new ScrollMagic.Scene({
  triggerElement: "#blog",
  reverse: false
})
  .setTween(tweenBlog)
  .addTo(controller);

// Articles
const articleCards = $(".article-card");
const articleImages = $(".article-card__img");
const articleTitles = $(".article-card__title");
const articleTexts = $(".article-card__text");
const articleAuthors = $(".article-card__author");
const articleLinks = $(".article-card__link");

const tweenArticles = tl4
  .staggerFrom(articleCards, 0.7, { x: "100vw", opacity: 0 }, 0.2)
  .staggerFrom(articleImages, 0.5, { scale: 1.5, opacity: 0 }, 0.2, "-=1.2")
  .staggerFrom(articleTitles, 0.5, { y: "20px", opacity: 0 }, 0.2, "-=1.2")
  .staggerFrom(articleTexts, 0.5, { y: "20px", opacity: 0 }, 0.2, "-=1.2")
  .staggerFrom(articleAuthors, 0.5, { y: "20px", opacity: 0 }, 0.2, "-=1.4")
  .staggerFrom(articleLinks, 0.6, { opacity: 0 }, 0.2, "-=1.4");

const articlesScene = new ScrollMagic.Scene({
  triggerElement: "#articles",
  reverse: false
})
  .setTween(tweenArticles)
  .addTo(controller);

// Magazine section
const tweenMagazineSec = tl5
  .from(".magazine-section .line-horizontal", 0.4, { x: "-100vw" }, "+=0.2")
  .from(
    ".magazine-section .rotated-text_bottom",
    0.5,
    {
      y: "20px",
      opacity: 0
    },
    "-=0.2"
  )
  .from(
    ".magazine-section .rotated-text_top",
    0.5,
    { y: "20px", opacity: 0 },
    "-=0.35"
  )
  .from(
    ".magazine-section .magazine__title",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.2"
  )
  .from(
    ".magazine-section .magazine__article-date",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.3"
  )
  .from(
    ".magazine-section .magazine__article-heading",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.4"
  )
  .from(
    ".magazine-section .magazine__article-text",
    0.5,
    { y: "20xp", opacity: 0 },
    "-=0.4"
  );

const magazineSecScene = new ScrollMagic.Scene({
  triggerElement: "#magazine",
  reverse: false
})
  .setTween(tweenMagazineSec)
  .addTo(controller);

// Footer
const footerSocials = $(".footer__social-item");

const tweenFooter = tl6
  .from(".footer__logo", 0.25, { x: "-30px", opacity: 0 })
  .from(".footer__text-wrapper", 0.4, { y: "30px", opacity: 0 }, "-=0.05")
  .from(".footer__form", 0.4, { x: "40px", opacity: 0 }, "-=0.15")
  .from(".footer__form-text", 0.3, { x: "20px", opacity: 0 }, "-=0.3")
  .staggerFrom(
    footerSocials,
    0.4,
    { y: "20px", opacity: 0, ease: Back.easeOut.config(3) },
    0.2,
    "-=0.2"
  );

const footerScene = new ScrollMagic.Scene({
  triggerElement: ".footer",
  reverse: false
})
  .setTween(tweenFooter)
  .addTo(controller);
