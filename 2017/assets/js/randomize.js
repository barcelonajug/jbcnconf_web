(function () {

    /**
     * Randomize elements such as speakers and sponsors, so they won't show up in the same order every load
     * @param selector
     * @returns {$}
     */
    jQuery.fn.randomize = function (selector) {
        var $elems = selector ? jQuery(this).find(selector) : jQuery(this).children(),
            $parents = $elems.parent();

        $parents.each(function () {
            jQuery(this).children(selector).sort(function () {
                return Math.round(Math.random()) - 0.5;
                // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
            }).detach().appendTo(this);
        });

        return this;
    };


    jQuery(document).ready(function ($) {

        $(".vc_custom_1461673193635").randomize(".item");

        $('.speakers-widget-344564632').randomize(".item");

        $('.speakers-widget-344564632').owlCarousel({
            loop: true,
            nav: true,
            margin: 45,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1300: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    });


}());

