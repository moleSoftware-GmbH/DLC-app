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
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_3_atlas_.png", id:"scene_3_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_3_atlas_", frames: [[834,1282,144,145],[980,1282,151,132],[834,1044,210,236],[0,0,832,1712],[834,0,745,804],[834,806,210,236]]}
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



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["scene_3_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,745,804);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,132);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,145);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,42.6,1,1,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,0,253.5,273.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,236);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(146.5,10,1,1,0,0,0,75.5,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(21).to({_off:false,y:14.8},0).to({_off:true},5).wait(28));

	// Layer 2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,-10.5,1,1,0,0,0,72,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(21).to({_off:false,x:-6.7},0).to({_off:true},5).wait(28));

	// Layer 1
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.6,231.6,1,1,0,0,0,431.4,631.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:372.5,regY:402,x:-1.3,y:2.5},0).wait(6).to({rotation:-0.6,x:-3.9,y:3.2},0).wait(1).to({rotation:-1.3,x:-6.4,y:3.9},0).wait(1).to({rotation:-1.9,x:-9,y:4.6},0).wait(1).to({rotation:-2.6,x:-11.6,y:5.4},0).wait(1).to({rotation:-3.2,x:-14.1,y:6.2},0).wait(1).to({rotation:-3.9,x:-16.7,y:7},0).wait(1).to({rotation:-4.5,x:-19.2,y:7.9},0).wait(1).to({rotation:-5.2,x:-21.7,y:8.7},0).wait(1).to({rotation:-5.8,x:-24.3,y:9.7},0).wait(1).to({rotation:-6.5,x:-26.8,y:10.6},0).wait(1).to({rotation:-5.6,x:-23.2,y:9.3},0).wait(1).to({rotation:-4.6,x:-19.7,y:8.1},0).wait(1).to({rotation:-3.7,x:-16.1,y:6.8},0).wait(1).to({rotation:-2.8,x:-12.5,y:5.7},0).wait(1).to({rotation:-1.9,x:-8.9,y:4.6},0).wait(1).to({rotation:-1,x:-5.2,y:3.6},0).wait(1).to({rotation:-0.1,x:-1.6,y:2.6},0).wait(1).to({rotation:0.8,x:2.1,y:1.6},0).wait(1).to({rotation:1.8,x:5.7,y:0.8},0).wait(1).to({rotation:2.7,x:9.5,y:0},0).wait(7).to({rotation:2.1,x:7.3,y:0.4},0).wait(1).to({rotation:1.6,x:5.2,y:0.9},0).wait(1).to({rotation:1.1,x:3,y:1.5},0).wait(1).to({rotation:0.6,x:0.9,y:2},0).wait(1).to({rotation:0,x:-1.2,y:2.5},0).wait(1).to({rotation:-0.5,x:-3.3,y:3},0).wait(1).to({rotation:-1,x:-5.4,y:3.6},0).wait(1).to({rotation:-1.6,x:-7.6,y:4.2},0).wait(1).to({rotation:-2.1,x:-9.6,y:4.8},0).wait(1).to({rotation:-2.6,x:-11.7,y:5.4},0).wait(1).to({rotation:-3.2,x:-13.8,y:6.1},0).wait(1).to({rotation:-3.7,x:-15.9,y:6.7},0).wait(1).to({rotation:-3.4,x:-14.6,y:6.3},0).wait(1).to({rotation:-3,x:-13.3,y:5.9},0).wait(1).to({rotation:-2.7,x:-12,y:5.6},0).wait(1).to({rotation:-2.4,x:-10.7,y:5.1},0).wait(1).to({rotation:-2.1,x:-9.5,y:4.8},0).wait(1).to({rotation:-1.7,x:-8.2,y:4.3},0).wait(1).to({rotation:-1.4,x:-6.9,y:4},0).wait(1).to({rotation:-1.1,x:-5.6,y:3.7},0).wait(1).to({rotation:-0.8,x:-4.3,y:3.3},0).wait(1).to({rotation:-0.4,x:-3,y:3},0).wait(1).to({rotation:-0.1,x:-1.7,y:2.6},0).wait(1).to({rotation:0.2,x:-0.4,y:2.3},0).wait(1).to({rotation:0.6,x:0.9,y:2},0).wait(1).to({rotation:0.9,x:2.2,y:1.6},0).wait(1).to({rotation:1.2,x:3.5,y:1.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-373.8,-399.5,745,804);


(lib.lily = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-421,-836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer 4
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46.5,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Layer 3
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.4,407.9,1,1,0,0,0,27.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1.2,regY:136.8,scaleY:1.02,rotation:-3.8,x:-6,y:539.7},0).wait(1).to({scaleY:1.05,rotation:-7.6,x:1.3,y:541.1},0).wait(1).to({scaleX:1,scaleY:1.07,rotation:-11.4,x:9,y:541.7},0).wait(1).to({scaleY:1.09,rotation:-15.2,x:17},0).wait(1).to({scaleY:1.12,rotation:-19,x:25.4,y:540.9},0).wait(1).to({scaleY:1.14,rotation:-22.8,x:34,y:539.4},0).wait(1).to({scaleX:1,scaleY:1.16,rotation:-26.6,x:42.9,y:537},0).wait(1).to({scaleY:1.19,rotation:-16.3,x:18.3,y:546.9},0).wait(1).to({scaleY:1.21,rotation:-6.1,x:-7.8,y:552.1},0).wait(1).to({scaleY:1.23,rotation:4.1,x:-34.8,y:552.5},0).wait(1).to({scaleX:1,scaleY:1.25,rotation:14.3,x:-61.7,y:547.6},0).wait(1).to({scaleY:1.28,rotation:24.5,x:-87.4,y:537.8},0).wait(1).to({scaleY:1.3,rotation:34.7,x:-111.2,y:523.1},0).wait(1).to({scaleY:1.3,rotation:28.3,x:-96.7,y:534.1},0).wait(1).to({scaleY:1.29,rotation:21.8,x:-81,y:543.3},0).wait(1).to({scaleY:1.28,rotation:15.4,x:-64.4,y:550.6},0).wait(1).to({scaleX:1,scaleY:1.27,rotation:8.9,x:-47,y:556},0).wait(1).to({scaleY:1.27,rotation:2.5,x:-29.2,y:559.2},0).wait(1).to({scaleY:1.26,rotation:-4,x:-11.2,y:560.4},0).wait(1).to({scaleY:1.26,rotation:-10.5,x:6.9,y:559.4},0).wait(1).to({scaleY:1.25,rotation:-16.9,x:24.6,y:556.5},0).wait(1).to({scaleY:1.24,rotation:-23.4,x:42,y:551.5},0).wait(1).to({rotation:-20.9,x:34.4,y:552.4},0).wait(1).to({rotation:-18.3,x:26.9,y:553},0).wait(1).to({rotation:-15.8,x:19.2,y:553.3},0).wait(1).to({rotation:-13.3,x:11.5},0).wait(1).to({rotation:-10.8,x:4.3,y:553.7},0).wait(1).to({rotation:-8.3,x:-2.8,y:553.8},0).wait(1).to({rotation:-5.8,x:-10,y:553.5},0).wait(1).to({rotation:-3.2,x:-17.2,y:552.9},0).wait(1).to({rotation:-0.7,x:-24.3,y:552},0).wait(1).to({rotation:1.8,x:-31.4,y:550.7},0).wait(1).to({rotation:4.3,x:-38.4,y:549.2},0).wait(1).to({rotation:6.8,x:-45.4,y:547.4},0).wait(6));

	// Layer 2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-46.7,411.8,1,1,0,0,0,152.3,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:105,regY:118,scaleY:1,rotation:2.5,x:-98.8,y:523.2},0).wait(1).to({scaleY:0.99,rotation:5,x:-103.6,y:520.2},0).wait(1).to({scaleY:0.98,rotation:7.5,x:-108.2,y:517.1},0).wait(1).to({scaleY:0.98,rotation:10,x:-112.7,y:513.7},0).wait(1).to({scaleY:0.97,rotation:12.5,x:-116.9,y:510.1},0).wait(1).to({scaleY:0.97,rotation:15,x:-121,y:506.4},0).wait(1).to({scaleX:1,scaleY:0.96,rotation:18,x:-125.6,y:501.8},0).wait(1).to({scaleY:0.96,rotation:11.8,x:-115.4,y:509.2},0).wait(1).to({scaleY:0.95,rotation:5.7,x:-104.5,y:515.4},0).wait(1).to({scaleY:0.95,rotation:-0.5,x:-93,y:520.4},0).wait(1).to({scaleY:0.94,rotation:-6.7,x:-81.1,y:524.2},0).wait(1).to({scaleY:0.94,rotation:-12.8,x:-68.9,y:526.6},0).wait(1).to({scaleY:0.93,rotation:-19,x:-56.7,y:527.8},0).wait(1).to({scaleY:0.95,rotation:-14.1,x:-66,y:528.9},0).wait(1).to({scaleY:0.97,rotation:-9.2,x:-75.5,y:529.2},0).wait(1).to({scaleY:1,rotation:-4.3,x:-85.2,y:528.7},0).wait(1).to({scaleX:1,scaleY:1.02,rotation:0.6,x:-95,y:527.4},0).wait(1).to({scaleY:1.04,rotation:5.4,x:-104.9,y:525.3},0).wait(1).to({scaleY:1.06,rotation:10.3,x:-114.8,y:522.2},0).wait(1).to({scaleY:1.08,rotation:15.2,x:-124.6,y:518.3},0).wait(1).to({scaleY:1.1,rotation:20.1,x:-134.2,y:513.5},0).wait(1).to({scaleY:1.12,rotation:25,x:-143.5,y:507.9},0).wait(1).to({rotation:22.1,x:-138.5,y:512.7},0).wait(1).to({rotation:19.1,x:-133.3,y:517.3},0).wait(1).to({rotation:16.2,x:-127.7,y:521.6},0).wait(1).to({rotation:13.3,x:-122,y:525.6},0).wait(1).to({rotation:10.3,x:-116.1,y:529.3},0).wait(1).to({rotation:7.4,x:-110,y:532.7},0).wait(1).to({rotation:4.5,x:-103.7,y:535.8},0).wait(1).to({rotation:1.6,x:-97.3,y:538.5},0).wait(1).to({rotation:-1.4,x:-90.8,y:540.9},0).wait(1).to({rotation:-4.3,x:-84.1,y:543.1},0).wait(1).to({rotation:-7.2,x:-77.4,y:544.8},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421,-836,832,1712);


// stage content:



(lib.scene_3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lily();
	this.instance.parent = this;
	this.instance.setTransform(500,312.4,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-38.9,regY:20,x:477.4,y:321.8},0).wait(1).to({x:470.7,y:323},0).wait(1).to({x:463.9,y:324.2},0).wait(1).to({x:457.2,y:325.5},0).wait(1).to({x:450.5,y:326.7},0).wait(1).to({x:443.8,y:327.9},0).wait(1).to({x:437.1,y:329.2},0).wait(1).to({x:430.4,y:330.4},0).wait(1).to({x:423.6,y:331.6},0).wait(1).to({x:416.9,y:332.9},0).wait(1).to({x:410.2,y:334.1},0).wait(1).to({x:403.5,y:335.3},0).wait(1).to({x:396.8,y:336.6},0).wait(1).to({x:390,y:337.8},0).wait(1).to({x:383.3,y:339},0).wait(1).to({x:376.6,y:340.3},0).wait(1).to({x:369.9,y:341.5},0).wait(1).to({x:363.2,y:342.7},0).wait(1).to({x:356.4,y:344},0).wait(1).to({x:349.7,y:345.2},0).wait(1).to({x:345.4,y:347.4},0).wait(1).to({x:341,y:349.5},0).wait(1).to({x:336.7,y:351.7},0).wait(1).to({x:332.4,y:353.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(626.2,300.9,339.8,699.2);

})(scene_3_libs = scene_3_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_3_libs, images, createjs, ss;