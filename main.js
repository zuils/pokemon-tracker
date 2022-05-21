let DEBUG_MODE = false; // Never commit this with it set to true!
const DEBUG_WARP_TO_SELF = false;
const DEBUG_PRINT_KEY = false;
const DEBUG_REMEMBER_LOCATION = true;
const DEBUG_IMAGE_DIMENSIONS = true;

let canvas; 
let context;

const LINKTYPE_WARP = "warp";
const LINKTYPE_MARK = "mark";

const CACHE_GAME_LOADED   = "last-game-loaded";
const CACHE_SMOOTH_IMAGES = "smooth-images";
const CACHE_DEBUG_LOCATION = "debug-location"

let ordered_games = [ // Games will be shown in the settings in order
    crystal,
    crystalg,
    emerald,
    platinum,
    hgss,
];
let game;
let games = {};
var loading_game_text;
function init() {
    // Just in case I push with the setting enabled
    if (!document.URL.startsWith("file:///")) { DEBUG_MODE = false; }

    // Init some stuff
    for (let g of ordered_games) {
        if (!g.debug || (g.debug && DEBUG_MODE)) {
            games[g.name] = g;
        }
    }
    InitTrackerToUnknowns();

    // Get UI elements
    config                = document.getElementById("config");
    config_controls       = document.getElementById("config_controls");
    config_controlstoggle = document.getElementById("config_controlstoggle");
    config_network        = document.getElementById("config_network");
    config_networktoggle  = document.getElementById("config_networktoggle");

    checkbox_smooth = document.getElementById("checkbox_smooth");
    checkbox_smooth.checked = (localStorage.getItem(CACHE_SMOOTH_IMAGES) == "true") ? true : false;

    loading_game_text = document.getElementById("loading_game_text");
    loading_game_text.innerHTML = "";

    let game_buttons = document.getElementById("game_buttons");
    for (let g of ordered_games) {
        if (!games[g.name]) continue;

        let div = document.createElement("div");

            g.button = document.createElement("button");
                g.button.className = "load_button";
                g.button.id = g.name + "_button";
                g.button.onclick = function() { ChangeGame(g); };
                g.button.innerHTML = "Load";
            div.appendChild(g.button);

            let text = document.createElement("div");
                text.innerHTML = g.config_name;
                
                if (g.config_randomizer_author) {
                    text.innerHTML += " for "
                    if (g.config_randomizer_link) {
                        let link = document.createElement("a");
                            link.href = g.config_randomizer_link;
                            link.innerHTML = g.config_randomizer_author;
                        text.appendChild(link);
                    }
                    else {
                        text.innerHTML += g.config_randomizer_author;
                    }
                    text.innerHTML += "'s randomizer"
                }

                if (g.config_tracker_author) {
                    text.innerHTML += " by "
                    if (g.config_tracker_link) {
                        let link = document.createElement("a");
                            link.href = g.config_tracker_link;
                            link.innerHTML = g.config_tracker_author;
                        text.appendChild(link);
                    }
                    else {
                        text.innerHTML += g.config_tracker_author;
                    }
                }

                text.innerHTML += " (" + g.marks[0][0][1] + " warps)";

            div.appendChild(text);
        game_buttons.appendChild(div);
    }

    // Create canvas
    canvas  = document.getElementById('canvas');
    context = canvas.getContext('2d');
    aux_canvas = document.createElement("canvas");
    aux_context = aux_canvas.getContext("2d");

    // Get last loaded game and load it
    let last_game = localStorage.getItem(CACHE_GAME_LOADED);
    game = emerald;
    if (last_game && games[last_game]) {
        game = games[last_game];
    }
    game.button.disabled = true;
    current_location = game.start_location;
    if (DEBUG_MODE && DEBUG_REMEMBER_LOCATION) {
        let last_location = localStorage.getItem(CACHE_DEBUG_LOCATION);
        if (last_location && game.locations[last_location]) current_location = last_location;

    }
    for (let key_game in games) {
        games[key_game].ready = false;
        games[key_game].obtained = new Set();
    }
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