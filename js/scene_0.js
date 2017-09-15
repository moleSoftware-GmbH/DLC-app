(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 980,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_0_atlas_.png", id:"scene_0_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_0_atlas_", frames: [[2045,1863,378,239],[989,1863,706,313],[1697,1863,346,264],[323,2361,239,191],[0,2361,321,174],[0,0,2600,1861],[0,1863,987,496],[989,2178,236,253],[2045,2104,236,253]]}
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
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4_1 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5_1 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["scene_0_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,253);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(-1289,-911);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1289,-911,2600,1861);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462.7,232.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,81.6);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.2,123.8);


(lib.dogear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-156.5,706,313);


(lib.closedEyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-189,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-119.5,378,239);


(lib.textAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(3));

	// Layer 3
	this.grazzy = new lib.Symbol3();
	this.grazzy.parent = this;
	this.grazzy.setTransform(292.1,-377.5,0.999,0.999,-32.4,0,0,229.8,115.1);
	this.grazzy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.grazzy).wait(50).to({_off:false},0).wait(1).to({regX:231.3,regY:116.2,scaleX:1,scaleY:1,rotation:-30.5,x:293.9,y:-369.8},0).wait(1).to({rotation:-28.5,x:294,y:-347.2},0).wait(1).to({rotation:-26.6,x:293.9,y:-309.5},0).wait(1).to({rotation:-24.6,y:-256.7},0).wait(1).to({rotation:-22.6,y:-188.9},0).wait(1).to({rotation:-20.6,y:-106},0).wait(1).to({rotation:-18.7,x:293.8,y:-8},0).wait(1).to({rotation:-16.7,x:293.9,y:7.5},0).wait(1).to({rotation:-14.7,x:293.8,y:-7.7},0).wait(1).to({rotation:-12.8},0).wait(1).to({rotation:-10.8,x:293.7,y:-7.6},0).wait(1).to({rotation:-8.8},0).wait(1).to({rotation:-6.9,y:-7.5},0).wait(1).to({rotation:-4.9,y:-4.9},0).wait(1).to({y:-7.4},0).wait(8).to({_off:true},1).wait(2));

	// Layer 2
	this.und = new lib.Symbol2();
	this.und.parent = this;
	this.und.setTransform(85.4,-267.5,1,1,0,0,0,75.2,40.8);
	this.und._off = true;

	this.timeline.addTween(cjs.Tween.get(this.und).wait(50).to({_off:false},0).wait(1).to({y:-262.6},0).wait(1).to({y:-248},0).wait(1).to({y:-223.7},0).wait(1).to({y:-189.6},0).wait(1).to({y:-145.9},0).wait(1).to({y:-92.4},0).wait(1).to({y:-29.1},0).wait(1).to({y:38.8},0).wait(1).to({y:29.6},0).wait(14).to({_off:true},1).wait(2));

	// Layer 1
	this.lill = new lib.Symbol1_1();
	this.lill.parent = this;
	this.lill.setTransform(-226.9,-331.6,0.998,0.998,44.9,0,0,79.8,61.5);
	this.lill._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lill).wait(50).to({_off:false},0).wait(1).to({regX:81.1,regY:61.9,scaleX:1,scaleY:1,rotation:42.8,x:-226.2,y:-325.8},0).wait(1).to({rotation:40.6,y:-311.7},0).wait(1).to({rotation:38.4,x:-226.1,y:-288.3},0).wait(1).to({rotation:36.2,y:-255.5},0).wait(1).to({rotation:34,x:-226,y:-213.3},0).wait(1).to({rotation:31.8,y:-161.7},0).wait(1).to({rotation:29.6,x:-225.9,y:-100.8},0).wait(1).to({rotation:27.4,y:-30.5},0).wait(1).to({rotation:25.3,x:-225.8,y:36.4},0).wait(1).to({rotation:23.1,y:24.3},0).wait(1).to({rotation:20.9,x:-225.7},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:16.5,y:35.6},0).wait(1).to({rotation:14.3,x:-225.6,y:27.8},0).wait(1).to({rotation:12.1,y:35.6},0).wait(1).to({rotation:9.9,y:24.1},0).wait(1).to({rotation:7.7,y:24},0).wait(6).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cover_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.closedEyes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-154.5,-419.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(95));

	// Layer 3
	this.instance_1 = new lib.Bitmap4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48,116);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({_off:true},37).wait(15));

	// Layer 1
	this.instance_2 = new lib.main("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Layer 5
	this.instance_3 = new lib.Bitmap8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(346,279);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(399.9,432.9,1,1,0,0,0,53.9,153.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},68).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).wait(1).to({regX:118,regY:126.5,scaleX:0.98,x:462.7,y:405.5},0).wait(1).to({scaleX:0.96,x:461.3},0).wait(1).to({scaleX:0.94,x:460},0).wait(1).to({scaleX:0.92,x:458.6},0).wait(1).to({scaleX:0.9,x:457.3},0).wait(1).to({scaleX:0.88,x:456},0).wait(1).to({scaleX:0.85,x:454.6},0).wait(1).to({scaleX:0.83,x:453.3},0).wait(1).to({scaleX:0.81,x:452},0).wait(1).to({scaleX:0.79,x:450.6},0).wait(1).to({scaleX:0.77,x:449.3},0).wait(1).to({scaleX:0.82,x:452.3},0).wait(1).to({scaleX:0.87,x:455.3},0).wait(1).to({scaleX:0.91,x:458.4},0).wait(1).to({scaleX:0.96,x:461.4},0).wait(1).to({scaleX:1.01,x:464.5},0).wait(1).to({scaleX:0.96,x:461.7},0).wait(1).to({scaleX:0.92,x:458.8},0).wait(1).to({scaleX:0.88,x:456},0).wait(1).to({scaleX:0.83,x:453.1},0).wait(1).to({scaleX:0.79,x:450.3},0).wait(1).to({scaleX:0.74,x:447.5},0).wait(1).to({scaleX:0.78,x:450},0).wait(1).to({scaleX:0.82,x:452.5},0).wait(1).to({scaleX:0.86,x:455},0).wait(1).to({scaleX:0.9,x:457.4},0).wait(1).to({scaleX:0.94,x:459.9},0).wait(1).to({scaleX:0.92,x:458.7},0).wait(1).to({scaleX:0.9,x:457.3},0).wait(1).to({scaleX:0.88,x:456},0).wait(1).to({scaleX:0.86,x:454.7},0).wait(1).to({scaleX:0.83,x:453.3},0).wait(1).to({scaleX:0.81,x:452},0).wait(1).to({scaleX:0.79,x:450.7},0).wait(1).to({scaleX:0.77,x:449.4},0).wait(1).to({scaleX:0.75,x:448.1},0).wait(1).to({scaleX:0.73,x:446.7},0).wait(1).to({scaleX:0.75,x:447.9},0).wait(1).to({scaleX:0.77,x:448.9},0).wait(1).to({scaleX:0.78,x:450.1},0).wait(1).to({scaleX:0.8,x:451.1},0).wait(1).to({scaleX:0.82,x:452.3},0).wait(1).to({scaleX:0.83,x:453.3},0).wait(1).to({scaleX:0.85,x:454.4},0).wait(1).to({scaleX:0.87,x:455.6},0).wait(1).to({scaleX:0.89,x:456.6},0).wait(6));

	// Layer 4
	this.instance_5 = new lib.dogear("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(155.2,68.9,0.999,0.999,21.1,0,0,39.8,-24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:353,regY:0,scaleX:1,scaleY:1,rotation:21.2,x:438.2,y:205},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:20.4,x:440.1,y:201.1},0).wait(1).to({rotation:19.6,x:441.9,y:197.1},0).wait(1).to({rotation:18.8,x:443.7,y:193.1},0).wait(1).to({rotation:18,x:445.4,y:189.1},0).wait(1).to({rotation:17.2,x:447,y:185},0).wait(1).to({rotation:16.5,x:448.6,y:180.9},0).wait(1).to({rotation:15.7,x:450.2,y:176.9},0).wait(1).to({rotation:14.9,x:451.6,y:172.7},0).wait(1).to({rotation:14.1,x:453.1,y:168.6},0).wait(1).to({rotation:13.3,x:454.4,y:164.4},0).wait(1).to({rotation:12.5,x:455.7,y:160.3},0).wait(1).to({rotation:11.7,x:457,y:156},0).wait(1).to({rotation:10.9,x:458.1,y:151.9},0).wait(1).to({rotation:10.1,x:459.3,y:147.6},0).wait(1).to({rotation:9.3,x:460.4,y:143.4},0).wait(1).to({rotation:8.5,x:461.4,y:139.1},0).wait(1).to({rotation:7.7,x:462.3,y:134.9},0).wait(1).to({rotation:6.9,x:463.2,y:130.6},0).wait(1).to({rotation:6.1,x:464,y:126.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:7.1,x:463,y:131.7},0).wait(1).to({rotation:8.1,x:461.8,y:137},0).wait(1).to({rotation:9.1,x:460.6,y:142.3},0).wait(1).to({rotation:10.1,x:459.3,y:147.6},0).wait(1).to({rotation:11.1,x:457.9,y:152.9},0).wait(1).to({rotation:12.1,x:456.3,y:158.1},0).wait(1).to({rotation:13.1,x:454.8,y:163.3},0).wait(1).to({rotation:14,x:453.1,y:168.6},0).wait(1).to({rotation:15,x:451.3,y:173.7},0).wait(1).to({rotation:16,x:449.4,y:178.9},0).wait(1).to({rotation:17,x:447.5,y:183.9},0).wait(1).to({rotation:18,x:445.4,y:189},0).wait(1).to({rotation:19,x:443.3,y:194},0).wait(1).to({rotation:20,x:441.1,y:199.1},0).wait(1).to({rotation:21,x:438.8,y:204},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1289,-911,2600,1861);


// stage content:



(lib.scene_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cover_1();
	this.instance.parent = this;
	this.instance.setTransform(445.3,320,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.heading = new lib.textAnim();
	this.heading.parent = this;
	this.heading.setTransform(436.3,267.8);

	this.timeline.addTween(cjs.Tween.get(this.heading).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(596.2,380.3,684.1,489.7);

})(scene_0_libs = scene_0_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_0_libs, images, createjs, ss;