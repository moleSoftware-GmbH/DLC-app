(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1000,
	height: 640,
	fps: 12,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/scene_8_atlas_.png", id:"scene_8_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"scene_8_atlas_", frames: [[3750,187,156,222],[3750,582,142,140],[3750,724,110,176],[3750,411,130,169],[2719,0,1029,1010],[3882,506,39,39],[3862,724,39,39],[2719,1012,939,1048],[0,0,2717,1955],[3750,902,181,97],[3882,411,199,93],[3882,547,33,32],[3750,0,196,185],[3660,1012,212,220]]}
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
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Untitled1 = function() {
	this.spriteSheet = ss["scene_8_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Untitled1();
	this.instance.parent = this;
	this.instance.setTransform(-106,-110);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-18.5,0.381,0.381);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-18.5,69,37);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-99.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-46.5,199,93);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-502.2,-361.4,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.2,-361.4,1004.5,722.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.597,0.597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,23.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,185);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,31.2);


(lib.leg_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-65,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-84.5,130,169);


(lib.leg_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-29.3,-46.8,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-46.8,58.6,93.8);


(lib.leg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-47.8,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-47.8,97.1,95.8);


(lib.leg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-42.7,-60.7,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-60.7,85.4,121.6);


(lib.gaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-255.4,-285.1,0.544,0.544);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.4,-285.1,510.9,570.2);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqAqQgRgRAAgZQAAgXARgTQATgRAXAAQAZAAARARQASATAAAXQAAAZgSARQgRASgZAAQgXAAgTgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12.1,12.1);


(lib.usta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20.1,-1.4,0.816,0.816,0,0,0,-27.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:2.3,y:-8.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.3,x:2.1,y:-9.4},0).wait(1).to({rotation:-2.7,x:1.9,y:-9.9},0).wait(1).to({rotation:-4,x:1.7,y:-10.4},0).wait(1).to({rotation:-5.4,x:1.5,y:-10.9},0).wait(1).to({rotation:-6.7,x:1.2,y:-11.4},0).wait(1).to({rotation:-8.1,x:1,y:-11.9},0).wait(1).to({rotation:-9.4,x:0.7,y:-12.4},0).wait(1).to({rotation:-8.9,x:0.8,y:-12.2},0).wait(1).to({rotation:-8.3,x:1,y:-12},0).wait(1).to({rotation:-7.7,x:1.1,y:-11.8},0).wait(1).to({rotation:-7.1,x:1.2,y:-11.5},0).wait(1).to({rotation:-6.5,x:1.3,y:-11.3},0).wait(1).to({rotation:-5.9,x:1.4,y:-11.1},0).wait(1).to({rotation:-5.3,x:1.5,y:-10.9},0).wait(1).to({rotation:-4.7,x:1.6,y:-10.7},0).wait(1).to({rotation:-4.1,x:1.7,y:-10.4},0).wait(1).to({rotation:-3.5,x:1.8,y:-10.2},0).wait(1).to({rotation:-3,y:-10},0).wait(1).to({rotation:-2.4,x:1.9,y:-9.8},0).wait(1).to({rotation:-1.8,x:2,y:-9.5},0).wait(1).to({rotation:-1.2,x:2.1,y:-9.3},0).wait(1).to({rotation:-0.6,x:2.2,y:-9.1},0).wait(1).to({rotation:0,x:2.3,y:-8.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.1,2.7,0.312,0.312,0,0,0,-74,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:-0.1,y:9.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.6,x:-0.2,y:9.8},0).wait(1).to({rotation:1.2,y:10},0).wait(1).to({rotation:1.8,x:-0.3,y:10.3},0).wait(1).to({rotation:2.4,x:-0.4,y:10.5},0).wait(1).to({rotation:3,x:-0.5,y:10.8},0).wait(1).to({rotation:3.6,x:-0.6,y:11},0).wait(1).to({rotation:4.2,x:-0.7,y:11.2},0).wait(1).to({rotation:3.9,x:-0.6,y:11.1},0).wait(1).to({rotation:3.7,y:11},0).wait(1).to({rotation:3.4,y:10.9},0).wait(1).to({rotation:3.2,x:-0.5,y:10.8},0).wait(1).to({rotation:2.9,y:10.7},0).wait(1).to({rotation:2.6,x:-0.4,y:10.6},0).wait(1).to({rotation:2.4,y:10.5},0).wait(1).to({rotation:2.1,y:10.4},0).wait(1).to({rotation:1.8,x:-0.3,y:10.3},0).wait(1).to({rotation:1.6,y:10.2},0).wait(1).to({rotation:1.3,y:10.1},0).wait(1).to({rotation:1.1,x:-0.2,y:10},0).wait(1).to({rotation:0.8,y:9.9},0).wait(1).to({rotation:0.5,y:9.8},0).wait(1).to({rotation:0.3,x:-0.1,y:9.7},0).wait(1).to({rotation:0,y:9.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-23.9,62,48);


(lib.Torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(-63,-46,0.671,0.671);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65.3,-42.3,1,1,0,0,0,11.7,11.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({x:-67.5,y:-39.7},0).wait(1).to({x:-69.8,y:-37.1},0).wait(1).to({x:-72.1,y:-34.6},0).wait(1).to({x:-69.6,y:-31.3},0).wait(1).to({x:-67.2,y:-28.1},0).wait(1).to({x:-64.7,y:-24.9},0).wait(1).to({x:-62.3,y:-21.7},0).wait(1).to({x:-59.9,y:-18.5},0).wait(1).to({x:-57.4,y:-15.3},0).wait(1).to({x:-55,y:-12.1},0).wait(1).to({x:-54.3,y:-14.3},0).wait(1).to({x:-53.6,y:-16.4},0).wait(1).to({x:-52.9,y:-18.6},0).wait(1).to({x:-52.2,y:-20.7},0).wait(1).to({x:-51.5,y:-22.9},0).wait(1).to({x:-50.8,y:-25},0).wait(1).to({x:-50.1,y:-27.2},0).wait(1).to({x:-49.4,y:-29.3},0).wait(1).to({x:-48.7,y:-31.5},0).to({_off:true},1).wait(30));

	// Layer 1
	this.instance_2 = new lib.Bitmap15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-249,-230,0.438,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-230,451.1,442.7);


(lib.greenalien_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(380.1,84.6,1,1,0,0,0,16.1,15.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(3).to({_off:true},1).wait(28).to({_off:false},0).wait(3).to({_off:true},1).wait(12));

	// Layer 1
	this.instance_1 = new lib.gaa("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(330.5,236.2,0.569,0.569,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Layer 4
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(367.8,96.4,1,1,0,0,0,9.8,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:98,regY:92.5,x:456,y:160.5},0).wait(20).to({rotation:1.2,x:454.6,y:162.4},0).wait(1).to({rotation:2.5,x:453.1,y:164.3},0).wait(1).to({rotation:3.7,x:451.6,y:166.1},0).wait(1).to({rotation:5,x:450.1,y:167.9},0).wait(1).to({rotation:6.2,x:448.5,y:169.7},0).wait(1).to({rotation:10.5,x:442.8,y:175.5},0).wait(1).to({rotation:9.5,x:444.2,y:174.2},0).wait(1).to({rotation:8.5,x:445.5,y:172.9},0).wait(1).to({rotation:7.5,x:446.8,y:171.5},0).wait(1).to({rotation:6.5,x:448.1,y:170.1},0).wait(1).to({rotation:5.5,x:449.4,y:168.7},0).wait(1).to({rotation:4.5,x:450.7,y:167.3},0).wait(1).to({rotation:3.5,x:451.9,y:165.8},0).wait(1).to({rotation:2.5,x:453.1,y:164.3},0).wait(1).to({rotation:3.5,x:451.9,y:165.8},0).wait(1).to({rotation:4.4,x:450.8,y:167.1},0).wait(1).to({rotation:5.3,x:449.6,y:168.4},0).wait(1).to({rotation:6.3,x:448.5,y:169.7},0).wait(1).to({rotation:7.2,x:447.3,y:171},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185.1,68,369,330.4);


(lib.dotAlien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_23
	this.ikNode_3 = new lib.leg_3();
	this.ikNode_3.parent = this;
	this.ikNode_3.setTransform(-7.2,135,0.989,0.989,-9.6,0,0,-11.6,-30.8);

	this.ikNode_2 = new lib.Torso();
	this.ikNode_2.parent = this;
	this.ikNode_2.setTransform(2,2.2,0.99,0.99,5.5,0,0,8.6,71.5);

	this.ikNode_6 = new lib.leg_4();
	this.ikNode_6.parent = this;
	this.ikNode_6.setTransform(85.9,117.8,0.521,0.521,7.8,0,0,3.1,-41.8);

	this.ikNode_4 = new lib.leg_2();
	this.ikNode_4.parent = this;
	this.ikNode_4.setTransform(-67.4,125.2,0.66,0.66,-33.8,0,0,11.1,-31.1);

	this.ikNode_5 = new lib.leg_1();
	this.ikNode_5.parent = this;
	this.ikNode_5.setTransform(-135.2,71.1,0.99,0.99,20.3,0,0,23.3,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_5,p:{rotation:20.3,x:-135.2,y:71.1,regY:-43}},{t:this.ikNode_4,p:{regX:11.1,scaleX:0.66,scaleY:0.66,regY:-31.1,rotation:-33.8,x:-67.4,y:125.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:7.8,x:85.9,y:117.8,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.6,x:2,y:2.2,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.6,regY:-30.8,rotation:-9.6,x:-7.2,y:135,scaleX:0.989,scaleY:0.989}}]}).to({state:[{t:this.ikNode_5,p:{rotation:12,x:-133.4,y:74.5,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31.1,rotation:-33.8,x:-67.4,y:125.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:7.8,x:85.9,y:117.8,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.9,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.9,rotation:-1.6,x:-12.4,y:134.4,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:3.7,x:-131.5,y:78,regY:-42.9}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31.1,rotation:-33.8,x:-67.4,y:125.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:7.8,x:85.9,y:117.8,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.8,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:6.4,x:-17.6,y:133.8,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:-4.6,x:-129.5,y:81.3,regY:-42.9}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31.1,rotation:-33.8,x:-67.4,y:125.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:7.8,x:85.9,y:117.8,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.8,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:14.3,x:-22.6,y:132.9,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:-12.9,x:-127.4,y:84.4,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31.1,rotation:-33.8,x:-67.4,y:125.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:7.8,x:85.9,y:117.8,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.8,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:22.3,x:-27.7,y:131.9,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:-12.9,x:-127.4,y:84.5,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31,rotation:-13.3,x:-78.3,y:118.5}},{t:this.ikNode_6,p:{regX:3.2,rotation:23.1,x:66.9,y:127.3,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.8,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:22.3,x:-27.7,y:131.8,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:-12.9,x:-127.3,y:84.5,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31,rotation:7.3,x:-88.6,y:110.7}},{t:this.ikNode_6,p:{regX:3.1,rotation:38.4,x:46.5,y:134,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:22.3,x:-27.7,y:131.7,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:3.1,x:-134.3,y:72.2,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31,rotation:7.3,x:-88.5,y:110.7}},{t:this.ikNode_6,p:{regX:3.1,rotation:38.4,x:46.4,y:133.9,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:10.8,x:0.1,y:135,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:8.5,x:-136.3,y:67.9,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-31,rotation:7.3,x:-88.5,y:110.7}},{t:this.ikNode_6,p:{regX:3.1,rotation:38.4,x:46.4,y:133.9,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:7,x:9.3,y:134.8,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:8.5,x:-136.3,y:67.9,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.66,scaleY:0.66,regY:-31.1,rotation:10.8,x:-91.7,y:107.8}},{t:this.ikNode_6,p:{regX:3.1,rotation:37.2,x:55.5,y:130.6,regY:-41.7}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:7,x:9.3,y:134.8,scaleX:0.989,scaleY:0.989}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:8.5,x:-136.3,y:67.9,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.659,scaleY:0.659,regY:-30.9,rotation:14.2,x:-94.8,y:105.1}},{t:this.ikNode_6,p:{regX:3.1,rotation:36,x:64.3,y:126.4,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:7,x:9.3,y:134.7,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:8.5,x:-136.3,y:67.9,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.66,scaleY:0.66,regY:-31.1,rotation:17.7,x:-97.8,y:102}},{t:this.ikNode_6,p:{regX:3.1,rotation:34.8,x:73,y:121.6,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:7,x:9.3,y:134.7,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:8.5,x:-136.3,y:67.9,regY:-43}},{t:this.ikNode_4,p:{regX:11,scaleX:0.66,scaleY:0.66,regY:-30.9,rotation:21.1,x:-100.7,y:99.2}},{t:this.ikNode_6,p:{regX:3.1,rotation:33.6,x:81.1,y:116.5,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.7,y:2.3,rotation:5.5}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:7,x:9.3,y:134.7,scaleX:0.988,scaleY:0.988}}]},1).to({state:[{t:this.ikNode_5,p:{rotation:20.6,x:-135.4,y:70.6,regY:-43}},{t:this.ikNode_4,p:{regX:11.1,scaleX:0.659,scaleY:0.659,regY:-31,rotation:-33.8,x:-67.8,y:125}},{t:this.ikNode_6,p:{regX:3.1,rotation:8,x:85.5,y:118.2,regY:-41.8}},{t:this.ikNode_2,p:{regX:8.5,x:1.9,y:2.3,rotation:5.7}},{t:this.ikNode_3,p:{regX:-11.7,regY:-30.8,rotation:-9.2,x:-7.9,y:135,scaleX:0.989,scaleY:0.989}}]},1).wait(1));

	// Layer 1
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(-49.7,-109.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,21,222,0.408)").s().p("AhRBSQgigiAAgwQAAgvAigiQAigiAvAAQAwAAAiAiQAiAiAAAvQAAAwgiAiQgiAigwAAQgvAAgigig");
	this.shape.setTransform(-51.4,-104.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-319.4,486.6,533.1);


(lib.mainscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// o4o
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-52,-203,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Ysta
	this.instance_1 = new lib.usta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.7,-158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Dot alien
	this.ikNode_1 = new lib.dotAlien();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(-656.4,23.5,0.689,0.63,0,10.8,-169.2);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1).to({regX:-21.7,regY:-50.9,scaleX:0.69,scaleY:0.63,x:-625.6,y:-3.9},0).wait(1).to({x:-615.5,y:-2.6},0).wait(1).to({x:-605.4,y:-1.2},0).wait(1).to({x:-595.3,y:0.2},0).wait(1).to({x:-585.3,y:1.5},0).wait(1).to({x:-575.2,y:2.9},0).wait(1).to({x:-565.1,y:4.3},0).wait(1).to({x:-555,y:5.6},0).wait(1).to({x:-544.9,y:7},0).wait(1).to({x:-534.8,y:8.4},0).wait(1).to({x:-524.7,y:9.7},0).wait(1).to({x:-514.6,y:11.1},0).wait(1).to({x:-504.5,y:12.5},0).wait(1).to({x:-494.4,y:13.8},0).wait(1).to({x:-484.4,y:15.2},0).wait(1).to({scaleX:0.25,scaleY:0.63,skewX:3.7,skewY:-176.3,x:-510.2,y:11.8},0).wait(1).to({scaleX:0.18,rotation:-3.4,skewX:0,skewY:0,x:-536.2,y:11.1},0).wait(1).to({scaleX:0.62,rotation:-10.5,x:-562,y:13.3},0).wait(1).to({x:-574.7,y:12.8},0).wait(1).to({x:-587.3,y:12.2},0).wait(1).to({x:-600,y:11.7},0).wait(1).to({x:-612.6,y:11.2},0).wait(1).to({x:-625.3,y:10.7},0).wait(1).to({x:-637.9,y:10.1},0).wait(1).to({x:-650.6,y:9.6},0).wait(1).to({x:-663.2,y:9.1},0).wait(1).to({x:-675.9,y:8.6},0).wait(1).to({x:-688.5,y:8},0).wait(1).to({x:-701.2,y:7.5},0).wait(1).to({x:-713.8,y:7},0).wait(1).to({x:-726.5,y:6.5},0).wait(1).to({x:-739.1,y:5.9},0).wait(1).to({x:-751.8,y:5.4},0).wait(1).to({scaleX:0.18,rotation:-4.3,x:-717.4,y:-1.4},0).wait(1).to({scaleX:0.26,rotation:0,skewX:1.8,skewY:-178.2,x:-682.8,y:-5.8},0).wait(1).to({scaleX:0.69,skewX:7.9,skewY:-172.1,x:-648.4,y:-7.8},0).wait(54));

	// GreenALien
	this.instance_2 = new lib.greenalien_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.9,243,1,1,0,0,0,369.6,233.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:370.6,regY:232.5,x:75.9,y:242.3},0).wait(15).to({x:89.5,y:236.1},0).wait(1).to({x:103.2,y:230},0).wait(1).to({x:116.8,y:223.9},0).wait(1).to({x:130.5,y:217.8},0).wait(1).to({x:144.1,y:211.6},0).wait(1).to({x:157.8,y:205.5},0).wait(1).to({x:171.4,y:199.4},0).wait(1).to({x:185.1,y:193.2},0).wait(1).to({x:198.7,y:187.1},0).wait(1).to({x:212.4,y:181},0).wait(1).to({x:226,y:174.8},0).wait(1).to({x:239.7,y:168.7},0).wait(1).to({x:253.3,y:162.6},0).wait(1).to({x:267,y:156.4},0).wait(1).to({x:280.6,y:150.3},0).wait(1).to({x:294.3,y:144.2},0).wait(1).to({x:307.9,y:138},0).wait(14).to({scaleX:0.34,x:285,y:148},0).wait(1).to({scaleX:0.32,skewY:180,x:262.2,y:158},0).wait(1).to({scaleX:0.98,x:239.4,y:167.9},0).wait(1).to({x:217.3,y:177.9},0).wait(1).to({x:195.2,y:187.9},0).wait(1).to({x:173,y:197.8},0).wait(1).to({x:150.9,y:207.8},0).wait(1).to({x:128.8,y:217.8},0).wait(1).to({x:106.7,y:227.7},0).wait(1).to({x:84.5,y:237.7},0).wait(1).to({x:62.4,y:247.6},0).wait(1).to({x:40.3,y:257.6},0).wait(1).to({scaleX:0.34,x:46.3,y:254.9},0).wait(1).to({scaleX:0.3,skewY:0,x:52.3,y:252.3},0).wait(1).to({scaleX:0.94,x:58.4,y:249.6},0).wait(30));

	// main
	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.6,-5.7,0.857,0.857,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-796.5,-315.2,1211.1,723.3);


(lib.aliens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mainscene();
	this.instance.parent = this;
	this.instance.setTransform(206.8,-66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589.7,-381.7,1211.1,723.4);


// stage content:
(lib.scene_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aliens();
	this.instance.parent = this;
	this.instance.setTransform(460.9,347.4,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511.8,376.7,922.2,550.8);

})(scene_8_libs = scene_8_libs||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var scene_8_libs, images, createjs, ss;