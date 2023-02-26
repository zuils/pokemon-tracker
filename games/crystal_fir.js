let crystal_fir = {
	debug: false,
    name: "crystal_fir",
	folder: "crystal_fir",
    start_location: "cherrygrove",
    font: "GameBoy_Font",
    font_size: "22px",

	// Config texts
	config_name: "Crystal FIR (WIP)",
	//config_randomizer_author: "iFatRain",
	//config_randomizer_link: "https://github.com/iFatRain/pokemon-crystal-map-randomizer",
	//config_tracker_author: "",
	//config_tracker_link: "",

	// Tracker information
    locations: {
        // Cities
        newbark_r29:     {x: 95,  y: 72, w: 20, h: 8,  name: "Newbark Town\nRoute 28"     },
        //cherrygrove_r29: {x: 83,  y: 72, w: 16, h: 8,  name: "Cherrygrove City\nRoute 29" },
        cherrygrove:     {x: 83,  y: 72, w: 8,  h: 8,  name: "Cherrygrove City"           },
        violet:          {x: 67,  y: 32, w: 8,  h: 8,  name: "Violet City"                },
        azalea_well:     {x: 51,  y: 96, w: 8,  h: 8,  name: "Azalea Town\nSlowpoke Well" },
        goldenrod:       {x: 35,  y: 64, w: 8,  h: 8,  name: "Goldenrod City"             },
        ecruteak:        {x: 51,  y: 16, w: 8,  h: 8,  name: "Ecruteak City"              },
        olivine_r40:     {x: 19,  y: 24, w: 8,  h: 16, name: "Olivine City\nRoute 38-40"  },
        cianwood:        {x: 3,   y: 72, w: 8,  h: 8,  name: "Cianwood City"              },
        mahogany_r44:    {x: 91,  y: 16, w: 16,  h: 8, name: "Mahogany Town\nRoute 44"    },
        blackthorn:      {x: 115, y: 16, w: 8,  h: 8,  name: "Blackthorn City"            },
        indigo_e4:       {x: 155, y: 8,  w: 8,  h: 8,  name: "Indigo Plateau\nElite 4"    },

        pallet:        {x: 179, y: 80,  w: 8,  h: 8,  name: "Pallet Town"               },
        //viridian_r22:  {x: 179, y: 48,  w: 8,  h: 8,  name: "Viridian City\nRoute 22"   },
        viridian_r1_r22: {x: 179, y: 48,  w: 8,  h: 16,  name: "Viridian City\nRoute 1 / 22"},
        pewter:        {x: 179, y: 24,  w: 8,  h: 8,  name: "Pewter City"               },
        cerulean_r5:   {x: 227, y: 16,  w: 8,  h: 16, name: "Cerulean City\nRoute 5 / 25" },
        vermilion_r6:  {x: 227, y: 56,  w: 8,  h: 8,  name: "Vermilion City\nRoute 6"   },
        celadon_r7:    {x: 195, y: 40,  w: 16, h: 8,  name: "Celadon City\nRoute 7 / 16"  },
        lavender_r8:   {x: 259, y: 40,  w: 8,  h: 8,  name: "Lavender Town\nRoute 8"    },
        saffron:       {x: 227, y: 40,  w: 8,  h: 8,  name: "Saffron City"              },
        fuchsia:       {x: 211, y: 88,  w: 16, h: 8,  name: "Fuchsia City\nRoute 18"    },
        cinnabar:      {x: 179, y: 104, w: 8,  h: 8,  name: "Cinnabar Island"           },

        // Routes
        r45_r46:       {x: 107, y: 34,  w: 16, h: 28, name: "Route 45\nRoute 46"      },
        r30_r31:       {x: 83,  y: 44,  w: 8,  h: 14, name: "Route 30\nRoute 31"      },
        alphruins_r32: {x: 67,  y: 67,  w: 8,  h: 14, name: "Ruins of Alph\nRoute 32" },
        r34_ilex:      {x: 35,  y: 81,  w: 8,  h: 8,  name: "Route 34\nIlex Forest"   },
        //r35_r36:       {x: 35,  y: 32,  w: 14, h: 14, name: "Route 35\nRoute 36"      },
        r36t_r37:      {x: 51,  y: 32,  w: 8,  h: 8,  name: "Route 36 Top\nRoute 37"  },
        r41:           {x: 11,  y: 52,  w: 8,  h: 8,  name: "Route 41"                },
        ragelake_r43:  {x: 91,  y: 0,   w: 8,  h: 8,  name: "Lake of Rage\nRoute 43"  },
        r26_r27:       {x: 137, y: 66,  w: 26, h: 14, name: "Route 26\nRoute 27"      },

        r2:            {x: 179, y: 36,  w: 8,  h: 8,  name: "Route 2"                 },
        r19_r20:       {x: 195, y: 104, w: 8,  h: 8,  name: "Route 19\nRoute 20"      },
        //r12:           {x: 259, y: 56,  w: 8,  h: 8,  name: "Route 12"                },
        r11_r12_r13:   {x: 259, y: 56,  w: 8,  h: 8,  name: "Route 11-13" },
        r15:           {x: 230, y: 88,  w: 8,  h: 8,  name: "Route 15"                },
        cyclingroad:   {x: 195, y: 57,  w: 8,  h: 14, name: "Cycling Road"            },
        r9_r10:        {x: 259, y: 24,  w: 8,  h: 8,  name: "Route 9\nRoute 10"       },
        r28:           {x: 143, y: 40,  w: 8,  h: 8,  name: "Route 28"                },

        // Important locations
        darkcave:              {x: 96,  y: 44, w: 8, h: 8,  name: "Dark Cave"                      },
        sprouttower:           {x: 75,  y: 24, w: 8, h: 8,  name: "Sprout Tower"                   },
        puzzlechambers:        {x: 58,  y: 42, w: 8, h: 8,  name: "Puzzle Chambers"                },
        unioncave:             {x: 67,  y: 96, w: 8, h: 8,  name: "Union Cave"                     },
        goldenrodstore:        {x: 46,  y: 57, w: 8, h: 8,  name: "Goldenrod\nDepartment Store"    },
        underground:           {x: 46,  y: 71, w: 8, h: 8,  name: "Underground"                    },
        radiotower:            {x: 27,  y: 64, w: 8, h: 8,  name: "Radio Tower"                    },
        nationalpark_r35_r36b: {x: 35,  y: 32, w: 14,h: 14, name: "National park\nRoute 35 / 36"   },
        //tintower:              {x: 51,  y: 6,  w: 8, h: 8,  name: "Tin Tower"    
        tintower_burnedtower:  {x: 51,  y: 6,  w: 8, h: 8,  name: "Tin Tower\nBurnedTower"         },
        mtmortar_r42:          {x: 67,  y: 16, w: 8, h: 8,  name: "Mt. Mortar Entry\nRoute 42"     },
        mtmortarback:          {x: 67,  y: 8,  w: 8, h: 8,  name: "Mt. Mortar Back"                },
        mtmortarf2:            {x: 62,  y: 0,  w: 8, h: 8,  name: "Mt. Mortar F2"                  },
        mtmortarb1f:           {x: 72,  y: 0,  w: 8, h: 8,  name: "Mt. Mortar B1F"                 },
        lighthouse:            {x: 22,  y: 44, w: 8, h: 8,  name: "Olivine's Lighthouse"           },
        ssaqua:                {x: 213, y: 66, w: 8, h: 8,  name: "S.S. Aqua"                      },
        whirlislands:          {x: 11,  y: 64, w: 8, h: 8,  name: "Whirl Islands"                  },
        rockethideout:         {x: 99,  y: 8,  w: 8, h: 8,  name: "Rocket Hideout"                 },
        icepath1:              {x: 115, y: 6,  w: 8, h: 8,  name: "Ice Path"                       },
        icepath2:              {x: 124, y: 6,  w: 8, h: 8,  name: "Ice Path"                       },
        dragonsden:            {x: 124, y: 16, w: 8, h: 8,  name: "Dragon's Den"                   },
        victoryroad_reception: {x: 155, y: 34, w: 8, h: 14, name: "Victory Road\nLeague Reception" },
        mtmoon_r3_r4:          {x: 213, y: 24, w: 8, h: 8, name: "Mt. Moon\nRoute 3 / 4"           },
        mtsilver:              {x: 131, y: 40, w: 8, h: 8, name: "Mt. Silver"                      },
        celadonstore:          {x: 203, y: 32, w: 8, h: 8, name: "Celadon\nDepartment Store"       },
        rocktunnel:            {x: 251, y: 32, w: 8, h: 8, name: "Rock Tunnel"                     },
        diglettcave_underpass: {x: 235, y: 48,  w: 8,  h: 8,  name: "Diglett Cave\nUnderground Path" },
        
        //for shopsanity
        shop_johto:            {x: 137, y: 96,  w: 8, h: 8, name: "Shops Johto"                    },
        shop_kanto:            {x: 145, y: 96,  w: 8, h: 8, name: "Shops Kanto"                    },
        
    },
    

			


    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        /*cherrygrove_r29: {
			r29_gate: {x: 423, y: 78, name: "R29 (Cherrygrove)" },
			mart:     {x: 216, y: 80                            },
			center:   {x: 312, y: 36                            },
			house1:   {x: 118, y: 140                           },
			house2:   {x: 247, y: 170                           },
			house3:   {x: 342, y: 202                           },
        },*/
        
        
        //			den_door:    {x: 70,  y: 57,  corridor: "den_house", name: "Dragon's Den" },
//			den_house:   {x: 70,  y: 250, corridor: "den_door",  name: "Dragon's Den" },


        newbark_r29: { 
        		r28_gate: {x: 81, y: 44, name: "Route 28 (Newbark)"},
        		
        		it_mom: {x: 350, y: 40, item: "overworld" },
        		it_aide_starter: {x: 271, y: 233, item: "overworld" },
        		it_aide_mystery_egg: {x: 307, y: 233, item: "mystery_egg" },
        		it_elm_rising_badge: {x: 261, y: 140, item: "rising_badge" },
        		it_elm_e4: {x: 285, y: 140, item: "e4" }, 
        		it_potion: {x: 215, y: 44, item: "overworld" },
        		it_berry: {x: 64, y: 184, item: "overworld" },
        		it_tuscany: {x: 155, y: 211, item: "zephyr_badge" },

        },

        cherrygrove: {
        		mart:     {x: 216, y: 80                            },
			center:   {x: 312, y: 36                            },
			house1:   {x: 118, y: 140                           },
			house2:   {x: 247, y: 170                           },
			house3:   {x: 342, y: 202                           },
			
			it_mysticwater: {x: 79, y: 262, item: "surf" },
			
        },


        violet: {
            sprout:        {x: 383, y: 52                                                           },
			leftmart:      {x: 66,  y: 219                                                          },
			mart:          {x: 154, y: 314                                                          },
			gym:           {x: 298, y: 236                                                          },
			school:        {x: 488, y: 304                                                          },
			center:        {x: 506, y: 368                                                          },
			trade:         {x: 345, y: 442                                                          },
			gate:          {x: 605, y: 409                                                          },
			center_door:   {x: 543, y: 217, corridor: "center_stairs", name: "Violet City (Center)" },
			center_stairs: {x: 483, y: 164, corridor: "center_door",   name: "Violet City (Center)" },
			
			it_tree: {x: 213, y: 471, item: "overworld" },
			it_hidden_cut: {x: 606, y: 250, item: "cut" },
			it_surf_left: {x: 90, y: 20, item: "surf" },
			it_surf_right: {x: 547, y: 31, item: "surf" },
			it_gym_badge: {x: 274, y: 258, item: "overworld" },
			it_gym_tm: {x: 332, y: 255, item: "overworld" },

        },
        azalea_well: {
            kurt:      {x: 151, y: 54                                                    },
			center:    {x: 251, y: 118                                                   },
			mart:      {x: 346, y: 52                                                    },
			well:      {x: 485, y: 123                                                   },
			gym:       {x: 165, y: 210                                                   },
			charcoal:  {x: 343, y: 187                                                   },
			gate:      {x: 60,  y: 180                                                   },
			darkcave:  {x: 448, y: 328,                        name: "Route 33 (Azalea)" },
			well_up:   {x: 135, y: 493, corridor: "well_down", name: "Slowpoke Well"     },
			well_down: {x: 38,  y: 436, corridor: "well_up",   name: "Slowpoke Well"     },
			well_b1f:  {x: 277, y: 437,			     name: "Slowpoke Well B1F" },

			
			it_hidden: {x: 504, y: 90, item: "overworld" },
			it_tree_right: {x: 516, y: 405, item: "overworld" },
			it_tree_left: {x: 118, y: 17, item: "overworld" },
			it_gym_badge: {x: 151, y: 232, item: "overworld" },
			it_gym_tm: {x: 186, y: 233, item: "overworld" },
			it_charcoal: {x: 365, y: 210, item: "farfetchd" }, //req: do farfetchd quest in ilex
			it_kurt: {x: 172, y: 80, item: "overworld" },
			it_well_potion: {x: 80, y: 309, item: "overworld" },
			it_well_tm: {x: 345, y: 349, item: "surf_strength" }, //req: both surf and strength
			it_well_kingsrock: {x: 251, y: 322, item: "surf_strength" }, // same

        },
        goldenrod: {
			gate:       {x: 311, y: 53  },
			tunneltop:  {x: 153, y: 62  },
			leftgym:    {x: 246, y: 145 },
			gym:        {x: 393, y: 145 },
			flower:     {x: 473, y: 62  },
			rightgym:   {x: 538, y: 184 },
			radio:      {x: 87,  y: 282 },
			station:    {x: 150, y: 183 },
			gamecorner: {x: 233, y: 315 },
			rightmart:	{x: 501, y: 302 },
			bill:       {x: 89,  y: 381 },
			tunnelbot:  {x: 183, y: 500 },
			center:     {x: 246, y: 412 },
			mart:       {x: 392, y: 412 },
			bike:       {x: 477, y: 500 },
			
			it_bike: {x: 492, y: 445, item: "overworld" },
			it_gym_badge: {x: 373, y: 93, item: "overworld" },
			it_gym_tm: {x: 408, y: 90, item: "overworld" },
			it_squirtbottle: {x: 501, y: 79, item: "plain_badge" },

        },
        ecruteak: {
			burned:    {x: 106, y: 34  },
			tin:       {x: 297, y: 151 },
			gateleft:  {x: 26,  y: 264 },
            topgym:    {x: 89,  y: 370 },
			kimono:    {x: 378, y: 305 },
			mart:      {x: 471, y: 370 },
            gym:       {x: 99,  y: 468 },
			rightgym:  {x: 220, y: 410 },
			center:    {x: 379, y: 410 },
			gateright: {x: 571, y: 474 },
			
			it_hidden: {x: 392, y: 236, item: "overworld" },
			it_itemfinder: {x: 243, y: 432, item: "overworld" },
			it_kimono: {x: 402, y: 332, item: "overworld" },
			it_gym_badge: {x: 87, y: 407, item: "overworld" },
			it_gym_tm: {x: 114, y: 407, item: "overworld" },

        },
        olivine_r40: {
			gym:        {x: 165, y: 180, name: "Olivine City"       },
			trade:      {x: 405, y: 180, name: "Olivine City"       },
			righttrade: {x: 475, y: 180, name: "Olivine City"       },
			leftmart:   {x: 215, y: 224, name: "Olivine City"       },
			mart:       {x: 312, y: 309, name: "Olivine City"       },
			center:     {x: 219, y: 354, name: "Olivine City"       },
			bar:        {x: 120, y: 302, name: "Olivine City"       },
			lighthouse: {x: 475, y: 410, name: "Olivine City"       },
			battle:     {x: 72,  y: 461, name: "Olivine City"       },
			gate:       {x: 524, y: 60,  name: "Route 38 (Olivine)" },
			farm1:      {x: 163, y: 33,  name: "Route 39 (Olivine)" },
			farm2:      {x: 219, y: 21,  name: "Route 39 (Olivine)" },
			
			it_tree_trainer: {x: 363, y: 86, item: "overworld" },
			it_tree_moomoo: {x: 304, y: 44, item: "overworld" },
			it_hidden_moomoo: {x: 75, y: 92, item: "overworld" },
			it_miltank: {x: 245, y: 20, item: "overworld" },
			it_rod: {x: 244, y: 239, item: "overworld" },
			it_strength: {x: 143, y: 327, item: "overworld" },
			it_monica: {x: 61, y: 526, item: "overworld" },
			it_rocksmash: {x: 5, y: 532, item: "rocksmash" },
			it_gym_badge: {x: 150, y: 154, item: "overworld" },
			it_gym_tm: {x: 173, y: 154, item: "overworld" },
			it_port: {x: 453, y: 541, item: "overworld" },

        },
        cianwood: {
			house1: {x: 86,  y: 87  },
			house2: {x: 151, y: 315 },
			house3: {x: 246, y: 409 },
			house4: {x: 279, y: 530 },
			gym:    {x: 384, y: 482 },
			center: {x: 134, y: 490 },
			house5: {x: 247, y: 625 },
			
			it_secretpotion: {x: 270, y: 592, item: "amphy" }, //req: talk to jasmine about sick ampharos in lighthouse
			it_gym_badge: {x: 120, y: 511, item: "strength" },
			it_gym_tm: {x: 146, y: 510, item: "strength" },
			it_wife: {x: 188, y: 558, item: "strength" }, //req: actually beating gym - which required strength TODO
			it_rocksmash_top: {x: 50, y: 151, item: "rocksmash" },
			it_rocksmash_bottom: {x: 59, y: 311, item: "rocksmash" },

        },
        mahogany_r44: {
			gate:      {x: 105, y: 41                            },
			mart:	   {x: 138, y: 91                           },
			rightmart: {x: 233, y: 97                             },
			gym:       {x: 57, y: 230                             },
			center:    {x: 201, y: 230                            },
			icepath:   {x: 385, y: 103, name: "Route44 (Mahogany)" },

			it_gym_badge: {x: 41, y: 191, item: "overworld" },
			it_gym_tm: {x: 63, y: 189, item: "overworld" },
			it_tree: {x: 55, y: 316, item: "overworld" },
			it_hidden_repel: {x: 118, y: 380, item: "overworld" },
			it_grass: {x: 217, y: 334, item: "surf" },
			it_hidden_elixer: {x: 251, y: 383, item: "surf" },
			it_ultraball: {x: 388, y: 323, item: "overworld" },

        },
        blackthorn: {
			den:         {x: 330, y: 69  },
			gym:         {x: 294, y: 144 },
			icepath:     {x: 583, y: 114 },
			botgym:      {x: 216, y: 319 },
			leftmart:    {x: 148, y: 480 },
			mart:        {x: 247, y: 430 },
			center:      {x: 351, y: 500 },
			rightcenter: {x: 472, y: 354 },
			
			it_santos: {x: 390, y: 327, item: "overworld" },
			
        },
        indigo_e4: {
			center_left:     {x: 40,  y: 490,                        name: "Indigo Plateau"    },
			center_entrance: {x: 132, y: 490,                        name: "Indigo Plateau"    },
			center_top:      {x: 269, y: 376,                        name: "Indigo Plateau"    },
			will_top:        {x: 80,  y: 20,  corridor: "will_bot",  name: "E4 Member (Will)"  },
			will_bot:        {x: 80,  y: 128, corridor: "will_top",  name: "E4 Member (Will)"  },
			koga_top:        {x: 245, y: 20,  corridor: "koga_bot",  name: "E4 Member (Koga)"  },
			koga_bot:        {x: 245, y: 128, corridor: "koga_top",  name: "E4 Member (Koga)"  },
			bruno_top:       {x: 80,  y: 165, corridor: "bruno_bot", name: "E4 Member (Bruno)" },
			bruno_bot:       {x: 80,  y: 279, corridor: "bruno_top", name: "E4 Member (Bruno)" },
			karen_top:       {x: 245, y: 165, corridor: "karen_bot", name: "E4 Member (Karen)" },
			karen_bot:       {x: 245, y: 279, corridor: "karen_top", name: "E4 Member (Karen)" },
        },

        pallet: {
			main:  {x: 88,  y: 50  },
			rival: {x: 221, y: 50  },
			lab:   {x: 197, y: 143 },
        },
        /*viridian_r22: {
			gate:   {x: 88,  y: 181 },
			gym:    {x: 412, y: 77  },
			house:  {x: 235, y: 127 },
			school: {x: 267, y: 211 },
			mart:   {x: 364, y: 281 },
			centre: {x: 267, y: 371 },
        },*/

        viridian_r1_r22: {
			gate:   {x: 79, y: 85, name: "Route 22 (Viridian)" },
			gym:    {x: 412, y: 77  },
			house:  {x: 235, y: 127 },
			school: {x: 267, y: 211 },
			mart:   {x: 364, y: 281 },
			centre: {x: 267, y: 371 },
        		
			it_cut_guy:   {x: 90,  y: 259, item: "surf_or_cut"  }, // req: either surf OR cut
			it_tree:      {x: 79,  y: 421, item: "overworld" },
			it_gym_badge: {x: 366, y: 97,  item: "overworld" },
        },

        pewter: {
            gym:    {x: 236, y: 235 },
			mart:   {x: 382, y: 241 },
			top:    {x: 478, y: 176 },
			center: {x: 222, y: 367 },
			bot:    {x: 121, y: 448 },
			
			it_silverwing: {x: 491, y: 274, item: "overworld" },
			it_tree_left: {x: 234, y: 271, item: "overworld" },
			it_tree_right: {x: 491, y: 69, item: "overworld" },
			it_gym_badge: {x: 518, y: 68, item: "overworld" },

        },
        cerulean_r5: {
			candy:         {x: 59,  y: 174                                                         },
			robbed:        {x: 393, y: 213                                                         },
			leftcenter:    {x: 151, y: 238                                                         },
			center:        {x: 250, y: 325                                                         },
			gym:           {x: 424, y: 291                                                         },
			mart:          {x: 349, y: 394                                                         },
                       daycare:       {x: 265, y: 519                                                         },
			tunnel:        {x: 378, y: 583,                            name: "Cerulean(Underpass)" },
			gate:          {x: 238, y: 621                                                         },
			bill:          {x: 370, y: 45,                             name: "Route 25 (Cerulean)" },
			
			it_hidden_water: {x: 52, y: 50, item: "surf" },
			it_hidden_rock: {x: 178, y: 101, item: "overworld" },
			it_cut: {x: 223, y: 21, item: "cut" },
			it_nugget_guy: {x: 283, y: 70, item: "overworld" },
			it_machinepart: {x: 383, y: 305, item: "power_plant" }, // req; talk to power_plant director
			it_gym_badge: {x: 342, y: 305, item: "machine_part_quest" }, //req: finish machine part quest to find misty at route 25, making her appear in gym TODO
			it_daycare: {x: 238, y: 534, item: "overworld" },

        },
        vermilion_r6: {
			fish:        {x: 72,  y: 149                                                        },
			center:      {x: 137, y: 208                                                        },
			club:        {x: 105, y: 273                                                        },
			trade:       {x: 202, y: 338                                                        },
			mart:        {x: 331, y: 277                                                        },
			gym:         {x: 124, y: 371,                          name: "Vermilion City (Gym)" },
			botmart:     {x: 331, y: 402                                                        },
			digglet:     {x: 528, y: 192,                          name: "Vermilion (Diglett)"  },
			gate:        {x: 233, y: 46                                                         },
			tunnel:      {x: 409, y: 19,                           name: "Vermilion(Underpass)" },

			
			it_hidden:    {x: 184, y: 388, item: "overworld"   },
			it_fanclub:   {x: 92,  y: 300, item: "overworld"   },
			it_lostitem:  {x: 128, y: 300, item: "copy_cat"    }, //req: talk to copy cat girl in saffron 
			it_gym_badge: {x: 124, y: 394, item: "overworld"   },
			it_port:      {x: 184, y: 555, item: "surf_ticket" }, //req: ss-ticket and surf required TODO			
			
        },
        celadon_r7: {
			mart:       {x: 62,  y: 119                             },
			tea:        {x: 234, y: 182                             },
			backtea:    {x: 240, y: 22                              },
			center:     {x: 444, y: 123                             },
			gamecorner: {x: 265, y: 285                             },
			prizes:     {x: 353, y: 340                             },
			gym:        {x: 132, y: 442, name: "Celadon City (Gym)" },
			coincase:   {x: 376, y: 498                             },
			gate:       {x: 535, y: 171                             },
			r16_fly:    {x: 62,  y: 209, name: "R16 (Fly House)"    },
			r16_gate:   {x: 62,  y: 291                             },
			
			it_hidden:    {x: 582, y: 376, item: "overworld" },
			it_leftover:  {x: 398, y: 452, item: "overworld" }, //might not be in 
			it_tophouse:  {x: 259, y: 74,  item: "overworld" },
			it_gym_badge: {x: 76,  y: 462, item: "cut"       },
			it_gym_tm:    {x: 103, y: 465, item: "cut"       },		

        },
        lavender_r8: {
			mart:       {x: 110, y: 236 },
			center:     {x: 178, y: 237 },
			botcenter:  {x: 174, y: 267 },
			left:       {x: 144, y: 330 },
			right:      {x: 207, y: 332 },
			radio:      {x: 317, y: 187 },
			botradio:   {x: 303, y: 282 },
			rocktunnel: {x: 311, y: 82  },
			gate:       {x: 73,  y: 111, name:"Route 8 (Lavender)" },
			
			it_tree:          {x: 22,  y: 237, item: "overworld"          },
			it_expansioncard: {x: 347, y: 207, item: "machine_part_quest" },
        },
        saffron: {
			topgate:   {x: 294, y: 23  },
			rightgate: {x: 572, y: 334 },
			botgate:   {x: 272, y: 510 },
			leftgate:  {x: 66, y: 394  },
			station:   {x: 134, y: 79  },
			dojo:      {x: 421, y: 81  },
			gym:       {x: 550, y: 23  },
			mimic:     {x: 150, y: 151 },
			mart:      {x: 414, y: 150 },
			silph:     {x: 297, y: 320 },
			center:    {x: 152, y: 447 },
			psychic:   {x: 438, y: 447 },
			
			it_psychic:   {x: 461, y: 463, item: "overworld" },
			it_copycat:   {x: 173, y: 172, item: "lost_item" },
			it_silphco:   {x: 328, y: 329, item: "overworld" },
			it_fightgym:  {x: 390, y: 45,  item: "overworld" },
			it_gym_badge: {x: 500, y: 47,  item: "overworld" },
			
			
        },
        fuchsia: {
			mart:      {x: 88,  y: 187, name: "Fuchsia City (Mart)" },
			house:     {x: 362, y: 188                              },
			gym:       {x: 134, y: 401                              },
			rightgym:  {x: 186, y: 470                              },
			center:    {x: 318, y: 409                              },
			strength:  {x: 443, y: 466                              },
			rightgate: {x: 572, y: 330                              },
			botgate:   {x: 127, y: 539                              },
			leftgate:  {x: 60,  y: 298                              },
			
			it_tree:      {x: 158, y: 28,  item: "cut"       },
			it_gym_badge: {x: 79,  y: 431, item: "overworld" },
			it_gym_tm:    {x: 107, y: 429, item: "overworld" },
        },
        cinnabar: {
			center: {x: 186, y: 151},
			
			it_hidden: {x: 151, y: 39, item: "overworld" },
        },

        // Routes
        r45_r46: {
			gate:        {x: 147, y: 812, name: "Route 46 (Gate)" },
			botdarkcave: {x: 255, y: 649, name: "Route 46 (Cave)" },
			topdarkcave: {x: 55,  y: 61,  name: "Route 45"        },
			
			it_elixer: {x: 95, y: 140, item: "overworld" },
			it_potion: {x: 160, y: 245, item: "overworld" },
			it_nugget: {x: 76, y: 308, item: "overworld" },
			it_revive: {x: 78, y: 426, item: "overworld" },
			it_oasis: {x: 237, y: 501, item: "surf" },
			it_tree_oasis: {x: 289, y: 533, item: "overworld" },
			it_tree_top: {x: 120, y: 619, item: "overworld" },
			it_tree_right: {x: 164, y: 659, item: "overworld" },
			it_xspeed: {x: 15, y: 744, item: "overworld" },
        },
        r30_r31: {
			gate:     {x: 103, y: 133, name: "Route 31" },
			darkcave: {x: 549, y: 56,  name: "Route 31" },
			berry:    {x: 130, y: 357, name: "Route 30" },
			lab:      {x: 570, y: 410, name: "Route 30" },

			it_tophouse:   {x: 164, y: 320, item: "overworld" },
			it_trainer:    {x: 338, y: 195, item: "overworld" },
			it_cave:       {x: 471, y: 87,  item: "overworld" },
			it_hidden:     {x: 536, y: 445, item: "overworld" },
			it_tree_berry: {x: 95,  y: 384, item: "overworld" },
			it_berryman:   {x: 156, y: 382, item: "overworld" },
			it_tree_kenya: {x: 262, y: 88, item: "overworld" },
			it_kenya_return: {x: 282, y: 88, item: "overworld" },
			it_tree_lab:   {x: 492, y: 363, item: "overworld" },
			it_mrpokemon:  {x: 573, y: 380, item: "overworld" },
			it_oak: {x: 590, y: 380, item: "overworld" },
			it_red_scale: {x: 618, y: 380, item: "red_scale" },
			
        },
        alphruins_r32: {
			topgate:    {x: 119, y: 22,                          name: "Ruins of Alph (Top)" },
			puzzle:     {x: 231, y: 63,                          name: "Ruins of Alph (Top)" },
			house:      {x: 280, y: 127,                         name: "Ruins of Alph (Top)" },
			unown:      {x: 166, y: 162,                         name: "Ruins of Alph (Top)" },
			leftgate:   {x: 220, y: 249,                         name: "Ruins of Alph (Top)" },
			left:       {x: 70,  y: 464,                         name: "Ruins of Alph (Bot)" },
			top:        {x: 104, y: 375,                         name: "Ruins of Alph (Bot)" },
			right:      {x: 264, y: 477,                         name: "Ruins of Alph (Bot)" },
			rightgate:  {x: 312, y: 335,                         name: "Route 32 (Violet)"   },
			center:     {x: 514, y: 398,                         name: "Route 32"            },
			union:      {x: 452, y: 485,                         name: "Route 32"            },
			rod_stairs: {x: 501, y: 511, corridor: "rod_door",   name: "Old Rod PokéCenter"  },
			rod_door:   {x: 564, y: 543, corridor: "rod_stairs", name: "Old Rod PokéCenter"  },
			
			it_miracle_seed: {x: 438, y: 20, item: "zephyr_badge" },
			it_grass_top: {x: 473, y: 46, item: "overworld" },
			it_grass_bottom: {x: 387, y: 211, item: "overworld" },
			it_roar: {x: 379, y: 84, item: "cut" },
			it_hidden_grass: {x: 514, y: 114, item: "overworld" },
			it_hidden_frieda: {x: 511, y: 307, item: "overworld" },
			it_frieda: {x: 534, y: 304, item: "overworld" },
			it_fisher: {x: 511, y: 352, item: "overworld" },

        },
        r34_ilex: {
			r34_gate:    {x: 138, y: 420,                        name: "Route 34"        },
			r34_daycare: {x: 86,  y: 40,                         name: "Route 34"        },
			ilext_top:   {x: 264, y: 62,  corridor: "ilext_bot", name: "Ilex Forest"     },
			ilext_bot:   {x: 302, y: 642, corridor: "ilext_top", name: "Ilex Forest"     },
			tm12_top:    {x: 150, y: 559, corridor: "tm12_bot",  name: "Gate R34 (TM12)" },
			tm12_bot:    {x: 152, y: 673, corridor: "tm12_top",  name: "Gate R34 (TM12)" },
			
			it_cut:             {x: 353, y: 432, item: "farfetchd" }, //req: farfetchd quest required, but you can also do farfetchd quest here TODO
			it_revive:          {x: 567, y: 536, item: "overworld" },
			it_hidden_fullheal: {x: 259, y: 298, item: "overworld" },
			it_xattack:         {x: 367, y: 279, item: "overworld" },
			it_antidote:        {x: 532, y: 135, item: "overworld" },
			it_hidden_potion:   {x: 618, y: 229, item: "overworld" },
			it_headbutt:        {x: 506, y: 229, item: "overworld" },
			it_ether:           {x: 656, y: 23,  item: "overworld" },
			it_hidden_ether:    {x: 421, y: 96,  item: "overworld" },
			it_sweet_scent:     {x: 200, y: 630, item: "overworld" },
			it_nugget:          {x: 35,  y: 302, item: "surf"      },
			it_hidden_candy:    {x: 31,  y: 372, item: "surf"      },
			it_hidden_daycare:  {x: 171, y: 149, item: "overworld" },
			it_softsand:        {x: 21,  y: 589, item: "surf"      },
        },
        /*r35_r36: {
			botgate:    {x: 158, y: 452,                         name: "Route 35"          },
			botpark:    {x: 58,  y: 294,                         name: "Route 35"          },
			toppark:    {x: 303, y: 54,                          name: "Route 36"          },
			topgate:    {x: 486, y: 142,                         name: "Route 36 (Violet)" },
			kenya_top:  {x: 469, y: 379, corridor: "kenya_bot",  name: "Gate R35 (Kenya)"  },
			kenya_bot:  {x: 474, y: 491, corridor: "kenya_top",  name: "Gate R35 (Kenya)"  },
			park_right: {x: 141, y: 68,  corridor: "park_bot",   name: "National Park"     },
			park_bot:   {x: 80,  y: 171, corridor: "park_right", name: "National Park"     },
        },*/

        r36t_r37: {
        		gate:    {x: 486, y: 142,                         name: "Route 36 (Violet)" },
        		
        		it_arthur: {x: 402, y: 30, item: "overworld" },
        		it_rocksmash: {x: 375, y: 71, item: "sudowoodo" }, //req: doing sudowoodo with squirtbottle
        		it_sunny: {x: 202, y: 119, item: "overworld" },
        		it_tree_bottom: {x: 159, y: 101, item: "overworld" },
        		it_tree_left: {x: 132, y: 68, item: "overworld" },
        		it_tree_right: {x: 192, y: 50, item: "overworld" },
        		it_hidden: {x: 50, y: 32, item: "overworld" },
        },
 

        r41: {
			topleft:  {x: 185, y: 207, name: "Route 41 (NW)" },
			topright: {x: 568, y: 239, name: "Route 41 (NE)" },
			botleft:  {x: 184, y: 528, name: "Route 41 (SW)" },
			botright: {x: 570, y: 657, name: "Route 41 (SE)" },
			
			it_hidden: {x: 137, y: 447, item: "surf" },

        },
        ragelake_r43: {
                       cut:      {x: 86, y: 62,                      name: "Lake of Rage"       },
			lake:     {x: 330, y: 182,                      name: "Lake of Rage"       },
			entrance: {x: 213, y: 404,                     name: "Route 43 (Lake)"    },
			gatebot:  {x: 246, y: 322,                     name: "Route 43 (Lake)"    },
			gatetop:  {x: 248, y: 250,                     name: "Route 43 (Lake)"    },
			tm_bot:   {x: 366, y: 349, corridor: "tm_top", name: "Gate R43 (Rockets)" },
			tm_top:   {x: 365, y: 242, corridor: "tm_bot", name: "Gate R43 (Rockets)" },
			
			it_gate: {x: 315, y: 297, item: "rockets" }, //req: beating rockets in mahagony hideout TODO
			it_ether: {x: 184, y: 269, item: "overworld" },
			it_tree: {x: 43, y: 392, item: "overworld" },
			it_gyarados: {x: 238, y: 172, item: "surf" },
			it_hidden_potion: {x: 291, y: 70, item: "overworld" },
			it_hidden_full_restore: {x: 69, y: 270, item: "overworld" },
			it_hidden_candy: {x: 32, y: 99, item: "cut" },
			it_Wesley: {x: 24, y: 54, item: "cut" },
			it_Elixer: {x: 103, y: 168, item: "cut" },
			it_detect: {x: 256, y: 20, item: "cut" },
			it_house: {x: 105, y: 29, item: "cut" },
			
        },
        r26_r27: {
			left:        {x: 57,  y: 59,                           name: "Route 27" },
			right:       {x: 216, y: 60,                           name: "Route 27" },
			house1:      {x: 169, y: 144,                          name: "Route 27" },
			house2:      {x: 356, y: 157,                          name: "Route 26" },
			house3:      {x: 485, y: 158,                          name: "Route 26" },
			reception:   {x: 336, y: 64,                           name: "Route 26" },
			falls_left:  {x: 241, y: 485, corridor: "falls_right", name: "Tohjo Falls" },
			falls_right: {x: 429, y: 485, corridor: "falls_left",  name: "Tohjo Falls" },
			
				it_tohjo_surf: {x: 84,  y: 350, item: "surf"      },
				it_sandstorm:  {x: 191, y: 104, item: "overworld" }, //this route is kinda weird, you actually need waterfall to come from left (in non-warp-rando) TODO
				it_surf:       {x: 153, y: 251, item: "surf"      },
				it_whirl:      {x: 315, y: 248, item: "whirl"     }, //req: actually surf AND whirl, I didnt include surf for whirl and waterfall
				it_tree:       {x: 451, y: 115, item: "overworld" },
				it_elixer:     {x: 475, y: 57,  item: "overworld" },
        },

        r2: {
			diglett: {x: 200, y: 76  },
			trade:   {x: 248, y: 210 },
			gatetop: {x: 266, y: 401 },
			gatebot: {x: 246, y: 513 },
			
			it_cut: {x: 298, y: 527, item: "cut" },
			it_diglett: {x: 308, y: 36, item: "overworld" },
			it_hidden_revive: {x: 164, y: 472, item: "overworld" },
			it_dire_hit: {x: 28, y: 454, item: "overworld" },
			it_hidden_full_restore: {x: 91, y: 421, item: "overworld" },
			it_hidden_ether: {x: 99, y: 359, item: "overworld" },
			it_hidden_full_heal: {x: 70, y: 234, item: "overworld" },
			it_potion: {x: 39, y: 334, item: "overworld" },
			it_tree: {x: 143, y: 212, item: "overworld" },
			it_house: {x: 272, y: 224, item: "overworld" },
        },
        r19_r20: {
			gate:   {x: 73, y: 30,  name: "Route 19" },
			blaine: {x: 69, y: 202, name: "Route 20" },
			
			it_gym_badge: {x: 95, y: 200, item: "overworld" }, //req: actually need surf to get to island, but I assume for item-tags that you have access to area  
        },
        /*r12: {
			fish: {x: 182, y: 191 },
        },*/

        r11_r12_r13: {
        		fish: {x: 112, y: 277 },
        		
        		it_hidden_surf: {x: 162, y: 122, item: "surf" },
        		it_cut: {x: 42, y: 419, item: "cut" },
        		it_surf_cut: {x: 36, y: 531, item: "surf_cut" },
        		it_hidden_maze: {x: 205, y: 556, item: "overworld" },
        		it_hidden_rock: {x: 80, y: 129, item: "overworld" },
        		it_tree: {x: 80, y: 76, item: "overworld" },
        		it_fisher: {x: 143, y: 254, item: "overworld" }
        },


        r15: {
			gate: {x: 76, y: 77 },
			
			it_cut: {x: 221, y: 84, item: "cut" },
        },
        cyclingroad: {
			top: {x: 125, y: 82,  corridor: "bot"},
			bot: {x: 235, y: 766, corridor: "top"},
			
			it_hidden_water: {x: 149, y: 282, item: "overworld" },
			it_hidden_elixer: {x: 136, y: 649, item: "overworld" },
        },
        r9_r10: {
			rocktunnel: {x: 136, y: 66,  name: "Route 9"          },
			center:     {x: 187, y: 141, name: "Route 9"          },
			powerplant: {x: 62,  y: 267, name: "Route 10 (Plant)" },
			
			it_powerplant: {x: 131, y: 270, item: "machine_part_quest" },
			it_hidden: {x: 41, y: 98, item: "overworld" },
        },
	r28: {
			gate:   {x: 456, y: 375 },
			house:  {x: 41, y: 391 },
			center: {x: 323, y: 157 },
			silver: {x: 244, y: 43  },
			
			it_house: {x: 69, y: 362, item: "overworld" },
			it_hidden_rock: {x: 313, y: 356, item: "cut" },
			it_hidden_surf: {x: 116, y: 239, item: "surf" },
	},

        // Important locations
        darkcave: {
			r31_left:  {x: 70,  y: 216                                                      },
			r31_top:   {x: 293, y: 32                                                       },
			r31_right: {x: 584, y: 497                                                      },
			r45_left:  {x: 58,  y: 628, corridor: "r45_right", name: "Dark Cave (Corridor)" },
			r45_right: {x: 365, y: 331, corridor: "r45_left",  name: "Dark Cave (Corridor)" },
			
			it_potion: {x: 140, y: 114, item: "overworld" },
			it_hidden_elixer: {x: 464, y: 38, item: "rocksmash" },
			it_hyper_potion: {x: 604, y: 131, item: "rocksmash" },
			it_full_heal: {x: 620, y: 336, item: "rocksmash" },
			it_dire_hit: {x: 523, y: 436, item: "rocksmash" },
			it_blackglasses: {x: 132, y: 288, item: "surf" },
			it_revive: {x: 358, y: 627, item: "surf" },
			it_snore: {x: 137, y: 590, item: "surf" },
			
        },
        sprouttower: {
        		floor1_top:       {x: 186, y: 310,  corridor: "floor1_top",       name: "SproutTower (1F)"      },
			floor1_bot:       {x: 241, y: 417, corridor: "floor1_bot",       name: "SproutTower (1F)"      },
			floor2_left:     {x: 60, y: 71,  corridor: "floor2_left",     name: "SproutTower (2F)"     },
			floor2_right:     {x: 233, y: 60, corridor: "floor2_right",     name: "SproutTower (2F))"     },
			floor1_right:    {x: 359, y: 296, corridor: "floor1_right",    name: "SproutTower (1F)"    },
			floor1_left:    {x: 119, y: 344, corridor: "floor1_left",    name: "SproutTower (1F))"    },
			floor2_top: {x: 9, y: 81, corridor: "floor2_top", name: "SproutTower (2F)" },
			floor2_bot: {x: 136, y: 209, corridor: "floor2_bot", name: "SproutTower (2F)" },
        		top_floor:  {x: 356, y: 233,                             name: "SproutTower (1F)"  }, //deadend

        		
        		
        		it_paralyze_heal: {x: 362, y: 375, item: "overworld" },
        		it_xaccuracy: {x: 40, y: 18, item: "overworld" },
        		it_potion: {x: 327, y: 229, item: "overworld" },
        		it_escape_rope: {x: 434, y: 35, item: "overworld" },
        		it_elder: {x: 352, y: 35, item: "overworld" },
        		
        },

        puzzlechambers: {
        		kabuto_top:     {x: 63, y: 213,  corridor: "kabuto_bot",     name: "Puzzle (Kabuto)"     },
			kabuto_bot:     {x: 64, y: 97, corridor: "kabuto_top",     name: "Puzzle (Kabuto)"     },
			aerodactyl_top: {x: 188, y: 211, corridor: "aerodactyl_bot", name: "Puzzle (Aerodactyl)" },
			aerodactyl_bot: {x: 188, y: 102, corridor: "aerodactyl_top", name: "Puzzle (Aerodactyl)" },
			omanyte_top:    {x: 313, y: 211, corridor: "omanyte_bot",    name: "Puzzle (Omanyte)"    },
			omanyte_bot:    {x: 312, y: 99, corridor: "omanyte_top",    name: "Puzzle (Omanyte)"    },
			hooh_top:       {x: 443, y: 212,  corridor: "hooh_bot",       name: "Puzzle (Ho-oh)"      },
			hooh_bot:       {x: 438, y: 96, corridor: "hooh_top",       name: "Puzzle (Ho-oh)"      },

			it_kabuto_NW: {x: 23, y: 8, item: "overworld" }, //do we need to mark these ? I wouldnt TODO
			it_kabuto_NE: {x: 69, y: 8, item: "overworld" },
			it_kabuto_SW: {x: 21, y: 41, item: "overworld" },
			it_kabuto_SE: {x: 68, y: 41, item: "overworld" },
			it_aerodactyl_NW: {x: 146, y: 10, item: "overworld" },
			it_aerodactyl_NE: {x: 194, y: 10, item: "overworld" },
			it_aerodactyl_SW: {x: 146, y: 41, item: "overworld" },
			it_aerodactyl_SE: {x: 195, y: 43, item: "overworld" },
			it_omanyte_NW: {x: 272, y: 10, item: "overworld" },
			it_omanyte_NE: {x: 320, y: 10, item: "overworld" },
			it_omanyte_SW: {x: 272, y: 43, item: "overworld" },
			it_omanyte_SE: {x: 320, y: 44, item: "overworld" },
			it_hooh_NW: {x: 398, y: 10, item: "overworld" },
			it_hooh_NE: {x: 446, y: 11, item: "overworld" },
			it_hooh_SW: {x: 398, y: 43, item: "overworld" },
			it_hooh_SE: {x: 446, y: 44, item: "overworld" },			

        },
        unioncave: {
			f1_top:      {x: 278, y: 36,  name: "Union Cave (1F)"  },
			f1_mid:      {x: 90,  y: 185, name: "Union Cave (1F)"  },
			f1_right:    {x: 279, y: 341, name: "Union Cave (1F)"  },
			f1_left:     {x: 68,  y: 352, name: "Union Cave (1F)"  },
			bf1_top:     {x: 408, y: 53,  name: "Union Cave (B1F)" },
			bf1_mid:     {x: 410, y: 185, name: "Union Cave (B1F)" },
			bf1_bot:     {x: 452, y: 324, name: "Union Cave (B1F)" },
			bf1_deadend: {x: 280, y: 469, name: "Union Cave (B1F)" }, //deadend
			
				it_xattack:      {x: 93,  y: 29,  item: "overworld" },
				it_great_ball:   {x: 252, y: 190, item: "overworld" },
				it_potion:       {x: 50,  y: 122, item: "overworld" },
				it_awakening:    {x: 175, y: 376, item: "overworld" },
				it_swift:        {x: 367, y: 269, item: "overworld" },
				it_xdefend:      {x: 586, y: 359, item: "overworld" },
				it_elixer:       {x: 434, y: 472, item: "surf"      },
				it_hyper_potion: {x: 391, y: 704, item: "surf"      },
        },
        goldenrodstore: {
			f1_door: {x: 132, y: 380, name: "Goldenrod Store" },
			f1_up:   {x: 246, y: 303, name: "Goldenrod Store" },
			f2_up:   {x: 199, y: 163, name: "Goldenrod Store" },
			f2_down: {x: 246, y: 165, name: "Goldenrod Store" },
			f3_up:   {x: 247, y: 28,  name: "Goldenrod Store" },
			f3_down: {x: 198, y: 28,  name: "Goldenrod Store" },
			f4_up:   {x: 464, y: 304, name: "Goldenrod Store" },
			f4_down: {x: 511, y: 305, name: "Goldenrod Store" },
			f5_up:   {x: 512, y: 170, name: "Goldenrod Store" },
			f5_down: {x: 465, y: 166, name: "Goldenrod Store" },
			f6_up:   {x: 479, y: 29,  name: "Goldenrod Store" },
			f6_down: {x: 513, y: 31,  name: "Goldenrod Store" },
			b1f:     {x: 254, y: 448, name: "Goldenrod Store" },
			
				it_return1:     {x: 365, y: 191, item: "overworld"    },
				it_return2:     {x: 385, y: 191, item: "overworld"    },
				it_basement_NW: {x: 56,  y: 441, item: "overworld"    },
				it_basement_NE: {x: 162, y: 442, item: "basement_key" }, //req: basement key to access basement //deadend //TODO
				it_basement_SW: {x: 349, y: 479, item: "overworld"    },
				it_basement_SE: {x: 431, y: 478, item: "overworld"    },
        },
        underground: {
			top:               {x: 51,  y: 44                                                   },
			basement:          {x: 139, y: 99                                                   },
			bot:               {x: 53,  y: 554                                                  },
			basement_rival:    {x: 408, y: 406, corridor: "basement_director", name: "Basement" },
			basement_director: {x: 456, y: 139, corridor: "basement_rival",    name: "Basement" },		
			
				it_coin_case:           {x: 71,  y: 412, item: "overworld"    },
				it_hidden_super_potion: {x: 78,  y: 301, item: "overworld"    },
				it_hidden_paralyz_heal: {x: 56,  y: 216, item: "overworld"    },
				it_hidden_antidote:     {x: 126, y: 137, item: "overworld"    },
				it_hidden_revive:       {x: 170, y: 486, item: "basement_key" }, //req: all items in the basement area need basement_key
				it_hidden_max_potion:   {x: 242, y: 462, item: "basement_key" },
				it_full_heal:           {x: 317, y: 462, item: "basement_key" },
				it_smoke_ball:          {x: 153, y: 536, item: "basement_key" },
				it_ultra_ball:          {x: 265, y: 101, item: "basement_key" },
				it_max_ether:           {x: 452, y: 308, item: "basement_key" },
				it_sleeptalk:           {x: 418, y: 223, item: "basement_key" },
				it_director:            {x: 361, y: 203, item: "radiotower"   }, //req: beat radio tower
        },
        radiotower: {
			entrance: {x: 48, y: 115}, //somewhat a deadend
			
				it_radiocard:     {x: 200, y: 76,  item: "overworld" },
				it_buena:         {x: 209, y: 220, item: "overworld" },
				it_fake_director: {x: 38,  y: 628, item: "overworld" }, //this and all below require 7+ badges TODO
				it_sunny_day:     {x: 204, y: 320, item: "card_key"  }, 
				it_pink_bow:      {x: 206, y: 503, item: "card_key"  },
				it_clear_bell:    {x: 243, y: 624, item: "card_key"  },
				it_ultra_ball:    {x: 155, y: 633, item: "card_key"  },
        },

        nationalpark_r35_r36b: {
			botgate:    {x: 158, y: 395,                         name: "Route 35"          },
			botpark:    {x: 63, y: 264,                         name: "Route 35"          },
			toppark:    {x: 408, y: 95,                          name: "Route 36"          },
			kenya_top:  {x: 407, y: 328, corridor: "kenya_bot",  name: "Gate R35 (Kenya)"  },
			kenya_bot:  {x: 409, y: 435, corridor: "kenya_top",  name: "Gate R35 (Kenya)"  },
			park_right: {x: 244, y: 116,  corridor: "park_bot",   name: "National Park"     },
			park_bot:   {x: 83, y: 127, corridor: "park_right", name: "National Park"     },
        		
				it_kenya: {x: 362, y: 389, item: "overworld" },
				it_tree_hell: {x: 61, y: 386, item: "surf" },
				it_hell: {x: 251, y: 357, item: "overworld" },
				it_tree_sudo: {x: 450, y: 42, item: "overworld" },
				it_quick_claw: {x: 158, y: 26, item: "overworld" },
				it_park_right: {x: 262, y: 16, item: "overworld" },
				it_park_left: {x: 16, y: 26, item: "overworld" },
				it_hidden_park: {x: 10, y: 110, item: "overworld" },
        },

        /*tintower: {
			f3_s:  {x: 130, y: 755, corridor: "f3_ne", name: "Tin Tower (3F)"     },
			f3_ne: {x: 230, y: 561, corridor: "f3_s",  name: "Tin Tower (3F)"     },
			f4_sw: {x: 270, y: 756,                    name: "Tin Tower (4F)"     },
			f4_nw: {x: 267, y: 597,                    name: "Tin Tower (4F)"     },
			f4_ne: {x: 460, y: 562,                    name: "Tin Tower (4F)"     },
			f4_se: {x: 460, y: 780,                    name: "Tin Tower (4F)"     },
			f5_sw: {x: 566, y: 740,                    name: "Tin Tower (5F)"     },
			f5_s:  {x: 671, y: 780,                    name: "Tin Tower (5F)"     },
			f5_se: {x: 706, y: 740,                    name: "Tin Tower (5F)"     },
			f5_nw: {x: 566, y: 596,                    name: "Tin Tower (5F)"     },
			f6_s:  {x: 152, y: 508, corridor: "f6_w",  name: "Tin Tower (6F)"     },
			f6_w:  {x: 70,  y: 412, corridor: "f6_s",  name: "Tin Tower (6F)"     },
			f7_s:  {x: 396, y: 508,                    name: "Tin Tower (7F)"     },
			f7_w:  {x: 285, y: 416,                    name: "Tin Tower (7F)"     },
			f7_n:  {x: 365, y: 318,                    name: "Tin Tower (7F)"     },
			f8_n:  {x: 655, y: 317, corridor: "f8_w",  name: "Tin Tower (8F)"     },
			f8_w:  {x: 706, y: 381, corridor: "f8_n",  name: "Tin Tower (8F)"     },
			f9_s1: {x: 332, y: 200,                    name: "Tin Tower (9F L)"   },
			f9_s2: {x: 365, y: 234,                    name: "Tin Tower (9F L)"   },
			f9_e:  {x: 494, y: 119,                    name: "Tin Tower (9F L)"   },
			f9_w:  {x: 269, y: 88,  corridor: "f9_n",  name: "Tin Tower (9F top)" },
			f9_n:  {x: 430, y: 57,  corridor: "f9_w",  name: "Tin Tower (9F top)" },
        },*/
        tintower_burnedtower: {
                       
                       f1:    {x: 650, y: 246,                    name: "Tin Tower (1F)"     }, //deadend ? (both entrances lead to same place in warp rando)
                       f3_s:  {x: 130, y: 755, corridor: "f3_ne", name: "Tin Tower (3F)"     },
			f3_ne: {x: 230, y: 561, corridor: "f3_s",  name: "Tin Tower (3F)"     },
			f4_sw: {x: 270, y: 756,                    name: "Tin Tower (4F)"     },
			f4_nw: {x: 267, y: 597,                    name: "Tin Tower (4F)"     },
			f4_ne: {x: 460, y: 562,                    name: "Tin Tower (4F)"     },
			f4_se: {x: 473, y: 761,                    name: "Tin Tower (4F)"     },
			f5_sw: {x: 539, y: 730,                    name: "Tin Tower (5F)"     },
			f5_s:  {x: 643, y: 763,                    name: "Tin Tower (5F)"     },
			f5_se: {x: 736, y: 763,                    name: "Tin Tower (5F)"     },
			f5_nw: {x: 566, y: 596,                    name: "Tin Tower (5F)"     },
			f6_s:  {x: 152, y: 508, corridor: "f6_w",  name: "Tin Tower (6F)"     },
			f6_w:  {x: 70,  y: 412, corridor: "f6_s",  name: "Tin Tower (6F)"     },
			f7_s:  {x: 396, y: 508,                    name: "Tin Tower (7F)"     },
			f7_w:  {x: 285, y: 416,                    name: "Tin Tower (7F)"     },
			f7_n:  {x: 365, y: 318,                    name: "Tin Tower (7F)"     },
			f8_n:  {x: 655, y: 317, corridor: "f8_w",  name: "Tin Tower (8F)"     },
			f8_w:  {x: 706, y: 381, corridor: "f8_n",  name: "Tin Tower (8F)"     },
			f9_s1: {x: 332, y: 200,                    name: "Tin Tower (9F L)"   },
			f9_s2: {x: 365, y: 234,                    name: "Tin Tower (9F L)"   },
			f9_e:  {x: 494, y: 119,                    name: "Tin Tower (9F L)"   },
			f9_w:  {x: 269, y: 88,  corridor: "f9_n",  name: "Tin Tower (9F top)" },
			f9_n:  {x: 430, y: 57,  corridor: "f9_w",  name: "Tin Tower (9F top)" },
			burned_tower:  {x: 132, y: 239,            name: "Burned Tower"       }, //deadend

			
			it_f1_sage:             {x: 617, y: 46,  item: "overworld" }, // TODO idk what he needs
			it_f3:                  {x: 27,  y: 723, item: "overworld" }, 
			it_f4_right:            {x: 500, y: 719, item: "overworld" },
			it_f4_middle:           {x: 458, y: 657, item: "overworld" },
			it_f4_hidden:           {x: 390, y: 623, item: "overworld" },
			it_f4_left:             {x: 267, y: 689, item: "overworld" },
			it_f5_candy:            {x: 660, y: 666, item: "overworld" },
			it_f5_hidden_left:      {x: 564, y: 768, item: "overworld" },
			it_f5_hidden_right:     {x: 725, y: 761, item: "overworld" },
			it_f6:                  {x: 127, y: 394, item: "overworld" },
			it_f7:                  {x: 468, y: 278, item: "overworld" },
			it_f8_bottom:           {x: 626, y: 471, item: "overworld" },
			it_f8_middle:           {x: 670, y: 384, item: "overworld" },
			it_f8_top:              {x: 567, y: 280, item: "overworld" },
			it_f9:                  {x: 355, y: 30,  item: "overworld" },
			it_burned_rocksmash:    {x: 216, y: 37,  item: "rocksmash" },
            it_burned_hidden_left:  {x: 123, y: 120, item: "overworld" },
            it_burned_hidden_right: {x: 204, y: 184, item: "overworld" },
            it_burned_b1f:          {x: 46,  y: 163, item: "strength"  },
        },
        
        mtmortar_r42: {
			r42_gate:               {x: 156, y: 610,                                name: "Route 42 (Left)"      },
			r42_cave1:              {x: 316, y: 552,                                name: "Route 42 (Left)"      },
			r42_cave2:              {x: 492, y: 557,                                name: "Route 42 (Middle)"    },
			r42_cave3:              {x: 735, y: 567,                                name: "Route42 (Mahogany)"   },
			mortarwater_door:       {x: 440, y: 488,                                name: "Mortar Entry (Water)" },
			mortarwater_stairs:     {x: 441, y: 413,                                name: "Mortar Entry (Water)" },
			mortarwater_waterfall:  {x: 445, y: 33,                                 name: "Mortar Entry (Water)" },
			mortar1item_door:       {x: 615, y: 308, corridor: "mortar1item_entry", name: "Mortar Entry (1item)" },
			mortar1item_entry:      {x: 740, y: 465, corridor: "mortar1item_door",  name: "Mortar Entry (1item)" },
			
			it_r42_left: {x: 231, y: 538, item: "overworld" },
			it_hidden_surf: {x: 400, y: 623, item: "surf" },
			it_r42_middle: {x: 596, y: 560, item: "overworld" },
			it_tree_left: {x: 486, y: 635, item: "surf_cut" }, 
			it_tree_middle: {x: 517, y: 633, item: "surf_cut" },
			it_tree_right: {x: 548, y: 633, item: "surf_cut" },
			it_mtmortar_hidden: {x: 545, y: 327, item: "overworld" },
			it_mtmortar_left: {x: 330, y: 187, item: "overworld" },
			it_mtmortar_right: {x: 646, y: 203, item: "overworld" },
			
        },
	mtmortarback: {
			topstairs:   {x: 137, y: 98,  name: "Mortar Back (Top)" },
			midstairs:   {x: 66,  y: 271, name: "Mortar Back (Top)" },
			leftstairs:  {x: 73,  y: 581, name: "Mortar Back (Bot)" },
			leftdoor:    {x: 167, y: 722, name: "Mortar Back (Bot)" },
			rightdoor:   {x: 455, y: 728, name: "Mortar Back (Bot)" },
			rightstairs: {x: 498, y: 647, name: "Mortar Back (Bot)" },
			
			it_escape_rope: {x: 549, y: 565, item: "overworld" },
			it_hyper_potion: {x: 170, y: 417, item: "overworld" },
			it_nugget: {x: 523, y: 291, item: "overworld" },
			it_max_potion: {x: 343, y: 281, item: "overworld" },
			it_ultra_ball: {x: 237, y: 257, item: "overworld" },
			it_iron: {x: 120, y: 214, item: "overworld" },
			it_max_revive: {x: 246, y: 118, item: "overworld" },
			it_hidden_max_repel: {x: 472, y: 136, item: "overworld" },
	},
	mtmortarf2: {
			door:   {x: 277, y: 503, corridor: "stairs" },
			stairs: {x: 93,  y: 45,  corridor: "door"   },
			
			it_rare_candy: {x: 58, y: 513, item: "surf" }, //kinda need waterfall to get into the room first TODO
			it_max_potion: {x: 453, y: 377, item: "surf" },
			it_defense_curl: {x: 328, y: 276, item: "surf" },
			it_hidden_full_restore: {x: 366, y: 133, item: "surf" },
			it_escape_rope: {x: 476, y: 79, item: "surf" },
			it_dragon_scale: {x: 283, y: 85, item: "surf" },
			it_elixer: {x: 176, y: 176, item: "surf" },

	},
        mtmortarb1f: {
			top:    {x: 72,  y: 44,  corridor: "bottom" },
			bottom: {x: 297, y: 493, corridor: "top"    },
			
			it_full_restore: {x: 538, y: 395, item: "surf" },
			it_hyper_potion: {x: 477, y: 180, item: "surf" },
			it_max_ether: {x: 509, y: 63, item: "surf" },
			it_pp_up: {x: 308, y: 406, item: "surf" },
			it_carbos: {x: 57, y: 267, item: "surf" },
			it_hidden_rock: {x: 80, y: 92, item: "overworld" },
			
		},
        lighthouse: {
			f2_entrance:  {x: 60,  y: 510,                         name: "Lighthouse (F2)"  },
			f2_hole:      {x: 272, y: 546,                         name: "Lighthouse (F2)"  },
			f2_stairs:    {x: 84,  y: 327,                         name: "Lighthouse (F2)"  },
			f3_entrance:  {x: 87,  y: 95,                          name: "Lighthouse (F3)"  },
			f3_hole:      {x: 271, y: 209,                         name: "Lighthouse (F3)"  },
			f3_stairs:    {x: 215, y: 23,                          name: "Lighthouse (F3)"  },
			f3_middle:    {x: 149, y: 119,                         name: "Lighthouse (F3)"  },
			f4_entrance:  {x: 360, y: 685,                         name: "Lighthouse (F4)"  },
			f4_hole1:     {x: 594, y: 776,                         name: "Lighthouse (F4)"  },
			f4_stairstop: {x: 580, y: 650,                         name: "Lighthouse (F4)"  },
			f4_stairsbot: {x: 454, y: 740,                         name: "Lighthouse (F4)"  },
			f4_stairsmid: {x: 454, y: 692,                         name: "Lighthouse (F4)"  },
			f4_hole2:     {x: 454, y: 613,                         name: "Lighthouse (F4)"  },
			f5_hole:      {x: 594, y: 450, corridor: "f5_stairs",  name: "Lighthouse (F5)"  },
			f5_stairs:    {x: 384, y: 342, corridor: "f5_hole",    name: "Lighthouse (F5)"  },
			f5_intop:     {x: 462, y: 414, corridor: "f5_inbot",   name: "Lighthouse (F5)"  },
			f5_inbot:     {x: 460, y: 537, corridor: "f5_intop",   name: "Lighthouse (F5)"  },
			top_stairs:   {x: 482, y: 221, corridor: "top_hole",   name: "Lighthouse (Top)" },
			top_hole:     {x: 592, y: 53,  corridor: "top_stairs", name: "Lighthouse (Top)" },
			
			it_f3: {x: 147, y: 19, item: "overworld" },
			it_f5_left: {x: 365, y: 483, item: "overworld" },
			it_f5_hidden: {x: 396, y: 483, item: "overworld" },
			it_f5_middle: {x: 416, y: 550, item: "overworld" },
			it_f5_right: {x: 578, y: 514, item: "overworld" },
			it_top: {x: 411, y: 66, item: "overworld" },
			
        },

        ssaqua: {
			top3:     {x: 216, y: 121 },
			top4:     {x: 280, y: 155 },
			bot1:     {x: 88,  y: 231 },
			bot2:     {x: 152, y: 263 },
			bot3:     {x: 216, y: 231 },
			
			it_ship: {x: 283, y: 229, item: "overworld" }, //req: need ss-ticket to even get on the ship TODO
        },
        whirlislands: {
			waterfall_top:           {x: 118, y: 37,                          name: "Whirl (Waterfall)"     },
			waterfall_cave:          {x: 70,  y: 358,                         name: "Whirl (Waterfall)"     },
			waterfall_bot:           {x: 151, y: 454,                         name: "Whirl (Waterfall)"     },
			water_items:             {x: 58, y: 179,                          name: "Whirl (Waterfall)"     },
			lake_left:               {x: 128, y: 555,                         name: "Whirl (Lake Left)"     },
			lake_right:              {x: 353, y: 555,                         name: "Whirl (Lake Right)"    },
			lake_entrance:           {x: 162, y: 692,                         name: "Whirl (Lake Left)"     },
			surf_left:               {x: 129, y: 748, corridor: "surf_right", name: "Whirl (Surf Corridor)" },
			surf_right:              {x: 355, y: 743, corridor: "surf_left",  name: "Whirl (Surf Corridor)" },
			ledges_entrance:         {x: 456, y: 724,                         name: "Whirl (Ledges)"        },
			ledges_bot:              {x: 615, y: 683,                         name: "Whirl (Ledges 🚫)"     },
			ledges_top:              {x: 681, y: 555,                         name: "Whirl (Ledges 🚫)"     },
			main_topright:           {x: 632, y: 100,                         name: "Whirl (Hub)"           },
			main_topleft:            {x: 249, y: 98,                          name: "Whirl (Hub)"           },
			main_mid:                {x: 376, y: 391,                         name: "Whirl (Hub)"           },
			main_cave:               {x: 442, y: 292,                         name: "Whirl (Hub)"           },
			main_botleft:            {x: 312, y: 452,                         name: "Whirl (Hub)"           },
			main_botmid:             {x: 536, y: 455,                         name: "Whirl (Hub)"           },
			main_botright:           {x: 664, y: 422,                         name: "Whirl (Hub)"           },
			
			it_ledge: {x: 561, y: 717, item: "overworld" },
			it_waterfall_full_restore: {x: 113, y: 173, item: "overworld" },
			it_waterfall_max_elixer: {x: 10, y: 189, item: "overworld" },
			it_waterfall_max_revive: {x: 28, y: 64, item: "overworld" },
			it_surf_ultra_ball: {x: 289, y: 566, item: "overworld" },
			it_hidden_rare_candy: {x: 633, y: 26, item: "overworld" },
			it_nugget: {x: 463, y: 105, item: "overworld" },
			it_full_restore: {x: 306, y: 189, item: "overworld" },
			it_carbos: {x: 226, y: 261, item: "overworld" },
			it_hidden_full_restore: {x: 222, y: 351, item: "overworld" },
			it_escape_rope: {x: 454, y: 402, item: "overworld" },
			it_hidden_ultra_ball: {x: 747, y: 298, item: "overworld" },
			it_calcium: {x: 716, y: 347, item: "overworld" },	
			
        },
	rockethideout: {
	
			shop_entrance: {x: 206, y: 128}, //kinda deadend
	               
	               it_bf1_hyper_potion: {x: 500, y: 165, item: "overworld" }, //need lake of rage gyarados to even access this area
	               it_bf1_scientist: {x: 332, y: 130, item: "overworld" },
	               it_bf1_nugget: {x: 245, y: 203, item: "overworld" },
	               it_bf1_hidden: {x: 62, y: 118, item: "overworld" },
	               it_bf2_lance: {x: 269, y: 406, item: "overworld" },
	               it_bf2_hidden: {x: 526, y: 442, item: "overworld" },
	               it_bf2_thief: {x: 119, y: 420, item: "overworld" },
	               it_bf3_full_heal: {x: 535, y: 708, item: "overworld" },
	               it_bf3_ice_heal: {x: 444, y: 562, item: "overworld" },
	               it_bf3_ultra_ball: {x: 375, y: 755, item: "overworld" },
	               it_bf3_xspecial: {x: 87, y: 832, item: "overworld" },
	               it_bf3_protein: {x: 25, y: 832, item: "overworld" },
	
	},
	icepath1: {
			hub_stairsleft:   {x: 64,  y: 621,                              name: "Ice Path (Holes)"      },
			hub_holebotleft:  {x: 92,  y: 565,                              name: "Ice Path (Holes)"      },
			hub_holebotright: {x: 199, y: 597,                              name: "Ice Path (Holes)"      },
			hub_holetopleft:  {x: 70,  y: 493,                              name: "Ice Path (Holes)"      },
			hub_holetopright: {x: 184, y: 408,                              name: "Ice Path (Holes)"      },
			hub_stairsup:     {x: 280, y: 442,                              name: "Ice Path (Holes)"      },
			entrance_door:    {x: 72,  y: 285, corridor: "entrance_stairs", name: "Ice Path (Waterfall)"  },
			entrance_stairs:  {x: 553, y: 76,  corridor: "entrance_door",   name: "Ice Path (Waterfall)"  },
			exit_stairs:      {x: 554, y: 217, corridor: "exit_door",       name: "Ice Path (Exit)"       },
			exit_door:        {x: 545, y: 410, corridor: "exit_stairs",     name: "Ice Path (Exit)"       },
			b1f_right:        {x: 484, y: 556, corridor: "b1f_left",        name: "Ice Path (B1F)"        },
			b1f_left:         {x: 387, y: 520, corridor: "b1f_right",       name: "Ice Path (B1F)"        },
			
			it_waterfall: {x: 452, y: 107, item: "overworld" },
			it_exit_protein: {x: 571, y: 134, item: "strength" },
			it_exit_pp_up: {x: 470, y: 356, item: "strength" },
			it_hidden_max_potion: {x: 603, y: 569, item: "strength" },
			it_iron: {x: 411, y: 644, item: "strength" },

	},
	icepath2: {
			fall_mid:  {x: 151, y: 162, corridor: "fall_up",   name: "Ice Path (Fall)" },
			fall_up:   {x: 282, y: 50,  corridor: "fall_mid",  name: "Ice Path (Fall)" },
			b2f_top:   {x: 381, y: 78,  corridor: "b2f_bot",   name: "Ice Path (B2F)"  },
			b2f_bot:   {x: 378, y: 226, corridor: "b2f_top",   name: "Ice Path (B2F)"  },
			b3f_right: {x: 332, y: 349, corridor: "b3f_left",  name: "Ice Path (B3F)"  },
			b3f_left:  {x: 139, y: 353, corridor: "b3f_right", name: "Ice Path (B3F)"  },
			
			it_full_heal: {x: 134, y: 128, item: "strength" },
			it_max_potion: {x: 26, y: 36, item: "strength" },
			it_hidden_carbos: {x: 11, y: 257, item: "strength" },
			it_rest: {x: 458, y: 236, item: "strength" },
			it_hidden_ice_heal: {x: 383, y: 168, item: "strength" },
			it_rocksmash_nevermeltice: {x: 192, y: 407, item: "strength" },
			
	},
	dragonsden: {		
			entrance:         {x: 344, y: 61,   name: "Dragon's Den" },
			shrine:           {x: 295, y: 468 , name: "Dragon's Den" },

			it_top:           {x: 470, y: 67,  item: "overworld" }, //need to beat claire first to access this area
			it_left:          {x: 87,  y: 305, item: "surf" },
			it_right:         {x: 568, y: 281, item: "overworld" },
			it_hidden_left:   {x: 345, y: 257, item: "whirl" },
			it_hidden_right:  {x: 504, y: 220, item: "whirl" },
			it_hidden_bottom: {x: 535, y: 447, item: "whirl" },
			it_gym_badge:     {x: 336, y: 446, item: "whirl" }, //blackthorn gym badge and tm
			it_gym_tm:        {x: 233, y: 488, item: "whirl" },	
	},
  victoryroad_reception: {
			reception_bot:   {x: 484, y: 580,                         name: "League Reception"  },
			reception_right: {x: 580, y: 420,                         name: "League Reception"  },
			reception_top:   {x: 484, y: 364,                         name: "League Reception"  },
			roadf1_bot:      {x: 151, y: 574, corridor: "roadf1_top", name: "Victory Road (1F)" },
			roadf1_top:      {x: 67,  y: 332, corridor: "roadf1_bot", name: "Victory Road (1F)" },
			roadf2_left:     {x: 25,  y: 193,                         name: "Victory Road (2F)" },
			roadf2_mid:      {x: 215, y: 70,                          name: "Victory Road (2F)" },
			roadf2_right:    {x: 282, y: 178,                         name: "Victory Road (2F)" },
			roadf3_hole:     {x: 346, y: 89,                          name: "Victory Road (3F)" },
			roadf3_mid:      {x: 539, y: 172,                         name: "Victory Road (3F)" },
			roadf3_bot:      {x: 579, y: 280,                         name: "Victory Road (3F)" },
			roadf3_top:      {x: 541, y: 49,                          name: "Victory Road (3F)" },
			
			it_f1_hidden_rock: {x: 54, y: 535, item: "overworld" },
			it_f1_left: {x: 196, y: 306, item: "overworld" },
			it_f1_right: {x: 246, y: 307, item: "overworld" },
			it_f2_bottom: {x: 139, y: 210, item: "overworld" },
			it_f2_right: {x: 294, y: 45, item: "overworld" },
			it_f2_top: {x: 72, y: 33, item: "overworld" },
			it_f2_hidden: {x: 72, y: 84, item: "overworld" },
			
        },

        mtmoon_r3_r4: {
			r3:                 {x: 104, y: 299, name: "Route 3"           },
			r4:                 {x: 191, y: 364, name: "Route 4"           },
			mooncave_stairstop: {x: 186, y: 11,  name: "Mt. Moon (Cave)"   },
			mooncave_doortop:   {x: 50,  y: 26,  name: "Mt. Moon (Cave)"   },
			mooncave_stairsbot: {x: 220, y: 140, name: "Mt. Moon (Cave)"   },
			mooncave_doorbot:   {x: 218, y: 222, name: "Mt. Moon (Cave)"   },
			moonsquare_house:   {x: 282, y: 66,  name: "Mt. Moon (Square)" },
			moonsquare_top:     {x: 396, y: 44,  name: "Mt. Moon (Square)" },
			moonsquare_bot:     {x: 423, y: 147, name: "Mt. Moon (Square)" },
			
			it_rocksmash_clefairy: {x: 296, y: 221, item: "rocksmash" },
			it_r4_hp_up: {x: 468, y: 350, item: "overworld" },
			it_r4_hidden: {x: 316, y: 339, item: "overworld" },
			
        },
	mtsilver: {
			f1_entrance: {x: 227, y: 50,  corridor: "f1_door",     name: "Mt. Silver (F1)" },
			f1_door:     {x: 126, y: 500, corridor: "f1_entrance", name: "Mt. Silver (F1)" },
			f2_entrance: {x: 547, y: 469,                          name: "Mt. Silver (F2)" },
			f2_left:     {x: 485, y: 355,                          name: "Mt. Silver (F2)" },
			f2_right:    {x: 646, y: 61,                           name: "Mt. Silver (F2)" },
			f2_exit:     {x: 454, y: 39,                           name: "Mt. Silver (F2)" },
			
			it_f1_protein: {x: 205, y: 454, item: "overworld" },
			it_f1_escape_rope: {x: 42, y: 466, item: "overworld" },
			it_f1_ultra_ball: {x: 118, y: 279, item: "overworld" },
			it_f1_hidden_dire_hit: {x: 220, y: 361, item: "overworld" },
			it_f1_hidden_ultra_ball: {x: 238, y: 184, item: "overworld" },
			it_f1_max_elixer: {x: 67, y: 134, item: "overworld" },
			it_f2_hidden_max_potion: {x: 483, y: 490, item: "overworld" },
			it_f2_ultra_ball: {x: 629, y: 391, item: "overworld" },
			it_f2_pp_up: {x: 364, y: 310, item: "waterfall" },
			it_f2_calcium: {x: 640, y: 148, item: "waterfall" },
			it_f2_inner_left: {x: 464, y: 321, item: "waterfall" },
			it_f2_inner_right: {x: 622, y: 34, item: "waterfall" },		

			
        },
	celadonstore: {
                       f1_door: {x: 132, y: 380, name: "Celadon Store" },
			f1_up:   {x: 252, y: 270, name: "Celadon Store" },
			f2_up:   {x: 252, y: 134, name: "Celadon Store" },
			f2_down: {x: 204, y: 176, name: "Celadon Store" },
			f3_up:   {x: 252, y: -5,  name: "Celadon Store" },
			f3_down: {x: 204, y: 40,  name: "Celadon Store" },
			f4_up:   {x: 520, y: 270, name: "Celadon Store" },
			f4_down: {x: 470, y: 316, name: "Celadon Store" },
			f5_up:   {x: 520, y: 134, name: "Celadon Store" },
			f5_down: {x: 470, y: 176, name: "Celadon Store" },
			f6_up:   {x: 520, y: -5,  name: "Celadon Store" },
        },
	rocktunnel: {
			f1_entry_door:   {x: 231, y: 23,  corridor: "f1_entry_stairs", name: "Rock Tunnel (Entry)"  },
			f1_entry_stairs: {x: 423, y: 77,  corridor: "f1_entry_door",   name: "Rock Tunnel (Entry)"  },
			f1_exit_stairs:  {x: 423, y: 232, corridor: "f1_exit_door",    name: "Rock Tunnel (Exit)"   },
			f1_exit_door:    {x: 167, y: 378, corridor: "f1_exit_stairs",  name: "Rock Tunnel (Exit)"   },
			bf1_3item_left:  {x: 39,  y: 488, corridor: "bf1_3item_right", name: "Rock Tunnel (3items)" },
			bf1_3item_right: {x: 261, y: 523, corridor: "bf1_3item_left",  name: "Rock Tunnel (3items)" },
			bf1_1item_top:   {x: 355, y: 421, corridor: "bf1_1item_bot",   name: "Rock Tunnel (1item)"  },
			bf1_1item_bot:   {x: 392, y: 746, corridor: "bf1_1item_top",   name: "Rock Tunnel (1item)"  },
			
			it_f1_left: {x: 75, y: 271, item: "overworld" },
			it_f1_middle: {x: 172, y: 226, item: "overworld" },
			it_f1_hidden_bottom: {x: 299, y: 231, item: "overworld" },
			it_f1_hidden_top: {x: 350, y: 52, item: "overworld" },
			it_bf1_hidden: {x: 55, y: 603, item: "overworld" },
			it_bf1_top: {x: 214, y: 451, item: "overworld" },
			it_bf1_middle: {x: 107, y: 662, item: "overworld" },
			it_bf1_bottom: {x: 125, y: 795, item: "overworld" },
			
	},
	diglettcave_underpass: { 
        		underpass_bot: {x: 261, y: 472, corridor: "underpass_bot", name: "Kanto Underpass" }, 
			underpass_top:    {x: 263, y: 38, corridor: "underpass_top", name: "Kanto Underpass" },
			diglett_top: {x: 74, y: 54, corridor: "diglett_top", name: "Diglett's Cave"       }, 
			diglett_bot: {x: 92, y: 486, corridor: "diglett_bot", name: "Diglett's Cave"       },
			
        		        		
        		it_hidden_rock: {x: 125, y: 184, item: "overworld" }, //need to move snorlax //TODO
        		it_hidden_underground_top: {x: 214, y: 135, item: "overworld" }, //need to finish machine part quest to access this //TODO
        		it_hidden_underground_bottom: {x: 238, y: 385, item: "overworld" },
        },
        
        shop_johto: { 
			it_cherrygrove1: {x: 230, y: 112, item: "overworld" },
			it_cherrygrove2: {x: 260, y: 112, item: "overworld" },
			it_cherrygrove3: {x: 290, y: 112, item: "overworld" },
			it_cherrygrove4: {x: 320, y: 112, item: "overworld" },
			it_cherrygrove5: {x: 350, y: 112, item: "overworld" },

			it_violet1: {x: 230, y: 158, item: "overworld" },
			it_violet2: {x: 260, y: 158, item: "overworld" },
			it_violet3: {x: 290, y: 158, item: "overworld" },
			it_violet4: {x: 320, y: 158, item: "overworld" },
			it_violet5: {x: 350, y: 158, item: "overworld" },

			it_azalea1: {x: 230, y: 204, item: "overworld" },
			it_azalea2: {x: 260, y: 204, item: "overworld" },
			it_azalea3: {x: 290, y: 204, item: "overworld" },
			it_azalea4: {x: 320, y: 204, item: "overworld" },
			it_azalea5: {x: 350, y: 204, item: "overworld" },

			it_ecruteak1: {x: 230, y: 250, item: "overworld" },
			it_ecruteak2: {x: 260, y: 250, item: "overworld" },
			it_ecruteak3: {x: 290, y: 250, item: "overworld" },
			it_ecruteak4: {x: 320, y: 250, item: "overworld" },
			it_ecruteak5: {x: 350, y: 250, item: "overworld" },

			it_olivine1: {x: 230, y: 296, item: "overworld" },
			it_olivine2: {x: 260, y: 296, item: "overworld" },
			it_olivine3: {x: 290, y: 296, item: "overworld" },
			it_olivine4: {x: 320, y: 296, item: "overworld" },
			it_olivine5: {x: 350, y: 296, item: "overworld" },

			it_cianwood1: {x: 230, y: 342, item: "overworld" },
			it_cianwood2: {x: 260, y: 342, item: "overworld" },
			it_cianwood3: {x: 290, y: 342, item: "overworld" },
			it_cianwood4: {x: 320, y: 342, item: "overworld" },
			it_cianwood5: {x: 350, y: 342, item: "overworld" },

			it_mahagony_rocket1: {x: 230, y: 388, item: "overworld" },
			it_mahagony_rocket2: {x: 260, y: 388, item: "overworld" },
			it_mahagony_rocket3: {x: 290, y: 388, item: "overworld" },
			it_mahagony_rocket4: {x: 320, y: 388, item: "overworld" },
			it_mahagony_rocket5: {x: 350, y: 388, item: "overworld" },

			it_mahagony1: {x: 230, y: 434, item: "overworld" },
			it_mahagony2: {x: 260, y: 434, item: "overworld" },
			it_mahagony3: {x: 290, y: 434, item: "overworld" },
			it_mahagony4: {x: 320, y: 434, item: "overworld" },
			it_mahagony5: {x: 350, y: 434, item: "overworld" },

			it_blackthorn1: {x: 230, y: 480, item: "overworld" },
			it_blackthorn2: {x: 260, y: 480, item: "overworld" },
			it_blackthorn3: {x: 290, y: 480, item: "overworld" },
			it_blackthorn4: {x: 320, y: 480, item: "overworld" },
			it_blackthorn5: {x: 350, y: 480, item: "overworld" },
			
			it_gr_ug_top1: {x: 610, y: 158, item: "overworld" },
			it_gr_ug_top2: {x: 640, y: 158, item: "overworld" },
			it_gr_ug_top3: {x: 670, y: 158, item: "overworld" },
			it_gr_ug_top4: {x: 700, y: 158, item: "overworld" },
			it_gr_ug_top5: {x: 730, y: 158, item: "overworld" },
			
			it_gr_ug_bottom1: {x: 610, y: 204, item: "overworld" },
			it_gr_ug_bottom2: {x: 640, y: 204, item: "overworld" },
			it_gr_ug_bottom3: {x: 670, y: 204, item: "overworld" },
			it_gr_ug_bottom4: {x: 700, y: 204, item: "overworld" },
			it_gr_ug_bottom5: {x: 730, y: 204, item: "overworld" },
			
			it_gr_f2_top1: {x: 610, y: 250, item: "overworld" },
			it_gr_f2_top2: {x: 640, y: 250, item: "overworld" },
			it_gr_f2_top3: {x: 670, y: 250, item: "overworld" },
			it_gr_f2_top4: {x: 700, y: 250, item: "overworld" },
			it_gr_f2_top5: {x: 730, y: 250, item: "overworld" },
			
			it_gr_f2_bottom1: {x: 610, y: 296, item: "overworld" },
			it_gr_f2_bottom2: {x: 640, y: 296, item: "overworld" },
			it_gr_f2_bottom3: {x: 670, y: 296, item: "overworld" },
			it_gr_f2_bottom4: {x: 700, y: 296, item: "overworld" },
			it_gr_f2_bottom5: {x: 730, y: 296, item: "overworld" },
			
			it_gr_f3_1: {x: 610, y: 342, item: "overworld" },
			it_gr_f3_2: {x: 640, y: 342, item: "overworld" },
			it_gr_f3_3: {x: 670, y: 342, item: "overworld" },
			it_gr_f3_4: {x: 700, y: 342, item: "overworld" },
			it_gr_f3_5: {x: 730, y: 342, item: "overworld" },
			
			it_gr_f4_1: {x: 610, y: 388, item: "overworld" },
			it_gr_f4_2: {x: 640, y: 388, item: "overworld" },
			it_gr_f4_3: {x: 670, y: 388, item: "overworld" },
			it_gr_f4_4: {x: 700, y: 388, item: "overworld" },
			it_gr_f4_5: {x: 730, y: 388, item: "overworld" },
			
			it_gr_f5_1: {x: 610, y: 434, item: "overworld" },
			it_gr_f5_2: {x: 640, y: 434, item: "overworld" },
			it_gr_f5_3: {x: 670, y: 434, item: "overworld" },
			it_gr_f5_4: {x: 700, y: 434, item: "overworld" },
			it_gr_f5_5: {x: 730, y: 434, item: "overworld" },

        
        },
        
        shop_kanto: {
        
        		it_viridian1: {x: 230, y: 112, item: "overworld" },
			it_viridian2: {x: 260, y: 112, item: "overworld" },
			it_viridian3: {x: 290, y: 112, item: "overworld" },
			it_viridian4: {x: 320, y: 112, item: "overworld" },
			it_viridian5: {x: 350, y: 112, item: "overworld" },

			it_mtmoon1: {x: 230, y: 158, item: "overworld" },
			it_mtmoon2: {x: 260, y: 158, item: "overworld" },
			it_mtmoon3: {x: 290, y: 158, item: "overworld" },
			it_mtmoon4: {x: 320, y: 158, item: "overworld" },
			it_mtmoon5: {x: 350, y: 158, item: "overworld" },

			it_pewter1: {x: 230, y: 204, item: "overworld" },
			it_pewter2: {x: 260, y: 204, item: "overworld" },
			it_pewter3: {x: 290, y: 204, item: "overworld" },
			it_pewter4: {x: 320, y: 204, item: "overworld" },
			it_pewter5: {x: 350, y: 204, item: "overworld" },

			it_cerulean1: {x: 230, y: 250, item: "overworld" },
			it_cerulean2: {x: 260, y: 250, item: "overworld" },
			it_cerulean3: {x: 290, y: 250, item: "overworld" },
			it_cerulean4: {x: 320, y: 250, item: "overworld" },
			it_cerulean5: {x: 350, y: 250, item: "overworld" },

			it_vermilion1: {x: 230, y: 296, item: "overworld" },
			it_vermilion2: {x: 260, y: 296, item: "overworld" },
			it_vermilion3: {x: 290, y: 296, item: "overworld" },
			it_vermilion4: {x: 320, y: 296, item: "overworld" },
			it_vermilion5: {x: 350, y: 296, item: "overworld" },

			it_lavender1: {x: 230, y: 342, item: "overworld" },
			it_lavender2: {x: 260, y: 342, item: "overworld" },
			it_lavender3: {x: 290, y: 342, item: "overworld" },
			it_lavender4: {x: 320, y: 342, item: "overworld" },
			it_lavender5: {x: 350, y: 342, item: "overworld" },

			it_fuchsia1: {x: 230, y: 388, item: "overworld" },
			it_fuchsia2: {x: 260, y: 388, item: "overworld" },
			it_fuchsia3: {x: 290, y: 388, item: "overworld" },
			it_fuchsia4: {x: 320, y: 388, item: "overworld" },
			it_fuchsia5: {x: 350, y: 388, item: "overworld" },

			it_saffron1: {x: 230, y: 434, item: "overworld" },
			it_saffron2: {x: 260, y: 434, item: "overworld" },
			it_saffron3: {x: 290, y: 434, item: "overworld" },
			it_saffron4: {x: 320, y: 434, item: "overworld" },
			it_saffron5: {x: 350, y: 434, item: "overworld" },

			it_indigo_plateau1: {x: 230, y: 480, item: "overworld" },
			it_indigo_plateau2: {x: 260, y: 480, item: "overworld" },
			it_indigo_plateau3: {x: 290, y: 480, item: "overworld" },
			it_indigo_plateau4: {x: 320, y: 480, item: "overworld" },
			it_indigo_plateau5: {x: 350, y: 480, item: "overworld" },
			
			it_c_f2_top1: {x: 610, y: 158, item: "overworld" },
			it_c_f2_top2: {x: 640, y: 158, item: "overworld" },
			it_c_f2_top3: {x: 670, y: 158, item: "overworld" },
			it_c_f2_top4: {x: 700, y: 158, item: "overworld" },
			it_c_f2_top5: {x: 730, y: 158, item: "overworld" },
			
			it_c_f2_bottom1: {x: 610, y: 204, item: "overworld" },
			it_c_f2_bottom2: {x: 640, y: 204, item: "overworld" },
			it_c_f2_bottom3: {x: 670, y: 204, item: "overworld" },
			it_c_f2_bottom4: {x: 700, y: 204, item: "overworld" },
			it_c_f2_bottom5: {x: 730, y: 204, item: "overworld" },
			
			it_c_f3_1: {x: 610, y: 250, item: "overworld" },
			it_c_f3_2: {x: 640, y: 250, item: "overworld" },
			it_c_f3_3: {x: 670, y: 250, item: "overworld" },
			it_c_f3_4: {x: 700, y: 250, item: "overworld" },
			it_c_f3_5: {x: 730, y: 250, item: "overworld" },
			
			it_c_f4_1: {x: 610, y: 296, item: "overworld" },
			it_c_f4_2: {x: 640, y: 296, item: "overworld" },
			it_c_f4_3: {x: 670, y: 296, item: "overworld" },
			it_c_f4_4: {x: 700, y: 296, item: "overworld" },
			it_c_f4_5: {x: 730, y: 296, item: "overworld" },
			
			it_c_f5_left1: {x: 610, y: 342, item: "overworld" },
			it_c_f5_left2: {x: 640, y: 342, item: "overworld" },
			it_c_f5_left3: {x: 670, y: 342, item: "overworld" },
			it_c_f5_left4: {x: 700, y: 342, item: "overworld" },
			it_c_f5_left5: {x: 730, y: 342, item: "overworld" },
			
			it_c_f5_right1: {x: 610, y: 388, item: "overworld" },
			it_c_f5_right2: {x: 640, y: 388, item: "overworld" },
			it_c_f5_right3: {x: 670, y: 388, item: "overworld" },
			it_c_f5_right4: {x: 700, y: 388, item: "overworld" },
			it_c_f5_right5: {x: 730, y: 388, item: "overworld" },

        
        },

    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["corridor",    0], ["dead_end", null], ["event",      0], ["center",      0], ["mart",         0], ["one_way",  null]],
        [["item_overworld", 0], ["item_checked", null], ["item_event", 0], ["item_surf", 0], ["item_cut", 0], ["item_strength", 0], ["item_rocksmash", 0], ["item_whirl", 0],["item_basement_key", 0]],
        //[],
        [["normal",      0], ["fighting",    0], ["flying",      0], ["poison",     0], ["ground",      0], ["rock",         0], ["bug",         0], ["ghost",       0], ["fairy",     0]],
        [["steel",       0], ["fire",        0], ["water",       0], ["grass",      0], ["electric",    0], ["psychic",      0], ["ice",         0], ["dragon",      0], ["dark",      0]],
        [["1",           0], ["2",           0], ["3",           0], ["4",          0], ["5",           0], ["6",            0], ["7",           0], ["8",           0]],
		[["team_rocket", 0], ["c_rival",     0], ["c_gyarados",  0], ["",   undefined], ["c_legendary", 0], ["burned_tower", 0], ["c_kurt",      0], ["c_unown",     0], ["c_train",   0], ["dratini", 0]],
        [["c_bush",      0], ["c_surf",      0], ["c_boulder",   0], ["c_darkness", 0], ["c_whirlpool", 0], ["c_waterfall",  0], ["c_rock",      0], ["bike_needed", 0], ["c_trainer", 0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",    0], ["plain_badge",    0], ["fog_badge",     0], ["storm_badge",   0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge", 0], ["thunder_badge",  0], ["rainbow_badge", 0], ["soul_badge",    0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["c_will",        0], ["c_koga",        0], ["c_bruno",        0], ["c_karen",       0], ["c_lance",       0], ["",      undefined], ["c_oak",         0], ["c_red",        0]],
        [["hm_cut",        0], ["hm_fly",        0], ["hm_surf",        0], ["hm_strength",   0], ["hm_flash",      0], ["hm_whirlpool",  0], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["pokegear",      0], ["radio_card",    0], ["expansion_card", 0], ["squirt_bottle", 0], ["secret_potion", 0], ["card_key",      0], ["ss_ticket",     0], ["pass",         0]],
        [["machine_part",  0], ["clear_bell",    0], ["rainbow_wing",   0], ["silver_wing",   0], ["basement_key",  0], ["lost_item",     0], ["red_scale",     0], ["mystery_egg",  0]],
        [["pokedex",       0], ["bike",          0], ["blue_card",      0], ["coin_case",     0], ["itemfinder",    0], ["old_rod",       0], ["good_rod",      0], ["super_rod",    0]],
    ],
	modifiers: [
		[["#ce4069", 0], ["#ff9c54", 0], ["#f3d23b", 0], ["#743683", 0], ["#654321", 0], ["#014f01", 0]],
		[["#4d90d5", 0], ["#74cec0", 0], ["#90c12c", 0], ["#ec8fe6", 0], ["#5a5366", 0], ["#00146b", 0]],
	],
};
