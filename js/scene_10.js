(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 569,
	height: 650,
	fps: 24,
	color: "#454545",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_10_atlas_.png", id:"scene_10_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_10_atlas_", frames: [[0,0,459,839],[461,0,491,408]]}
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



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["scene_10_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["scene_10_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-23,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,7,491,408);


(lib.cry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-4.7,-104.2,1,1,0,0,0,238.8,355.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:222.5,regY:211,rotation:-0.2,x:-21.2,y:-248.5},0).wait(1).to({rotation:-0.5,x:-21.5,y:-247.9},0).wait(1).to({rotation:-0.7,x:-21.7,y:-247.4},0).wait(1).to({rotation:-0.9,x:-22,y:-246.8},0).wait(1).to({rotation:-1.2,x:-22.2,y:-245.8},0).wait(1).to({rotation:-1.4,x:-22.5,y:-242.9},0).wait(1).to({rotation:-1.6,x:-22.7,y:-240},0).wait(1).to({rotation:-1.9,x:-23.3,y:-240.7},0).wait(1).to({rotation:-2.1,x:-23.8,y:-241.4},0).wait(1).to({rotation:-2.3,x:-24.4,y:-242.1},0).wait(1).to({rotation:-2.5,x:-25,y:-242.8},0).wait(1).to({rotation:-2.8,x:-25.6,y:-243.4},0).wait(1).to({rotation:-3,x:-26.2,y:-244.1},0).wait(1).to({rotation:-3.2,x:-26.8,y:-244.7},0).wait(1).to({rotation:-2.7,x:-25.3,y:-245.6},0).wait(1).to({rotation:-2.1,x:-23.8,y:-246.4},0).wait(1).to({rotation:-1.5,x:-22.3,y:-247.3},0).wait(1).to({rotation:-0.9,x:-20.9,y:-248.2},0).wait(1).to({rotation:-0.3,x:-19.3,y:-248.9},0).wait(1).to({rotation:0.3,x:-17.8,y:-249.5},0).wait(1).to({rotation:0.9,x:-16.4,y:-250.1},0).wait(1).to({rotation:0.7,x:-16.8,y:-250.4},0).wait(1).to({rotation:0.5,x:-17.2,y:-250.7},0).wait(1).to({rotation:0.4,x:-17.7,y:-251},0).wait(1).to({rotation:0.2,x:-18.1,y:-251.3},0).wait(1).to({rotation:0,x:-18.9,y:-251.6},0).wait(1).to({rotation:-0.2,x:-19.6,y:-251.9},0).wait(1).to({rotation:-0.3,x:-20.4,y:-252.2},0).wait(1).to({rotation:-0.5,x:-21.2,y:-252.4},0).wait(1).to({rotation:-0.7,x:-21.9,y:-252.7},0).wait(1).to({rotation:-0.9,x:-22.7,y:-253},0).wait(1).to({rotation:-1,x:-23.4,y:-253.2},0).wait(1).to({rotation:-1.2,x:-24.2,y:-252.5},0).wait(1).to({rotation:-1.4,x:-24.9,y:-251.4},0).wait(1).to({rotation:-1.5,x:-25.7,y:-250.4},0).wait(1).to({rotation:-1.7,x:-26.5,y:-249.4},0).wait(1).to({rotation:-1.9,x:-27.2,y:-248.4},0).wait(1).to({rotation:-2.1,x:-28,y:-248.6},0).wait(1).to({y:-249.2},0).wait(1).to({y:-249.7},0).wait(1).to({y:-250.3},0).wait(1).to({y:-250.5},0).wait(59));

	// Layer 1
	this.instance_1 = new lib.Bitmap12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-251,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.5,-453.1,491,1181.2);


// stage content:
(lib.scene_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cry();
	this.instance.parent = this;
	this.instance.setTransform(287.2,320.8,0.641,0.641,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.5,355.1,315,757.7);

})(scene_10_libs = scene_10_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_10_libs, images, createjs, ss;