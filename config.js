let config;
let config_controls;
let config_controlstoggle;
let config_network;
let config_networktoggle;

let checkbox_smooth;

function ShowConfig() {
    config.style.display = "block";
    HideConfigControls();
    HideConfigNetwork();
}
function HideConfig() { config.style.display = "none"; }

function ShowConfigControls() {
    config_controls      .classList.remove("config_hidden");
    config_controlstoggle.classList.add   ("config_hidden");
}
function HideConfigControls() {
    config_controls      .classList.add   ("config_hidden");
    config_controlstoggle.classList.remove("config_hidden");
}

function LoadFile() { file_selector.click(); }

function FileUploaded(event) {
    var reader = new FileReader();
    reader.onload = function() {
        let lines = reader.result.split("\n");
        while (lines[0].startsWith("#")) { // Parse all progress trackers
            let fields = lines[0].split(",");
            let current_game = games[fields[0].substring(1, fields[0].length)];
            fields.shift;
            for (let p of fields) {
                current_game.obtained.add(p);
            }
            lines.shift();
        }

        LinesToWarps(lines);
        if (connected_to || connections.length > 0) {
            let text = lines.join("\n");
            if (connected_to) {
                connected_to.send(text);
            }
            else {
                for (let c of connections) {
                    c.connection.send(text);
                }
            }
        }

        rerender_all = true;
    }
    reader.readAsText(file_selector.files[0]);
}

function SaveFile() {
    let text = "";
    for (let key_game in games) {
        if (!games[key_game].ready) { continue; }
        
        text += "#" + games[key_game].name + ",";
        for (var p of games[key_game].obtained) {
            text += p + ",";
        }
        text = text.substring(0, text.length-1);
        text += "\n";
    }
    for (let key_game in games) {
        if (!games[key_game].ready) { continue; }

        text += WarpsToText(games[key_game]);
    }


    if (text.length == 0) {
        alert("There's nothing to save.");
        return;
    }

    var time = new Date();
    var d = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate() + "_" + time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
    a.download = d + "_pokemon-tracker.txt";
    a.click();
}

function WarpsToText (current_game) {
    let text = "";
    for (let key_location in current_game.warps) {
        if (!current_game.warps[key_location]) continue;

        for (let key_warp in current_game.warps[key_location]) {
            let warp = current_game.warps[key_location][key_warp];
            if (!warp) continue;

            text += current_game.name + "," + key_location + "," + key_warp + ",";
            if (warp.link_type) text += warp.link_type;
            text += ",";
            if (warp.link_location) text += warp.link_location;
            text += ",";
            if (warp.link) text += warp.link;
            text += "\n";
        }
    }
    return text;
}
function LinesToWarps (lines) {
    for (let line of lines) {
        if (line.length == 0) continue;

        let f = line.split(",");
        if (f.length != 6) {
            console.error("ERROR: Invalid line in save file: " + line);
            continue;
        }
        
        ChangeWarpOffline(games[f[0]], f[1], f[2], f[3], f[4], f[5]);
    }
}

function ResetButton() {
    if (confirm ("You and ALL connected users will lose all data. Are you sure to continue?")) {
        ResetTracker();

        if (connected_to || connections.length > 0) {
            if (connected_to) {
                connected_to.send(RESET_MESSAGE);
            }
            else {
                for (let c of connections) {
                    c.connection.send(RESET_MESSAGE);
                }
            }
        }
    }
}


function InitTrackerToUnknowns() {
    for (let key_game in games) {
        games[key_game].marks[0][0][1] = 0; // assuming unknowns are always being tracked
        for (let key_location in games[key_game].warps) {
            for (let key_warp in games[key_game].warps[key_location]) {
                games[key_game].warps[key_location][key_warp].link_type = LINKTYPE_MARK;
                games[key_game].warps[key_location][key_warp].link      = "unknown";
                games[key_game].marks[0][0][1] += 1;
            }
        }
    }
}
function ResetTracker() {
    for (let key_game in games) {
        for (let array of [games[key_game].marks, games[key_game].progress]) {
            for (let row of array) {
                for (let element of row) {
                    if (element[1] !== undefined && element[1] !== null) {
                        element[1] = 0;
                    }
                }
            }
        }
        games[key_game].obtained = new Set();
    }
    InitTrackerToUnknowns();
    rerender_all = true;
}

function ChangeSmooth() {
    localStorage.setItem(SMOOTH_IMAGES_CACHE, checkbox_smooth.checked);
    rerender_location = true;
}

function ChangeGame(new_game) {
    if (!game.ready) return; // Return if game is being loaded
    game.button.disabled = false;
    game = new_game;
    game.button.disabled = true;
    localStorage.setItem(GAME_LOADED_CACHE, game.name);

    current_state = STATE_DEFAULT;
    current_location = game.start_location;
    left_click  = { down: false };
    right_click = { down: false };
    current_markcycle = undefined;

    rerender_all = true;
    rerender_location = true;
    if (!game.ready) {
        LoadImages();
    }
    else {
        SetCanvasDimensions();
    }
}