const CANVAS_WIDTH  = 1200;
const CANVAS_HEIGHT = 900;

let canvas; 
let context;

const LINKTYPE_WARP = "warp";
const LINKTYPE_MARK = "mark";
let game;
function init() {
    canvas  = document.getElementById('canvas');
    context = canvas.getContext('2d');

    game = emerald;
    LoadImages();
    RegisterInputEvents();

    config                = document.getElementById("config");
    config_controls       = document.getElementById("config_controls");
    config_controlstoggle = document.getElementById("config_controlstoggle");
    config_network        = document.getElementById("config_network");
    config_networktoggle  = document.getElementById("config_networktoggle");

    // Create reader to load files (just in case)
    file_selector = document.createElement("input");
    file_selector.type = "file";
    file_selector.multiple = false;
    file_selector.onchange = function(e) { FileUploaded(e); };
}

function GameLoop() {
    Render();
    requestAnimationFrame(GameLoop);
}