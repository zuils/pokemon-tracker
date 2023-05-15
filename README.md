# Pokémon Tracker
https://sekii.gitlab.io/pokemon-tracker

Project open to the public so feel free to fork or add new maps for other game gens. If you want to use the project offline, download the source code and open the file called "index.html" with your browser.

## Merge requests
I will accept any merge request to add new tracker maps for either new games or existing ones. The current maps are not meant to be 1 to 1 map of the seed randomization, so if you'd like to see more complete maps feel free to make and submit a new one and I'll most likely accept it.

Check the [open issues](https://gitlab.com/Sekii/pokemon-tracker/-/issues) to contribute code. I might not accept merge requests if they **needlessly** add dependencies or increase the complexity of the code.

## Tips and tools to make your own map
I recommend checking an existing tracker to use as a template. Each game has a .js file in the "games" folder detailing all the locations, warps, marks, etc. and a named folder in the "images" folder. You need to preserve the folder structure of images for it to work.

There's also a debug mode available. To activate it, add "?debug" to the end of the url in the browser. This will enable:
- **Middle clicking** on the map or a location will give you the coordinates for the mouse and copy them into your clipboard (which then can be copypasted in your own game js file)
- Press **Q** to show the name of the warps.
- Press **W** to show the internal name of the warps.
- The last open location will be remembered so it opens automatically if you refresh the tracker.
- An ordered list with all the image dimensions is being printed in the console. The trackers dimensions are being decided by the largest images in your tracker, so if you reduce those you can make the tracker more compact.
- Tests are run, if you're not changing the HTML or the code it shouldn't affect your work.