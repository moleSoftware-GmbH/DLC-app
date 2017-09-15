(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 450,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/clock_atlas_.png", id:"clock_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"clock_atlas_", frames: [[842,0,642,827],[0,0,840,1968],[988,984,60,100],[842,984,144,66],[842,829,208,153],[842,1052,61,20]]}
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



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["clock_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-18.6,3.4,0.62,0.158,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-6.4,37.3,12.9);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-29.2,-21.5,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-21.5,58.5,43);


(lib.smallArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-8.4,-14,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-14,16.8,28);


(lib.maxalo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-94.9,-122.3,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-122.3,189.9,244.6);


(lib.bigArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-19.7,-9,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-9,39.5,18.1);


// stage content:
(lib.clock = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(106));

	// Layer 4
	this.instance = new lib.smallArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(243.4,144.6,1,1,0,0,0,0,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},29).to({rotation:359},30).to({regX:0.1,regY:4.7,x:243.6,y:144.7},11).to({regY:4.6,rotation:374,x:243.5,y:144.6},10).to({startPosition:0},9).to({startPosition:0},35).to({regY:4.7,scaleX:1,scaleY:1,rotation:373.8,y:144.7},35).to({startPosition:0},17).to({startPosition:0},17).wait(1));

	// Layer 3
	this.instance_1 = new lib.bigArrow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.4,144.6,1,1,0,0,0,-11.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-11.3,regY:-0.3,rotation:180,x:243.5,y:144.7},14).to({regX:-11.4,rotation:359,x:243.3,y:144.6},15).to({regX:-11.3,rotation:538,x:243.4},15).to({regY:-0.2,rotation:705},15).to({regY:-0.1,scaleX:1,scaleY:1,rotation:810.2,y:144.7},11).to({scaleX:1,scaleY:1,rotation:975,y:144.8},10).to({rotation:1005,x:243.5,y:144.7},9).to({startPosition:0},35).to({regX:-11.4,regY:0,scaleX:1,scaleY:1,rotation:1004.8,y:144.8},35).to({startPosition:0},17).to({startPosition:0},17).wait(1));

	// Layer 5
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(251.2,85.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({x:277.2,y:74},9).to({x:246.7,y:84.9},9).to({x:275.1,y:74.1},8).to({x:251.2,y:85.5},9).to({x:277.2,y:74},9).to({x:246.7,y:84.9},9).to({x:275.1,y:74.1},8).to({x:246.7,y:84.9},9).to({x:275.1,y:74.1},8).to({x:246.7,y:84.9},9).to({x:275.1,y:74.1},8).to({x:248.3,y:84.5},9).wait(1));

	// Layer 6
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(251.2,96.3,0.307,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({scaleX:1,x:264.2},9).to({scaleX:0.22,x:249.6},9).to({regX:0.1,regY:0.1,scaleX:0.92,skewY:-2.2,x:262.8,y:96.5},8).to({regX:0,regY:0,scaleX:0.31,skewY:0,x:251.2,y:96.3},9).to({scaleX:1,x:264.2},9).to({scaleX:0.22,x:249.6},9).to({regX:0.1,regY:0.1,scaleX:0.92,skewY:-2.2,x:262.8,y:96.5},8).to({regX:0,regY:0,scaleX:0.22,skewY:0,x:249.6,y:96.3},9).to({regX:0.1,regY:0.1,scaleX:0.92,skewY:-2.2,x:262.8,y:96.5},8).to({regX:0,regY:0,scaleX:0.22,skewY:0,x:249.6,y:96.3},9).to({regX:0.1,regY:0.1,scaleX:0.92,skewY:-2.2,x:262.8,y:96.5},8).to({regX:0,regY:0,scaleX:0.22,skewY:0,x:249.6,y:96.3},9).wait(1));

	// Layer 1
	this.instance_4 = new lib.Bitmap2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(126,0,0.265,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194));

	// Layer 2
	this.instance_5 = new lib.maxalo("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(227.8,237.5,0.998,0.998,33.9,0,0,-31.3,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-112.5,rotation:-31.9},19).to({rotation:-42.3},5).to({regX:-31.2,rotation:20.9,x:227.9},25).to({regY:-112.6,rotation:35.9,y:237.4},10).to({regY:-112.5,rotation:-24.1,x:227.8,y:237.5},14).to({regX:-31.1,regY:-112.4,rotation:-0.2,x:227.9,y:237.6},16).to({rotation:-0.2},35).to({startPosition:0},52).to({startPosition:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269.3,225,304.6,522.1);

})(clock_libs = clock_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var clock_libs, images, createjs, ss;