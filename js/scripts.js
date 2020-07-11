(function($) {
    "use strict";

    /* Preloader */
    $(window).on('load', function() {
        var preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function() {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });


    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
        if ($(".navbar").offset().top > 20) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function() {
            // Called after the entrance animation is executed.
        }
    });


    /* Card Slider - Swiper */
    var cardSlider = new Swiper('.card-slider', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            }
        }
    });


    /* Image Slider - Swiper */
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            // when window is <= 380px
            380: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 516px
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window is <= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window is <= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        }
    });


    /* Image Slider - Magnific Popup */
    $('.popup-link').magnificPopup({
        removalDelay: 300,
        type: 'image',
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
            },
            beforeClose: function() {
                $('.mfp-figure').addClass('fadeOut');
            }
        },
        gallery: {
            enabled: true //enable gallery mode
        }
    });


    /* Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    /* Counter - CountTo */
    var a = 0;
    $(window).scroll(function() {
        if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
                });
                a = 1;
            }
        }
    });


    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

    // Sliders on template.html

    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function() {
        $(this).blur();
    });
    var output1 = document.getElementById("demo1");
    var output1a = document.getElementById("demo1a");
    var slider1 = document.getElementById("ph");

    output1.innerHTML = slider1.value; // Display the default slider value
    output1a.innerHTML = slider1.value;

    // Update the current slider value (each time you drag the slider handle)
    slider1.oninput = function() {
        output1.innerHTML = this.value;
        output1a.innerHTML = this.value;
    }

    var output2 = document.getElementById("demo2");
    var output2a = document.getElementById("demo2a");
    var slider2 = document.getElementById("fAcidity");

    output2.innerHTML = slider2.value; // Display the default slider value
    output2a.innerHTML = slider2.value;

    // Update the current slider value (each time you drag the slider handle)
    slider2.oninput = function() {
        output2.innerHTML = this.value;
        output2a.innerHTML = this.value;
    }
    var output3 = document.getElementById("demo3");
    var output3a = document.getElementById("demo3a");
    var slider3 = document.getElementById("vAcidity");

    output3.innerHTML = slider3.value; // Display the default slider value
    output3a.innerHTML = slider3.value;

    // Update the current slider value (each time you drag the slider handle)
    slider3.oninput = function() {
        output3.innerHTML = this.value;
        output3a.innerHTML = this.value;
    }

    var output4 = document.getElementById("demo4");
    var output4a = document.getElementById("demo4a");
    var slider4 = document.getElementById("citric");

    output4.innerHTML = slider4.value; // Display the default slider value
    output4a.innerHTML = slider4.value;

    // Update the current slider value (each time you drag the slider handle)
    slider4.oninput = function() {
        output4.innerHTML = this.value;
        output4a.innerHTML = this.value;
    }

    var output5 = document.getElementById("demo5");
    var output5a = document.getElementById("demo5a");
    var slider5 = document.getElementById("rs");

    output5.innerHTML = slider5.value; // Display the default slider value
    output5a.innerHTML = slider5.value;

    // Update the current slider value (each time you drag the slider handle)
    slider5.oninput = function() {
        output5.innerHTML = this.value;
        output5a.innerHTML = this.value;
    }

    var output6 = document.getElementById("demo6");
    var output6a = document.getElementById("demo6a");
    var slider6 = document.getElementById("fsd");

    output6.innerHTML = slider6.value; // Display the default slider value
    output6a.innerHTML = slider6.value;

    // Update the current slider value (each time you drag the slider handle)
    slider6.oninput = function() {
        output6.innerHTML = this.value;
        output6a.innerHTML = this.value;
    }

    var output7 = document.getElementById("demo7");
    var output7a = document.getElementById("demo7a");
    var slider7 = document.getElementById("tsd");

    output7.innerHTML = slider7.value; // Display the default slider value
    output7a.innerHTML = slider7.value;

    // Update the current slider value (each time you drag the slider handle)
    slider7.oninput = function() {
        output7.innerHTML = this.value;
        output7a.innerHTML = this.value;
    }

    var output8 = document.getElementById("demo8");
    var output8a = document.getElementById("demo8a");
    var slider8 = document.getElementById("sulphates");

    output8.innerHTML = slider8.value; // Display the default slider value
    output8a.innerHTML = slider8.value;

    // Update the current slider value (each time you drag the slider handle)
    slider8.oninput = function() {
        output8.innerHTML = this.value;
        output8a.innerHTML = this.value;
    }

    var output9 = document.getElementById("demo9");
    var output9a = document.getElementById("demo9a");
    var slider9 = document.getElementById("chloride");

    output9.innerHTML = slider9.value; // Display the default slider value
    output9a.innerHTML = slider9.value;

    // Update the current slider value (each time you drag the slider handle)
    slider9.oninput = function() {
        output9.innerHTML = this.value;
        output9a.innerHTML = this.value;
    }

    var output10 = document.getElementById("demo10");
    var output10a = document.getElementById("demo10a");
    var slider10 = document.getElementById("density");

    output10.innerHTML = slider10.value; // Display the default slider value
    output10a.innerHTML = slider10.value;

    // Update the current slider value (each time you drag the slider handle)
    slider10.oninput = function() {
        output10.innerHTML = this.value;
        output10a.innerHTML = this.value;
    }

    var output11 = document.getElementById("demo11");
    var output11a = document.getElementById("demo11a");
    var slider11 = document.getElementById("alcohol");

    output11.innerHTML = slider11.value; // Display the default slider value
    output11a.innerHTML = slider11.value;

    // Update the current slider value (each time you drag the slider handle)
    slider11.oninput = function() {
        output11.innerHTML = this.value;
        output11a.innerHTML = this.value;
    }

    // function choices() {
    //     var choice = []
    //     choice =
    // }

})(jQuery);