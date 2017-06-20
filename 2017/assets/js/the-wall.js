jQuery(document).ready(function () {
    jQuery(".menu-area").remove();

    var IMAGE_TEMPLATE = '<div class="card__image border-tlr-radius">' +
        '<img src="${url}" alt="image" class="border-tlr-radius">' +
        '</div>';

    var CARD_TEMPLATE = '<div style="display:none" id="card-${id}" class="card radius shadowDepth1">${image}' +
        '<div class="card__content card__padding">' +
        ' <div class="card__meta">' +
        '  <time><a href="#">${userHandle}</a> ${date}</time>' +
        ' </div>' +
        ' <article class="card__article">' +
        '      <p>${text}</p>' +
        '  </article>' +
        '  </div>' +
        ' <div class="card__action">' +
        '     <div class="card__author">' +
        '<img width="75px" src="${userPhoto}" alt="">' +
        '     <div class="card__author-content">' +
        '     ${userName} ${userLocation}<br/>' +
        ' <span class="counts"> <i class="fa fa-heart" aria-hidden="true">${favoriteCount}</i>' +
        '  <i class="fa fa-retweet" aria-hidden="true">${retweetCount}</i> </span>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' </div>';

    var URL = "http://sample-env.eqznucepgq.eu-central-1.elasticbeanstalk.com/api/tweets";
    var Tweet = function (row) {
        this.id = row.id;
        this.createdAt = new Date(row.createdAt);
        this.text = row.text;
        this.favoriteCount = row.favoriteCount;
        this.retweetCount = row.retweetCount;
        this.userHandle = row.userHandle;
        this.userName = row.userName;
        this.userLocation = row.userLocation;
        this.profileImage = row.profileImage;
        this.photos = row.photos;
    };

    var TWEET_LIST = [];
    var MAX_SIZE = 12;

    function removeElement(tweet) {
        jQuery("#card-" + tweet.id).remove();
    }

    function addElement(tweet) {
        var template = CARD_TEMPLATE;
        var location = tweet.userLocation ? " from " + tweet.userLocation : "";
        template = template.replace("${id}", tweet.id)
            .replace("${userHandle}", "@" + tweet.userHandle)
            .replace("${userLocation}", location)
            .replace("${userName}", tweet.userName)
            .replace("${userPhoto}", tweet.profileImage)
            .replace("${favoriteCount}", tweet.favoriteCount)
            .replace("${retweetCount}", tweet.retweetCount)
            .replace("${text}", formatText(tweet.text))
            .replace("${date}", formatDate(tweet.createdAt));

        if (tweet.photos.length > 0) {
            var photo = IMAGE_TEMPLATE.replace("${url}", tweet.photos[0].url);
            template = template.replace("${image}", photo);
        } else {
            template = template.replace("${image}", "");
        }

        jQuery("#card-container").prepend(template);
        setTimeout(function () {
            jQuery("#card-" + tweet.id).fadeIn();
            jQuery("#card-" + tweet.id).effect("bounce", {times: 3}, 600);
        }, 1000);
    }

    function addTweet(tweet) {
        if (hasTweet(tweet.id)) {
            return;
        }
        TWEET_LIST.unshift(tweet);
        addElement(tweet);

        if (TWEET_LIST.length >= MAX_SIZE) {
            removeElement(TWEET_LIST.pop());
        }

    }

    function hasTweet(id) {
        for (var i = 0; i < TWEET_LIST.length; i++) {
            if (TWEET_LIST[i].id === id) {
                return true;
            }
        }
        return false;
    }


    function processTweet(tweet, offset) {
        setTimeout(function () {
            addTweet(tweet);
        }, offset);
    }

    function fetchData() {
        jQuery.get(URL, function (data) {
            data = data.slice(0, MAX_SIZE);
            for (var i = data.length - 1; i >= 0; i--) {
                var tweet = new Tweet(data[i]);
                var offset = 500;
                if (hasTweet(tweet.id)) {
                } else {
                    offset = offset + 3000;
                    processTweet(tweet, offset);
                }
            }
        });
    }

    fetchData();

    setInterval(function () {
        fetchData();
    }, 60000);

    setTimeout(function () {
        window.location.reload();
    }, 360000);


    function callBackend() {
        jQuery.get(URL, function (data) {
            jQuery(data).each(function (row) {
                var tweet = new Tweet(data[data.length - row - 1]);
                processTweet(tweet);
                if ((data.length - 1) === row) {
                    setTimeout(function () {
                        callInterval();
                    }, 50000);
                }
            });
        });
    }


    /*
     setTimeout(function () {
     jQuery(".card").animate({
     left: "+=300px",
     opacity: '0.5',
     height: '150px'
     });
     }, 3000);
     */


//color hashtags
    function formatText(text) {
        var hashTagReg = /\S*#\S+/gi;
        var matches = text.match(hashTagReg);
        if (matches && matches.length > 0) {
            for (var i = 0; i < matches.length; i++) {
                text = text.replace(matches[i], "<span class='hash'>" + matches[i] + "</span>")
            }
        }
        var handleTagReg = /\S*@\S+/gi;
        matches = text.match(handleTagReg);
        if (matches && matches.length > 0) {
            for (var i = 0; i < matches.length; i++) {
                text = text.replace(matches[i], "<span class='handle'>" + matches[i] + "</span>")
            }
        }
        return text;
    }

    function formatDate(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();

        if (minute < 10) {
            minute = "0" + minute;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }


        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ":" + minute;
    }


})
;