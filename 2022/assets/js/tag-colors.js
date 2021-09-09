(function ($) {

    var Colors = {};
    Colors.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        brown: "#a52a2a",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgrey: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        fuchsia: "#ff00ff",
        gold: "#ffd700",
        green: "#008000",
        indigo: "#4b0082",
        lightpink: "#ffb6c1",
        lime: "#00ff00",
        magenta: "#ff00ff",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        violet: "#800080",
        red: "#ff0000"
    };
    /**
     * Extra random color in case the others are over;
     * @returns {string}
     */
    function getRandomRolor() {
        var letters = '012345'.split('');
        var color = '#';
        color += letters[Math.round(Math.random() * 5)];
        letters = '0123456789ABCDEF'.split('');
        for (var i = 0; i < 5; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    Colors.random = function () {
        var result;
        var count = 0;
        for (var prop in this.names) {
            if (Math.random() < 1 / ++count) {
                result = prop;
                delete this.names[prop];
                break;
            }
        }
        if (!result) {
            return getRandomRolor();
        }
        return result;
    };


    $(document).ready(function () {

        //build
        var tags = {};

        $(".tag").each(function () {
            var value = $(this).attr("data-tag");
            if (!tags[value]) {
                tags[value] = value;
                var color = Colors.random();
                $("[data-tag='" + value + "']").css("background-color", color);
            }

        });

    });


}(jQuery));