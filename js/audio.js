
/*$(document).on('click','.playSound',function(){
		var audio = $('#loopingAudio');
 if (audio.prop('paused')){
        audio[0].play();
    }
    else{
        audio.get(0).pause();
    }
	
});*/


var audioEffect = {
	timer : 2500,
	timerObj : undefined,
	add : false,
	notAvailable : false,
	id: undefined,
	playFx : function(i,vol){
		audio = $('#'+i)[0];
		vol = vol || 1;
		audio.volume = vol;
		console.log($('#'+i));
	 if (audio['paused']){
        audio.play();
		console.log('audio.play');
    }
    else{
		audio.currentTime = 0;
        audio.pause();
		console.log('audio.pause');
    }

/*	if (audioEffect.add == true) {
		audioEffect.timer = t;
	}*/



/*		this.timerObj =	setTimeout(function(){
			if (eval(i).notAvailable) {
				return;
			}else{
				audioEffect.add = true;
				clearTimeout(this.timerObj);
			      $('#'+i)[0].play();
			        audioEffect.playFx(t,i);
			    }
    	}, this.timer);*/

	/*		if (eval(i).notAvailable) {
				return;
			}else{
				audioEffect.add = true;
			      $('#'+i)[0].play();
			        audioEffect.playFx(i);
			    }*/

	}
}

var Audio = $.extend(true, {}, audioEffect);