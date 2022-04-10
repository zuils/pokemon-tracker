let config;
let config_controls;
let config_controlstoggle;
let config_network;
let config_networktoggle;

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
        for (let p of lines[0].split(",")) {
            game.obtained.add(p);
        }
        lines.shift();

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

        rerender = true;
    }
    reader.readAsText(file_selector.files[0]);
}

function SaveFile() {
    var text = "";
    for (var p of game.obtained) {
        text += p + ",";
    }
    text = text.substring(0, text.length-1);
    text += "\n";
    
    text += WarpsToText(game.warps);

    if (text.length == 0) {
        alert("There's nothing to save.");
        return;
    }

    var time = new Date();
    var d = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate() + "_" + time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
    a.download = d + "_emerald-map-tracker.txt";
    a.click();
}

function WarpsToText (warps) {
    let text = "";
    for (var key_location in warps) {
        for (var key_warp in warps[key_location]) {
            text += key_location + "," + key_warp + ",";
            let warp = warps[key_location][key_warp];
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
        if (f.length != 5) {
            console.error("ERROR: Invalid line in save file: " + line);
            continue;
        }
        
        ChangeWarpOffline(f[0], f[1], f[2], f[3], f[4]);
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
    for (let key_location in game.warps) {
        for (let key_warp in game.warps[key_location]) {
            game.warps[key_location][key_warp].link_type = LINKTYPE_MARK;
            game.warps[key_location][key_warp].link      = "unknown";
            game.marks[0][0][1] += 1; // assumming game.marks[0][0] always is ["unknown", 0]
        }
    }
}
function ResetTracker() {
    for (let array of [game.marks, game.progress]) {
        for (let row of array) {
            for (let element of row) {
                if (element[1] !== undefined && element[1] !== null) {
                    element[1] = 0;
                }
            }
        }
    }
    InitTrackerToUnknowns();
    game.obtained = new Set();
    rerender = true;
}

/*********************************************************/

const RESET_MESSAGE = "-RESET-";
const USERNAME_MESSAGE = "###";

let networkinput_name;
let network_id;
let networkinput_connect;

let current_peer;
let connected_to;
let current_id;
let username;
let connections = [];
function ShowConfigNetwork() {
    if (!current_peer) {
        networkinput_name    = document.getElementById("networkinput_name");
        networkinput_connect = document.getElementById("networkinput_connect");
        networkinput_name.value    = "";
        networkinput_connect.value = "";
        network_id = document.getElementById("network_id");
        network_id.innerHTML = "---";

        network_connectto   = document.getElementById("network_connectto");
        network_connections = document.getElementById("network_connections");
        network_name        = document.getElementById("network_name");

        let current_date_time = new Date();
        current_id = Math.trunc(current_date_time.valueOf() / ((Math.abs(current_date_time.getTimezoneOffset())/10 % 10) + 1) * (Math.random() % 10)).toString();

        current_peer = new Peer(current_id);
        current_peer.on("open", function(id) {
            network_id.innerHTML = id;
        });

        current_peer.on("connection", function(connection) {
            if (connected_to !== null) {
                connected_to = null;
                network_name.classList.add("config_hidden");
                network_connectto.classList.add("config_hidden");
                network_connections.classList.remove("config_hidden");
            }
            
            connection.on("data", function(data) {
                if (data.startsWith(USERNAME_MESSAGE)) {
                    let name = data.slice(3);
                    for (let c of connections) {
                        if (this.peer == c.connection.peer) {
                            c.username = name;
                            break;
                        }
                    }
                    UpdateUsernames();
                }
                else {
                    // Send to everyone else
                    for (let c of connections) {
                        if (this.peer != c.connection.peer) {
                            c.connection.send(data);
                        }
                    }
                    
                    //Handle data
                    if (data == RESET_MESSAGE) {
                        ResetTracker();
                    } else {
                        LinesToWarps(data.split("\n"));
                    }
                }
            });

            connection.on("open", function(A) {
                let text = WarpsToText(game.warps);
                connection.send(text);
            });

            connections.push({ connection: connection, username: connection.peer });
            UpdateUsernames();
        });
    }

    config_network      .classList.remove("config_hidden");
    config_networktoggle.classList.add   ("config_hidden");
}
function HideConfigNetwork() {
    config_network      .classList.add   ("config_hidden");
    config_networktoggle.classList.remove("config_hidden");
}

function UpdateUsernames() {
    network_connections.innerHTML = "<u>Users connected</u> <br>";
    for (let c of connections) {
        network_connections.innerHTML += c.username + "<br>";
    }
}

function ConnectButton() {
    networkinput_connect.value = networkinput_connect.value.trim();
    if (networkinput_connect.value && networkinput_connect.value !== network_id.innerHTML) {
        connected_to = current_peer.connect(networkinput_connect.value);
        connected_to.on("open", function(_) {
            network_connectto.classList.add("config_hidden");
            network_connections.classList.remove("config_hidden");
            network_connections.innerHTML = "Connected to host: " + networkinput_connect.value;

            if (username) { connected_to.send(USERNAME_MESSAGE + username); }
        });
        
        connected_to.on("data", function(data) {
            // Handle data
            if (data == RESET_MESSAGE) {
                //console.log("Received data: Reset Tracker");
                ResetTracker();
            }
            else {
                //console.log("-Received data: " + data);
                LinesToWarps(data.split("\n"));
            }
        });
    }
}

function ChangeUsername(data) {
    if (username != data) {
        username = data;
        if (connected_to) {
            connected_to.send(USERNAME_MESSAGE + username);
        }
    }
}

function PressedEnter(key) {
    if (key.keyCode == 13) { // if pressed enter
        ChangeUsername(networkinput_name.value);
    }
}