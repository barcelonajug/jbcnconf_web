(function () {


    jQuery(document).ready(function ($) {

        /* ------------------- Client Carousel --------------------- */

        setTimeout(function () {
            $('.clients-carousel').flexslider({
                animation: "slide",
                easing: "swing",
                animationLoop: true,
                itemWidth: 188,
                itemMargin: 0,
                minItems: 1,
                maxItems: 5,
                controlNav: false,
                directionNav: false,
                move: 1
            });
        }, 100);


        /* ------------------ Back To Top ------------------- */

        jQuery('#footer-menu-back-to-top a').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 300);
            return false;
        });

        /* ------------------ Progress Bar ------------------- */
        $(function () {
            $(".meter > span").each(function () {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
        });

        /* --------------------- Tabs ------------------------ */

        (function () {

            var $tabsNav = $('.tabs-nav'),
                $tabsNavLis = $tabsNav.children('li'),
                $tabContent = $('.tab-content');

            $tabsNav.each(function () {
                var $this = $(this);

                $this.next().children('.tab-content').stop(true, true).hide()
                    .first().show();

                $this.children('li').first().addClass('active').stop(true, true).show();
            });

            $tabsNavLis.on('click', function (e) {
                var $this = $(this);

                $this.siblings().removeClass('active').end()
                    .addClass('active');

                $this.parent().next().children('.tab-content').stop(true, true).hide()
                    .siblings($this.find('a').attr('href')).fadeIn();

                e.preventDefault();
            });

        })();

        /* ------------------- Parallax --------------------- */
        setTimeout(function () {
            $('#da-slider').cslider({
                autoplay: true,
                bgincrement: 450,
                interval: 5000
            });

            //display speakers on homepage

            var MAX_DISPLAYED = 8,
                speakers = $(".homepage-speaker"),
                options = [],
                index = 0;

            for (index = 0; index < speakers.length; index++) {
                options.push(index);
            }

            for (index = 0; index < MAX_DISPLAYED; index++) {
                var selected = Math.floor(Math.random() * options.length),
                    speakerIndex = options[selected];
                options.splice(selected, 1);
                $(speakers[speakerIndex]).css("display", "block");
            }


        }, 100);


        $('.testimonials-carousel').carousel({
            namespace: "mr-rotato" // Defaults to “carousel”.
        })

    });


}());