# Pokémon Tracker
[Website Project](https://sekii.gitlab.io/pokemon-tracker) - [Old Website Project](https://sekii.gitlab.io/emerald-warp-tracker/)

Project open to public so feel free to fork or add new maps for other game gens.

**If you do programming work to modify the code, there's a high chance I won't accept it. If you want to increase the odds, don't add dependencies and avoid increasing the complexity of the project too much.** I'd like the tracker to be kept simple and with the minimum number of warps. The tracker is mainly used by speedrunners so I'd like to always prioritize ease of use over accurate mapping. Besides, keeping the code count low means less chance for it to be a bug. When working with pure JS, I think the project should fit in a developer's mind.

## If you're adding a game
I recommend checking the "emerald.js" file in the "games" folder and the "emerald" folder in the "images" folder to use as a template. You need to preserve the folder structure of images for it to work.

I've also added some debug tools that I use while creating the maps. They are all at the top of main.js:
- DEBUG_MODE: this will enable the middle click. You 
- DEBUG_WARP_TO_SELF
- DEBUG_PRINT_KEY