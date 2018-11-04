(function (global) {
    jQuery(document).ready(function () {
        var $schedule = jQuery("#schedule-calendar");

        $schedule.find('ul.tabs li').click(function () {
            var tab_id = jQuery(this).attr('data-tab');
            window.location.hash = tab_id.split("-")[1];
            displayTab(tab_id);
        });

        if (global.ALL_TALKS) {
            for (var index = 0; index < ALL_TALKS.length; index++) {
                var talk = ALL_TALKS[index];
                if (talk.scheduleId) {
                    var html = talk.title + "<br/>";
                    for (var speakerIndex = 0; speakerIndex < talk.allSpeakers.length; speakerIndex++) {
                        var speaker = talk.allSpeakers[speakerIndex];
                        html += " &nbsp;&nbsp;   <a href='" + global.BASE_URL + "/" + speaker.url + "'>"
                            + speaker.name + "</a>"
                    }
                    jQuery(talk.scheduleId).html(html);
                }
            }
        }


        function displayTab(tab_id) {
            $schedule.find('ul.tabs li').removeClass('current');
            $schedule.find('.tab-content').removeClass('current');

            $schedule.find(".post-header h2").hide();
            $schedule.find("." + tab_id).show();
            $schedule.find("#" + tab_id).addClass('current');

            jQuery('.' + tab_id).addClass('current');
        }


        var day = window.location.hash.toLowerCase();
        if (day.indexOf("#") !== -1) {
            day = day.replace("#", "");
        }
        if (day && (day === 'wednesday' || day === 'tuesday' || day === 'monday')) {
            displayTab("visible-" + day);
        } else {
            // display tab based on the current day +6 hours. (in the evening we want to show next day schedule)
            var MondayEvening = 1497888055000,
                TuesdayEvening = 1497981655000,
                currDate = new Date().getTime();
            if (currDate > MondayEvening && displayTab < TuesdayEvening) {
                displayTab("visible-tuesday")
            } else if (currDate > TuesdayEvening) {
                displayTab("visible-wednesday")
            } else {
                displayTab("visible-monday")
            }
        }


    })
}(window));