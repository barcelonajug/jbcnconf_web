$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		if(val.scheduleId!=null && val.enabled == 1) {
			if($(val.scheduleId).children('span').hasClass('pending')){
				divspeaker="<a href='"+val.url+"'><div><span class='title'>"+val.talk.title+"</span><span class='speaker'>"+val.name;
				if(val.cospeakerref!=null){
						for(var i=0;i<data.speakers.length;i++){
							valspeaker2 = data.speakers[i];
							if(valspeaker2.ref == val.cospeakerref){
								divspeaker=divspeaker+ " & " +valspeaker2.name ;			
							}
						}
					}
				divspeaker=divspeaker+"</span></div></a>";
				if(val.scheduleId=='#Fri-Keynote' || val.scheduleId=='#Sat-Keynote'){
					divspeaker="<span class='keynote'>Keynote [Auditorium]</span>"+divspeaker;
				}
				if(val.talk.slides){
					divspeaker += "<a href='"+val.talk.slides+"' class='slides' title='Slides'><i class='fa fa-picture-o fa-1x'></i></a>";
				}
				if(val.talk.video){
					divspeaker += "<a href='"+val.talk.video+"' class='video' title='Video'><i class='fa fa-film fa-1x'></i></a>";
				}
				$(val.scheduleId).html(divspeaker);
			}
		}
	  });
	});
});

$('#showFriday').click(function(){
 $('#saturday').hide();
 $('#friday').show();
 $('#showSaturday').removeClass("active");
 $('#showFriday').addClass("active");
 return false;
});

$('#showSaturday').click(function(){
 $('#friday').hide();
 $('#saturday').show();
 $('#showFriday').removeClass("active");
 $('#showSaturday').addClass("active");
 return false;
});