// Games will be shown in the settings in order
let ordered_games = [
    crystal,
    crystalg,
    emerald,
    frlg_nosevii,
    frlg,
    platinum,
    hgss,
    white2,
    white2ad,
    black2ad,
    white2_a
];

let DEBUG = {
    ENABLED: false,
    WARP_TO_SELF:     false,
    PRINT_KEY:        false,
    IMAGE_DIMENSIONS: true,
}

const AUTOTRACKER_DEVELOPMENT = false;

const LINKTYPE_WARP = "warp";
const LINKTYPE_MARK = "mark";

const CACHE = {
    GAME_LOADED:    "last-game-loaded",
    SMOOTH_IMAGES:  "smooth-images",
    DEBUG_LOCATION: "debug-location",
    LAST_VERSION:   "last-version",
}
const CURRENT_VERSION = 3;

let game;
let games = {};
function init() {
    DEBUG.ENABLED = document.URL.endsWith("?debug");
    if (DEBUG.ENABLED) {
        RunTests();
    }

    // Init some stuff
    for (let g of ordered_games) {
        if (!g.debug || (g.debug && DEBUG.ENABLED)) {
            games[g.name] = g;
        }
    }
    InitTrackerToUnknowns();
    RetrieveAllHTMLElements();

    // Show explanation + changelog if we haven't shown it before
    let last_version = localStorage.getItem(CACHE.LAST_VERSION);
    if (!last_version) { // New user
        ShowHelp();
    }
    if (last_version && last_version < CURRENT_VERSION) { // Show last changes
        for (let i = 0; i < last_version; ++i) {
            html.help.versions[i].classList.add("config_hidden");
        }

        ShowHelp();
    }
    localStorage.setItem(CACHE.LAST_VERSION, CURRENT_VERSION);

    // Get last loaded game and load it
    let last_game = localStorage.getItem(CACHE.GAME_LOADED);
    game = emerald;
    if (last_game && games[last_game]) {
        game = games[last_game];
    }
    game.button.disabled = true;
    current_location = game.start_location;
    if (DEBUG.ENABLED) {
        let last_location = localStorage.getItem(CACHE.DEBUG_LOCATION);
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

    // Autotracker stuff for debugging
    if (DEBUG.ENABLED && AUTOTRACKER_DEVELOPMENT) {
        AT_Start();
    }
}

let html = {};
const HTML_ID = {
    config: {
        window: "config_window",
        smooth_checkbox: "checkbox_smooth",
        loading_text: "loading_game_text",
        game_buttons: "game_buttons",
        network: {
            toggle: "config_networktoggle",
            div: "config_network",
            input_name:    "networkinput_name",
            input_connect: "networkinput_connect",
            name: "network_name",
            id: "network_id",
            connectto: "network_connectto",
            connections: "network_connections",
            warning: "network_warning",
        }
    },
    help: {
        window: "help_window",
        changelog: "changelog_header",
        versions: "help_v" // this is an array of size == CURRENT_VERSION
    },
    canvas: "canvas", // + context
};
// Finds and creates all HTML elements
function RetrieveAllHTMLElements() {
    // Init html class
    html.config         = {};
    html.config.network = {};
    html.help           = {};

    // Retrieve canvas and create auxiliar canvases
    html.canvas  = document.getElementById(HTML_ID.canvas);
    html.context = html.canvas.getContext("2d");
    aux_canvas  = document.createElement("canvas");
    aux_context = aux_canvas.getContext("2d");

    // Retrieve config elements
    let config  = html.config;
    config.window          = document.getElementById(HTML_ID.config.window);
    config.loading_text    = document.getElementById(HTML_ID.config.loading_text);
    config.smooth_checkbox = document.getElementById(HTML_ID.config.smooth_checkbox);
    config.loading_text.innerHTML = "";
    config.smooth_checkbox.checked = (localStorage.getItem(CACHE.SMOOTH_IMAGES) == "true") ? true : false;
    
    // Retrieve networking elements
    let network = html.config.network;
    network.input_name    = document.getElementById(HTML_ID.config.network.input_name);
    network.input_connect = document.getElementById(HTML_ID.config.network.input_connect);
    network.id            = document.getElementById(HTML_ID.config.network.id);
    network.input_name.value    = "";
    network.input_connect.value = "";
    network.id.value            = "---";
    network.connectto   = document.getElementById(HTML_ID.config.network.connectto);
    network.connections = document.getElementById(HTML_ID.config.network.connections);
    network.name        = document.getElementById(HTML_ID.config.network.name);
    network.warning     = document.getElementById(HTML_ID.config.network.warning);
    network.div         = document.getElementById(HTML_ID.config.network.div);
    network.toggle      = document.getElementById(HTML_ID.config.network.toggle);

    // Retrieve help window elements
    let help    = html.help;
    help.window    = document.getElementById(HTML_ID.help.window);
    help.changelog = document.getElementById(HTML_ID.help.changelog);
    help.versions = [];
    for (let i = 1; i <= CURRENT_VERSION; ++i) {
        help.versions.push(document.getElementById(HTML_ID.help.versions + i));
    }

    // Create config buttons
    config.game_buttons = document.getElementById("game_buttons");
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
                g.unknownCount = g.marks[0][0][1] + g.marks[0][1][1];
                text.innerHTML += " (" + g.unknownCount + " warps)";

            div.appendChild(text);
        game_buttons.appendChild(div);
    }

    console.log(html);
}

function GameLoop() {
    if (game.ready) { Render(); }
    requestAnimationFrame(GameLoop);
    if (DEBUG.ENABLED && AUTOTRACKER_DEVELOPMENT) {
        if (socket.readyState == SOCKET_READYSTATE.OPEN) {
            let current_time = new Date().getTime();
            if (current_time - autotracker_last_poll > SECONDS_BETWEEN_POLLS*1000) {
                AT_SendReadRequest();
                autotracker_last_poll = current_time;
            }
        }
    }
}

function FontReady() { rerender_location = true; }