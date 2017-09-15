var canvas, stage, tomtom, jerjer;
function init() {

    var exportRoot;

    //Tommy
    canvas = document.getElementById("canvas_tommy");

    tomtom = new lib_tommy.tommy();
    stage = new createjs.Stage(canvas);
    stage.addChild(tomtom);
    stage.update();

    createjs.Ticker.setFPS(lib_tommy.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);


    //Jerry
    canvas = document.getElementById("canvas_jerry");

    jerjer = new lib_jerry.jerry();

    stage = new createjs.Stage(canvas);
    stage.addChild(jerjer);
    stage.update();

    createjs.Ticker.setFPS(lib_jerry.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

}

function button_from_tommy_was_clicked(){   
    tomtom.gotoAndPlay(5);
}

function button_from_jerry_was_clicked(){   
    jerjer.gotoAndPlay(5);
}