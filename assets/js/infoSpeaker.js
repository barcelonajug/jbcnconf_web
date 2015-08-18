$(document).ready(function () {
	var ref = getURLParameter('ref');
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		if(val.ref == ref && val.repeated !=1){
			 divspeaker="<div class='heading'>"+
				"<h2>"+val.name+"</h2>"+
				"<div class='border'></div>"+
			  "</div>"+
			  "<div class='row'>"+
				"<div class='col-lg-2 animated' data-animation='fadeInUp' data-delay='300'>"+
					"<img class='img-responsive' src='"+val.image+"' alt='"+val.name+"'>"+
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
				"<div class='col-lg-10 animated biography' data-animation='fadeInUp' data-delay='300'>"+
				"<p>"+val.biography+"</p>"+
				"</div>"+
			  "</div>";
			  $(divspeaker).appendTo( "#speaker-info" );
		  
			if(val.cospeakerref!=null){
				for(var i=0;i<data.speakers.length;i++){
					valspeaker2 = data.speakers[i];
					if(valspeaker2.ref == val.cospeakerref){
						divspeaker="<div class='heading'>"+
						"<h2>"+valspeaker2.name+"</h2>"+
						"<div class='border'></div>"+
					  "</div>"+
					  "<div class='row'>"+
						"<div class='col-lg-2 animated' data-animation='fadeInUp' data-delay='300'>"+
							"<img class='img-responsive' src='"+valspeaker2.image+"' alt='"+valspeaker2.name+"'>"+
							"<ul class='list-inline'>";
						if(valspeaker2.twitter!=null){
							divspeaker=divspeaker+"<li class='twitter'>"+
									"<a href='"+valspeaker2.twitter+"' title='Twitter' target='_blank'>"+
										"<i class='fa fa-twitter'></i>"+
									"</a>"+
								"</li>";
						}						
						if(valspeaker2.homepage!=null){
								divspeaker=divspeaker+"<li class='homepage'>"+
									"<a href='"+valspeaker2.homepage+"' title='Homepage' target='_blank'>"+
									"<i class='fa fa-globe'></i>"+
									"</a>"+
								"</li>";
						}
						divspeaker=divspeaker+"</ul>"+
							"</div>"+
							"<div class='col-lg-10 animated biography' data-animation='fadeInUp' data-delay='300'>"+
							"<p>"+valspeaker2.biography+"</p>"+
							"</div>"+
						  "</div>";
						  $(divspeaker).appendTo( "#speaker-info" );
					 }
				}
			}
			
			if(val.talk !=null){
				divtalk="<div class='row'>"+
						"<p class='title'>"+val.talk.title+"</p>"+
						"<div class='borderTitle'></div>"+
						"<p class='abstract'>"+val.talk.abstract+"</p>"+
						"</div>";
			  
			
			if(val.hasMoreTalks == 1){
				for(var i=0;i<data.speakers.length;i++){
					valspeaker2 = data.speakers[i];
					if(valspeaker2.repeated == 1 && valspeaker2.ref == val.ref){
						if(valspeaker2.talk !=null){
							divtalk=divtalk+"<div class='row'>"+
									"<p class='title'>"+valspeaker2.talk.title+"</p>"+
									"<div class='borderTitle'></div>"+
									"<p class='abstract'>"+valspeaker2.talk.abstract+"</p>"+
									"</div>";						
						}
					}
				}
			}
			$(divtalk).appendTo( "#talk-info" );
			}
		  return false;
		}
		
	  });
	});
});

function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}