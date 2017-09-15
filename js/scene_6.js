(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 650,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_6_atlas_.png", id:"scene_6_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_6_atlas_", frames: [[0,0,770,923],[772,0,116,269],[772,271,115,110],[772,383,124,51],[889,271,42,33]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["scene_6_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["scene_6_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["scene_6_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["scene_6_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["scene_6_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-16.1,-12.7,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-12.7,32.3,25.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-44.3,-18.2,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-18.2,88.6,36.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-48,-111.3,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-111.3,96,222.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-41.6,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-41.6,87,83.2);


(lib.arhitekt_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.2,-203.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({alpha:1},4).to({startPosition:0},25).to({alpha:0},3).wait(75));

	// Layer 4
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.3,-245.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({alpha:1},4).to({startPosition:0},25).to({alpha:0},3).wait(75));

	// Layer 3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,-145.8,1,1,0,0,0,34,-104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:11.7,x:16.9},8).to({regY:-104.2,scaleX:0.95,scaleY:0.88,x:20.9,y:-152.9},9).to({regY:-104.3,rotation:-3.3,x:13.1,y:-145.9},6).to({regX:33.8,regY:-104.4,scaleY:0.99,rotation:7.2,x:15.7,y:-146.1},7).wait(110));

	// Layer 1
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-288.3,-345.6,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer 2
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(6,141,1,1,0,0,0,43.5,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},10).to({rotation:7.2,y:141.1},2).to({rotation:-0.5,x:6.1,y:141},3).to({rotation:0,x:6},13).to({rotation:7.2,y:141.1},2).to({rotation:-0.5,x:6.1,y:141},3).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.3,-345.6,576.6,691.2);


// stage content:



(lib.scene_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.frame_2 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/

		this.stop();
		//this.play()
	},	this.playYawn = function(){
		this.instance.gotoAndPlay(1);
		setTimeout(function () {
			if(playing3){
				Audio.playFx('playWomenYawn');
			}
		}, 1400);

	},  this.stopYawn = function(){
		this.instance.gotoAndStop(1);
	},
	// Layer 1
	this.instance = new lib.arhitekt_2_1();
	this.instance.parent = this;
	this.instance.setTransform(329.3,346.6);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).call(this.frame_2).wait(11160));
	//this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(366,351,576.6,691.2);

})(scene_6_libs = scene_6_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_6_libs, images, createjs, ss;