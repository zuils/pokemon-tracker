# Tips and tools to make your own map
I recommend checking an existing tracker to use as a template. Each map has a .js file in the "games" folder detailing all the locations, warps, marks, etc. and a named folder in the "images" folder. This folder structure needs to be preserved.

## Debug mode
To activate it, add `?debug` to the url in your browser. This mode will enable:
- **Middle clicking** on the map or a location will give you the coordinates for the mouse and copy them into your clipboard (which then can be copypasted in your own .js file).
- Pressing **Q** show the name of the warps.
- Pressing **W** shows the internal name of the warps.
- The last open location will be remembered so it opens automatically if you refresh the tracker.
- An ordered list of all the image dimensions is being printed in the console. The tracker's dimensions are being decided by the largest images in your map, so if you reduce the biggest one's you'll be able to reduce the size of the tracker.
- Tests are run, if you're not changing the HTML or the code it shouldn't affect your work.

## .js fields
Each .js file declares a single variable which describes everything about a map. This variable needs to be given a unique name and then added to the main.js file.

First, there's a bunch of metadata at the top of the file:
- `folder`: name of the folder in `images` is going to be using
- `name`: name of the .png minimap in the folder
- `debug`: if not set to `false`, the map will only be available in debug mode
- `start_location`: name of the starting location 
- `font`: font used to render the location name in the minimap
- `font_size`: size of the previous font (not the one drawn in the location itself)
- `is_item_tracker`: used for warp + item trackers
- `config_name`: name shown in the config window (where the user can load the different maps)
- `config_randomizer_author`: name of the randomizer author
- `config_randomizer_link`: link for the randomizer author
- `config_tracker_author`: name of the map author
- `config_tracker_link`: link for the map author

There's 5 additional fields with different field specificators: `locations`, `warps`, `marks`, `progress` and `modifiers`.

// TODO