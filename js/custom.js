var gradient = new Gradient()
gradient.initGradient('#gradient-canvas');

var gradient1 = new Gradient()
gradient1.initGradient('#gradient-canvas-payment');

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var hdrHt = $(".header-wrapper").height();
  if (scroll > hdrHt) {
      $(".header-wrapper").addClass("header-fixed");
  } else {
      $(".header-wrapper").removeClass("header-fixed");
  }
});

$(document).ready(function(){
  $('.stripe-section .action a').first().addClass("active");
  // $(".action a").click(function(e){
  //     e.preventDefault(); // Prevent default link action
      
  //     var slideIndex = $(this).data("slide"); // Get the slide number from data attribute
      
  //     $(".slide-button button").removeClass("active"); // Remove active class from all buttons
  //     $(this).find("button").addClass("active"); // Add active class to clicked button
      
  //     $(".tab-pane").removeClass("show active"); // Hide all slides
  //     $("#stripe-" + slideIndex).addClass("show active"); // Show the selected slide
  // });
});

$(document).ready(function () {  
  $('.banner-slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    //speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    //centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {   
          dots: false,
        },
      },
    ],
  });
  $(".slick-dots").appendTo(".banner-slider-item .hero-content-wrapper");
});

$(document).ready(function () {
  $('select').on('focus', function() {
    $(this).parent().addClass('focus');
  })
  .on('blur', function() {
    $(this).parent().removeClass('focus');
  })
  .on('change', function() {
    $(this).parent().removeClass('focus');
  });
 });

$(document).ready(function () { 
    $('.static-grid-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {  
            slidesToShow: 2,       
          },
        },        
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
          }
      ]
    });
});


$(document).ready(function () { 
  $('.multiple-way-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<div class="pr-arrows pr-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg></div>',
    nextArrow:'<div class="pr-arrows pr-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg></div>',
    appendArrows: ".arrows-append",
    responsive: [
      {
        breakpoint: 1800,
        settings: {  
          slidesToShow: 2.5,       
        },
      },
      {
        breakpoint: 1300,
        settings: {  
          slidesToShow: 2,       
        },
      },        
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
        },        
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false,
            }
        }

    ]
  });
});


$(document).ready(function () {  
  function initializeSlider() {
    var $slider = $('.grid-mob-slider');
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    } else {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    }
  }
  // Initialize slider on page load
  initializeSlider();

  // Reinitialize slider on window resize
  $(window).on("resize", function () {
    initializeSlider();
  });
});  

$(document).ready(function () {
  var addRemove = function(){
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(function(){        
            $(".top-sublevel-nav-link").appendTo(".getin-touch-mob");
       
        });
    }
    else {
        $(function(){
            $(".top-sublevel-nav-link").appendTo(".top-breadcrumb-nav");           
        });
    }
  }
  addRemove();
  $(window).resize(addRemove); // calls the function when the window first loads  
});

jQuery(document).ready(function($){
  $(".loadMoreWeb").click(function(e){
    $(".grid-block-web-view .grid-block-main-item:hidden").slice(0,3).fadeIn();
    if ($(".grid-block-web-view .grid-block-main-item:hidden").length < 1) $(this).fadeOut();
  })

  $(".loadMoreMob").click(function(e){
    $(".grid-block-mob-view .grid-block-main-item:hidden").slice(0,1).fadeIn();
    if ($(".grid-block-mob-view .grid-block-main-item:hidden").length < 1) $(this).fadeOut();
  })
})


$(document).ready(function() {
  // Initialize accordion with the first item open
  accordion();
    $(".accordion-component-block .accordion-item:first-child > .accordion-body").show();
    $(".accordion-component-block .accordion-item:first-child").addClass("accordion-open");
});

function accordion() {
  $(".accordion-default .accordion-header").click(function() {
    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
      $(this).parent().addClass("accordion-close");
      $(this).parent().removeClass("accordion-open");
    } else {
      $(".accordion-default .accordion-body").slideUp();
      $(".accordion-default .accordion-item").removeClass("accordion-open");
      $(this).next().slideDown();
      $(this).parent().addClass("accordion-open");
      $(this).parent().removeClass("accordion-close");
    }
  });  
}

$(document).resize(function() {
  accordion();
});


const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;

menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});

goBack.addEventListener("click", () => {
  hideSubMenu();
});

menuTrigger.addEventListener("click", () => {
  toggleMenu();
});

closeMenu.addEventListener("click", () => {
  toggleMenu();
});

document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function() {
  if (this.innerWidth > 767) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};




