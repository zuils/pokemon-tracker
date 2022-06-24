# Pokémon Tracker
[Tracker Website](https://sekii.gitlab.io/pokemon-tracker)

Project open to public so feel free to fork or add new maps for other game gens.

Check the issues open to contribute at modifying the code. **There's a chance I won't accept code modifications if they add dependencies or increase the complexity of the project too much.**

I will accept any merge request to add new trackers for either new games or existing ones. The way I design the trackers is by trying to keep the number of warps to a minimum. If you'd like to see more complete trackers, feel free to make and submit a new one and I'll most likely accept it.

## If you're making your own tracker
I recommend checking an existing tracker to use as a template. Each game has a .js file in the "games" folder detailing all the locations, warps, marks, etc. and a named folder in the "images" folder. You need to preserve the folder structure of images for it to work.

I've also added some debug tools that I use while creating the maps. They are all at the top of main.js:
- DEBUG_MODE: with this enabled, more info will be printed to the console. Besides, **middle clicking** on the map or a location will give you the coordinates for the mouse and copy them into your clipboard (which then can be copypasted in your own game js file)
- DEBUG_WARP_TO_SELF: all warps will always link to themselves, this way you can check how big the text box is for a given location and the name the current map has
- DEBUG_PRINT_KEY: instead of printing the name of the location, the key name of the linked warp will be printed. Helpful to identify different warps while adjusting their positions
- DEBUG_REMEMBER_LOCATION: it will save in cache the last location it was open, so you can refresh the page and quickly check changes
- DEBUG_IMAGE_DIMENSIONS: prints on console the height and width of all images from smallest to biggest. The canvas dimensions are set to the biggest width and height, so with this you can check which are your biggest images are and reduce them