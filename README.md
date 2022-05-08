# Pokémon Tracker
[Website Project](https://sekii.gitlab.io/pokemon-tracker)

Project open to public so feel free to fork or add new maps for other game gens.

**If you do programming work to modify the code, there's a high chance I won't accept it. If you want to increase the odds, don't add dependencies and avoid increasing the complexity of the project too much.** I'd like the tracker to be kept simple and with the minimum number of warps. The tracker is mainly used by speedrunners so I'd like to always prioritize ease of use over accurate mapping. Besides, keeping the code count low means less chance for it to be a bug.

## If you're adding a game
I recommend checking the "emerald.js" file in the "games" folder and the "emerald" folder in the "images" folder to use as a template. You need to preserve the folder structure of images for it to work.

I've also added some debug tools that I use while creating the maps. They are all at the top of main.js:
- DEBUG_MODE: with this enabled, more info will be printed to the console. Besides, middle clicking on the map or a location will give you the coordinates for the mouse and copy them into your clipboard (which then can be copypasted in your own game js file)
- DEBUG_WARP_TO_SELF: all warps will always link to themselves, this way you can check how big the text box is for a given location and the name the current map has
- DEBUG_PRINT_KEY: instead of printing the name of the location, the key name of the linked warp will be printed. Helpful to identify different warps while adjusting their positions
- DEBUG_REMEMBER_LOCATIOn: it will save in cache the last location it was open, so you can refresh the page and quickly check changes