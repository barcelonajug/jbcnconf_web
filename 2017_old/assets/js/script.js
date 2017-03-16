function initNavbar() {

    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing,
        scrollChange: function($currentListItem) {
            $currentListItem.siblings().each(function() {
                $(this).removeClass("active");
                $(this).children("a").blur();
            });
    }
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });
	
    $("#nav-main").on("click", "a", null, function () {
         $("#nav-main").collapse('hide');
    });
}

function initAnimations() {
    $('.animated').appear(function () {
        var el = $(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('showing');
                el.removeClass('hiding');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('showing');
            el.removeClass('hiding');
        }
    }, {
        accY: -60
    });

    // Service hover animation
	$('.service').hover(function(){
		$('i', this).addClass('animated tada');
	},function(){	
        $('i', this).removeClass('animated tada');
	});
}

$(document).ready(function () {
    initNavbar();
	initAnimations();
});
$(window).load(function () {
    $(".loader .fading-line").fadeOut();
    $(".loader").fadeOut("slow");
});

function getFamilyForTag(tag){
    family = "unknown";
    switch (tag.toLowerCase()) {
        case "messaging" : 
        case "scalability" :
        case "cloud":
        case "integration":
        case "design":
        case "modularity":
        case "architecture":
        case "patterns":
        case "real-time":
            family = "Architecture"; break;
        case "testing" : 
        case "devops" :
        case "continuousdelivery":
        case "continuousintegration":
            family = "Metodology"; break;
        case "maven":
        case "gradle":
            family = "Tools"; break;
        case "apis":
        case "restful":
            family = "APIs"; break;
        case "java8":
        case "lambdas":
        case "functionalprogramming":
            family = "Java8"; break;
        case "java9":
            family = "Java9"; break;
        case "kotlin" :
        case "clojure":
        case "groovy" :
        case "ceylon":
        case "jvm langs" :
        case "go":
        case "scala":
        case "semantic":
            family = "JVMLangs"; break;
        case "cache" : 
        case "javaee" : 
        case "performance":
        case "compiler":
        case "javafx":
        case "openjdk":
            family = "JVM"; break;
        case "containers" : 
        case "kubernetes":
        case "microservices":
        case "docker":
            family = "Microservices"; break;
        case "nosql" :
        case "bigdata":
        case "cassandra":
        case "elasticsearch":
        case "mapreduce":
        case "mongodb":
        case "hadoop":
        case "couchbase":
        case "kibana":
        case "logstash":
        case "db":
        case "sparql":
        case "firebase":
        case "rdf":
        case "graph":
            family = "noSQL"; break;
        case "async" : 
        case "netty" : 
        case "event-driven":
        case "distributedsystems":
        case "rxjava":
        case "ratpack":
            family = "AsyncDevelopment"; break;
        case "android" :
        case "ios":
            family = "Mobile"; break;
        case "angularjs" : 
        case "play" : 
        case "akka" : 
        case "vert.x" : 
        case "frameworks":
        case "jbpm":
        case "drools":
        case "geb":
        case "spock":
        case "grails":
        case "spring":
        case "spring boot":
        case "spring cloud":
            family = "Frameworks"; break;
        case "community":
        case "opensource":
            family = "OpenSource"; break;
        default : family = "unknown"; 
    }
    return family;
}
