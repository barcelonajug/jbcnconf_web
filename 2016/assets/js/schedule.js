$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		if(val.scheduleId!=null && val.enabled == 1) {
			if($(val.scheduleId).children('span').hasClass('pending')){
				divspeaker="<a href='"+val.url+"'><div><span class='title'>"+val.talk.title+"</span><span class='speaker'>"+val.name;
				if(val.talk.cospeakerref!=null){
					for(var i=0;i<data.speakers.length;i++){
						valspeaker2 = data.speakers[i];
						if(valspeaker2.ref == val.talk.cospeakerref){
							divspeaker=divspeaker+ " & " +valspeaker2.name ;			
							break;
						}
					}
				}
				divspeaker=divspeaker+"</span><span class='location'>(Room: "+getRoom(val.scheduleId);
				divspeaker=divspeaker+")</span></div></a>";
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

function contains(scheduleId, day) {
	return scheduleId.indexOf(day) > -1;
}

function getRoom(scheduleId) {
	if (contains(scheduleId, "THU-TC1") || contains(scheduleId, "SAT-TC1")) {
		return "20.019";
	} else if (contains(scheduleId, "THU-TC2") || contains(scheduleId, "SAT-TC2")) {
		return "20.021";
	} else if (contains(scheduleId, "THU-TC3") || contains(scheduleId, "SAT-TC3")) {
		return "20.023";
	} else if (contains(scheduleId, "THU-TC4")) {
		return "20.027";
	} else if (contains(scheduleId, "SAT-TC4")) {
		return "20.025";
	} else if (contains(scheduleId, "FRI-TC1")) {
		return "40.002";
	} else if (contains(scheduleId, "FRI-TC2")) {
		return "40.004";
	} else if (contains(scheduleId, "FRI-TC3")) {
		return "40.006";
	} else if (contains(scheduleId, "FRI-TC4")) {
		return "40.008";
	}
}

$('#showThursday').click(function(){
 $('#saturday').hide();
 $('#friday').hide();
 $('#thursday').show();
 $('#showSaturday').removeClass("active");
 $('#showFriday').removeClass("active");
 $('#showThursday').addClass("active");
 return false;
});

$('#showFriday').click(function(){
 $('#thursday').hide();
 $('#saturday').hide();
 $('#friday').show();
 $('#showThursday').removeClass("active");
 $('#showSaturday').removeClass("active");
 $('#showFriday').addClass("active");
 return false;
});

$('#showSaturday').click(function(){
 $('#thursday').hide();
 $('#friday').hide();
 $('#saturday').show();
 $('#showThursday').removeClass("active");
 $('#showFriday').removeClass("active");
 $('#showSaturday').addClass("active");
 return false;
});