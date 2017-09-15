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
		{src:"images/scene_9_atlas_.png", id:"scene_9_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_9_atlas_", frames: [[0,1002,492,409],[0,0,1000,1000],[494,1002,100,100]]}
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
	this.spriteSheet = ss["scene_9_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["scene_9_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tear = function() {
	this.spriteSheet = ss["scene_9_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tear();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,38.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(284.4,283.2,1,1,0,0,0,19.3,19.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:19.2,regY:19.2,scaleX:0.98,rotation:1.4,x:283.8,y:284.6,alpha:0.2},0).wait(1).to({scaleX:0.96,rotation:2.7,x:283.3,y:286.2,alpha:0.4},0).wait(1).to({scaleX:0.94,rotation:4.1,x:282.9,y:287.7,alpha:0.6},0).wait(1).to({scaleX:0.92,rotation:5.5,x:282.4,y:289.2,alpha:0.8},0).wait(1).to({scaleX:0.89,rotation:6.8,x:281.9,y:290.8,alpha:1},0).wait(1).to({scaleX:0.87,rotation:8.2,x:281.4,y:292.4},0).wait(1).to({scaleX:0.85,rotation:9.5,x:280.9,y:293.9},0).wait(1).to({scaleX:0.83,rotation:10.9,x:280.4,y:295.4},0).wait(1).to({scaleX:0.81,rotation:12.3,x:280,y:297},0).wait(1).to({scaleX:0.79,rotation:13.6,x:279.5,y:298.5},0).wait(1).to({scaleX:0.77,rotation:15,x:279.1,y:300},0).wait(1).to({scaleX:0.77,rotation:14.6,x:278.9,y:301.6},0).wait(1).to({scaleX:0.78,rotation:14.2,y:303.1},0).wait(1).to({scaleX:0.79,rotation:13.9,x:278.8,y:304.7},0).wait(1).to({scaleX:0.79,rotation:13.5,x:278.7,y:306.2},0).wait(1).to({scaleX:0.8,rotation:13.1,y:307.7},0).wait(1).to({scaleX:0.8,rotation:12.7,x:278.6,y:309.3},0).wait(1).to({scaleX:0.81,rotation:12.4,x:278.5,y:310.9},0).wait(1).to({scaleX:0.81,rotation:12,y:312.4},0).wait(1).to({scaleX:0.82,rotation:11.6,x:278.4,y:313.9},0).wait(1).to({scaleX:0.83,rotation:11.2,x:278.3,y:315.5},0).wait(1).to({scaleX:0.83,rotation:10.9,y:317},0).wait(1).to({scaleX:0.84,rotation:10.5,x:278.2,y:318.6},0).wait(1).to({scaleX:0.84,rotation:10.1,y:320.1},0).wait(1).to({scaleX:0.85,rotation:9.7,x:278.4,y:322},0).wait(1).to({scaleX:0.86,rotation:9.4,x:278.6,y:324},0).wait(1).to({scaleX:0.86,rotation:9,x:278.9,y:325.9},0).wait(1).to({scaleX:0.87,rotation:8.6,x:279.2,y:327.9},0).wait(1).to({scaleX:0.87,rotation:8.2,x:279.4,y:329.8},0).wait(1).to({scaleX:0.88,rotation:7.9,x:279.7,y:331.7},0).wait(1).to({scaleX:0.88,rotation:7.5,x:279.9,y:333.7},0).wait(1).to({scaleX:0.89,rotation:7.1,x:280.2,y:335.6},0).wait(1).to({scaleX:0.9,rotation:6.7,x:280.5,y:337.6},0).wait(1).to({scaleX:0.9,rotation:6.4,x:280.7,y:339.5},0).wait(1).to({scaleX:0.91,rotation:6,x:281,y:341.5},0).wait(1).to({scaleX:0.91,rotation:5.6,x:280.8,y:343.2},0).wait(1).to({scaleX:0.92,rotation:5.2,x:280.7,y:345},0).wait(1).to({scaleX:0.92,rotation:4.9,x:280.5,y:346.8},0).wait(1).to({scaleX:0.93,rotation:4.5,x:280.4,y:348.5},0).wait(1).to({scaleX:0.94,rotation:4.1,x:280.2,y:350.3},0).wait(1).to({scaleX:0.94,rotation:3.7,x:280.1,y:352},0).wait(1).to({scaleX:0.95,rotation:3.4,x:279.9,y:353.7},0).wait(1).to({scaleX:0.95,rotation:3,x:279.8,y:355.5},0).wait(1).to({scaleX:0.96,rotation:2.6,x:279.7},0).wait(1).to({scaleX:0.97,rotation:2.2},0).wait(1).to({scaleX:0.97,rotation:1.9},0).wait(1).to({scaleX:0.98,rotation:1.5,x:279.8},0).wait(1).to({scaleX:0.98,rotation:1.1,x:279.7},0).wait(1).to({scaleX:0.99,rotation:0.7,x:279.8},0).wait(1).to({scaleX:0.99,rotation:0.4,x:279.7},0).wait(1).to({scaleX:1,rotation:0,x:279.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(4).to({_off:true},1).wait(24));

	// Layer 2 copy 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.2,285,1,1,0,0,0,19.3,19.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).wait(1).to({regX:19.2,regY:19.2,rotation:0.5,x:286.8,y:286.5,alpha:0.2},0).wait(1).to({rotation:1.1,x:286.6,y:288,alpha:0.4},0).wait(1).to({rotation:1.6,x:286.3,y:289.5,alpha:0.6},0).wait(1).to({rotation:2.1,x:286.1,y:291.1,alpha:0.8},0).wait(1).to({rotation:2.7,x:285.8,y:292.6,alpha:1},0).wait(1).to({rotation:3.2,x:285.5,y:294.2},0).wait(1).to({rotation:3.7,x:285.3,y:295.7},0).wait(1).to({rotation:4.3,x:285,y:297.2},0).wait(1).to({rotation:4.8,x:284.8,y:298.8},0).wait(1).to({rotation:5.4,x:284.5,y:300.3},0).wait(1).to({rotation:5.9,x:284.3,y:301.8},0).wait(1).to({rotation:6.4,x:284,y:303.4},0).wait(1).to({rotation:7,x:283.7,y:304.9},0).wait(1).to({rotation:7.5,x:283.5,y:306.5},0).wait(1).to({rotation:8,x:283.2,y:308},0).wait(1).to({rotation:8.6,x:283,y:309.6},0).wait(1).to({rotation:9.1,x:282.7,y:311.1},0).wait(1).to({rotation:9.6,x:282.5,y:312.6},0).wait(1).to({rotation:10.2,x:282.2,y:314.2},0).wait(1).to({rotation:10.7,x:281.9,y:315.7},0).wait(1).to({rotation:11.2,x:281.7,y:317.3},0).wait(1).to({rotation:11.8,x:281.5,y:318.8},0).wait(1).to({rotation:12.3,x:281.2,y:320.3},0).wait(1).to({rotation:12.9,x:280.9,y:321.8},0).wait(1).to({rotation:13.4,x:281.2,y:323.9},0).wait(1).to({rotation:13.9,x:281.5,y:325.8},0).wait(1).to({rotation:14.5,x:281.7,y:327.7},0).wait(1).to({rotation:15,x:282,y:329.7},0).wait(1).to({rotation:10.8,x:282.2,y:331.6},0).wait(1).to({rotation:6.7,x:282.4,y:333.6},0).wait(1).to({rotation:2.5,x:282.7,y:335.5},0).wait(1).to({rotation:-1.7,x:283,y:337.5},0).wait(1).to({rotation:-5.9,x:283.3,y:339.4},0).wait(1).to({rotation:-10,x:283.5,y:341.3},0).wait(1).to({rotation:-14.2,x:283.8,y:343.3},0).wait(1).to({rotation:-11.5,x:283.3,y:344.5},0).wait(1).to({rotation:-8.9,x:282.8,y:345.7},0).wait(1).to({rotation:-6.3,x:282.3,y:346.8},0).wait(1).to({rotation:-3.6,x:281.8,y:348},0).wait(1).to({rotation:-1,x:281.4,y:349.2},0).wait(1).to({rotation:1.7,x:280.9,y:350.3},0).wait(1).to({rotation:4.3,x:280.3,y:351.5},0).wait(1).to({rotation:7,x:279.9,y:352.7},0).wait(1).to({rotation:9.6,x:277.9,y:353.9},0).wait(1).to({rotation:12.2,x:275.9,y:355.1},0).wait(1).to({rotation:14.9,x:273.9,y:356.3},0).wait(1).to({rotation:17.5,x:271.9,y:357.5},0).wait(1).to({rotation:13.1,x:269.9,y:358.7},0).wait(1).to({rotation:8.8,x:267.9,y:359.9},0).wait(1).to({rotation:4.4,x:265.9,y:361.1},0).wait(1).to({rotation:0,x:263.9,y:362.3},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(5));

	// Layer 2 copy
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.3,287.3,1,1,0,0,0,19.3,19.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(1).to({regX:19.2,regY:19.2,x:211.9,y:288.7,alpha:0.2},0).wait(1).to({x:211.7,y:290.3,alpha:0.4},0).wait(1).to({x:211.4,y:291.8,alpha:0.6},0).wait(1).to({x:211.2,y:293.4,alpha:0.8},0).wait(1).to({x:210.9,y:294.9,alpha:1},0).wait(1).to({x:210.7,y:296.5},0).wait(1).to({x:210.4,y:298},0).wait(1).to({x:210.1,y:299.5},0).wait(1).to({x:209.9,y:301.1},0).wait(1).to({x:209.6,y:302.6},0).wait(1).to({x:209.4,y:304.2},0).wait(1).to({x:209.1,y:305.7},0).wait(1).to({x:208.8,y:307.2},0).wait(1).to({x:208.6,y:308.8},0).wait(1).to({x:208.3,y:310.3},0).wait(1).to({x:208.1,y:311.9},0).wait(1).to({x:207.8,y:313.4},0).wait(1).to({x:207.6,y:315},0).wait(1).to({x:207.3,y:316.5},0).wait(1).to({x:207,y:318},0).wait(1).to({x:206.8,y:319.6},0).wait(1).to({x:206.5,y:321.1},0).wait(1).to({x:206.3,y:322.7},0).wait(1).to({x:206,y:324.2},0).wait(1).to({x:206.3,y:326.1},0).wait(1).to({x:206.5,y:328.1},0).wait(1).to({x:206.8,y:330},0).wait(1).to({x:207.1,y:332},0).wait(1).to({x:207.3,y:333.9},0).wait(1).to({x:207.6,y:335.9},0).wait(1).to({x:207.8,y:337.8},0).wait(1).to({x:208.1,y:339.8},0).wait(1).to({x:208.4,y:341.7},0).wait(1).to({x:208.6,y:343.7},0).wait(1).to({x:208.9,y:345.6},0).wait(1).to({x:208.7,y:347.4},0).wait(1).to({x:208.6,y:349.1},0).wait(1).to({x:208.4,y:350.9},0).wait(1).to({x:208.3,y:352.6},0).wait(1).to({x:208.1,y:354.4},0).wait(1).to({x:208,y:356.1},0).wait(1).to({x:207.8,y:357.8},0).wait(1).to({x:207.7,y:359.6},0).wait(9).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(4).to({_off:true},1).wait(8));

	// Layer 2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(212.3,287.3,1,1,0,0,0,19.3,19.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:19.2,regY:19.2,rotation:0.5,x:211.9,y:288.8,alpha:0.2},0).wait(1).to({rotation:1.1,x:211.7,y:290.3,alpha:0.4},0).wait(1).to({rotation:1.6,x:211.4,y:291.8,alpha:0.6},0).wait(1).to({rotation:2.1,x:211.2,y:293.4,alpha:0.8},0).wait(1).to({rotation:2.7,x:210.9,y:294.9,alpha:1},0).wait(1).to({rotation:3.2,x:210.6,y:296.5},0).wait(1).to({rotation:3.7,x:210.4,y:298},0).wait(1).to({rotation:4.3,x:210.1,y:299.5},0).wait(1).to({rotation:4.8,x:209.9,y:301.1},0).wait(1).to({rotation:5.4,x:209.6,y:302.6},0).wait(1).to({rotation:5.9,x:209.4,y:304.1},0).wait(1).to({rotation:6.4,x:209.1,y:305.7},0).wait(1).to({rotation:7,x:208.8,y:307.2},0).wait(1).to({rotation:7.5,x:208.6,y:308.8},0).wait(1).to({rotation:8,x:208.3,y:310.3},0).wait(1).to({rotation:8.6,x:208.1,y:311.9},0).wait(1).to({rotation:9.1,x:207.8,y:313.4},0).wait(1).to({rotation:9.6,x:207.6,y:314.9},0).wait(1).to({rotation:10.2,x:207.3,y:316.5},0).wait(1).to({rotation:10.7,x:207,y:318},0).wait(1).to({rotation:11.2,x:206.8,y:319.6},0).wait(1).to({rotation:11.8,x:206.6,y:321.1},0).wait(1).to({rotation:12.3,x:206.3,y:322.6},0).wait(1).to({rotation:12.9,x:206,y:324.1},0).wait(1).to({rotation:13.4,x:206.3,y:326.2},0).wait(1).to({rotation:13.9,x:206.6,y:328.1},0).wait(1).to({rotation:14.5,x:206.8,y:330},0).wait(1).to({rotation:15,x:207.1,y:332},0).wait(1).to({rotation:10.8,x:207.3,y:333.9},0).wait(1).to({rotation:6.7,x:207.5,y:335.9},0).wait(1).to({rotation:2.5,x:207.8,y:337.8},0).wait(1).to({rotation:-1.7,x:208.1,y:339.8},0).wait(1).to({rotation:-5.9,x:208.4,y:341.7},0).wait(1).to({rotation:-10,x:208.6,y:343.6},0).wait(1).to({rotation:-14.2,x:208.9,y:345.6},0).wait(1).to({rotation:-11.5,x:209.5,y:347},0).wait(1).to({rotation:-8.9,x:210,y:348.5},0).wait(1).to({rotation:-6.3,x:210.6,y:349.9},0).wait(1).to({rotation:-3.6,x:211.1,y:351.3},0).wait(1).to({rotation:-1,x:211.8,y:352.7},0).wait(1).to({rotation:1.7,x:212.3,y:354.2},0).wait(1).to({rotation:4.3,x:212.9,y:355.6},0).wait(1).to({rotation:7,x:213.5,y:357},0).wait(1).to({rotation:9.6,x:214,y:358.6},0).wait(1).to({rotation:12.2,x:214.6,y:360.2},0).wait(1).to({rotation:14.9,x:215.1,y:361.8},0).wait(1).to({rotation:17.5,x:215.7,y:363.4},0).wait(1).to({rotation:13.1,x:216.3,y:365},0).wait(1).to({rotation:8.8,x:216.9,y:366.6},0).wait(1).to({rotation:4.4,x:217.4,y:368.1},0).wait(1).to({rotation:0,x:218,y:369.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(4).to({_off:true},1).wait(41));

	// Layer 1
	this.instance_4 = new lib.Bitmap11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,10,492,409);


(lib.cry_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-4.7,-104.2,1,1,0,0,0,238.8,355.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:221,regY:214.5,rotation:-0.2,x:-22.7,y:-245},0).wait(1).to({rotation:-0.5,x:-22.9,y:-244.4},0).wait(1).to({rotation:-0.7,x:-23.2,y:-243.9},0).wait(1).to({rotation:-0.9,x:-23.5,y:-243.3},0).wait(1).to({rotation:-1.2,x:-23.6,y:-242.3},0).wait(1).to({rotation:-1.4,x:-23.9,y:-239.3},0).wait(1).to({rotation:-1.6,x:-24.1,y:-236.5},0).wait(1).to({rotation:-1.9,x:-24.6,y:-237.2},0).wait(1).to({rotation:-2.1,x:-25.2,y:-237.9},0).wait(1).to({rotation:-2.3,x:-25.8,y:-238.6},0).wait(1).to({rotation:-2.5,x:-26.3,y:-239.2},0).wait(1).to({rotation:-2.8,x:-26.9,y:-239.8},0).wait(1).to({rotation:-3,x:-27.5,y:-240.5},0).wait(1).to({rotation:-3.2,x:-28.1,y:-241.1},0).wait(1).to({rotation:-2.7,x:-26.6,y:-242},0).wait(1).to({rotation:-2.1,x:-25.2,y:-242.9},0).wait(1).to({rotation:-1.5,x:-23.7,y:-243.8},0).wait(1).to({rotation:-0.9,x:-22.3,y:-244.6},0).wait(1).to({rotation:-0.3,x:-20.8,y:-245.4},0).wait(1).to({rotation:0.3,x:-19.4,y:-246.1},0).wait(1).to({rotation:0.9,x:-18,y:-246.6},0).wait(1).to({rotation:0.7,x:-18.3,y:-246.9},0).wait(1).to({rotation:0.5,x:-18.8,y:-247.2},0).wait(1).to({rotation:0.4,x:-19.2,y:-247.5},0).wait(1).to({rotation:0.2,x:-19.6,y:-247.8},0).wait(1).to({rotation:0,x:-20.4,y:-248.1},0).wait(1).to({rotation:-0.2,x:-21.1,y:-248.4},0).wait(1).to({rotation:-0.3,x:-21.9,y:-248.7},0).wait(1).to({rotation:-0.5,x:-22.6,y:-248.9},0).wait(1).to({rotation:-0.7,x:-23.4,y:-249.2},0).wait(1).to({rotation:-0.9,x:-24.2,y:-249.5},0).wait(1).to({rotation:-1,x:-24.9,y:-249.7},0).wait(1).to({rotation:-1.2,x:-25.6,y:-249},0).wait(1).to({rotation:-1.4,x:-26.3,y:-247.9},0).wait(1).to({rotation:-1.5,x:-27.1,y:-246.9},0).wait(1).to({rotation:-1.7,x:-27.9,y:-245.9},0).wait(1).to({rotation:-1.9,x:-28.6,y:-244.8},0).wait(1).to({rotation:-2.1,x:-29.3,y:-245},0).wait(1).to({y:-245.6},0).wait(1).to({y:-246.2},0).wait(1).to({y:-246.7},0).wait(1).to({y:-247},0).wait(59));

	// Layer 1
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


// stage content:
(lib.scene_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cry_1();
	this.instance.parent = this;
	this.instance.setTransform(287.2,320.8,0.641,0.641,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.8,325,641.5,641.5);

})(scene_9_libs = scene_9_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_9_libs, images, createjs, ss;