var sceneHandler = {
	currentScene: 0,
	defaultScene: 0,
	nextScene: 1,
	prevScene: 0,
	backgroundPath: '../images/backgrounds/', //path to the slides background
	autoPlay: false, //set to true if slides should change automagically
	slideDuration: 10000, //duration between slide change
	lastScene: 14, //set this if you have more than 14 scenes,
	backgroundSoundInit: false,

	switchScene: function (e) {
		var that = $(e.target).attr('class');
		sceneHandler.setBackgrounds(e);
		that == 'next' ? this.sceneIncrement() : this.sceneDecrement();
		if (this.currentScene == '2') {
			$('#canvas2').addClass('active');
			Audio.playFx('tictac');


			setTimeout(function () {
				$('.scene_2').addClass('active');
			}, 2000);
		}
		if (this.currentScene == '3' || this.currentScene == '1') {
			if (!tictac.paused && tictac.currentTime) {
				Audio.playFx('tictac');
			}
		}
		if (this.currentScene == '4' || this.currentScene == '7' || this.currentScene == '11' || this.currentScene == '12' || this.currentScene == '13' || this.currentScene == '14' || this.currentScene == '15') {

			console.log('inside');
			sceneHandler.loadTexts();
			if (this.currentScene == this.lastScene) { //endscene
				sceneHandler.loadLastScene();
			}
			if (this.currentScene == '13') { //some custom stuff
				sceneHandler.customScene();
			}
		} else {
			this.runCanvas();
			$('.prev').show();
			setTimeout(function () {
				sceneHandler.loadTexts();
			}, 300);


		}
		sceneHandler.getScene(); //currentScene,nextScene,prevScene
		console.log('sceneHandler:' + currentScene + ':' + nextScene + ':' + prevScene);
		//$('.debug').text(this.currentScene);

		sceneHandler.auto();
	},
	runCanvas: function () {
		var scene = 'scene_' + this.currentScene;
		console.log("asdf:" + scene);
		eval(scene).init(); //eeeevil 
	},
	clearHandlers: function () {
		var prev = 'scene_' + this.prevScene;
		eval(prev).clearCanvas();
	},
	loadTexts: function () {
		var length = 4;
		for (i = 0; i < length; i++) {

			if (typeof text['scene_' + this.currentScene]['text' + i] != 'undefined') {
				console.log('length:' + text['scene_' + this.currentScene]['text' + i].length);
				if (text['scene_' + this.currentScene]['text' + i].length == 0) {
					//empty string
				} else {
					$('.scene_' + this.currentScene + ' .texts').find('.text_' + i + '').remove();
					$('<div class="text_' + i + '">' + text['scene_' + this.currentScene]['text' + i] + '</div>').appendTo($('.scene_' + this.currentScene).find('.texts'));
				}
			}
		}
		this.showTexts();
	},
	showTexts: function () {
		if (text['scene_' + currentScene]['text1'] === '' || text['scene_' + currentScene]['text1'] === undefined) { //if text for current scene is empty string or missing
			$('.scene_' + currentScene + ' .texts').addClass('hidden');
		} else { //we have text
			if ($('.scene_' + currentScene + ' .texts').hasClass('visible')) {
				$('.scene_' + currentScene + ' .texts').addClass('hidden').removeClass('visible');
			} else if ($('.scene_' + currentScene + ' .texts').hasClass('hidden')) {
				$('.scene_' + currentScene + ' .texts').addClass('visible').removeClass('hidden');
			} else {
				$('.scene_' + currentScene + ' .texts').addClass('visible');
			}

		}
	},
	hideTexts: function () {
		if (text['scene_' + currentScene]['text1'] === '' || text['scene_' + currentScene]['text1'] === undefined) {
			$('.scene_' + currentScene + ' .texts').addClass('hidden');
		}
	},
	sceneIncrement: function () {
		this.currentScene = this.currentScene + 1;
		this.nextScene = this.nextScene + 1;
		this.prevScene = this.currentScene - 1;
	},
	sceneDecrement: function () {
		this.currentScene = this.currentScene - 1;
		this.nextScene = this.currentScene + 1;
		this.prevScene = this.currentScene - 1;
	},
	getScene: function () {
		currentScene = this.currentScene;
		nextScene = this.nextScene;
		prevScene = this.prevScene;
	},
	initCover: function () {
		sceneHandler.deviceOrientation();
		scene_0.init();
		hideMask();
		$('.scene_' + this.currentScene).css('background-image', 'url(images/backgrounds/scene_' + this.currentScene + '.jpg)');
		$('.scene_' + this.currentScene).show();
		$('.prev').hide();
		sceneHandler.auto();
	},
	setBackgrounds: function (e) {
		var that = $(e.target).attr('class');
		if (that == 'next') {
			$('.scene_' + this.currentScene).hide();
			$('.scene_' + this.nextScene).css('background-image', 'url(images/backgrounds/scene_' + this.nextScene + '.jpg)');
			$('.scene_' + (this.currentScene + 1)).show();
		} else {
			$('.scene_' + this.nextScene).hide();
			$('.scene_' + this.prevScene).css('background-image', 'url(images/backgrounds/scene_' + this.prevScene + '.jpg)');
			$('.scene_' + (this.currentScene - 1)).show();
		}
	},
	loadLastScene: function () {
		$('.controls .next').hide();
		$('.controls .prev').hide();
		setTimeout(function () {
			$('.playAgain').show();
		}, 1000);
	},
	customScene: function () {
		$('.scene_' + this.currentScene).find('img').addClass('active');
		$('#canvas1').removeClass('active');
		setTimeout(function () {
			$('.scene_13').find('div').show();
		}, 1000);
	},
	auto: function (e) {
		if (this.autoPlay == true) {
			$('.next,.prev').css('visibility', 'hidden');
			setTimeout(function () {
				console.log('autoplaying');
				console.log('CCC' + this.currentScene);
				console.log('lastScene' + sceneHandler.lastScene);
				if (this.currentScene == 13) {
					console.log('endSlide');
					location.reload();
				} else if (this.currentScene <= sceneHandler.lastScene) {
					console.log('b');
					$('.next').trigger('click');
				} else {
					console.log('error');
					return false;
				}
			}, this.slideDuration);
		}
	},
	playAgain: function () {
		var texts = $('.texts div');
		this.currentScene = 0;
		this.defaultScene = 0;
		this.nextScene = 1;
		this.prevScene = 0;
		$('.scene,.playAgain,.scene_1 #clock').hide();
		sceneHandler.initCover();
		texts.remove();
		$('.next').show();
		$(document).find('.active').removeClass('active');

	},
	deviceOrientation: function () {
		if (window.innerHeight > window.innerWidth) {
			$('.devicePortrait').show();
		} else {
			$('.devicePortrait').hide();
		}
	}
}

$(document).on('click', '.hideText', function () {
	sceneHandler.showTexts();
});

$(document).on('click', '.prev', function (e) {
	setTimeout(function () {
		sceneHandler.switchScene(e);
	}, 1000);
});

$(document).on('click', '#canvas1', function (e) {
	Audio.playFx('playGirlLaugh');
});

var playing = false;
var playing2 = false;
var playing3 = false;
$(document).on('click', '#canvas2', function (e) {

	if (playing == true) {
		exportRoot.stopCuckoo();
		Audio.playFx('playCukoo');
		Audio.playFx('tictac');
		playing = false;
	} else {
		exportRoot.playCuckoo();
		Audio.playFx('playCukoo');
		Audio.playFx('tictac');
		playing = true;
	}
	// setTimeout(function(){
	// 	if(sceneHandler.currentScene === 2){
	// 	Audio.playFx('tictac');
	// 	}
	// }, 7000);	
});

$(document).on('click', '#canvas5', function (e) {
	// setTimeout(function () {
	// 	Audio.playFx('playRing');
	// }, 1200);
	// setTimeout(function () {
	// 	Audio.playFx('playYawn');
	// }, 2800);

if (playing2 == true) {
		exportRoot.stopRing();
		playing2 = false;
	} else {
		exportRoot.playRing();
		playing2 = true;
	}
});

$(document).on('click', '#canvas6', function (e) {
		
	if (playing3 == true) {
		exportRoot.stopYawn();
		playing3 = false;
	} else {
		exportRoot.playYawn();
		playing3 = true;
	}

});

$(document).on('click', '#canvas8', function (e) {
	Audio.playFx('playMonsterSqueak');
});

$(document).on('click', '.sceneActions', function (e) {
	Audio.playFx('lightSound');
});

$(document).on('click', '.next', function (e) {
	setTimeout(function () {
		sceneHandler.switchScene(e);
	}, 50);
});

$(document).on('click', '.playAgain', function () {
	setTimeout(function () {
		sceneHandler.playAgain();
	}, 50);
});


$(document).on('click', '.playSound', function () {
	Audio.playFx('loopingAudio', 0.1);
});

// -----COVER SCENE------ //

setTimeout(function () {
	sceneHandler.initCover();
	if (sceneHandler.backgroundSoundInit === true) {
		Audio.playFx('loopingAudio', 0.1);
	} else {
		return false;
	}
	//run audio loop at the begining
	//$('.playSound').trigger('click');

}, 50);



var pr = window.devicePixelRatio;
console.log('devicePixelRatio' + pr);

$(document).on("click", '.scene_3 .sceneActions', function (e) {
	var that = $(e.target);
	that.toggleClass('off');

	if ($('.sceneActions').hasClass('off')) {
		$('.scene_3').css('background-image', 'url(images/backgrounds/scene_3_on.jpg)');
	} else {
		$('.scene_3').css('background-image', 'url(images/backgrounds/scene_3.jpg)');
	}
});

$(document).on("click", '.scene_4 .sceneActions', function (e) {
	var that = $(e.target);
	that.toggleClass('off');
	if ($('.sceneActions').hasClass('off')) {
		$('.scene_4').css('background-image', 'url(images/backgrounds/scene_4_off.jpg)');
	} else {
		$('.scene_4').css('background-image', 'url(images/backgrounds/scene_4.jpg)');
	}
});


$(window).on('resize', function () {
	sceneHandler.deviceOrientation();
});


function loadInBrowser(that){
 var theURL=that.getAttribute('href');
    var eventObject = new Object;
    var a = 'URL';
    eventObject[a] = theURL;
    // Fire Titanium Event to Open the URL in a new Window
    Ti.App.fireEvent('openBrowser',eventObject);
    return false;
}