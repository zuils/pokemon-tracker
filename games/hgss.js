var hgss = {
	debug: false,
    name: "hgss",
    folder: "hgss",
    start_location: "newbark",
    font: "NDS_Font",
    font_size: "38px",

    // Config texts
	config_name: "HeatGold/SoulSilver",
	config_randomizer_author: "Adrienn Tindall",
	config_randomizer_link: "https://github.com/adrienntindall/hgss-map-randomizer/releases",
	config_tracker_author: "Seb Hammes", 
	config_tracker_link: "https://twitter.com/RealSeb95",

	// Tracker information
    locations: {
        // Cities
        newbark:       {x: 152, y: 110, w: 8,  h: 8,  name: "New Bark Town\nRoute 29"   },
        cherrygrove:   {x: 114, y: 110, w: 8,  h: 8,  name: "Cherrygrove City" 			},
        violet:        {x: 98,  y: 61,  w: 8,  h: 8,  name: "Violet City"       		},
        azalea:        {x: 79,  y: 130, w: 8,  h: 8,  name: "Azalea Town\nRoute 33"     },
        goldenrod:     {x: 57,  y: 89,  w: 15, h: 15, name: "Goldenrod City"    		},
        ecruteak:      {x: 74,  y: 41,  w: 15, h: 15, name: "Ecruteak City"    			},
        olivine:       {x: 26,  y: 54,  w: 15, h: 8,  name: "Olivine City"     			},
        cianwood:      {x: 16,  y: 97,  w: 8,  h: 15, name: "Cianwood City"   			},
        mahogany:      {x: 117, y: 41,  w: 8,  h: 8,  name: "Mahogany Town"   			},
        blackthorn:    {x: 145, y: 41,  w: 8,  h: 8,  name: "Blackthorn City"  			},
		
        indigoplateau: {x: 191, y: 40,  w: 8,  h: 8,  name: "Indigo Plateau"			},

        pallet:     {x: 215, y: 105, w: 8,  h: 8,  name: "Pallet Town"     },
        viridian:   {x: 215, y: 78,  w: 8,  h: 15, name: "Viridian City"   },
        pewter:     {x: 215, y: 49,  w: 15, h: 15, name: "Pewter City"     },
        cerulean:   {x: 295, y: 41,  w: 8,  h: 8,  name: "Cerulean City"   },
        vermilion:  {x: 295, y: 89,  w: 8,  h: 8,  name: "Vermilion City"  },
        lavender:   {x: 327, y: 65,  w: 8,  h: 8,  name: "Lavender Town"   },
        celadon:    {x: 271, y: 65,  w: 8,  h: 8,  name: "Celadon City"    },
        saffron:    {x: 291, y: 63,  w: 15, h: 15, name: "Saffron City"    },
        fuchsia:    {x: 279, y: 113, w: 8,  h: 8,  name: "Fuchsia City"    },
        cinnabar:   {x: 215, y: 129, w: 8,  h: 8,  name: "Cinnabar Island" },

        // Routes
        r30_r31:      	{x: 114, y: 78 , w: 8, h: 16, name: "Route 30\nRoute 31"     			},
		r32:			{x: 98,  y: 95 , w: 8, h: 16, name: "Route 32"     						},
		ilex_r34:		{x: 61,  y: 130, w: 8, h: 8,  name: "Ilex Forest\nRoute 34" 			},
		r35_athlon_r36:	{x: 61,  y: 61 , w: 8, h: 8,  name: "Route 35 / Route 36\nPokeathlon" 	},
		r38_farm: 		{x: 34,  y: 41 , w: 8, h: 8,  name: "Route 38\nMoomoo Farm" 			},
		r40_battle: 	{x: 17,  y: 54,  w: 8, h: 8,  name: "Route 40\nBattle Frontier" 		},
		r41:			{x: 26,  y: 97,  w: 8, h: 8,  name: "Route 41" 							},
		r42:			{x: 98,  y: 41,  w: 8,  h: 8, name: "Route 42"							},
		ragelake_r43: 	{x: 117, y: 8,   w: 8, h: 8,  name: "Route 43\nLake of Rage" 			},
		r44:			{x: 136, y: 41,  w: 8, h: 8,  name: "Route 44" 							},
		r45_r46:		{x: 145, y: 62,  w: 8, h: 16, name: "Route 45\nRoute 46" 				},
		r47_safari:		{x: 5  , y: 94,  w: 8, h: 8,  name: "Route 47\nSafari Zone" 			},
		
		r26_tohjo_r27:	{x: 169, y: 110, w: 8, h: 8,  name: "Route 26 / Route 27\nTohjo Falls" 	},
				
		r1:				{x: 215, y: 95,  w: 8, h: 8,  name: "Route 1" 							},
		r2_viridian:	{x: 215, y: 65,  w: 8, h: 8,  name: "Route 2\nViridian Forest" 			},
		r5:				{x: 295, y: 54,  w: 8, h: 8,  name: "Route 5" 							},
		r6:				{x: 295, y: 79,  w: 8, h: 8,  name: "Route 6" 							},
		r7:				{x: 282, y: 65,  w: 8, h: 8,  name: "Route 7" 							},
		r8:				{x: 307, y: 65,  w: 8, h: 8,  name: "Route 8" 							},
		r10_power:		{x: 327, y: 50,  w: 8, h: 8,  name: "Route 10\nPower Plant" 			},
		r11_r12_r15:	{x: 327, y: 89,  w: 8, h: 16, name: "Route 11 / Route 12\nRoute 15" 	},
		r16_r18:		{x: 239, y: 85,  w: 8, h: 16, name: "Route 16\nRoute 18" 				},
		r19_r20:		{x: 244, y: 129, w: 8, h: 8,  name: "Route 19\nRoute 20" 				},
		r22:			{x: 200, y: 81,  w: 8, h: 8,  name: "Route 22" 							},
		
		r28_rmsilver:   {x: 167, y: 81,  w: 8, h: 8,  name: "Route 28\nRoute Mt. Silver" 		},

        // Important locations
		ruinsofalph:	{x: 89,  y: 77,  w: 8,  h: 8, name: "Ruins of Alph" 				},
		goldenrodstore: {x: 73,  y: 88,  w: 8,  h: 8, name: "Goldenrod\nDepartment Store" 	},
		goldenrodgts: 	{x: 48,  y: 97,  w: 8,  h: 8, name: "Goldenrod\nGTS" 				},
		goldenrodtunnel:{x: 73,  y: 97,  w: 8,  h: 8, name: "Goldenrod\nTunnel" 			},
		radiotower:		{x: 48,  y: 88,  w: 8,  h: 8, name: "Goldenrod\nRadio Tower" 		},
		burnedtower:	{x: 73,  y: 32,  w: 8,  h: 8, name: "Burned Tower" 					},
		belltower:		{x: 82,  y: 32,  w: 8,  h: 8, name: "Bell Tower" 					},
		lighthouse:		{x: 42,  y: 54,  w: 8,  h: 8, name: "Olivine\nLighthouse" 			},
		ssaqua:			{x: 35,  y: 63,  w: 8,  h: 8, name: "S.S. Aqua" 					},
		rockethq:		{x: 126, y: 32,  w: 8,  h: 8, name: "Rocket HQ"						},
		
		receptiongate:	{x: 191, y: 81,  w: 8,  h: 8, name: "Reception Gate" 				},
		
		ceruleancape:	{x: 311, y: 25,  w: 8,  h: 8, name: "Cerulean Cape" 				},	
		celadonstore: 	{x: 271, y: 56,  w: 8,  h: 8, name: "Celadon\nDepartment Store" 	},
		
		// Caves
		darkcave1:		{x: 125, y: 61,  w: 8,  h: 8, name: "Dark Cave" 					},
		darkcave2:		{x: 134, y: 52,  w: 8,  h: 8, name: "Dark Cave" 					},
		unioncave:		{x: 98,  y: 130, w: 8,  h: 8, name: "Union Cave" 					},
		slowpokewell:	{x: 79,  y: 121, w: 8,  h: 8, name: "Slowpoke Well" 				},
		whirlislands1:	{x: 35,  y: 97,  w: 8,  h: 8, name: "Whirl Islands" 				},
		whirlislands2:	{x: 35,  y: 106, w: 8,  h: 8, name: "Whirl Islands" 				},
		mtmortar1:		{x: 98,  y: 32,  w: 8,  h: 8, name: "Mt. Mortar"					},
		mtmortar2:		{x: 98,  y: 23,  w: 8,  h: 8, name: "Mt. Mortar"					},
		icepath1:		{x: 136, y: 32,  w: 8,  h: 8, name: "Ice Cave" 						},
		icepath2:		{x: 136, y: 23,  w: 8,  h: 8, name: "Ice Cave" 						},
		dragonsden:		{x: 145, y: 32,  w: 8,  h: 8, name: "Dragon's Den" 					},
		
		victoryroad1:	{x: 191, y: 58,  w: 8,  h: 8, name: "Victory Road" 					},
		victoryroad2:	{x: 191, y: 49,  w: 8,  h: 8, name: "Victory Road" 					},
		
		mtmoon:			{x: 255, y: 32,  w: 8, h: 17, name: "Route 3 / Route 4\nMt. Moon" 	},
		rocktunnel:		{x: 318, y: 50,  w: 8, h: 8,  name: "Rock Tunnel" 					},
		diglettscave:	{x: 304, y: 89,  w: 8, h: 8,  name: "Diglett's Cave" 				},
		seafoam1:		{x: 240, y: 138, w: 8, h: 8,  name: "Seafoam Island" 				},
		seafoam2:		{x: 249, y: 138, w: 8, h: 8,  name: "Seafoam Island" 				},
		ceruleancave: 	{x: 286, y: 32,  w: 8, h: 8,  name: "Cerulean Cave" 				},
		
		mtsilverin:		{x: 167, y: 72,  w: 8, h: 8,  name: "Mt. Silver" 					},
		mtsilverout:	{x: 176, y: 72,  w: 8, h: 8,  name: "Mt. Silver Outside" 			},
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        newbark: {
			left:  {x: 119, y: 247 					 		   },
			right: {x: 295, y: 270 					 		   },
			gate:  {x: 61,  y: 50,  name: "Route 29 (Newbark)" },
        },
        cherrygrove: {
			mart:   	{x: 175, y: 48  },
			center: 	{x: 307, y: 48  },
			houseleft: 	{x: 43,  y: 152 },
			housemid: 	{x: 214, y: 176 },
			houseright:	{x: 357, y: 232 },
        },
        violet: {
            sprout:   	{x: 590, y: 95  },
			leftmart: 	{x: 149, y: 429 },
			mart:     	{x: 300, y: 500 },
			gym:      	{x: 462, y: 481 },
			school:   	{x: 722, y: 491 },
			center:   	{x: 750, y: 720 },
			trade:    	{x: 550, y: 814 },
			gateleft: 	{x: 927, y: 660 },
			gateright:	{x: 71,  y: 283 },
        },
        azalea: {
            kurt:      {x: 165, y: 113                            },
			center:    {x: 333, y: 183                            },
			mart:      {x: 478, y: 159                            },
			well:      {x: 702, y: 153                            },
			gym:       {x: 253, y: 319                            },
			charcoal:  {x: 480, y: 293                            },
			gate:      {x: 73,  y: 194                            },
			unioncave: {x: 858, y: 359, name: "Route 33 (Azalea)" },
        },
        goldenrod: {
			gate:       {x: 504, y: 22  },
			tunneltop:  {x: 320, y: 142 },
			namerater:  {x: 400, y: 110 },
			gym:        {x: 624, y: 148 },
			flower:     {x: 712, y: 118 },
			rightgym:   {x: 792, y: 156 },
			radio:      {x: 241, y: 330 },
			station:    {x: 366, y: 303 },
			gamecorner: {x: 384, y: 466 },
			rightmart:	{x: 745, y: 489 },
			bill:       {x: 233, y: 537 },
			tunnelbot:  {x: 321, y: 636 },
			center:     {x: 400, y: 567 },
			mart:       {x: 608, y: 566 },
			bike:       {x: 688, y: 634 },
        },
		
        ecruteak: {
			burned:    {x: 327, y: 30  },
			tin:       {x: 583, y: 100 },
			gateleft:  {x: 90,  y: 300 },
            topgym:    {x: 311, y: 356 },
			kimono:    {x: 665, y: 350 },
			mart:      {x: 820, y: 350 },
            gym:       {x: 327, y: 470 },
			rightgym:  {x: 487, y: 481 },
			center:    {x: 665, y: 470 },
			gateright: {x: 910, y: 418 },
        },
        olivine: {
			gym:        {x: 117, y: 50  },
			trade:      {x: 395, y: 78  },
			righttrade: {x: 505, y: 78  },
			topcenter:  {x: 180, y: 167 },
			mart:       {x: 372, y: 291 },
			center:     {x: 165, y: 280 },
			bar:        {x: 54,  y: 289 },
			lighthouse: {x: 630, y: 320 },
			boat:     	{x: 275, y: 560 },
        },
        cianwood: {
			house_north: 	{x: 96,  y: 115 },
			house_shuckle:	{x: 320, y: 354 },
			house_right: 	{x: 320, y: 450 },
			house_potion:	{x: 288, y: 548 },
			house_left: 	{x: 144, y: 514 },
			gym:    		{x: 168, y: 385 },
			center: 		{x: 410, y: 537 },
			cave:			{x: 137, y: 269 },
        },
        mahogany: {
			gate:      {x: 215, y: 47  },
			mart:	   {x: 280, y: 165 },
			rightmart: {x: 422, y: 165 },
			gym:       {x: 192, y: 278 },
			center:    {x: 368, y: 278 },
        },
        blackthorn: {
			den:         {x: 415, y: 33  },
			gym:         {x: 350, y: 270 },
			icepath:     {x: 814, y: 179 },
			botgym:      {x: 230, y: 439 },
			leftmart:    {x: 200, y: 580 },
			mart:        {x: 333, y: 550 },
			center:      {x: 447, y: 580 },
			rightcenter: {x: 614, y: 474 },

        },
        indigoplateau: {
            entrance: {x: 168, y: 326 },
			right:    {x: 295, y: 292 },
			top:      {x: 168, y: 62  },
        },

        pallet: {
			main:  {x: 125, y: 98  },
			rival: {x: 301, y: 98  },
			lab:   {x: 305, y: 224 },
        },
        viridian: {
			gate:   {x: 230, y: 730 },
			gym:    {x: 366, y: 217 },
			house:  {x: 190, y: 283 },
			school: {x: 223, y: 385 },
			mart:   {x: 331, y: 444 },
			center: {x: 157, y: 504 },
        },

        pewter: {
            gym:    {x: 334, y: 267 },
			mart:   {x: 543, y: 347 },
			top:    {x: 671, y: 226 },
			center: {x: 351, y: 461 },
			bot:    {x: 176, y: 523 },
			museum:	{x: 351, y: 97  },
        },
        cerulean: {
			cave:      	{x: 70,  y: 90, name: "Cerulean City (Cave)" },
			topcenter:  {x: 291, y: 105                              },
			leftcenter: {x: 268, y: 288                              },
			center:     {x: 376, y: 288                              },
			topgym:		{x: 516, y: 193                              },
			gym:        {x: 498, y: 319                              },
			mart:       {x: 340, y: 448                              },
            bike:   	{x: 177, y: 448                              },
        },
        vermilion: {
			leftcenter:	{x: 70,  y: 53  },
			center:  	{x: 152, y: 28  },
			club:    	{x: 90 , y: 241 }, 
			rightclub:  {x: 226, y: 237 },
			mart:    	{x: 362, y: 231	},
			gym:     	{x: 121, y: 352	},
			rightgym: 	{x: 361, y: 349	},
			boat: 		{x: 345, y: 627	},
		},
        celadon: {
			mart:       {x: 170, y: 160 },
			tea:        {x: 445, y: 160 },
			center:     {x: 650, y: 160 },
			gamecorner: {x: 441, y: 289 },
			prizes:     {x: 522, y: 313 },
			gym:        {x: 169, y: 516 },
			coincase:   {x: 554, y: 455 },
        },
        lavender: {
			mart:       {x: 70,  y: 205 },
			center:     {x: 142, y: 175 },
			botcenter:  {x: 157, y: 299 },
			left:       {x: 77,  y: 393 },
			right:      {x: 158, y: 361 },
			radio:      {x: 320, y: 202 },
			botradio:   {x: 351, y: 354 },
        },
        saffron: {
			topgate:   {x: 383, y: 43  },
			rightgate: {x: 932, y: 505 },
			botgate:   {x: 382, y: 698 },
			leftgate:  {x: 79,  y: 505 },
			station:   {x: 214, y: 138 },
			dojo:      {x: 711, y: 83  },
			gym:       {x: 823, y: 148 },
			mimic:     {x: 330, y: 262 },
			mart:      {x: 660, y: 262 },
			silph:     {x: 511, y: 403 },
			center:    {x: 280, y: 566 },
			psychic:   {x: 743, y: 562 },
        },
        fuchsia: {
			mart:     	{x: 190, y: 231 },
			house:    	{x: 590, y: 458 },
			gym:      	{x: 159, y: 508 },
			rightgym:  	{x: 251, y: 560 },
			center:    	{x: 385, y: 508 },
			gate_south: {x: 294, y: 622 },
			gate_east:	{x: 867, y: 293 },
			pokepark:	{x: 472, y: 61  },
        },
        cinnabar: {
			center: {x: 238, y: 304 },
        },

        // Routes
		r1: {
			gate: {x: 99, y: 45 },
		},
		r2_viridian: {
			viri_north:		   {x: 127, y: 266, name: "Viridian Forest"	   },
			viri_south:		   {x: 447, y: 620, name: "Viridian Forest"	   },
			r2_cave:		   {x: 440, y: 39,  name: "Route 2 (Pewter)"   },
			r2_house:		   {x: 597, y: 357, name: "Route 2 (Pewter)"   },
			r2_gate_leftcave:  {x: 130, y: 90,  name: "Route 2 (Pewter)"   },
			r2_gate_rightup:   {x: 700, y: 684, name: "Route 2 (Pewter)"   },
			r2_gate_rightdown: {x: 700, y: 773, name: "Route 2 (Viridian)" },
			gate_south:		   {x: 448, y: 773, name: "Route 2 (Viridian)" },
		},
		r5: {
			gate: 	{x: 334, y: 452 },
			tunnel:	{x: 422, y: 371  },
			house: 	{x: 283, y: 135 },
		},
		r6: {
			gate: 	{x: 270, y: 40  },
			tunnel:	{x: 408, y: 113 },
		},
		r7: {
			gate: {x: 356, y: 58 },
		},
		r8: {
			gate: {x: 80, y: 55 },
		},
		r10_power: {
			center:		{x: 295, y: 60,  name: "Route 10" 		     },
			cave_10:	{x: 180, y: 93,  name: "Route 10" 		     },
			cave_lav:	{x: 86,  y: 666, name: "Route 10 (Lavender)" },
		},
		r11_r12_r15: {
			cave:		{x: 164, y: 88 , name: "Route 11" 	},
			gate_11:	{x: 358, y: 35 , name: "Route 11" 	},
			gate_12:	{x: 100, y: 260, name: "Route 12"   },
			house:		{x: 370, y: 425, name: "Route 12"   },
			gate_15:	{x: 100, y: 600, name: "Route 15"   },
		},
		r16_r18: {
			house:			{x: 198, y: 60 , name: "Route 16"    		},
			r16_gate:		{x: 300, y: 250, name: "Route 16"   		},
			r16_gate_bike:	{x: 135, y: 250, name: "Route 16 Cycling"  	},
			r18_gate:		{x: 300, y: 450, name: "Route 18"   		},
			r18_gate_bike:	{x: 135, y: 450, name: "Route 18 Cycling"  	},
		},
		r19_r20: {
			cave_left:	{x: 174, y: 204, name: "Route 20"    },
			cave_right:	{x: 397, y: 298, name: "Route 20"    },
			gate:		{x: 646, y: 30 , name: "Route 19"    },
		},
		r22: {
			gate: {x: 130, y: 78 },
		},
		r26_tohjo_r27: {
			r26_cave_left:		{x: 102, y: 385, name: "Route 26"    },
			r26_cave_right:		{x: 342, y: 358, name: "Route 26"    },
			r26_house:			{x: 284, y: 439, name: "Route 26"    },
			tohjo_left:			{x: 80 , y: 206, name: "Tohjo Falls" },
			tohjo_right:		{x: 320, y: 178, name: "Tohjo Falls" },
			tohjo_secret:		{x: 70 , y: 85 , name: "Tohjo Falls" },
			r27_house_south:	{x: 506, y: 447, name: "Route 27"    },
			r27_house_north:	{x: 763, y: 126, name: "Route 27"    },
			r27_gate:			{x: 530, y: 106, name: "Route 27"    },
		},
		r28_rmsilver: {
			gate:	{x: 556, y: 111, name: "Route 28" 			},
			house:	{x: 379, y: 116, name: "Route 28"  			},
			center:	{x: 215, y: 102, name: "Route Mt. Silver"   },
			cave:	{x: 72 , y: 37 , name: "Route Mt. Silver"  	},
		},
		r30_r31: {
			berry:    {x: 142, y: 297, name: "Route 30" },
			darkcave: {x: 408, y: 74,  name: "Route 31" },
			gate:     {x: 101, y: 92,  name: "Route 31" },
		},
		r32: {
			gate:	{x: 100, y: 83  },
			center:	{x: 315, y: 247 },
			cave:	{x: 219, y: 400 },
		},
		ilex_r34: {
			ilex_south:	{x: 148, y: 842, name: "Ilex Forest" },
			ilex_north:	{x: 116, y: 38,  name: "Ilex Forest" },
			r34_ilex:	{x: 237, y: 93,  name: "Route 34" 	 },
		},
		r35_athlon_r36: {
			athlon_entry:	{x: 265, y: 275, name: "Pokeathlon" },
			athlon_up:		{x: 155, y: 15 , name: "Pokeathlon" },
			athlon_down:	{x: 350, y: 15, name: "Pokeathlon" },
			r35_gatecity:	{x: 70 , y: 585, name: "Route 35" 	},
			r35_gatepark:	{x: 70 , y: 385, name: "Route 35" 	},
			r36_gatepark:	{x: 190, y: 350, name: "Route 36" 	},
			r36_gatealph:	{x: 375, y: 510, name: "Route 36" 	},
			r36_gatecity:	{x: 635, y: 375, name: "Route 36" 	},
		},
		r38_farm: {
			gate:		{x: 375, y: 120, name: "Route 38" },
			farm_left:	{x: 61 , y: 130, name: "Moomoo Farm" },
			farm_right:	{x: 142, y: 130, name: "Moomoo Farm" },
		},
		r40_battle: {
			r40_gate: 			{x: 211, y: 431, name: "Route 40" },
			battle_center:		{x: 104, y: 87 , name: "Battle Frontier" },
			battle_mart:		{x: 285, y: 87 , name: "Battle Frontier" },
			battle_house:		{x: 62 , y: 203, name: "Battle Frontier" },
			battle_entrance:	{x: 208, y: 16 , name: "Battle Frontier" },
			battle_gate:		{x: 211, y: 372, name: "Battle Frontier" },
		},
		r41: {
			cave_nw:	{x: 272, y: 234 },
			cave_ne:	{x: 736, y: 214 },
			cave_se:	{x: 800, y: 609 },
			cave_sw:	{x: 320, y: 588 },
		},
		r42: {
			gate:		{x: 70,  y: 167 },
			cave_left:	{x: 284, y: 124 },
			cave_mid:	{x: 514, y: 173 },
			cave_mid_n:	{x: 544, y: 10  },
			cave_right:	{x: 766, y: 179 },
		},
		ragelake_r43: {
			water:    {x: 79,  y: 117, name: "Lake of Rage"    },
			land:     {x: 275, y: 124, name: "Lake of Rage"    },
			entrance: {x: 74,  y: 336, name: "Route 43 (Lake)" },
			gatetop:  {x: 276, y: 223, name: "Route 43 (Lake)" },
			gatebot:  {x: 278, y: 370, name: "Route 43 (Lake)" },
		},
		r44: {
			cave: {x: 282, y: 109 },
		},
		r45_r46: {
			cave_north:	{x: 115, y: 47,  name: "Route 45" },
			cave_south:	{x: 155, y: 242, name: "Route 46" },
			gate:		{x: 166, y: 438, name: "Route 46" },
		},
		r47_safari: {
			gate_right:		{x: 850, y: 190, name: "Cliffcave Gate"  },
			gate_left:		{x: 542, y: 396, name: "Cliffcave Gate"  },
			r47_right:		{x: 388, y: 471, name: "Route 47"   	 },
			r47_left_mid:	{x: 82,  y: 490, name: "Route 47"    	 },
			r47_left_n:		{x: 82,  y: 400, name: "Route 47"    	 },
			r47_left_s:		{x: 100, y: 661, name: "Route 47"    	 },
			cave_door:		{x: 447, y: 116, name: "Cliffcave"   	 },
			cave_up:		{x: 414, y: 34,  name: "Cliffcave"   	 },
			cave_down:		{x: 479, y: 63,  name: "Cliffcave"   	 },
			safari_center:	{x: 104, y: 204, name: "Safari Zone"   	 },
			safari_zone:	{x: 209, y: 73,  name: "Safari Zone"   	 },
		},
				
        // Important locations
		ruinsofalph: {
			gate_n:			{x: 297, y: 26  },
			gate_e:			{x: 536, y: 430 },
			research:		{x: 463, y: 354 },
			main:			{x: 296, y: 329 },
			room_escaperope:{x: 384, y: 100 },
			room_flash:		{x: 384, y: 637 },
			room_waterstone:{x: 208, y: 637 },
			room_hooh:		{x: 208, y: 384 },
			cave_n:			{x: 112, y: 415 },
			cave_s:			{x: 112, y: 700 },
			escape_n:		{x: 718, y: 28,  name: "Ruins of Alph Escape" },
			escape_s:		{x: 718, y: 220, name: "Ruins of Alph Escape" },
			flash_n:		{x: 904, y: 28,  name: "Ruins of Alph Flash" },
			flash_s:		{x: 904, y: 220, name: "Ruins of Alph Flash" },
			water_n:		{x: 718, y: 278, name: "Ruins of Alph Water" },
			water_s:		{x: 718, y: 465, name: "Ruins of Alph Water" },
			hooh_n:			{x: 904, y: 278, name: "Ruins of Alph Ho-Oh" },
			hooh_s:			{x: 904, y: 465, name: "Ruins of Alph Ho-Oh" },
		},
		goldenrodstore: {
			f1_door: {x: 193, y: 555, name: "Goldenrod Store" },
			f1_up:   {x: 186, y: 460, name: "Goldenrod Store" },
			f2_up:   {x: 186, y: 260, name: "Goldenrod Store" },
			f2_down: {x: 296, y: 340, name: "Goldenrod Store" },
			f3_up:   {x: 186, y: 55,  name: "Goldenrod Store" },
			f3_down: {x: 296, y: 135, name: "Goldenrod Store" },
			f4_up:   {x: 587, y: 470, name: "Goldenrod Store" },
			f4_down: {x: 702, y: 535, name: "Goldenrod Store" },
			f5_up:   {x: 587, y: 260, name: "Goldenrod Store" },
			f5_down: {x: 702, y: 340, name: "Goldenrod Store" },
			f6_down: {x: 702, y: 135, name: "Goldenrod Store" },
			bf1:     {x: 373, y: 624, name: "Goldenrod Store" },
		},
		goldenrodgts: {
			gts: 		{x: 183, y: 266, name: "Goldenrod GTS"    },
			entrance:	{x: 452, y: 268, name: "Goldenrod GTS 1F" },
			green:		{x: 498, y: 153, name: "Goldenrod GTS 1F" },
			red:		{x: 563, y: 100, name: "Goldenrod GTS 1F" },
		},
		goldenrodtunnel: {
			tunnel_stairs_n:	{x: 72,  y: 80,  name: "Goldenrod Tunnel" },
			tunnel_stairs_s:	{x: 72,  y: 400, name: "Goldenrod Tunnel" },
			tunnel_key:			{x: 400, y: 330, name: "Goldenrod Tunnel" },
			tunnel_gallery:		{x: 320, y: 20,  name: "Goldenrod Tunnel" },
			base_stairs:		{x: 380, y: 465, name: "Goldenrod Basement" },
			base_door:			{x: 367, y: 650, name: "Goldenrod Basement" },
			ware_stairs:		{x: 850, y: 370, name: "Goldenrod Warehouse" },
			ware_door:			{x: 480, y: 610, name: "Goldenrod Warehouse" },
		},
		radiotower: {
			f1_right:	{x: 350, y: 500, name: "Radio Tower 1F" },
			f1_left:	{x: 70 , y: 560, name: "Radio Tower 1F" },
			f3_left:	{x: 70 , y: 310, name: "Radio Tower 3F" },
			f3_mid:		{x: 190, y: 240, name: "Radio Tower 3F" },
			f3_right:	{x: 320, y: 308, name: "Radio Tower 3F Key Card" },
			f5_left:	{x: 70 , y: 50 , name: "Radio Tower 5F President" },
			f5_right:	{x: 290, y: 105, name: "Radio Tower 5F" },
		},
		burnedtower: {
			entry:	{x: 177, y: 275, },
			ladder:	{x: 275, y: 145, },
		},
		belltower: {
			f1_entry:	{x: 190, y: 300, name: "Bell Tower 1F" },
			f1_ladder:	{x: 96 , y: 122, name: "Bell Tower 1F" },
			f4_ne:		{x: 700, y: 60 , name: "Bell Tower 4F" },
			f4_se:		{x: 700, y: 325, name: "Bell Tower 4F" },
			f4_sw:		{x: 480, y: 325, name: "Bell Tower 4F" },
			f4_nw:		{x: 470, y: 60 , name: "Bell Tower 4F" },
			f5_se:		{x: 310, y: 680, name: "Bell Tower 5F" },
			f5_s:		{x: 160, y: 590, name: "Bell Tower 5F" },
			f5_sw:		{x: 70 , y: 680, name: "Bell Tower 5F" },
			f5_nw:		{x: 48 , y: 414, name: "Bell Tower 5F" },
			f7_n:		{x: 485, y: 440, name: "Bell Tower 7F" },
			f7_s:		{x: 580, y: 640, name: "Bell Tower 7F" },
			f7_ladder:	{x: 436, y: 550, name: "Bell Tower 7F" },
			f9_left:	{x: 500, y: 806, name: "Bell Tower 9F" },
			f9_mid:		{x: 565, y: 875, name: "Bell Tower 9F" },
			f9_right:	{x: 700, y: 750, name: "Bell Tower 9F" },
		},
		lighthouse: {
			f1_entry:	{x: 120, y: 730, name: "Lighthouse 1F" },
			f1_stairs:	{x: 40 , y: 530, name: "Lighthouse 1F" },
			f2_down:	{x: 40 , y: 310, name: "Lighthouse 2F" },
			f2_up:		{x: 200, y: 320, name: "Lighthouse 2F" },
			f3_down:	{x: 210, y: 180, name: "Lighthouse 3F" },
			f3_up:		{x: 162, y: 92 , name: "Lighthouse 3F" },
			f3_door:	{x: 130, y: 265, name: "Lighthouse 3F" },
			f3_ladder:	{x: 70 , y: 180, name: "Lighthouse 3F" },
			f4_down:	{x: 370, y: 122, name: "Lighthouse 4F" },
			f4_up:		{x: 320, y: 12 , name: "Lighthouse 4F" },
			f4_ladder:	{x: 434, y: 61 , name: "Lighthouse 4F" },
			f4_window:	{x: 490, y: 150, name: "Lighthouse 4F" },
			f5_down:	{x: 338, y: 281, name: "Lighthouse 5F" },
			f5_up:		{x: 435, y: 398, name: "Lighthouse 5F" },
			top:		{x: 418, y: 684, name: "Lighthouse Top"},
		},
		ssaqua: {
			left_room_nw: 	{x: 185, y: 85  },
			left_room_ne: 	{x: 340, y: 85  },
			left_room_sw: 	{x: 185, y: 230 },
			left_room_se: 	{x: 340, y: 230 },
			right_room_nw:	{x: 455, y: 140 },
			right_room_ne:	{x: 600, y: 140 },
			right_room_sw:	{x: 455, y: 180 },
			right_room_se:	{x: 600, y: 180 },
			stairs: 		{x: 370, y: 25  },
			b1f_stairs:		{x: 400, y: 320, name: "S.S. Aqua B1F" },
			b1f_ladder:		{x: 680, y: 365, name: "S.S. Aqua B1F" },
		},
		rockethq: {
			store_entry:	{x: 628, y: 719, name: "Rocket HQ Store" },
			store_stairs:	{x: 642, y: 628, name: "Rocket HQ Store" },
			b1f_up:			{x: 469, y: 632, name: "Rocket HQ B1F" },
			b1f_down:		{x: 70 , y: 846, name: "Rocket HQ B1F" },
			b2f_up:			{x: 70 , y: 540, name: "Rocket HQ B2F" },
			b2f_down_se:	{x: 500, y: 550, name: "Rocket HQ B2F" },
			b2f_down_ne:	{x: 500, y: 327, name: "Rocket HQ B2F" },
			b2f_down_nw:	{x: 70 , y: 327, name: "Rocket HQ B2F" },
			b3f_up_nw:		{x: 70 , y: 30 , name: "Rocket HQ B3F" },
			b3f_up_sw:		{x: 70 , y: 76 , name: "Rocket HQ B3F" },
			b3f_up_ne:		{x: 500, y: 30 , name: "Rocket HQ B3F" },
			b3f_up_se:		{x: 500, y: 240, name: "Rocket HQ B3F" },
		},
		receptiongate: {
			entry:		{x: 177, y: 267 },
			victory:	{x: 177, y: 54  },
			kanto:		{x: 70 , y: 106 },
			mtsilver:	{x: 270, y: 106 },
		},
		ceruleancape: {
			house: 	{x: 171, y: 65 },
		},
		celadonstore: {
			f1_door: {x: 193, y: 555, name: "Celadon Store" },
			f1_up:   {x: 100, y: 484, name: "Celadon Store" },
			f2_up:   {x: 100, y: 282, name: "Celadon Store" },
			f2_down: {x: 180, y: 359, name: "Celadon Store" },
			f3_up:   {x: 100, y: 76,  name: "Celadon Store" },
			f3_down: {x: 180, y: 155, name: "Celadon Store" },
			f4_up:   {x: 473, y: 484, name: "Celadon Store" },
			f4_down: {x: 574, y: 555, name: "Celadon Store" },
			f5_up:   {x: 473, y: 282, name: "Celadon Store" },
			f5_down: {x: 574, y: 359, name: "Celadon Store" },
			f6_down: {x: 574, y: 155, name: "Celadon Store" },
		},
		
		// Caves
		darkcave1: {
			r31: 		{x: 119, y: 409, name: "Dark Cave (R31 Side)" },
			darkcave2:	{x: 455, y: 68,  name: "Dark Cave (R31 Side)" },
			r46: 		{x: 920, y: 813, name: "Dark Cave (R31 Side)" },
		},
		darkcave2: {
			r45: 		{x: 967, y: 39,  name: "Dark Cave (R45 Side)" },
			darkcave1:	{x: 134, y: 726, name: "Dark Cave (R45 Side)" },
		},
		unioncave: {
			f1_r32:		{x: 456, y: 290, name: "Union Cave (1F)" },
			f1_r33:		{x: 456, y: 888, name: "Union Cave (1F)" },
			f1_left_n:	{x: 100, y: 48,  name: "Union Cave (1F)" },
			f1_left_s:	{x: 137, y: 868, name: "Union Cave (1F)" },
			b1f_alph_n:	{x: 629, y: 36,  name: "Union Cave (B1F)" },
			b1f_alph_s:	{x: 629, y: 140, name: "Union Cave (B1F)" },
			b1f_main_n:	{x: 999, y: 522, name: "Union Cave (B1F)" },
			b1f_main_s:	{x: 629, y: 730, name: "Union Cave (B1F)" },
			b1f_b2f:	{x: 999, y: 708, name: "Union Cave (B1F)" },
		},
		slowpokewell: {
			entry:		{x: 465, y: 404, },
			ladder_b2:	{x: 225, y: 285, },
		},
		whirlislands1: {
			se_entry:		{x: 645, y: 886, name: "Whirl Islands (1F)" },
			se_down_north:	{x: 912, y: 756, name: "Whirl Islands (1F)" },
			se_down_south:	{x: 870, y: 839, name: "Whirl Islands (1F)" },
			sw_entry:		{x: 102, y: 805, name: "Whirl Islands (1F)" },
			sw_down_west:	{x: 71,  y: 737, name: "Whirl Islands (1F)" },
			sw_down_east:	{x: 406, y: 737, name: "Whirl Islands (1F)" },
			b1f_up_sw:		{x: 229, y: 646, name: "Whirl Islands (B1F)" },
			b1f_up_s:		{x: 502, y: 646, name: "Whirl Islands (B1F)" },
			b1f_up_se:		{x: 823, y: 603, name: "Whirl Islands (B1F)" },
			b1f_up_nw:		{x: 136, y: 115, name: "Whirl Islands (B1F)" },
			b1f_up_n:		{x: 790, y: 185, name: "Whirl Islands (B1F)" },
			b1f_up_ne:		{x: 936, y: 75,  name: "Whirl Islands (B1F)" },
			b1f_down_west:	{x: 262, y: 513, name: "Whirl Islands (B1F)" },
			b1f_down_east:	{x: 631, y: 436, name: "Whirl Islands (B1F)" },
		},
		whirlislands2: {
			b2f_up_n:	{x: 224, y: 104, name: "Whirl Islands (B2F)" },
			b2f_up_s:	{x: 143, y: 278, name: "Whirl Islands (B2F)" },
			b2f_door_n:	{x: 207, y: 349, name: "Whirl Islands (B2F)" },
			b2f_door_s:	{x: 207, y: 683, name: "Whirl Islands (B2F)" },
		},
		mtmortar1: {
			entry_left:		{x: 85,  y: 652, name: "Mt. Mortar (1F)" },
			entry_midleft:	{x: 452, y: 717, name: "Mt. Mortar (1F)" },
			entry_midright:	{x: 675, y: 717, name: "Mt. Mortar (1F)" },
			entry_right:	{x: 852, y: 651, name: "Mt. Mortar (1F)" },
			door_left:		{x: 272, y: 442, name: "Mt. Mortar (1F)" },
			door_mid:		{x: 628, y: 442, name: "Mt. Mortar (1F)" },
			door_right:		{x: 996, y: 405, name: "Mt. Mortar (1F)" },
			door_cascadeup:	{x: 450, y: 74,  name: "Mt. Mortar (1F)" },
			ladder:			{x: 452, y: 618, name: "Mt. Mortar (1F)" },
		},
		mtmortar2: {
			entry_left:		{x: 240, y: 899, name: "Mt. Mortar (B1F)" },
			entry_mid:		{x: 590, y: 899, name: "Mt. Mortar (B1F)" },
			entry_right:	{x: 957, y: 853, name: "Mt. Mortar (B1F)" },
			ladder_sw:		{x: 112, y: 699, name: "Mt. Mortar (B1F)" },
			ladder_se:		{x: 800, y: 699, name: "Mt. Mortar (B1F)" },
			ladder_up:		{x: 128, y: 68,  name: "Mt. Mortar (B1F)" },
			ladder_down:	{x: 238, y: 384, name: "Mt. Mortar (B1F)" },
		},
		icepath1: {
			door_left:	{x: 110, y: 690, name: "Ice Path (1F)" },
			door_right:	{x: 810, y: 472, name: "Ice Path (1F)" },
			ladder_n:	{x: 810, y: 70 , name: "Ice Path (1F)" },
			ladder_s:	{x: 810, y: 225, name: "Ice Path (1F)" },
		},
		icepath2: {
			b1f_up_n:	{x: 100, y: 200, name: "Ice Path (B1F)" },
			b1f_up_s:	{x: 110, y: 450, name: "Ice Path (B1F)" },
			b1f_down_n:	{x: 403, y: 67 , name: "Ice Path (B1F)" },
			b1f_down_s:	{x: 435, y: 455, name: "Ice Path (B1F)" },
			b2f_up_w:	{x: 386, y: 680, name: "Ice Path (B2F)" },
			b2f_up_e:	{x: 658, y: 819, name: "Ice Path (B2F)" },
			b2f_down_w:	{x: 227, y: 779, name: "Ice Path (B2F)" },
			b2f_down_e:	{x: 770, y: 635, name: "Ice Path (B2F)" },
			b3f_up_w:	{x: 590, y: 277, name: "Ice Path (B3F)" },
			b3f_up_e:	{x: 880, y: 290, name: "Ice Path (B3F)" },
		},
		dragonsden: {
			ladder:		{x: 465, y: 126, },
			clair_test:	{x: 463, y: 508, name: "Dragon's Den Test"},
			door:		{x: 465, y: 630, },
		},
		victoryroad1: {
			north:	{x: 126, y: 148, name: "Victory Road (1F)" },
			south:	{x: 558, y: 709, name: "Victory Road (1F)" },
		},
		victoryroad2: {
			f2_up_nw:	{x: 82,  y: 571, name: "Victory Road (2F)" },
			f2_up_ne:	{x: 865, y: 623, name: "Victory Road (2F)" },
			f2_up_se:	{x: 788, y: 834, name: "Victory Road (2F)" },
			f2_up_s:	{x: 403, y: 814, name: "Victory Road (2F)" },
			f2_down:	{x: 82,  y: 768, name: "Victory Road (2F)" },
			f3_out:		{x: 593, y: 86,  name: "Victory Road (3F)" },
			f3_down_s:	{x: 386, y: 404, name: "Victory Road (3F)" },
			f3_down_ne:	{x: 847, y: 197, name: "Victory Road (3F)" },
			f3_down_se: {x: 769, y: 330, name: "Victory Road (3F)" },
			f3_down_w:	{x: 90 , y: 156, name: "Victory Road (3F)" },
		},
		mtmoon: {
			r4_cave:   {x: 384, y: 419, name: "Route 4"  },
			r3_cave:   {x: 200, y: 370, name: "Route 3"  },
			r3_center: {x: 120, y: 439, name: "Route 3"  },
			moon_r3:   {x: 188, y: 105, name: "Mt. Moon" },
			moon_r4:   {x: 475, y: 340, name: "Mt. Moon" },
			moon_up_n: {x: 395, y: 30 , name: "Mt. Moon" },
			moon_up_s: {x: 475, y: 177, name: "Mt. Moon" },
		},
		rocktunnel: {
			entry_north:	{x: 630, y: 50 , name: "Rock Tunnel (1F)"},
			entry_south:	{x: 296, y: 378, name: "Rock Tunnel (1F)"},
			down_right:		{x: 519, y: 207, name: "Rock Tunnel (1F)"},
			down_left_n:	{x: 70 , y: 83 , name: "Rock Tunnel (1F)"},
			down_left_mid:	{x: 88 , y: 219, name: "Rock Tunnel (1F)"},
			down_left_s:	{x: 70 , y: 349, name: "Rock Tunnel (1F)"},
			up_right:		{x: 538, y: 651, name: "Rock Tunnel (B1F)"},
			up_left_n:		{x: 73 , y: 512, name: "Rock Tunnel (B1F)"},
			up_left_mid:	{x: 104, y: 659, name: "Rock Tunnel (B1F)"},
			up_left_s:		{x: 71 , y: 840, name: "Rock Tunnel (B1F)"},
		},
		diglettscave: {
			north:	{x: 189, y: 67  },
			south:	{x: 574, y: 655 },
		},
		seafoam1: {
			f1_entry:		{x: 133, y: 517, name: "Seafoam Island (1F)"},
			f1_up:			{x: 133, y: 429, name: "Seafoam Island (1F)"},
			f1_down:		{x: 75 , y: 390, name: "Seafoam Island (1F)"},
			b1f_up_w:		{x: 178, y: 49 , name: "Seafoam Island (B1F)"},
			b1f_up_e:		{x: 835, y: 209, name: "Seafoam Island (B1F)"},
			b1f_down_n:		{x: 433, y: 70 , name: "Seafoam Island (B1F)"},
			b1f_down_sw:	{x: 272, y: 288, name: "Seafoam Island (B1F)"},
			b1f_down_s:		{x: 369, y: 190, name: "Seafoam Island (B1F)"},
			b1f_down_se:	{x: 671, y: 245, name: "Seafoam Island (B1F)"},
			b2f_up_n:		{x: 490, y: 580, name: "Seafoam Island (B2F)"},
			b2f_up_s:		{x: 442, y: 704, name: "Seafoam Island (B2F)"},
			b2f_up_se:		{x: 745, y: 751, name: "Seafoam Island (B2F)"},
			b2f_down_n:		{x: 608, y: 523, name: "Seafoam Island (B2F)"},
			b2f_down_e:		{x: 835, y: 525, name: "Seafoam Island (B2F)"},
			b2f_down_se:	{x: 835, y: 628, name: "Seafoam Island (B2F)"},
		},
		seafoam2: {
			b3f_up_e:		{x: 104, y: 328, name: "Seafoam Island (B3F)"},
			b3f_up_w:		{x: 726, y: 186, name: "Seafoam Island (B3F)"},
			b3f_down_se:	{x: 216, y: 273, name: "Seafoam Island (B3F)"},
			b3f_down_sw:	{x: 630, y: 312, name: "Seafoam Island (B3F)"},
			b3f_down_ne:	{x: 553, y: 81 , name: "Seafoam Island (B3F)"},
			b3f_down_nw:	{x: 118, y: 81 , name: "Seafoam Island (B3F)"},
			b4f_up_nw:		{x: 105, y: 514, name: "Seafoam Island (B4F)"},
			b4f_up_ne:		{x: 456, y: 611, name: "Seafoam Island (B4F)"},
			b4f_up_sw:		{x: 200, y: 684, name: "Seafoam Island (B4F)"},
			b4f_up_se:		{x: 725, y: 723, name: "Seafoam Island (B4F)"},
		},
		ceruleancave: {
			f1_entry:   		{x: 744, y: 891, name: "Cerulean Cave (1F)"  },
			f1_right_up:		{x: 841, y: 553, name: "Cerulean Cave (1F)"  },
			f1_right_down:		{x: 841, y: 696, name: "Cerulean Cave (1F)"  },
			f1_mid_right:		{x: 682, y: 731, name: "Cerulean Cave (1F)"  },
			f1_mid_left:		{x: 506, y: 776, name: "Cerulean Cave (1F)"  },
			f1_left_upnorth:	{x: 106, y: 473, name: "Cerulean Cave (1F)"  },
			f1_left_upeast:		{x: 182, y: 635, name: "Cerulean Cave (1F)"  },
			f1_left_upsouth:	{x: 73 , y: 752, name: "Cerulean Cave (1F)"  },
			f1_left_down:		{x: 73 , y: 600, name: "Cerulean Cave (1F)"  },
			f2_right:			{x: 855, y: 111, name: "Cerulean Cave (B1F)" },
			f2_left:			{x: 74 , y: 166, name: "Cerulean Cave (B1F)" },
		},
		mtsilverin: {
			f1_leftin:		{x: 83,  y: 473, name: "Mt. Silver (1F)" },
			f1_leftout:		{x: 400, y: 855, name: "Mt. Silver (1F)" },
			f1_rightin:		{x: 569, y: 594, name: "Mt. Silver (1F)" },
			f1_midout:		{x: 666, y: 750, name: "Mt. Silver (1F)" },
			f1_rightout:	{x: 814, y: 587, name: "Mt. Silver (1F)" },
			f2_n:			{x: 590, y: 82,  name: "Mt. Silver (2F)" },
			f2_mid:			{x: 591, y: 355, name: "Mt. Silver (2F)" },
			f2_right_n:		{x: 847, y: 220, name: "Mt. Silver (2F)" },
			f2_right_s:		{x: 847, y: 376, name: "Mt. Silver (2F)" },
			f2_south_left:	{x: 590, y: 450, name: "Mt. Silver (2F)" },
			f2_south_right:	{x: 814, y: 450, name: "Mt. Silver (2F)" },
		},
		mtsilverout: {
			snow_north:		{x: 270, y: 62 , name: "Mt. Silver (Snow)"  },
			snow_right_n:	{x: 490, y: 86 , name: "Mt. Silver (Snow)"  },
			snow_right_m:	{x: 490, y: 235, name: "Mt. Silver (Snow)"  },
			snow_right_s:	{x: 490, y: 383, name: "Mt. Silver (Snow)"  },
			snow_se:		{x: 400, y: 470, name: "Mt. Silver (Snow)"  },
			snow_sw:		{x: 175, y: 470, name: "Mt. Silver (Snow)"  },
			snow_west:		{x: 109, y: 261, name: "Mt. Silver (Snow)"  },
			green_north:	{x: 644, y: 91 , name: "Mt. Silver (Green)" },
			green_mid:		{x: 707, y: 322, name: "Mt. Silver (Green)" },
			green_south:	{x: 770, y: 404, name: "Mt. Silver (Green)" },
		},
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",     0], ["center",      0], ["mart",     0], ["one_way",  null]],
        [["normal",  0], ["fighting",    0], ["flying",    0], ["poison",      0], ["ground",   0], ["rock",        0], ["bug",         0], ["ghost",       0], ["fairy",      0]],
        [["steel",   0], ["fire",        0], ["water",     0], ["grass",       0], ["electric", 0], ["psychic",     0], ["ice",         0], ["dragon",      0], ["dark",       0]],
        [["1",       0], ["2",           0], ["3",         0], ["4",           0], ["5",        0], ["6",           0], ["7",           0], ["8",           0], ["c_darkness", 0]],
        [["p_bush",  0], ["p_surf",      0], ["p_boulder", 0], ["c_whirlpool", 0], ["p_rock",   0], ["p_waterfall", 0], ["p_rockywall", 0], ["bike_needed", 0], ["p_trainer",  0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",     0], ["plain_badge",   0], ["fog_badge",     0], ["storm_badge",  0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge",  0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge",   0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["hgss_will",     0], ["hgss_koga",      0], ["hgss_bruno",    0], ["hgss_karen",    0], ["hgss_lance",   0], ["",      undefined], ["",      undefined], ["hgss_red",     0]],
        [["hm_cut",        0], ["hm_fly",         0], ["hm_surf",       0], ["hm_strength",   0], ["hm_whirlpool", 0], ["hm_rocksmash",  0], ["hm_waterfall",  0], ["hm_rockclimb", 0]],
        [["radio_card",    0], ["expansion_card", 0], ["squirt_bottle", 0], ["secret_potion", 0], ["card_key",     0], ["ss_ticket",     0], ["pass",          0], ["hm_flash",     0]],
        [["bike",          0], ["clear_bell",     0], ["rainbow_wing",  0], ["basement_key",  0], ["lost_item",    0]],
    ],
};