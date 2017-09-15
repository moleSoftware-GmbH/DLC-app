
	//evt,scene_3_libs,scene_3
function handle(evt,scene,b,sceneNumber){
	var queue = evt.target;
	var ssMetadata = eval(scene).ssMetadata;
	var scene = eval(scene)
	var bb = b
	var b = eval(b)
	var cd = eval(scene.b)

	
	sceneHandler.getScene(); //currentScene,nextScene,prevScene
	console.log('handleCurrentScene:'+currentScene)
	if (currentScene == '2') {
		
	}else{
	createjs.Ticker.removeAllEventListeners();
	}

	console.log('handle')
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	b.canvas.style.display = 'block';
	this.exportRoot = new scene[bb];       

	this.stage = new createjs.Stage(b.canvas);

	this.stage.addChild(this.exportRoot);	
	this.stage.update(); 
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(scene.properties.fps);
	createjs.Ticker.addEventListener("tick", this.stage);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		//sceneNumber
	/*(function(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = scene.properties.width, h = scene.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h){					
						sRatio = Math.min(xRatio, yRatio);				
					}
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			b.canvas.width = w*pRatio*sRatio;			
			b.canvas.height = h*pRatio*sRatio;
			b.stage.scaleX = pRatio*sRatio;			
			b.stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;

		}
	})(false,'both',true,1);		*/
	//Code to support hidpi screens and responsive scaling.
}




var scene_0 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	scene_0.canvas = document.getElementById("canvas0")
	vv = scene_0.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_0_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	handle(evt,'scene_0_libs','scene_0','0')


},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}



var scene_1 = {
	canvas: '',
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){
	scene_1.canvas = document.getElementById("canvas1");
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_1_libs.properties.manifest);
	},
	handleComplete : function(evt) {
		handle(evt,'scene_1_libs','scene_1','1')
	},
	 handleFileLoad: function(evt){	
	// 	hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}

var clock = {
	//clock is part of scene_1
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	this.canvas = document.getElementById("clock")
	vv = clock.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(clock_libs.properties.manifest);
	},
	handleComplete : function(evt) {
	handle(evt,'clock_libs','clock','1');
},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}


var scene_2 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	this.canvas = document.getElementById("canvas2")
	vv = scene_2.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_2_libs.properties.manifest);

	},
	handleComplete : function(evt) {
		handle(evt,'scene_2_libs','scene_2','2')

},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}




var scene_3 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	this.canvas = document.getElementById("canvas3")
	vv = scene_3.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_3_libs.properties.manifest);

	},
	handleComplete : function(evt) {
		handle(evt,'scene_3_libs','scene_3','3')

},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}


var scene_4 = {

}


var scene_5 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	this.canvas = document.getElementById("canvas5")
	vv = scene_5.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_5_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	
	handle(evt,'scene_5_libs','scene_5','5')


},handleFileLoad: function(evt){	
//	 hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}


var scene_6 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	scene_6.canvas = document.getElementById("canvas6")
	vv = scene_6.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_6_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	
	handle(evt,'scene_6_libs','scene_6','6')


},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}

var scene_7 = {
	//Static
	}



var scene_8 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	scene_8.canvas = document.getElementById("canvas8")
	vv = scene_8.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_8_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	handle(evt,'scene_8_libs','scene_8','8')


},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}


var scene_9 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	scene_9.canvas = document.getElementById("canvas9")
	vv = scene_9.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_9_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	handle(evt,'scene_9_libs','scene_9','9')


},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}


var scene_10 = {
	canvas: '',	
	stage: '',
	exportRoot: '',
	loader: '',
	
	init:function(){

	scene_10.canvas = document.getElementById("canvas10")
	vv = scene_10.canvas.id
	images = images||{};
	ss = ss||{};
	this.loader = new createjs.LoadQueue(false);
	this.loader.addEventListener("fileload", this.handleFileLoad);
	this.loader.addEventListener("complete", this.handleComplete);
	this.loader.loadManifest(scene_10_libs.properties.manifest);

	},
	handleComplete : function(evt) {
	handle(evt,'scene_10_libs','scene_10','10')


},handleFileLoad: function(evt){	
	//hideMask()
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
}

var scene_11 = {
	//static
}

var scene_12 = {
	//static
}

var scene_13 = {
	//static
}

var scene_14 = {
	//static
}
function hideMask(){
		setTimeout(function(){
        	$('.mask').css('opacity','0')
        	$('.mask').css('z-index','1')
    	}, 600);
}





/*function resizeCanvas(ele){
			var htmlCanvas = document.getElementById(ele),
			  	context = htmlCanvas.getContext('2d');
			initialize();
			function initialize() {
				window.addEventListener('resize', resizeCanvas, false);
				resizeCanvas();
			}			

			function resizeCanvas() {
				htmlCanvas.width = window.innerWidth;
				htmlCanvas.height = window.innerHeight;

			}
		
		};*/