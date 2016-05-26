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
		  			
			if(val.talk !=null){
				divtalk="<div class='row'>"+
						"<p class='title'>"+val.talk.title+"</p>"+
						"<div class='borderTitle'></div>"+
						"<p class='abstract'>"+val.talk.abstract+"</p>";
				
				if(val.talk.slides || val.talk.video){
					divtalk += "<p class='slidesandvideo'>";
					if(val.talk.slides){
						divtalk += "<a href='"+val.talk.slides+"'><span class='slides'>Slides <i class='fa fa-picture-o fa-1x'></i></span></a>";
					}
					if(val.talk.video){
						divtalk += "<a href='"+val.talk.video+"'><span class='video'>Video <i class='fa fa-film fa-1x'></i></span></a>";
					}
					divtalk += "</p>";
				}
				if(val.talk.cospeakerref!=null){
					for(var i=0;i<data.speakers.length;i++){
						valspeaker2 = data.speakers[i];
						if(valspeaker2.ref == val.talk.cospeakerref){
							divspeaker="<div class='cospeaker'>"+
							"<a href='"+valspeaker2.url+"'>Talk with:"+valspeaker2.name+"</a>"+
							"</div>";
							divtalk += divspeaker;
							break;							
						}
					}
				}
				divtalk += "</div>";
			  
			
			if(val.hasMoreTalks == 1){
				for(var i=0;i<data.speakers.length;i++){
					valspeaker2 = data.speakers[i];
					if(valspeaker2.repeated == 1 && valspeaker2.ref == val.ref){
						if(valspeaker2.talk !=null){
							divtalk=divtalk+"<div class='row'>"+
									"<p class='title'>"+valspeaker2.talk.title+"</p>"+
									"<div class='borderTitle'></div>"+
									"<p class='abstract'>"+valspeaker2.talk.abstract+"</p>";					
							if(valspeaker2.talk.slides || valspeaker2.talk.video){
								divtalk += "<p class='slidesandvideo'>";
								if(valspeaker2.talk.slides){
									divtalk += "<a href='"+valspeaker2.talk.slides+"'><span class='slides'>Slides <i class='fa fa-picture-o fa-1x'></i></span></a>";
								}
								if(valspeaker2.talk.video){
									divtalk += "<a href='"+valspeaker2.talk.video+"'><span class='video'>Video <i class='fa fa-film fa-1x'></i></span></a>";
								}
								divtalk += "</p>";
							}
							if(valspeaker2.talk.cospeakerref!=null){
								for(var j=0;j<data.speakers.length;j++){
									valspeaker3 = data.speakers[j];
									if(valspeaker3.ref == valspeaker2.talk.cospeakerref){
										divspeaker="<div class='cospeaker'>"+
										"<a href='"+valspeaker3.url+"'>Talk with:"+valspeaker3.name+"</a>"+					
										"</div>";
									  	divtalk += divspeaker;
										break;							
				
									}
								}
							}
							divtalk += "</div>";
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