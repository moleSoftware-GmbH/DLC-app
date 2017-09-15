(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_5_atlas_.png", id:"scene_5_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_5_atlas_", frames: [[0,0,1920,1080],[1922,0,121,150],[1922,152,109,158],[1922,358,58,91],[1922,312,122,44],[0,1082,260,117]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["scene_5_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-91.1,-41,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-41,182.2,82);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-37.7,-13.6,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-13.6,75.4,27.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-20.1,-32.7,0.696,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-32.7,40.3,65.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.7,112.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.7,118.5);


(lib.architekt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(14.7,10,1,1,0,0,0,-22.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-21.3,x:15.8},23).to({rotation:15,y:3.7},6).to({rotation:-8.5,y:3.6},7).to({regX:-21.2,regY:-0.1,rotation:21.5,x:16,y:13.1},7).to({rotation:6.5,x:15.9},4).wait(93));

	// Layer 5
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(244.7,-172.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({alpha:1},2).to({startPosition:0},25).to({alpha:0},2).wait(43));

	// Layer 4
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(247.2,-147.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({alpha:1},4).to({startPosition:0},25).to({alpha:0},2).wait(43));

	// Layer 1
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(-621.6,-349.7,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(154.3,119.4,1,1,0,0,0,60.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:40.9,regY:59.2,x:134.3,y:176.4},0).wait(1).to({y:176.3},0).wait(1).to({y:176.2},0).wait(1).to({y:176.1},0).wait(1).to({y:176},0).wait(2).to({y:175.9},0).wait(1).to({y:175.8},0).wait(1).to({y:175.7},0).wait(1).to({y:175.6},0).wait(1).to({y:175.5},0).wait(1).to({rotation:3.7,x:130.6,y:174},0).wait(1).to({rotation:7.5,x:126.9,y:172.4},0).wait(1).to({rotation:11.2,x:123.5,y:170.5},0).wait(1).to({rotation:15,x:120.2,y:168.4},0).wait(1).to({rotation:11.2,x:123.5,y:170.5},0).wait(1).to({rotation:7.4,x:127,y:172.5},0).wait(1).to({rotation:3.6,x:130.7,y:174.2},0).wait(1).to({rotation:-0.2,x:134.4,y:175.5},0).wait(1).to({rotation:0.7,x:133.5,y:175.2},0).wait(1).to({rotation:1.6,x:132.7,y:174.9},0).wait(1).to({rotation:2.5,x:131.7,y:174.6},0).wait(1).to({rotation:3.4,x:130.9,y:174.2},0).wait(1).to({rotation:4.3,x:130.1,y:173.9},0).wait(1).to({rotation:5.2,x:129.2,y:173.5},0).wait(1).to({rotation:6.1,x:128.3,y:173},0).wait(1).to({rotation:6.9,x:127.5,y:172.7},0).wait(1).to({rotation:7.8,x:126.7,y:172.2},0).wait(1).to({rotation:8.7,x:125.8,y:171.8},0).wait(1).to({rotation:9.6,x:125,y:171.4},0).wait(1).to({rotation:10.5,x:124.2,y:170.9},0).wait(1).to({rotation:11.4,x:123.4,y:170.5},0).wait(1).to({rotation:12.3,x:122.5,y:169.9},0).wait(1).to({rotation:13.2,x:121.7,y:169.4},0).wait(1).to({rotation:14.1,x:120.9,y:168.9},0).wait(1).to({rotation:15,x:120.2,y:168.4},0).wait(1).to({rotation:11.5,x:123.3,y:170.4},0).wait(1).to({rotation:8,x:126.4,y:172.1},0).wait(1).to({rotation:4.6,x:129.7,y:173.7},0).wait(101));

	// Layer 3
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(227.8,152.5,1,1,0,0,0,69.4,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:45.4,regY:56.2,x:203.8,y:200.5},0).wait(29).to({rotation:2.4,x:201.8,y:199.4},0).wait(1).to({rotation:4.7,x:199.9,y:198.4},0).wait(1).to({rotation:7.1,x:198,y:197.1},0).wait(1).to({rotation:9.5,x:196.2,y:195.9},0).wait(1).to({rotation:7.3,x:197.9,y:197.1},0).wait(1).to({rotation:5.2,x:199.5,y:198.1},0).wait(1).to({rotation:3.1,x:201.2,y:199.1},0).wait(1).to({rotation:0.9,x:203,y:200.1},0).wait(1).to({rotation:0.9},0).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-621.6,-349.7,1243.4,699.4);


// stage content:



(lib.scene_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.frame_2 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/

		this.stop();
	},	this.playRing = function(){

		this.instance.gotoAndPlay(25);
		Audio.playFx('playRing');
		console.log('1');
		setTimeout(function () {
			if(playing2){
	 		Audio.playFx('playYawn');
			}
	 }, 1800);	
	 	
	},this.stopRing = function(){
		this.instance.gotoAndStop(1);
	},

	// Layer 1
	this.instance = new lib.architekt_1();
	this.instance.setTransform(116.7,267.7);

//	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).call(this.frame_2).wait(200));
	console.log(this.instance)
	console.log(this)

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,218,1243.4,699.4);

})(scene_5_libs = scene_5_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_5_libs, images, createjs, ss;