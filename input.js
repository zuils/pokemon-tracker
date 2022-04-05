const LEFT_CLICK   = 1;
const MIDDLE_CLICK = 2;
const RIGHT_CLICK  = 3;

const HITBOX_OFFSET = 2.5;

function RegisterInputEvents() {
    canvas.addEventListener("mousedown",   OnMouseDown);
    canvas.addEventListener("mousemove",   OnMouseMove);
    canvas.addEventListener("mouseup",     OnMouseUp);
    canvas.addEventListener("mouseout",    OnMouseUp);
    canvas.addEventListener("contextmenu", OnContextMenu);
}
function OnContextMenu(event) { event.preventDefault(); return false; } 

const STATE_DEFAULT = 0;
const STATE_LINK1 = 1;
const STATE_LINK2 = 2;
let current_state = STATE_DEFAULT;
let link_location, link_warp;
let current_location = "oldale";
let left_click  = { down: false };
let right_click = { down: false };
let mouse_position = {x: 0, y: 0};
let current_markcycle;
function OnMouseDown(event) {
    mouse_position = EventToPosition(event);

    let click = null;
    switch (event.which) {
        case LEFT_CLICK:  click = left_click; break;
        case RIGHT_CLICK: click = right_click; break;
    }
    if (!click) return;

    let info = GetClicked(mouse_position);
    if (info) {
        click.down = true;
        click.info = info;
    }
}
function OnMouseMove(event) {
    mouse_position = EventToPosition(event);
}
function OnMouseUp(event) {
    if (event.type == "mouseout") {
        left_click.down  = false;
        right_click.down = false;
        return;
    }

    mouse_position = EventToPosition(event);

    let click = null;
    switch (event.which) {
        case LEFT_CLICK: {
            click = left_click;
        } break;
        case RIGHT_CLICK: {
            click = right_click;
            current_state = STATE_DEFAULT;
        } break;
    }

    click.down = false;
    let info = GetClicked(mouse_position);
    if (info) {
        if (click.info.type == info.type && click.info.target == info.target) {
            switch (event.which) {
                case LEFT_CLICK: {
                    switch (info.type) {
                        case TYPE_CONFIG: {
                            current_state = STATE_DEFAULT;
                            ShowConfig();
                        } break;
                        case TYPE_LOCATION: {
                            switch (current_state) {
                                case STATE_DEFAULT: {
                                    current_location = info.target;
                                } break;
                                case STATE_LINK1:
                                case STATE_LINK2: {
                                    current_state = (info.target == link_location) ? STATE_LINK1 : STATE_LINK2;
                                    current_location = info.target;
                                } break;
                            }
                        } break;
                        case TYPE_PROGRESS: {
                            if (current_state == STATE_DEFAULT) {
                                if (progress_obtained.has(info.target)) {
                                    progress_obtained.delete(info.target);
                                }
                                else {
                                    progress_obtained.add(info.target);
                                }
                            } 
                        }
                        case TYPE_MARK: {
                            if (current_state != STATE_DEFAULT) {
                                let warp = warps[link_location][link_warp];
                                if (warp.link_type == LINKTYPE_MARK) { AddToMark(warp.link, -1, link_location); }
                                AddToMark(info.target, 1, link_location);
                                warp.link_type = LINKTYPE_MARK;
                                warp.link      = info.target;
                                current_state = STATE_DEFAULT;
                            }
                        } break;
                        
                        case TYPE_WARP: {
                            switch (current_state) {
                                case STATE_DEFAULT: {
                                    link_location = current_location;
                                    link_warp     = info.target;
                                    current_state = STATE_LINK1;
                                } break;
                                case STATE_LINK1: {
                                    if (current_location == link_location && info.target == link_warp) {
                                        current_state = STATE_DEFAULT;
                                        let w = warps[current_location][info.target];
                                        if (w.link_type && w.link_type == LINKTYPE_WARP) {
                                            current_location = w.link_location;
                                        }
                                        break;
                                    }
                                }
                                case STATE_LINK2: {
                                    let warp1 = warps[link_location][link_warp];
                                    if (warp1.link_type == LINKTYPE_MARK) { AddToMark(warp1.link, -1, link_location); }
                                    warp1.link_type     = LINKTYPE_WARP;
                                    warp1.link          = info.target;
                                    warp1.link_location = current_location;
                                    
                                    let warp2 = warps[current_location][info.target];
                                    if (warp2.link_type == LINKTYPE_MARK) { AddToMark(warp2.link, -1, current_location); }
                                    warp2.link_type     = LINKTYPE_WARP;
                                    warp2.link          = link_warp;
                                    warp2.link_location = link_location;

                                    current_state = STATE_DEFAULT;
                                } break;
                            }
                        }
                    }
                } break;
                case RIGHT_CLICK: {
                    switch (info.type) {
                        case TYPE_MARK:
                        case TYPE_PROGRESS: {
                            let m = GetMarkByName(info.target);
                            if (m && m[1] > 0) {
                                // Start new cycle if it doesn't exist or is not the same as before
                                if (!current_markcycle || current_markcycle.name != info.target) {
                                    current_markcycle = { name: info.target, index: 0, locations: [] };
                                    for (let location in warps) {
                                        for (let name in warps[location]) {
                                            let warp = warps[location][name];
                                            if (warp.link_type && warp.link_type == LINKTYPE_MARK && warp.link == info.target) {
                                                current_markcycle.locations.push(location);
                                                break;
                                            }
                                        }
                                    }
                                }

                                // Change current_location to the appropiate one and cycle the index
                                current_location = current_markcycle.locations[current_markcycle.index];
                                current_markcycle.index = (current_markcycle.index+1) % current_markcycle.locations.length;
                            }
                        } break;
                        case TYPE_WARP: {
                            let warp = warps[current_location][info.target];
                            if (!warp.link_type || (warp.link_type == LINKTYPE_MARK && warp.link == "unknown")) {
                                if (warp.link_type == LINKTYPE_MARK) { AddToMark(warp.link, -1, current_location); }
                                warp.link_type = LINKTYPE_MARK;
                                warp.link      = "dead_end";
                            }
                            else {
                                if (warp.link_type == LINKTYPE_WARP) {
                                    let warp2 = warps[warp.link_location][warp.link];
                                    if (warp2.link_type == LINKTYPE_WARP && warp2.link_location == current_location && warp2.link == info.target) {
                                        warp2.link_type = LINKTYPE_MARK;
                                        warp2.link      = "unknown";
                                    }
                                }
                                if (warp.link_type == LINKTYPE_MARK) { AddToMark(warp.link, -1, current_location); }
                                warp.link_type = LINKTYPE_MARK;
                                warp.link      = "unknown";
                            }
                            
                        } break;
                    }
                } break;
            }
        }
    }
}

function EventToPosition(event) {
    let position = {x: 0, y: 0};
    position.x = event.pageX - canvas.offsetLeft;
    position.y = event.pageY - canvas.offsetTop;
    return position;
}

const TYPE_MARK     = "mark";
const TYPE_PROGRESS = "progress";
const TYPE_LOCATION = "location";
const TYPE_WARP     = "warp";
const TYPE_CONFIG   = "config";
function GetClicked(position) {
    // Check if config button
    if (position.x >= 0 &&
        position.x <= settings.naturalWidth &&
        position.y >= canvas.height - settings.naturalHeight &&
        position.y <  canvas.height)
    {
        return { type: TYPE_CONFIG, target: "button" };
    }

    // Check everything else
    if (position.x < map.w) {
        if (position.y < map.h) { return GetLocation(position); }
        else                    { return GetMark(position); }
    }
    else { return GetWarp(position); }
}
function GetLocation(position) {
    let p = {
        x: position.x / MAP_SCALE,
        y: position.y / MAP_SCALE
    }
    for (var key in locations) {
        let location = locations[key];
        if (p.x > location.x - HITBOX_OFFSET &&
            p.x < location.x + HITBOX_OFFSET + location.w  &&
            p.y > location.y - HITBOX_OFFSET &&
            p.y < location.y + HITBOX_OFFSET + location.h)
        {
            return { type: TYPE_LOCATION, target: key };
        }
    }
    return null;
}
function GetMark(position) {
    // Start position below map
    let p = {
        x: position.x - MARK_SEPARATION,
        y: position.y - map.h - MARKS_YOFFSET
    }

    // Figure out if clicking marks or progress
    let progress_yposition = marks.length * (MARK_SIZE + MARK_SEPARATION);
    let type = TYPE_MARK;
    let images = marks;
    if (p.y > progress_yposition) {
        type = TYPE_PROGRESS;
        images = progress;
        p.y -= progress_yposition + PROGRESS_YOFFSET;
    }

    // Get cuadrant clicked
    let cell = {
        x: Math.trunc(p.x / (MARK_SIZE + MARK_SEPARATION)),
        y: Math.trunc(p.y / (MARK_SIZE + MARK_SEPARATION)),
    }

    // Check which mark is in cuadrant and return it
    if (type == TYPE_MARK || (cell.y < images.length && cell.x < images[cell.y].length)) {
        let result = images[cell.y][cell.x];
        if (result) return { type: type, target: result[0], coords: cell };
    }
    return null;
}
function GetWarp(position) {
    // Check all warps
    let location = locations[current_location];
    for (var key in warps[current_location]) {
        let warp = warps[current_location][key];
        let info = GetWarpRenderInfo(location, warp);

        if (position.x > info.x &&
            position.x < info.x + info.w &&
            position.y > info.y &&
            position.y < info.y + info.h)
        {
            return { type: TYPE_WARP, target: key };
        }
    }
    return null;
}

function GetMarkByName(name_to_find) {
    for (let images of [marks, progress]) {
        for (let i = 0; i < images.length; ++i) {
            for (let j = 0; j < images[i].length; ++j) {
                let name  = images[i][j][0];
                let count = images[i][j][1];
                if (name == name_to_find) {
                    if (count !== null && count !== undefined) {
                        return images[i][j];
                    }
                    else {
                        return null;
                    }
                }
            }
        }
    }
    return null;
}

function AddToMark (name, value, location) {
    let info = GetMarkByName(name);
    if (info) {
        info[1] += value;

        // Update current_markcycle if it's the same mark
        if (current_markcycle && current_markcycle.name == name) {
            let has_location = current_markcycle.locations.includes(location);
            if (value > 0) {
                if (!has_location) {
                    current_markcycle.locations.push(location);
                }
            }
            else if (value < 0) {
                if (has_location) {
                    // Check if it's more than once in this location
                    let ocurrences = 0;
                    for (let key in warps[location]) {
                        if (warps[location][key].link_type && warps[location][key].link_type == LINKTYPE_MARK && warps[location][key].link == name) {
                            ocurrences += 1;
                        }
                    }

                    // We are removing the location AFTER calling this function, so
                    // if it's in here once, then there won't be any more after this
                    // and we can safely delete it from the list
                    if (ocurrences == 1) {
                        let i = current_markcycle.locations.indexOf(location);
                        if (i >= 0) {
                            current_markcycle.locations.splice(i, 1);
                            if (current_markcycle.index > 0 && current_markcycle.index > i) {
                                current_markcycle.index -= 1;
                            }
                        }
                        else {
                            // just in case, not necessary, we know it's in there
                            console.error("Location not found in mark cycle!");
                        }
                    }

                }
            }
        }
    }
}