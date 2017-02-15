$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
	  	if (val.enabled == 1 && val.repeated !=1) {
			divspeaker="<div class='speaker-info col-md-3 col-sm-6 col-xs-12 teammate animated' data-animation='fadeInUp' data-delay='600'>"+
						  "<div class='profile-photo'>";
			if(val.url!=""){						  
				divspeaker=divspeaker+"<a href='"+val.url+"'><img class='img-responsive' src='"+val.image+"' alt='"+val.name+"' width='165px' height='165px'>";
				if(val.talk !=null){
						divspeaker=divspeaker+"<div class='overlay'>"+
												"<span>"+val.talk.title+"</span>"+
											 "</div>";
				}
				divspeaker=divspeaker+"</a>";
			}
			else{
				divspeaker=divspeaker+"<img class='img-responsive' src='"+val.image+"' alt='"+val.name+"' width='165px' height='165px'>";
			}
			divspeaker=divspeaker+"</div>"+
			  "<div class='bio'>"+
				"<h4>"+val.name+"</h4>"+
				"<div class='border'></div>"+
				"<p>"+val.description+"</p>"+
				"<ul class='list-inline'>";
			if(val.twitter!=null){
				  divspeaker=divspeaker+"<li class='twitter'>"+
					"<a href='"+val.twitter+"' title='Twitter' target='_blank'>"+
					  "<i class='fa fa-twitter'></i>"+
					"</a>"+
				  "</li>";
			}
			if(val.homepage!=null){
				divspeaker=divspeaker+"<li class='homepage'>"+
					"<a href='"+val.homepage+"' title='Homepage' target='_blank'>"+
					  "<i class='fa fa-globe'></i>"+
					"</a>"+
				"</li>";
			}				  
			divspeaker=divspeaker+"</ul>"+
			  "</div>"+
			"</div>";
  		    $(divspeaker).appendTo( "#grid-speakers" );
		}
	  });
	});
});