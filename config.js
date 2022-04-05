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

function ShowConfigNetwork() {
    config_network      .classList.remove("config_hidden");
    config_networktoggle.classList.add   ("config_hidden");
}
function HideConfigNetwork() {
    config_network      .classList.add   ("config_hidden");
    config_networktoggle.classList.remove("config_hidden");
}

function LoadFile() { file_selector.click(); }

function FileUploaded(event) {
    var reader = new FileReader();
    reader.onload = function() {
        let lines = reader.result.split("\n");
        for (let p of lines[0].split(",")) {
            progress_obtained.add(p);
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
    for (var p of progress_obtained) {
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