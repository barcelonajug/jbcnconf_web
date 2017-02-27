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


$('#showMonday').click(function(){
 $('#wednesday').hide();
 $('#tuesday').hide();
 $('#monday').show();
 $('#showWednesday').removeClass("active");
 $('#showTuesday').removeClass("active");
 $('#showMonday').addClass("active");
 return false;
});

$('#showTuesday').click(function(){
 $('#wednesday').hide();
 $('#monday').hide();
 $('#tuesday').show();
 $('#showWednesday').removeClass("active");
 $('#showMonday').removeClass("active");
 $('#showTuesday').addClass("active");
 return false;
});

$('#showWednesday').click(function(){
 $('#tuesday').hide();
 $('#monday').hide();
 $('#wednesday').show();
 $('#showMonday').removeClass("active");
 $('#showTuesday').removeClass("active");
 $('#showWednesday').addClass("active");
 return false;
});