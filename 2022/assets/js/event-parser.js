function parseEvents(events) {
    jQuery(document).ready(function ($) {
        $.each(events.data, function (index, {link, local_date, name}) {
            let calendarCheck = $("<i/>", {class: "fa fa-calendar-check-o"});
            let listDate = $("<div/>", {class: "date"}).text(" Date: " + local_date + " ").append(calendarCheck);
            let postInformation = $("<div/>", {class: "post-information"}).append(listDate);
            let arrowRight = $("<i/>", {class: ["fa fa-angle-right"]});
            let readMore = $("<a/>").attr({
                href: link,
                title: name,
                target: "_blank"
            }).text("Read More ").append(arrowRight);
            let eventLink = $("<a/>").attr({
                href: link,
                title: name,
                target: "_blank"
            }).text(name);
            let eventHeader = $("<h3/>").append(eventLink);
            let eventDescription = $("<div/>", {class: "desc"})
                .append(postInformation)
                .append(eventHeader)
                .append(readMore);
            let eventInfo = $("<li/>", {id: "item_" + index}).append(eventDescription);
            $("#eventstation_latest_latest_posts_widget-3 .eventstation-latest-posts-widget ul").append(eventInfo);
        });
    });
}