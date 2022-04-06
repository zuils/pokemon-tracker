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
    current_location = game.start_location;
    for (let key_location in game.warps) {
        for (let key_warp in game.warps[key_location]) {
            game.warps[key_location][key_warp].link_type = LINKTYPE_MARK;
            game.warps[key_location][key_warp].link      = "unknown";
            game.marks[0][0][1] += 1; // assumming game.marks[0][0] always is ["unknown", 0]
        }
    }
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