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

        for (let line of lines) {
            if (line.length == 0) continue;

            let f = line.split(",");
            if (f.length != 5) {
                console.error("ERROR: Invalid line in save file: " + line);
                continue;
            }
            let warp = game.warps[f[0]][f[1]];
            warp.link_type     = f[2];
            warp.link          = f[4];
            warp.link_location = f[3];

            if (warp.link_type == LINKTYPE_MARK) {
                let info = GetMarkByName(warp.link);
                if (info) info[1] += 1;
            }
        }
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

    for (var key_location in game.warps) {
        for (var key_warp in game.warps[key_location]) {
            text += key_location + "," + key_warp + ",";
            let warp = game.warps[key_location][key_warp];
            if (warp.link_type) text += warp.link_type;
            text += ",";
            if (warp.link_location) text += warp.link_location;
            text += ",";
            if (warp.link) text += warp.link;
            text += "\n";
        }
    }

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

function ResetButton() {
    if (confirm ("Data will be deleted for you and ALL USERS connected to your session. Are you sure to continue?")) {
        for (let location in game.warps) {
            for (let warp in game.warps[location]) {
                let w = game.warps[location][warp];
                w.link_type     = undefined;
                w.link          = undefined;
                w.link_location = undefined;
            }
        }

        for (let array of [game.marks, game.progress]) {
            for (let row of array) {
                for (let element of row) {
                    if (element[1] !== undefined && element[1] !== null) {
                        element[1] = 0;
                    }
                }
            }
        }
        game.obtained = new Set();
    }
}

/*********************************************************/

let networkinput_name;
let networkinput_id;
let networkinput_connect;
let networkinput_data; // Test only

let current_peer;
let connected_to;
let current_id;
let connections = [];
function ShowConfigNetwork() {
    if (!current_peer) {
        networkinput_name    = document.getElementById("network_name");
        networkinput_connect = document.getElementById("network_connect");
        networkinput_data    = document.getElementById("network_data");
        networkinput_id      = document.getElementById("network_id");
        networkinput_name.value    = "";
        networkinput_connect.value = "";
        networkinput_data.value    = "";
        networkinput_id.value      = "";

        let current_date_time = new Date();
        current_id = Math.trunc(current_date_time.valueOf() / (Math.abs(current_date_time.getTimezoneOffset()) + 1) * (Math.random() % 10));

        current_peer = new Peer(current_id);
        current_peer.on("open", function(id) {
            networkinput_id.value = id;
        });

        current_peer.on("connection", function(connection) {
            console.log("Connection: " + connection.peer);
            
            connection.on("data", function(data) {
                console.log("+Received data: " + data);
                for (let c of connections) {
                    if (this.peer != c.peer) {
                        c.send(data);
                    }
                }
            });
            connections.push(connection);
        });
    }

    config_network      .classList.remove("config_hidden");
    config_networktoggle.classList.add   ("config_hidden");
}
function HideConfigNetwork() {
    config_network      .classList.add   ("config_hidden");
    config_networktoggle.classList.remove("config_hidden");
}

function ConnectButton() {
    if (networkinput_connect.value && networkinput_connect.value !== networkinput_id.value) {
        connected_to = current_peer.connect(networkinput_connect.value);
        connected_to.on("open", function(_) {
            networkinput_id.value = networkinput_connect.value;
        });
        
        connected_to.on("data", function(data) {
            console.log("-Received data: " + data);
        });
    }
}

function SendButton() {
    if (connected_to) {
        connected_to.send(networkinput_data.value);
    }
    else {
        for (let c of connections) {
            c.send(networkinput_data.value);
        }
    }
}