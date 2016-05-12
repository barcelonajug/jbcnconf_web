$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  divtalk = "<ul style='list-style-type:none'>";
	  data.speakers.sort(function(a, b){
			if(a.talk.title < b.talk.title) return -1;
			if(a.talk.title > b.talk.title) return 1;
			return 0;
	  })
	  $.each( data.speakers, function( key, val ) {
	  	if (val.enabled == 1 && val.talk != "" && val.talk.type.toLowerCase() == "workshop" && divtalk.indexOf(val.talk.title) < 0) {
			if(val.url!=""){
				divtalk += "<li><a href='"+val.url+"'><span class='title'>"+val.talk.title +"</span> by <span class='speaker'>"+ val.name ;
				if(val.cospeakerref!=null){
					for(var i=0;i<data.speakers.length;i++){
						valspeaker2 = data.speakers[i];
						if(valspeaker2.ref == val.cospeakerref){
							divtalk += " & " +valspeaker2.name ;			
						}
					}
				}
				divtalk += "</span></a>";
			}
			if (val.talk.tags) {
			  $.each(val.talk.tags, function (index,value) {
			  	divtalk += "<span class='label tag "+getFamilyForTag(value)+"'>" + value + "</span>";
			  });
			}
			if(val.talk.level){
				divtalk += "<span class='label level "+val.talk.level+"'>"+ val.talk.level +"</span>";
			}

			if(val.talk.slides){
				divtalk += "<a href='"+val.talk.slides+"'><span class='slides' title='Slides'><i class='fa fa-picture-o fa-1x'></i></span></a>";
			}
			if(val.talk.video){
				divtalk += "<a href='"+val.talk.video+"'><span class='video' title='Video'><i class='fa fa-film fa-1x'></i></span></a>";
			}
			divtalk += "</li>";

			
		}
	  });
	divtalk += "</ul>"; 
	$(divtalk).appendTo( "#grid-talks" );
	});
});
