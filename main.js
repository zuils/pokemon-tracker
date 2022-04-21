const CANVAS_WIDTH  = 1200;
const CANVAS_HEIGHT = 900;
let canvas; 
let context;

const LINKTYPE_WARP = "warp";
const LINKTYPE_MARK = "mark";

let game;
let tracker_ready = false;
function init() {
    canvas  = document.getElementById('canvas');
    context = canvas.getContext('2d');
    aux_canvas = document.createElement("canvas");
    aux_context = aux_canvas.getContext("2d");

    game = emerald;
    //game = platinum;
    current_location = game.start_location;
    InitTrackerToUnknowns();
    LoadImages();
    RegisterInputEvents();
    document.fonts.onloadingdone = FontReady;

    config                = document.getElementById("config");
    config_controls       = document.getElementById("config_controls");
    config_controlstoggle = document.getElementById("config_controlstoggle");
    config_network        = document.getElementById("config_network");
    config_networktoggle  = document.getElementById("config_networktoggle");

    checkbox_smooth = document.getElementById("checkbox_smooth");
    checkbox_smooth.checked = true;

    // Create reader to load files (just in case)
    file_selector = document.createElement("input");
    file_selector.type = "file";
    file_selector.multiple = false;
    file_selector.onchange = function(e) { FileUploaded(e); };

    requestAnimationFrame(GameLoop);
}

function GameLoop() {
    if (game.ready) { Render(); }
    requestAnimationFrame(GameLoop);
}

function FontReady() { rerender_location = true; }