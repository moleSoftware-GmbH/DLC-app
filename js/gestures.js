
var ham = $('body')
 ham.hammer().on({
    'swipeleft': function (ev) {
 	console.log('sceneHandler.currentScene'+sceneHandler.currentScene);
 	//right
 	if (sceneHandler.currentScene == sceneHandler.lastScene){
 		return false;
 	}
		$('.next').trigger('click');
    },
    'swiperight': function (ev) {
    	//left
    if (sceneHandler.currentScene == sceneHandler.defaultScene || sceneHandler.currentScene == sceneHandler.lastScene){
 		return false;
 	}
		$('.prev').trigger('click');
    }
});
