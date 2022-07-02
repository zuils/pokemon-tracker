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

    document.addEventListener("keydown", OnKeyDown);
    document.addEventListener("keyup",   OnKeyUp);
}
function OnContextMenu(event) { event.preventDefault(); return false; } 

let g_pressed = false;
function OnKeyDown(event) {
    if (event.key == "g") {
        g_pressed = true;
    }
    if (g_pressed && event.key == "6") {
        ChangeGame(hgss);
    }
}
function OnKeyUp(event) {
    if (event.key == "g") {
        g_pressed = false;
    }
}

/*********************************************************/

let debug_text = "";
let debug_entry = 0;
const debug_whitespace = "                                                      ";

const STATE_DEFAULT = 0;
const STATE_LINK1 = 1;
const STATE_LINK2 = 2;
let current_state = STATE_DEFAULT;
let link_location, link_warp;
let current_location;
let left_click  = { down: false };
let right_click = { down: false };
let mouse_position = {x: 0, y: 0};
let current_markcycle;
function OnMouseDown(event) {
    if (!game.ready) return;
    mouse_position = EventToPosition(event);

    let click = null;
    switch (event.which) {
        case LEFT_CLICK:  click = left_click;  break;
        case RIGHT_CLICK: click = right_click; break;
        case MIDDLE_CLICK: {
            if (!DEBUG_MODE) return;

            if (mouse_position.x < game.left_width + SELECTED_MAP_XOFFSET/2) {
                mouse_position.x /= MAP_SCALE;
                mouse_position.y /= MAP_SCALE;
            }
            else {
                mouse_position.x = (mouse_position.x - rendered_location.x) / rendered_location.scale;
                mouse_position.y = (mouse_position.y - rendered_location.y) / rendered_location.scale;
                game.warps[current_location]["aaaa"+debug_entry] = {
                    x: mouse_position.x,
                    y: mouse_position.y,
                };
                rerender_location = true;
            }

            debug_text += "\t\t\taaaa" + debug_entry + ":" + debug_whitespace + "{x: " + Math.floor(mouse_position.x) + ", y: " + Math.floor(mouse_position.y) + " },\n";
            debug_entry += 1;
            console.log("Copied to clipboard\n***\n" + debug_text);
            navigator.clipboard.writeText(debug_text);
            return;
        }
        default: return;
    }

    if (!click) return;

    let info = GetClicked(mouse_position);
    if (info) {
        click.down = true;
        click.info = info;
        if (event.which == LEFT_CLICK && info.type == TYPE_WARP && current_state == STATE_DEFAULT) {
            link_location = current_location;
            link_warp     = info.target;
            current_state = STATE_LINK1;
            click.down = false;
        }
    }
}
function OnMouseMove(event) {
    if (!game.ready) return;
    mouse_position = EventToPosition(event);
}
function OnMouseUp(event) {
    if (!game.ready) return;
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
        default: return;
    }

    if (!click.down) return;
    click.down = false;
    let info = GetClicked(mouse_position);
    if (info) {
        if (click.info.type == info.type && click.info.target == info.target) {
            switch (event.which) {
                case LEFT_CLICK: {
                    switch (info.type) {
                        case TYPE_CONFIG: {
                            if (info.target == "settings") {
                                ShowConfig();
                            }
                            else {
                                ShowHelp();
                            }
                            current_state = STATE_DEFAULT;
                        } break;
                        case TYPE_LOCATION: {
                            switch (current_state) {
                                case STATE_LINK1:
                                case STATE_LINK2: {
                                    current_state = (info.target == link_location) ? STATE_LINK1 : STATE_LINK2;
                                } // falldown
                                case STATE_DEFAULT: {
                                    current_location = info.target;
                                    if (DEBUG_MODE && DEBUG_REMEMBER_LOCATION) {
                                        localStorage.setItem(CACHE_DEBUG_LOCATION, current_location);
                                    }
                                } break;
                            }
                        } break;
                        case TYPE_PROGRESS: {
                            if (current_state == STATE_DEFAULT) {
                                if (game.obtained.has(info.target)) {
                                    game.obtained.delete(info.target);
                                }
                                else {
                                    game.obtained.add(info.target);
                                }
                                rerender_all = true;
                            } 
                        } // falldown
                        case TYPE_MARK: {
                            if (current_state != STATE_DEFAULT) {
                                ChangeWarp(game, link_location, link_warp, LINKTYPE_MARK, "", info.target, null);
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
                                        let w = game.warps[current_location][info.target];
                                        if (w.link_type && w.link_type == LINKTYPE_WARP) {
                                            current_location = w.link_location;
                                        }
                                        break;
                                    }
                                } // falldown
                                case STATE_LINK2: {
                                    ChangeWarp(game, link_location,    link_warp,   LINKTYPE_WARP, current_location, info.target, null);
                                    ChangeWarp(game, current_location, info.target, LINKTYPE_WARP, link_location,    link_warp,   null);

                                    current_state = STATE_DEFAULT;
                                } break;
                            }
                        }

                        case TYPE_MODIFIER: {
                            if (current_state != STATE_DEFAULT) {
                                ChangeModifier(link_location, link_warp, info.target);
                                current_state = STATE_DEFAULT;
                            }
                        } break;
                    }
                } break;
                case RIGHT_CLICK: {
                    switch (info.type) {
                        case TYPE_MARK:
                        case TYPE_PROGRESS: {
                            let m = GetMarkByName(info.target, game);
                            if (m && m[1] > 0) {
                                // Start new cycle if it doesn't exist or is not the same as before
                                if (!current_markcycle || current_markcycle.name != info.target) {
                                    current_markcycle = { name: info.target, index: 0, locations: [] };
                                    for (let location in game.warps) {
                                        for (let name in game.warps[location]) {
                                            let warp = game.warps[location][name];
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
                            let warp = game.warps[current_location][info.target];
                            if (warp.modifier) {
                                ChangeModifier(current_location, info.target, null);
                                break;
                            }

                            if (!warp.link_type || (warp.link_type == LINKTYPE_MARK && warp.link == "unknown")) {
                                ChangeWarp(game, current_location, info.target, LINKTYPE_MARK, "", "dead_end", null);
                            }
                            else {
                                let delete_warp = true;
                                if (warp.link_type == LINKTYPE_WARP) {
                                    let is_warp_linked = IsWarpLinked(warp.link_location, warp.link);
                                    if (is_warp_linked) {
                                        delete_warp = confirm("This will remove the link on the other end of the warp. Are you sure you want to remove this warp?");
                                    }
                                    if (is_warp_linked && delete_warp) {
                                        ChangeWarp(game, warp.link_location, warp.link, LINKTYPE_MARK, "", "unknown", null);
                                    }
                                }
                                if (delete_warp) {
                                    ChangeWarp(game, current_location, info.target, LINKTYPE_MARK, "", "unknown", null);
                                }
                            }
                            
                        } break;
                    }
                } break;
            }
        }
    }
}

// Change the warp and send info to server if connected
function ChangeWarp(current_game, location, warp, link_type, link_location, link, modifier) {
    ChangeWarpOffline(current_game, location, warp, link_type, link_location, link, modifier);

    if (connected_to || connections.length > 0) {
        let text = current_game.name + "," + location + "," + warp + "," + link_type + "," + link_location + "," + link + "," + modifier;
        if (connected_to) {
            connected_to.send(text);
        }
        else {
            for (let c of connections) {
                c.connection.send(text);
            }
        }
    }
}
function ChangeWarpOffline(current_game, location, warp, link_type, link_location, link, modifier) {
    // Check both ends of the link exist in case we are loading an old save file
    if (!current_game.warps[location] || !current_game.warps[location][warp]) {
        let error_text = "\"" + location + " (" + warp + ")\" doesn't exist. ";
        if (link_type == LINKTYPE_MARK) {
            error_text += "It was marked as \"" + link + "\".";
        }
        else {
            error_text += "It lead to \"" + link_location + " (" + link + ")\"."
        }
        console.info(error_text);
        return;
    }
    if (link_type == LINKTYPE_WARP && (!current_game.warps[link_location] || !current_game.warps[link_location][link])) {
        let error_text = "\"" + location + " (" + warp + ")\" links to a warp which doesn't exist -> \"" + link_location + " (" + link + ")\"."
        console.info(error_text);
        return;
    }

    // Save the warp
    let w = current_game.warps[location][warp];
    if (w.link_type != link_type || w.link_location != link_location || w.link != link) {
        let old_link = null;
        if (w.link_type == LINKTYPE_MARK) { old_link = w.link; }
        w.link_type     = link_type;
        w.link_location = link_location;
        w.link          = link;
        if (old_link)                   { AddToMark(current_game, old_link, -1, location); }
        if (link_type == LINKTYPE_MARK) { AddToMark(current_game, link,      1, location); }
    }
    
    if (w.modifier != modifier) {
        let old_modifier = null;
        if (w.modifier || w.modifier == "null") { old_modifier = w.modifier; }
        w.modifier      = modifier;
        if (old_modifier) { /*AddToModifier*/}
        if (modifier)     { /*AddToModifier*/}
    }

    rerender_location = true;
}
function ChangeModifier(location, link, modifier) {
    let warp = game.warps[location][link];
    ChangeWarp(game, location, link, warp.link_type, warp.link_location, warp.link, modifier);
    if (IsWarpLinked(location, link)) {
        let warp2 = game.warps[warp.link_location][warp.link];
        ChangeWarp(game, warp.link_location, warp.link, warp2.link_type, warp2.link_location, warp2.link, modifier);
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
const TYPE_MODIFIER = "modifier";
function GetClicked(position) {
    // Check if config button
    if (position.x >= 0 &&
        position.x <= game.left_width &&
        position.y >= canvas.height - settings.naturalHeight &&
        position.y <  canvas.height)
    {
        if (position.x <= settings.naturalWidth) {
            return { type: TYPE_CONFIG, target: "settings" };
        }
        else if (position.x <= settings.naturalWidth + CONFIG_XOFFSET + help.naturalWidth) {
            return { type: TYPE_CONFIG, target: "help" };
        }
        return null;
    }

    // Check everything else
    if (position.x < game.left_width) {
        if (position.y < game.map.h) { return GetLocation(position); }
        else {
            if (!DEBUG_MODE || (position.x < game.left_width - (game.modifiers.length*(MODIFIER_RADIUS*2 + MARK_SEPARATION)))) { // @MODIFIER_TEST
                return GetMark(position);
            }
            else {
                return GetModifier(position);
            }
        }
    }
    else { return GetWarp(position); }
}
function GetLocation(position) {
    let p = {
        x: position.x / MAP_SCALE,
        y: position.y / MAP_SCALE
    }
    for (var key in game.locations) {
        let location = game.locations[key];
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
        y: position.y - game.map.h - MARKS_YOFFSET
    }

    // Figure out if clicking marks or progress
    let progress_yposition = game.marks.length * (MARK_SIZE + MARK_SEPARATION);
    let type = TYPE_MARK;
    let images = game.marks;
    if (p.y > progress_yposition) {
        type = TYPE_PROGRESS;
        images = game.progress;
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
        if (result && result[1] !== undefined) return { type: type, target: result[0], coords: cell };
    }
    return null;
}
function GetWarp(position) {
    // Check all warps
    let location = game.locations[current_location];
    for (var key in game.warps[current_location]) {
        let warp = game.warps[current_location][key];
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
function GetModifier(position) {
    // Start position below map
    let p = {
        x: position.x - game.left_width + game.modifiers.length*(MODIFIER_RADIUS*2 + MARK_SEPARATION),
        y: position.y - game.map.h - MARKS_YOFFSET
    }
    if (p.x < 0 || p.y < 0) { return null; }
    let cell = {
        x: game.modifiers.length - 1 - Math.trunc(p.x/(MODIFIER_RADIUS*2 + MARK_SEPARATION)),
        y: Math.trunc(p.y/(MODIFIER_RADIUS*2 + MARK_SEPARATION)),
    }

    if (cell.x < game.modifiers.length && cell.y < game.modifiers[cell.x].length) {
        return { type: TYPE_MODIFIER, target: game.modifiers[cell.x][cell.y][0], coords: cell };
    }

    return null;
}

function GetMarkByName(name_to_find, current_game) {
    for (let images of [current_game.marks, current_game.progress]) {
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

// Call this AFTER adding/removing the mark
function AddToMark (current_game, name, value, location) {
    let info = GetMarkByName(name, current_game);
    if (!info) { return; }

    let old_value = info[1];
    info[1] += value;

    if (current_game.name != game.name) { return; }

    rerender_all |= ((old_value >= 1 && info[1] <= 0) || (old_value <= 0 && info[1] >= 1));

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
                for (let key in game.warps[location]) {
                    if (game.warps[location][key].link_type &&
                        game.warps[location][key].link_type == LINKTYPE_MARK &&
                        game.warps[location][key].link == name)
                    {
                        ocurrences += 1;
                    }
                }

                if (ocurrences == 0) {
                    let i = current_markcycle.locations.indexOf(location);
                    if (i >= 0) { // we found it
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

// Checks if both warps lead to each other
function IsWarpLinked (location, link) {
    let warp = game.warps[location][link];
    if (!warp || warp.link_type != LINKTYPE_WARP) { return false; }

    let warp2 = game.warps[warp.link_location][warp.link];
    return warp2 && warp2.link_type == LINKTYPE_WARP && warp2.link_location == location && warp2.link == link;
}