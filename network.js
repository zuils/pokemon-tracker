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