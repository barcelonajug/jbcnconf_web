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
    switch (tag) {
        case "Messaging" : 
        case "Scalability" :
        case "Cloud":
        case "Integration":
        case "Design":
        case "Modularity":
        case "Architecture":
        case "Patterns":
        case "Real-time":
            family = "Architecture"; break;
        case "Testing" : 
        case "Devops" :
        case "ContinuousDelivery":
        case "ContinuousIntegration":
            family = "Metodology"; break;
        case "Gradle":
            family = "Tools"; break;
        case "APIs":
        case "RESTful":
            family = "APIs"; break;
        case "Java8":
        case "Lambdas":
        case "FunctionalProgramming":
            family = "Java8"; break;
        case "Java9":
            family = "Java9"; break;
        case "Kotlin" :
        case "Clojure":
        case "Groovy" :
        case "Ceylon":
        case "JVM langs" :
        case "Go":
        case "Scala":
        case "semantic":
            family = "JVMLangs"; break;
        case "Cache" : 
        case "JavaEE" : 
        case "Performance":
        case "Compiler":
        case "JavaFX":
        case "OpenJDK":
            family = "JVM"; break;
        case "Containers" : 
        case "Kubernetes":
        case "Microservices":
        case "Docker":
            family = "Microservices"; break;
        case "noSQL" :
        case "Bigdata":
        case "Cassandra":
        case "ElasticSearch":
        case "MapReduce":
        case "MongoDB":
        case "Hadoop":
        case "Couchbase":
        case "Kibana":
        case "Logstash":
        case "DB":
        case "SPARQL":
        case "Firebase":
        case "RDF":
        case "graph":
            family = "noSQL"; break;
        case "Async" : 
        case "Netty" : 
        case "Event-driven":
        case "DistributedSystems":
        case "RxJava":
        case "Ratpack":
            family = "AsyncDevelopment"; break;
        case "Android" :
        case "iOS":
            family = "Mobile"; break;
        case "AngularJS" : 
        case "Play" : 
        case "Akka" : 
        case "Vert.x" : 
        case "Frameworks":
        case "jBPM":
        case "Drools":
        case "Geb":
        case "Spock":
        case "Grails":
        case "Spring":
        case "Spring Boot":
        case "Spring Cloud":
            family = "Frameworks"; break;
        case "community":
        case "OpenSource":
            family = "OpenSource"; break;
        default : family = "unknown"; 
    }
    return family;
}
