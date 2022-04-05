const BACKGROUND_COLOR = "#444444";

const LINE_THRESHOLD = 16;
const LINE_THICKNESS = 3;
const LINE_COLOR     = "#00FFFF";

const MAP_MARK_OFFSET = 1;
const MAP_MARK_WIDTH  = 3;
const MAP_FONT_SIZE = 22; //in px

const FRAME_WIDTH  = 167;
const FRAME_HEIGHT = 47;
const LINE_YOFFSET = 8;
const LINE_BREAK_YOFFSET = 14;

const MAP_SCALE = 2;
const SELECTED_MAP_XOFFSET = 10;
const WARP_LINE_YOFFSET = 5;
const WARP_FONT_SIZE    = 13;

const MARKS_YOFFSET    = 20;
const PROGRESS_YOFFSET = MARKS_YOFFSET*2;
const MARK_SIZE        = 32;
const MARK_SEPARATION  = 5;
const UNCHECKED_FILTER = "grayscale(100%) opacity(50%)";
const MARKFOUND_SIZE  = 1;
const MARKFOUND_COLOR = "#AAAAAA"

var loading_process = {
    max_width:  0,
    max_height: 0,
    loaded: 0,
    to_load: 9999, //needs to be set up
}
var map = {};
var frame, settings;
var images = [];
function LoadImages() {
    // Get all images
    var list = ["images/emerald/map.png", "images/emerald/frame.png", "images/settings.png"];
    for (let key in locations) {
        list.push("images/emerald/maps/" + key + ".png");
    }

    for (let row of marks) {
        for (let pair of row) {
            if(pair[1] !== undefined) { list.push("images/marks/" + pair[0] + ".png") }
        }
    }

    for (let row of progress) {
        for (let pair of row) {
            if (pair[1] !== undefined) { list.push("images/emerald/progress/" + pair[0] + ".png") }
        }
    }

    // Start loading them
    loading_process.to_load = list.length;
    for (let path of list) {
        const image = new Image();
        image.onload = ImageLoaded;
        image.onerror = ImageError;
        image.src = path;
    }
}
function ImageLoaded() {
    if (this.src.includes("map.png")) {
        map = {
            image: this,
            x: 0, y: 0,
            w: this.naturalWidth  * MAP_SCALE,
            h: this.naturalHeight * MAP_SCALE
        }
    }
    else if (this.src.includes("frame.png")) {
        frame = this;
    }
    else if (this.src.includes("settings.png")) {
        settings = this;
    }
    else if (this.src.includes("/marks/") || this.src.includes("/progress/")) {
        images[GetNameImage(this.src)] = this;
    }
    else {
        try {
            locations[GetNameImage(this.src)].image = this;
        }
        catch(err) {
            console.log(err);
            console.log(this.src);
        console.log(GetNameImage(this.src));
        }

        // Get max width/height for later
        if (this.naturalWidth  > loading_process.max_width)  loading_process.max_width  = this.naturalWidth;
        if (this.naturalHeight > loading_process.max_height) loading_process.max_height = this.naturalHeight;
    }

    loading_process.loaded += 1;
    if (loading_process.loaded == loading_process.to_load) {
        // Set canvas dimensions
        canvas.width  = map.w + loading_process.max_width + SELECTED_MAP_XOFFSET;
        canvas.height = loading_process.max_height;

        requestAnimationFrame(GameLoop);
    }
}
function ImageError() { console.error("ERROR: Couldn't load " + this.src); }

function GetNameImage(path) {
    let array = path.split("/");
    return array[array.length-1].split(".")[0];
}

/*********************************************************/

function RenderMap() {
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    // ----- Draw main map -----
    DrawImage(map.image, map);

    let location = locations[current_location];

    // ----- Draw text -----
    context.save(); {
        context.font = "bold " + MAP_FONT_SIZE + "px Pokemon_Font";
        context.textAlign = "center";
        context.fillStyle = "#111111";

        var text_position = {
            x: map.w - (FRAME_WIDTH /2)*MAP_SCALE,
            y: map.h - (FRAME_HEIGHT/2)*MAP_SCALE + LINE_YOFFSET
        };
        let lines = location.name.split("\n");
        switch (lines.length) {
            case 1:
                context.fillText(lines[0], text_position.x, text_position.y);
                break;
            default:
                console.error("ERROR: Text can have more than 2 lines! Only rendering the 2 first lines.");
            case 2:
                context.fillText(lines[0], text_position.x, text_position.y - LINE_BREAK_YOFFSET);
                context.fillText(lines[1], text_position.x, text_position.y + LINE_BREAK_YOFFSET);
                break;
        }
    } context.restore();

    // ----- Draw map mark -----
    context.save(); {
        context.lineWidth = MAP_MARK_WIDTH;
        context.strokeStyle = LINE_COLOR;
        let v = {
            x: location.x*MAP_SCALE -   MAP_MARK_OFFSET,
            y: location.y*MAP_SCALE -   MAP_MARK_OFFSET,
            w: location.w*MAP_SCALE + 2*MAP_MARK_OFFSET,
            h: location.h*MAP_SCALE + 2*MAP_MARK_OFFSET,
        };
        DrawBox(v);
    } context.restore();
}

function GetWarpRenderInfo(location, warp) {
    let info = {
        type: "image",
        image: images["unknown"],
        x: 0, y: 0, w: 0, h: 0,
        text_position: {x: 0, y:0 }, text: ""
    };
    if (warp.link_type) {
        if (warp.link_type == LINKTYPE_MARK) {
            info.image = images[warp.link];
        }
        else {
            info.type = "text";
            // Draw location/warp
            info.x = rendered_location.x + warp.x*location.scale - frame.naturalWidth/2 ;
            info.y = rendered_location.y + warp.y*location.scale - frame.naturalHeight/2;
            info.w = frame.naturalWidth;
            info.h = frame.naturalHeight;
            info.image = frame;

            info.text_position = {
                x: rendered_location.x + warp.x*location.scale,
                y: rendered_location.y + warp.y*location.scale + WARP_LINE_YOFFSET
            }
            info.text = locations[warp.link_location].name;
            if (locations[warp.link_location].link_name) info.text = locations[warp.link_location].link_name;
            if (warps[warp.link_location][warp.link].name) info.text = warps[warp.link_location][warp.link].name;
        }
    }

    if (info.type == "image") {
        info.x = rendered_location.x + warp.x*location.scale - info.image.naturalWidth/2;
        info.y = rendered_location.y + warp.y*location.scale - info.image.naturalHeight/2;
        info.w = info.image.naturalWidth;
        info.h = info.image.naturalHeight;
    }

    return info;
}
let rendered_location = {};
function RenderLocation() {
    // ----- Render drawing space -----
    let background = {
        x: map.w + SELECTED_MAP_XOFFSET,
        y: 0,
        w: loading_process.max_width,
        h: loading_process.max_height
    };
    DrawSquareContextless(background, BACKGROUND_COLOR);

    let location = locations[current_location];

    // ----- Render selected map -----
    rendered_location = {
        // Center image
        x: background.x + (background.w - location.image.naturalWidth *location.scale)/2,
        y: background.y + (background.h - location.image.naturalHeight*location.scale)/2,
        w: location.image.naturalWidth  * location.scale,
        h: location.image.naturalHeight * location.scale
    };
    DrawImage(location.image, rendered_location);

    // ----- Render warps -----
    context.save(); {
        context.font = "bold " + WARP_FONT_SIZE + "px Avenir";
        context.textAlign = "center";
        context.fillStyle = "#111111";
        for (var key in warps[current_location]) {
            let warp = warps[current_location][key];
            let info = GetWarpRenderInfo(location, warp);
            if (info.type == "image") {
                DrawImage(info.image, info);
            }
            else {
                DrawImage(frame, info);
                context.fillText(info.text, info.text_position.x, info.text_position.y);
            }
        }

    } context.restore();
}

let progress_obtained = new Set();
function RenderMarks() {
    let v = {
        x: MARK_SEPARATION,
        y: map.h + MARKS_YOFFSET,
        w: MARK_SIZE,
        h: MARK_SIZE
    };
    // ----- Render marks -----
    for (let row of marks) {
        for (let pair of row) {
            let name  = pair[0];
            let count = pair[1];
            if (count !== undefined) {
                if (count && count > 0) {
                    DrawBoxContextless(v, MARKFOUND_SIZE, MARKFOUND_COLOR);
                }

                DrawImage(images[name], v);
            }

            v.x += MARK_SIZE + MARK_SEPARATION;
        }
        v.y += MARK_SIZE + MARK_SEPARATION;
        v.x = MARK_SEPARATION;
    }

    // ----- Render background progress tracker -----
    v.y += PROGRESS_YOFFSET;
    let background = {
        x: 0,
        y: v.y - MARK_SEPARATION,
        w: Object.keys(progress[0]).length * (MARK_SIZE+MARK_SEPARATION) + MARK_SEPARATION,
        h: progress.length                 * (MARK_SIZE+MARK_SEPARATION) + MARK_SEPARATION
    };
    DrawSquareContextless(background, BACKGROUND_COLOR);

    // ----- Render progress tracker -----
    context.save(); {
        for (let row of progress) {
            for (let pair of row) {
                let name  = pair[0];
                let count = pair[1];
                if (count !== undefined) {
                    if (count && count > 0) {
                        context.filter = "none";
                        DrawBoxContextless(v, MARKFOUND_SIZE, MARKFOUND_COLOR);
                    }
                    
                    context.filter = progress_obtained.has(name) ? "none" : UNCHECKED_FILTER;
                    DrawImage(images[name], v);
                }
                v.x += MARK_SIZE + MARK_SEPARATION;
            }
            v.y += MARK_SIZE + MARK_SEPARATION;
            v.x = MARK_SEPARATION;
        }
    } context.restore();
}

function RenderConfigButton() {
    let v = {
        x: 0,
        y: canvas.height - settings.naturalHeight,
        w: settings.naturalWidth,
        h: settings.naturalHeight
    };
    DrawImage(settings, v);
}

function RenderLine() {
    if (current_state != STATE_DEFAULT) {
        let info;
        if (current_state == STATE_LINK1) {
            let location = locations[current_location];
            let warp = warps[current_location][link_warp];
            info = {
                x: rendered_location.x + warp.x*location.scale,
                y: rendered_location.y + warp.y*location.scale
            }
        }
        else {
            let location = locations[link_location];
            info = {
                x: (location.x + location.w/2) * MAP_SCALE,
                y: (location.y + location.h/2) * MAP_SCALE
            }
        }
        context.save(); {
            context.strokeStyle = LINE_COLOR;
            context.lineWidth = LINE_THICKNESS;
            context.beginPath();
            context.moveTo(info.x, info.y);
            context.lineTo(mouse_position.x, mouse_position.y);
            context.stroke();
        } context.restore();
    }
}

function Render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    RenderMap();
    RenderLocation();
    RenderMarks();
    RenderConfigButton();
    RenderLine();
}

function DrawSquareContextless(v, color) {
    context.save(); {
        context.fillStyle = color;
        context.fillRect(v.x, v.y, v.w, v.h);
    } context.restore();
}
function DrawSquare(v) {
    context.fillRect(v.x, v.y, v.w, v.h);
}

function DrawBox(v) {
    context.strokeRect(v.x, v.y, v.w, v.h);
}
function DrawBoxContextless(v, width, color) {
    context.save(); {
        context.lineWidth   = width;
        context.strokeStyle = color;
        context.strokeRect(v.x, v.y, v.w, v.h);

    } context.restore();
}

function DrawImage(image, v) {
    context.drawImage(image, v.x, v.y, v.w, v.h);
}