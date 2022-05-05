const CANVAS_WIDTH  = 1200;
const CANVAS_HEIGHT = 900;
let canvas; 
let context;

const LINKTYPE_WARP = "warp";
const LINKTYPE_MARK = "mark";

const GAME_LOADED_CACHE   = "last-game-loaded";
const SMOOTH_IMAGES_CACHE = "smooth-images";

let game;
let games = {
    crystal:  crystal,
    emerald:  emerald,
    platinum: platinum,
    hgss:     hgss,
}
var loading_game_text;
function init() {
    // Get UI elements
    config                = document.getElementById("config");
    config_controls       = document.getElementById("config_controls");
    config_controlstoggle = document.getElementById("config_controlstoggle");
    config_network        = document.getElementById("config_network");
    config_networktoggle  = document.getElementById("config_networktoggle");

    checkbox_smooth = document.getElementById("checkbox_smooth");
    checkbox_smooth.checked = (localStorage.getItem(SMOOTH_IMAGES_CACHE) == "true") ? true : false;

    crystal.button  = document.getElementById("crystal_button");
    emerald.button  = document.getElementById("emerald_button");
    platinum.button = document.getElementById("platinum_button");
    hgss.button = document.getElementById("hgss_button");
    loading_game_text = document.getElementById("loading_game_text");
    loading_game_text.innerHTML = "";

    // Create canvas
    canvas  = document.getElementById('canvas');
    context = canvas.getContext('2d');
    aux_canvas = document.createElement("canvas");
    aux_context = aux_canvas.getContext("2d");

    // Get last loaded game and load it
    let last_game = localStorage.getItem(GAME_LOADED_CACHE);
    switch (last_game) {
        case "crystal":  game = crystal;  break;
        case "platinum": game = platinum; break;
        default:
        case "emerald":  game = emerald; break;
    }
    game.button.disabled = true;
    current_location = game.start_location;
    for (let key_game in games) {
        games[key_game].ready = false;
        games[key_game].obtained = new Set();
    }
    InitTrackerToUnknowns();
    LoadImages();
    RegisterInputEvents();
    document.fonts.onloadingdone = FontReady;

    // Create reader to load files (just in case)
    file_selector = document.createElement("input");
    file_selector.type = "file";
    file_selector.multiple = false;
    file_selector.onchange = function(e) { FileUploaded(e); };

    // Start tracker
    requestAnimationFrame(GameLoop);
}

function GameLoop() {
    if (game.ready) { Render(); }
    requestAnimationFrame(GameLoop);
}

function FontReady() { rerender_location = true; }