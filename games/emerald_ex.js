let emerald_ex = {
	debug: false,
    name: "emerald_ex",
    folder: "emerald",
    start_location: "oldale",
    font: "GameBoy_Font",
    font_size: "22px",

    // Config texts
	config_name: "Emerald Ex Speedchoice",
	config_randomizer_author: "KittyPBoxx",
	config_randomizer_link: "https://kittypboxx.github.io/Emerald-Ex-Map-Rando/",
	//config_tracker_author: "", 
	//config_tracker_link: "",

	// Tracker information
    locations: {
        // Cities
        oldale:           {x: 40,  y: 88,  w: 8,  h: 8,  name: "Oldale Town"               },
        petalburg:        {x: 16,  y: 88,  w: 8,  h: 8,  name: "Petalburg City"            },
        rustboro:         {x: 8,   y: 56,  w: 8,  h: 16, name: "Rustboro City"             },
        dewford:          {x: 24,  y: 128, w: 8,  h: 8,  name: "Dewford Town"              },
        slateport_r109:   {x: 72,  y: 96,  w: 8,  h: 16, name: "Slateport City\nRoute 109" },
        mauville_r117:    {x: 72,  y: 64,  w: 16, h: 8,  name: "Mauville City\nRoute 117"  },
        verdanturf:       {x: 40,  y: 64,  w: 8,  h: 8,  name: "Verdanturf Town"           },
        fallarbor_r113:   {x: 32,  y: 16,  w: 8,  h: 8,  name: "Fallarbor Town\nRoute 113" },
        lavaridge:        {x: 48,  y: 40,  w: 8,  h: 8,  name: "Lavaridge Town"            },
        fortree:          {x: 104, y: 16,  w: 8,  h: 8,  name: "Fortree City"              },
        lilycove:         {x: 152, y: 40,  w: 16, h: 8,  name: "Lilycove City"             },
        mossdeep_r124_ex: {x: 200, y: 56,  w: 16, h: 8,  name: "Mossdeep City\nRoute 124"  },
        sootopolis_ex:    {x: 176, y: 72,  w: 8,  h: 8,  name: "Sootopolis City"           },
        pacifidlog:       {x: 144, y: 96,  w: 8,  h: 8,  name: "Pacifidlog Town"           },
        evergrande:       {x: 224, y: 80,  w: 8,  h: 16, name: "Ever Grande City\nElite 4" },

        // Routes
        petalburgwoods_r104: {x: 8,   y: 78, w: 8, h: 8, name: "Petalburg Woods\nRoute 104" },
        rusturftunnel_r116:  {x: 27,  y: 56, w: 8, h: 8, name: "Rusturf Tunnel\nRoute 116"  },
        r110:                {x: 72,  y: 79, w: 8, h: 8, name: "Route 110"                  },
        r111_r112_ex:        {x: 72,  y: 27, w: 8, h: 8, name: "Route 111\nRoute 112"       },
        r114:                {x: 16,  y: 16, w: 8, h: 8, name: "Route 114"                  },
        r119_r123:           {x: 96,  y: 40, w: 8, h: 8, name: "Route 119\nRoute 123"       },
        r120_r121:           {x: 120, y: 40, w: 8, h: 8, name: "Route 120\nRoute 121"       },

        // Important locations
        granitecave_r105_r106:   {x: 8,   y: 120, w: 8, h: 8, name: "Granite Cave\nRoute 105/106" },
        abandonedship_r108:      {x: 60,  y: 128, w: 8, h: 8, name: "Abandoned Ship\nRoute 108"   },
        miragetower:             {x: 72,  y: 51,  w: 8, h: 8, name: "Mirage Tower"                },
        magmahideout_jaggedpass: {x: 62,  y: 40,  w: 8, h: 8, name: "Magma Hideout\nJagged Pass"  },
        meteorfalls_r115:        {x: 8,   y: 32,  w: 8, h: 8, name: "Meteor Falls\nRoute 115"     },
        mtpyre_r122:             {x: 136, y: 53,  w: 8, h: 8, name: "Mt. Pyre\nRoute 122"         },
        departmentstore:         {x: 152, y: 27,  w: 8, h: 8, name: "Department Store"            },
        aquahideout:             {x: 173, y: 40,  w: 8, h: 8, name: "Aqua Hideout"                },
        seafloor_ex:             {x: 200, y: 72,  w: 8, h: 8, name: "Seafloor Cavern"             },
        skypillar_r131_ex:       {x: 169, y: 96,  w: 8, h: 8, name: "Sky Pillar\nRoute 131"       },
        victoryroad:             {x: 237, y: 80,  w: 8, h: 8, name: "Victory Road"                },
        victoryroad_corridors:   {x: 237, y: 70,  w: 8, h: 8, name: "Victory Road\n(Corridors)"   },
        navelrock:               {x: 206, y: 22,  w: 8, h: 8, name: "Navel Rock"                  },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        oldale: {
            left:   {x: 88,  y: 99 },
            mart:   {x: 232, y: 82 },
            center: {x: 103, y: 243},
            right:  {x: 248, y: 242},
        },
        petalburg: {
            wally:  {x: 120, y: 64 },
            gym:    {x: 248, y: 111},
            center: {x: 328, y: 242},
            mart:   {x: 408, y: 180},
            left:   {x: 168, y: 288},
            right:  {x: 328, y: 370},
        },
        rustboro: {
            corp:      {x: 192, y: 107},
            gym:       {x: 440, y: 165},
            rightgym:  {x: 535, y: 200},
            upcut:     {x: 213, y: 345},
            cut:       {x: 150, y: 520},
            upschool:  {x: 487, y: 312},
            school:    {x: 440, y: 410},
            center:    {x: 263, y: 472},
            leftmart:  {x: 86,  y: 680},
            mart:      {x: 262, y: 585},
            rightmart: {x: 422, y: 602},
        },
        dewford: {
            top:    {x: 56,  y: 31 },
            middle: {x: 135, y: 110},
            bottom: {x: 278, y: 208},
            center: {x: 38,  y: 144},
            gym:    {x: 135, y: 248},
        },
        slateport_r109: {
            contest:   {x: 168, y: 40                                                     },
            rater:     {x: 85,  y: 148                                                    },
            club:      {x: 51,  y: 264                                                    },
            center:    {x: 310, y: 153                                                    },
            mart:      {x: 225, y: 267                                                    },
            museum:    {x: 494, y: 268,                        name: "Slateport (Museum)" },
            shipyard:  {x: 424, y: 449                                                    },
            house:     {x: 342, y: 555                                                    },
            beach:     {x: 90,  y: 555                                                    },
            port:      {x: 455, y: 43                                                     },
            stern_top: {x: 534, y: 399, corridor: "stern_bot", name: "Stern's Shipyard"   },
			stern_bot: {x: 527, y: 624, corridor: "stern_top", name: "Stern's Shipyard"   },
        },
        mauville_r117: {
            gym:     {x: 135, y: 50 },
			center:  {x: 369, y: 50 },
			bicycle: {x: 569, y: 50 },
			casino:  {x: 135, y: 179},
			left:    {x: 310, y: 190},
			mart:    {x: 378, y: 260},
			right:   {x: 526, y: 190},
			daycare: {x: 115, y: 374},
        },
        verdanturf: {
            contest: {x: 55,  y: 89 },
            tunnel:  {x: 135, y: 9  },
            mart:    {x: 208, y: 34 },
            center:  {x: 273, y: 14 },
            left:    {x: 34,  y: 204},
            middle:  {x: 167, y: 204},
            right:   {x: 281, y: 219},
        },
        fallarbor_r113: {
            move:    {x: 52,  y: 77 },
            contest: {x: 136, y: 130},
            center:  {x: 231, y: 96 },
            house:   {x: 103, y: 253},
            mart:    {x: 255, y: 223},
            ashes:   {x: 450, y: 156},
        },

        lavaridge: {
            center:      {x: 100, y: 80 , name: "Lavaridge Town"     },
            mart:        {x: 199, y: 60 , name: "Lavaridge Town"     },
            gym:         {x: 52,  y: 215, name: "Lavaridge Town"     },
            herbs:       {x: 140, y: 270, name: "Lavaridge Town"     },
            house:       {x: 230, y: 215, name: "Lavaridge Town"     },
            center_top:  {x: 325, y: 24 , name: "Lavaridge (Center)" },
            center_left: {x: 313, y: 99 , name: "Lavaridge (Center)" },
            center_bot:  {x: 398, y: 149, name: "Lavaridge (Center)" },
        },

        fortree: {
            center:  {x: 95,  y: 81 },
            top1:    {x: 168, y: 29 },
            top2:    {x: 280, y: 66 },
            top3:    {x: 408, y: 29 },
            top4:    {x: 521, y: 66 },
            mart:    {x: 79,  y: 225},
            gym:     {x: 359, y: 148, name: "Fortree City (Gym)"},
            bottom1: {x: 199, y: 185},
            bottom2: {x: 570, y: 185},
        },

        lilycove: {
            department:   {x: 309, y: 75,  name: "Lilycove City"           },
            deleter:      {x: 453, y: 125, name: "Lilycove City"           },
            rightdeleter: {x: 552, y: 75,  name: "Lilycove City"           },
            leftcenter:   {x: 84,  y: 197, name: "Lilycove City"           },
            center:       {x: 261, y: 199, name: "Lilycove City"           },
            club:         {x: 501, y: 198, name: "Lilycove City"           },
            coast:        {x: 745, y: 212, name: "Lilycove City"           },
            lefthall:     {x: 84,  y: 323, name: "Lilycove City"           },
            hall:         {x: 243, y: 354, name: "Lilycove City"           },
            motel:        {x: 469, y: 356, name: "Lilycove City"           },
            harbor:       {x: 84,  y: 485, name: "Lilycove City"           },
            aqua:         {x: 745, y: 53,  name: "Lilycove (Aqua Hideout)" },
            hall_left:    {x: 487, y: 482, name: "Lilycove's Contest Hall" },
            hall_right:   {x: 677, y: 480, name: "Lilycove's Contest Hall" },
            hall_bot:     {x: 571, y: 587, name: "Lilycove's Contest Hall" },
            gallary:       {x: 59,  y: 64,  name: "Lilycove (Art Gallary)"}
        },

        mossdeep_r124_ex: {
            steven:     {x: 95,  y: 100, name: "Mossdeep City"},
            leftgym:    {x: 234, y: 65,  name: "Mossdeep City"},
            gym:        {x: 391, y: 120, name: "Mossdeep City"},
            leftcenter: {x: 84,  y: 222, name: "Mossdeep City"},
            center:     {x: 239, y: 188, name: "Mossdeep City"},
            mart:       {x: 385, y: 222, name: "Mossdeep City"},
            botmart:    {x: 374, y: 315, name: "Mossdeep City"},
            space:      {x: 710, y: 160, name: "Mossdeep City"},
            botspace:   {x: 746, y: 330, name: "Mossdeep City"},
            leftspace:  {x: 574, y: 24 , name: "Mossdeep City"},
            r124:       {x: 84,  y: 314, name: "Route 124"    },
            r125:       {x: 759, y: 23 , name: "Route 125 (Shoal Cave)"}
        },
        sootopolis_ex: {
            mart:       {x: 192, y: 399, name: "Sootopolis (Left Side)" },
            left1:      {x: 80,  y: 495, name: "Sootopolis (Left Side)" },
            left2:      {x: 80,  y: 346, name: "Sootopolis (Left Side)" },
            left3:      {x: 80,  y: 201, name: "Sootopolis (Left Side)" },
            left4:      {x: 80,  y: 25 , name: "Sootopolis (Left Side)" },
            center:     {x: 608, y: 428, name: "Sootopolis (Right Side)"},
            right1:     {x: 719, y: 509, name: "Sootopolis (Right Side)"},
            right2:     {x: 719, y: 376, name: "Sootopolis (Right Side)"},
            right3:     {x: 645, y: 323, name: "Sootopolis (Right Side)"},
            right4:     {x: 615, y: 203, name: "Sootopolis (Right Side)"},
            right5:     {x: 631, y: 26 , name: "Sootopolis (Right Side)"},
            gym:        {x: 406, y: 442, name: "Sootopolis (Gym)"       },
            main_cave:  {x: 407, y: 184, name: "Sootopolis (Main Cave)" },
            side_cave:  {x: 494, y: 253, name: "Sootopolis (Side Cave)" },
        },
        pacifidlog: {
            center:    {x: 143, y: 83 },
            topleft:   {x: 39,  y: 46 },
            topright:  {x: 263, y: 70 },
            botleft:   {x: 55,  y: 209},
            botmiddle: {x: 200, y: 238},
            botright:  {x: 280, y: 191},
        },
        evergrande: {
			center:      {x: 183, y: 476,                         name: "Ever Grande (Victory R.)" },
            cave:        {x: 38,  y: 362,                         name: "Ever Grande (Victory R.)" },
			center_top:  {x: 404, y: 386,                         name: "Ever Grande (E4)"         },
			center_left: {x: 258, y: 433,                         name: "Ever Grande (E4)"         },
			center_bot:  {x: 404, y: 507,                         name: "Ever Grande (E4)"         },
            sidney_top:  {x: 134, y: 26,  corridor: "sidney_bot", name: "Elite 4 (Sidney)"         },
			sidney_bot:  {x: 134, y: 145, corridor: "sidney_top", name: "Elite 4 (Sidney)"         },
			phoebe_top:  {x: 344, y: 26,  corridor: "phoebe_bot", name: "Elite 4 (Phoebe)"         },
			phoebe_bot:  {x: 344, y: 145, corridor: "phoebe_top", name: "Elite 4 (Phoebe)"         },
			glacia_top:  {x: 134, y: 190, corridor: "glacia_bot", name: "Elite 4 (Glacia)"         },
			glacia_bot:  {x: 134, y: 305, corridor: "glacia_top", name: "Elite 4 (Glacia)"         },
			drake_top:   {x: 344, y: 190, corridor: "drake_bot",  name: "Elite 4 (Drake)"          },
			drake_bot:   {x: 344, y: 305, corridor: "drake_top",  name: "Elite 4 (Drake)"          },
        },

        // Routes
        petalburgwoods_r104: {
            briney:         {x: 392, y: 510, name: "Route 104 (Petalburg)"},
            woodsentrance:  {x: 289, y: 362, name: "Route 104 (Petalburg)"},
            woodsbotexit:   {x: 641, y: 417, name: "Route 104 (Petalburg)"},
            woods_entrance: {x: 111, y: 691, name: "Petalburg Woods"      },
            woods_botexit:  {x: 431, y: 691, name: "Petalburg Woods"      },
            woods_topexit:  {x: 79,  y: 216, name: "Petalburg Woods"      },
            woodstopexit:   {x: 420, y: 207, name: "Route 104 (Rustboro)" },
            flowers:        {x: 332, y: 89 , name: "Route 104 (Rustboro)" },
        },
        rusturftunnel_r116:  {
            house:       {x: 197, y: 70,  name: "Route 116"     },
            cave:        {x: 342, y: 130, name: "Route 116"     },
            cave_left:   {x: 70,  y: 390, name: "Rusturf Tunnel"},
            cave_middle: {x: 298, y: 550, name: "Rusturf Tunnel"},
            cave_right:  {x: 472, y: 486, name: "Rusturf Tunnel"},
        },
        r110:                {
            topcycle:    {x: 72,  y: 104,                          name: "Route 110 (Mauville)"    },
            powerplant:  {x: 279, y: 88,                           name: "Route 110 (Power Plant)" },
            trickhouse:  {x: 71,  y: 325,                          name: "Route 110 (Trick House)" },
            botcycle:    {x: 230, y: 360,                          name: "Route 110 (Slateport)"   },
			trick_left:  {x: 20,  y: 194, corridor: "trick_right", name: "Trick House Prize"       },
			trick_right: {x: 146, y: 192, corridor: "trick_left",  name: "Trick House Prize"       },
            cycle_top:   {x: 119, y: 69,  corridor: "cycle_bot",   name: "Cycle Road"              },
			cycle_bot:   {x: 280, y: 322, corridor: "cycle_top",   name: "Cycle Road"              },
        },
        r111_r112_ex:        {
            jaggedentrance:  {x: 79,  y: 181, name: "Route 111 (Lavaridge)"   },
            fieryentrance:   {x: 152, y: 73 , name: "Route 111 (Fiery Entr.)" },
            fieryexit:       {x: 295, y: 59 , name: "Route 111 (Fiery Exit)"  },
            cablecar:        {x: 399, y: 165, name: "Route 111 (Cable Car)"   },
            reststop:        {x: 391, y: 64 , name: "Route 111 (Heal Lady)"   },
            trainerhill:     {x: 385, y: 290, name: "Route 111 (Trainer Hill)"},
            familyhouse:     {x: 72,  y: 411, name: "Route 112 (Family)"      },
            desert_mirage:   {x: 195, y: 421, name: "Route 112 (Mirage)"      },
            desert_regirock: {x: 358, y: 398, name: "Route 112 (Regirock)"    },
        },
        r114: {
            fossilmaniac: {x: 264, y: 66 ,                          name: "Route114 (Fossil Maniac)" },
            lanette:      {x: 247, y: 190,                          name: "Route 114 (Lanette)"      },
            meteorfalls:  {x: 87,  y: 187,                          name: "Route 114 (Meteor Falls)" },
            maniac_top:   {x: 70,  y: 10,  corridor: "maniac_bot",  name: "Fossil Maniac's House"    },
			maniac_bot:   {x: 80,  y: 102, corridor: "maniac_top",  name: "Fossil Maniac's House"    },
        },
        r119_r123:           {
            r119_house:       {x: 166, y: 287, name: "Route 119 (House)"  },
            weatherinstitute: {x: 103, y: 105, name: "Route 119 (Weather)"},
            berrymaster:      {x: 332, y: 207, name: "Route 123"          },
        },
        r120_r121:           {
            scorchedslab: {x: 286, y: 40 , name: "Route 120 (Slab)"   },
            ancienttomb:  {x: 104, y: 87 , name: "Route 120 (Tomb)"   },
            safari:       {x: 286, y: 158, name: "Route 121 (Safari)" },
        },

        // Important locations
        granitecave_r105_r106: {
            r105:            {x: 104, y: 332, name: "Route 105"                                },
            graniteentrance: {x: 88,  y: 643, name: "Route 106"                                },
            f1_entrance:     {x: 667, y: 191, name: "Granite (1F)"                             },
            f1_botstairs:    {x: 347, y: 158, name: "Granite (1F)"                             },
            f1_topstairs:    {x: 636, y: 79 , name: "Granite (1F)"                             },
            f1_steven:       {x: 154, y: 139, name: "Granite (1F)"                             },
            bf1_entrance:    {x: 299, y: 574, name: "Granite (1BF)"                            },
            bf1_exit:        {x: 683, y: 580, name: "Granite (1BF)"                            },
            bf1_optional1:   {x: 363, y: 366, name: "Granite (1BF)"                            },
            bf1_optional2:   {x: 428, y: 286, name: "Granite (1BF)"                            },
            bf1_optional3:   {x: 701, y: 323, name: "Granite (1BF)"                            },
            bf2_topstairs:   {x: 427, y: 721, name: "Granite (2BF)", corridor: "bf2_botstairs" },
            bf2_botstairs:   {x: 364, y: 801, name: "Granite (2BF)", corridor: "bf2_topstairs" },
        },
        abandonedship_r108: {
            r108_entrance:       {x: 365, y: 393, name: "Route 108 (Ship)"      },

            bedroom_left:        {x: 303, y: 321, name: "Abandoned Ship (Beds)" },
            bedroom_right:       {x: 440, y: 321, name: "Abandoned Ship (Beds)" },
            bedroom_top:         {x: 440, y: 116, name: "Abandoned Ship (Beds)" },

            line_stairs:         {x: 77,  y: 31 , name: "Abandoned Ship (Line)" },
            line_top:            {x: 54,  y: 64 , name: "Abandoned Ship (Line)" },
            line_bot:            {x: 54,  y: 113, name: "Abandoned Ship (Line)" },
            line_exit:           {x: 52,  y: 170, name: "Abandoned Ship (Line)" },

            block_stairs:        {x: 258, y: 20 , name: "Abandoned Ship (Block)"},
            block_topleft:       {x: 180, y: 45 , name: "Abandoned Ship (Block)"},
            block_topright:      {x: 232, y: 66 , name: "Abandoned Ship (Block)"},
            block_botleft:       {x: 180, y: 116, name: "Abandoned Ship (Block)"},
            block_botright:      {x: 232, y: 137, name: "Abandoned Ship (Block)"},
            block_exit:          {x: 156, y: 170, name: "Abandoned Ship (Block)"},

            hub_stairsleft:      {x: 52,  y: 230, name: "Abandoned Ship (Hub)"  },
            hub_stairsright:     {x: 155, y: 230, name: "Abandoned Ship (Hub)"  },
            hub_top1:            {x: 55,  y: 282, name: "Abandoned Ship (Hub)"  },
            hub_top2:            {x: 104, y: 262, name: "Abandoned Ship (Hub)"  },
            hub_locked:          {x: 184, y: 282, name: "Abandoned Ship (Hub)"  },
            hub_bot1:            {x: 82,  y: 340, name: "Abandoned Ship (Hub)"  },
            hub_bot2:            {x: 136, y: 310, name: "Abandoned Ship (Hub)"  },
            hub_bot3:            {x: 188, y: 340, name: "Abandoned Ship (Hub)"  },
        },
        miragetower: {
            f1_entrance: {x: 169, y: 495, name: "Mirage Tower (1F)"},
			f1_stairs:   {x: 250, y: 360, name: "Mirage Tower (1F)"},
			f2_entrance: {x: 250, y: 73,  name: "Mirage Tower (2F)"},
			f2_stairs:   {x: 297, y: 156, name: "Mirage Tower (2F)"},
			f3_entrance: {x: 610, y: 311, name: "Mirage Tower (3F)"},
			f3_stairs:   {x: 386, y: 250, name: "Mirage Tower (3F)"},
        },
        magmahideout_jaggedpass: {
            jagged_top: {x: 369, y: 602, name: "Jagged Pass (Top)"  },
            jagged_mid: {x: 554, y: 602, name: "Jagged Pass (Magma)"},
            jagged_bot: {x: 720, y: 602, name: "Jagged Pass (Bot)"  },
            f1_left:    {x: 90,  y: 233, name: "Magma Hideout (1F)" },
            f1_top:     {x: 248, y: 78 , name: "Magma Hideout (1F)" },
            f1_right:   {x: 329, y: 230, name: "Magma Hideout (1F)" },
            f2_top:     {x: 521, y: 76 , name: "Magma Hideout (2F)" },
            f2_mid:     {x: 566, y: 335, name: "Magma Hideout (2F)" },
            f2_bot:     {x: 664, y: 519, name: "Magma Hideout (2F)" },
            f3_top:     {x: 374, y: 370, name: "Magma Hideout (3F)" },
            f3_mid:     {x: 344, y: 465, name: "Magma Hideout (3F)" },
            f3_bot:     {x: 122, y: 614, name: "Magma Hideout (3F)" },
        },
        meteorfalls_r115: {
            r115_exit:        {x: 703, y: 570, name: "Route 115 (Meteor)"     },

            f1r1_entrance:    {x: 735, y: 440, name: "Meteor Falls (1F Room1)"},
            f1r1_exit:        {x: 512, y: 564, name: "Meteor Falls (1F Room1)"},
            f1r1_cave:        {x: 466, y: 430, name: "Meteor Falls (1F Room1)"},

            f1r2_cave:        {x: 536, y: 279, name: "Meteor Falls (1F Room2)"},
            f1r2_stairstop:   {x: 445, y: 80 , name: "Meteor Falls (1F Room2)"},
            f1r2_stairsmid:   {x: 490, y: 181, name: "Meteor Falls (1F Room2)"},
            f1r2_stairsright: {x: 715, y: 231, name: "Meteor Falls (1F Room2)"},

            f2_stairsbot:     {x: 85,  y: 336, name: "Meteor Falls (2F)"      },
            f2_stairstop:     {x: 89,  y: 128, name: "Meteor Falls (2F)"      },
            f2_stairsmid:     {x: 122, y: 213, name: "Meteor Falls (2F)"      },
            f2_stairsright:   {x: 296, y: 276, name: "Meteor Falls (2F)"      },
            f2_cavebot:       {x: 327, y: 573, name: "Meteor Falls (2F)"      },
            f2_cavetop:       {x: 280, y: 80 , name: "Meteor Falls (2F)"      },
        },
        mtpyre_r122: {
            r122_entrance:  {x: 654, y: 343, name: "Route 122 (Mt. Pyre)"},

            f1_entrance:    {x: 287, y: 270, name: "Mt. Pyre (1F)"       },
            f1_exit:        {x: 82,  y: 132, name: "Mt. Pyre (1F)"       },
            f1_stairs:      {x: 185, y: 48,  name: "Mt. Pyre (1F)"       },

            f2_stairsright: {x: 538, y: 10,  name: "Mt. Pyre (2F)"       },
            f2_stairsleft:  {x: 406, y: 45,  name: "Mt. Pyre (2F)"       },
            f2_hole:        {x: 550, y: 132, name: "Mt. Pyre (2F)"       },

            f3_stairsright: {x: 718, y: 60,  name: "Mt. Pyre (3F)"       },
            f3_stairsleft:  {x: 632, y: 100, name: "Mt. Pyre (3F)"       },
            f3_hole:        {x: 718, y: 272, name: "Mt. Pyre (3F)"       },

            f4_stairsleft:  {x: 82,  y: 405, name: "Mt. Pyre (4F)"       },
            f4_stairsright: {x: 167, y: 360, name: "Mt. Pyre (4F)"       },
            f4_hole:        {x: 151, y: 463, name: "Mt. Pyre (4F)"       },

            f5_holetop:     {x: 501, y: 381, name: "Mt. Pyre (5F)", corridor: "f5_holebot" },
            f5_holebot:     {x: 501, y: 459, name: "Mt. Pyre (5F)", corridor: "f5_holetop" },
        },
        departmentstore: {
            f1_entrance: {x: 48,  y: 395},
            f1_stairs:   {x: 168, y: 325},
            f2_left:     {x: 120, y: 180},
            f2_right:    {x: 168, y: 150},
            f3_left:     {x: 120, y: 35 },
            f3_right:    {x: 168, y: 9  },
            f4_left:     {x: 328, y: 325},
            f4_right:    {x: 368, y: 295},
            f5_left:     {x: 328, y: 180},
            f5_right:    {x: 368, y: 150},
        },
        aquahideout: {
            small_stairs:     {x: 242, y: 183, name: "Aqua Hideout (Small)"},
            small_left:       {x: 210, y: 237, name: "Aqua Hideout (Small)"},
            small_right:      {x: 274, y: 267, name: "Aqua Hideout (Small)"},

            long_top:         {x: 55,  y: 331, name: "Aqua Hideout (Long)" },
            long_bot:         {x: 56,  y: 406, name: "Aqua Hideout (Long)" },
            long_right:       {x: 251, y: 395, name: "Aqua Hideout (Long)" },
            generator_stairs: {x: 72,  y: 43 , name: "Aqua Hideout (Big)"  },
            generator_left:   {x: 71,  y: 201, name: "Aqua Hideout (Big)"  },
            generator_right:  {x: 280, y: 120, name: "Aqua Hideout (Big)"  },

            hub_entrance:     {x: 426, y: 116, name: "Aqua Hideout (Hub 1)"},
            hub_row1left:     {x: 358, y: 169, name: "Aqua Hideout (Hub 1)"},
            hub_row1mid:      {x: 426, y: 147, name: "Aqua Hideout (Hub 1)"},
            hub_row1right:    {x: 462, y: 169, name: "Aqua Hideout (Hub 1)"},

            hub_row2left:     {x: 358, y: 233, name: "Aqua Hideout (Hub 2)"},
            hub_row2mid:      {x: 426, y: 211, name: "Aqua Hideout (Hub 2)"},
            hub_row2right:    {x: 462, y: 233, name: "Aqua Hideout (Hub 2)"},

            hub_row3left:     {x: 358, y: 297, name: "Aqua Hideout (Hub 3)"},
            hub_row3mid:      {x: 426, y: 274, name: "Aqua Hideout (Hub 3)"},
            hub_row3right:    {x: 462, y: 297, name: "Aqua Hideout (Hub 3)"},

            hub_row4left:     {x: 358, y: 361, name: "Aqua Hideout (Hub 4)"},
            hub_row4mid:      {x: 426, y: 339, name: "Aqua Hideout (Hub 4)"},
            hub_row4right:    {x: 462, y: 361, name: "Aqua Hideout (Hub 4)"},
        },
        seafloor_ex: {
            room1_top:       {x: 104, y: 60 , name: "Seafloor (Room 1)"  },
            room1_right:     {x: 279, y: 207, name: "Seafloor (Room 1)"  },
            room1_left:      {x: 87,  y: 284, name: "Seafloor (Room 1)"  },

            room3_topleft:   {x: 615, y: 72 , name: "Seafloor (Room 3)"  },
            room3_topright:  {x: 722, y: 25 , name: "Seafloor (Room 3)"  },
            room3_mid:       {x: 702, y: 185, name: "Seafloor (Room 3)"  },
            room3_bot:       {x: 711, y: 284, name: "Seafloor (Room 3)"  },

            room4_topleft:   {x: 336, y: 47,  name: "Seafloor (Boulders)"},
            room4_topright:  {x: 526, y: 28,  name: "Seafloor (Boulders)"},
            room4_botleft:   {x: 344, y: 161, name: "Seafloor (Boulders)"},
            room4_botright:  {x: 507, y: 142, name: "Seafloor (Boulders)"},

            room7_top:       {x: 506, y: 227, name: "Seafloor (Puzzle)"  },
            room7_right:     {x: 351, y: 279, name: "Seafloor (Puzzle)"  },
            room7_left:      {x: 515, y: 320, name: "Seafloor (Puzzle)"  },
        },
        skypillar_r131_ex: {
            r131_entrance: {x: 184, y: 551,                           name: "Route 131 (Sky Pillar)"},
            f1_entrance:   {x: 111, y: 431,                           name: "Sky Pillar (1F)"       },
            f1_stairs:     {x: 167, y: 227,                           name: "Sky Pillar (1F)"       },
            f2_left:       {x: 56,  y: 50,  corridor: "left_side",    name: "Sky Pillar (2F)"       },
            f2_right:      {x: 138, y: 21,  corridor: "right_side",   name: "Sky Pillar (2F)"       },
            f3_left:       {x: 280, y: 287,                           name: "Sky Pillar (3F)"       },
            f3_mid:        {x: 360, y: 227,                           name: "Sky Pillar (3F)"       },
            f3_right:      {x: 435, y: 287,                           name: "Sky Pillar (3F)"       },
            f4_left:       {x: 280, y: 50,                            name: "Sky Pillar (4F)"       },
            f4_mid:        {x: 360, y: 14,                            name: "Sky Pillar (4F)"       },
            f4_right:      {x: 435, y: 50,                            name: "Sky Pillar (4F)"       },
        },
        victoryroad: {
            bf1_topleft:  {x: 137, y: 82 , name: "Victory Road (1BF)"},
            bf1_midleft:  {x: 278, y: 230, name: "Victory Road (1BF)"},
            bf1_midright: {x: 330, y: 373, name: "Victory Road (1BF)"},
            bf1_botleft:  {x: 89,  y: 395, name: "Victory Road (1BF)"},
            bf1_botmid:   {x: 489, y: 440, name: "Victory Road (1BF)"},
            bf1_botright: {x: 680, y: 366, name: "Victory Road (1BF)"},

            bf2_top:      {x: 680, y: 540, name: "Victory Road (2BF)"},
            bf2_mid:      {x: 313, y: 570, name: "Victory Road (2BF)"},
            bf2_left:     {x: 86,  y: 715, name: "Victory Road (2BF)"},
            bf2_right:    {x: 484, y: 695, name: "Victory Road (2BF)"},
        },
        victoryroad_corridors: {
            f1_entrybot:  {x: 207, y: 530, corridor: "f1_entrytop",  name: "Victory Road (F1 Entry)" },
			f1_entrytop:  {x: 127, y: 215, corridor: "f1_entrybot",  name: "Victory Road (F1 Entry)" },
			f1_exitbot:   {x: 288, y: 455, corridor: "f1_exittop",   name: "Victory Road (F1 Exit)"  },
			f1_exittop:   {x: 526, y: 100, corridor: "f1_exitbot",   name: "Victory Road (F1 Exit)"  },
			exterior_bot: {x: 71,  y: 65,  corridor: "exterior_top", name: "Ever Grande (Entrance)"  },
			exterior_top: {x: 219, y: 45,  corridor: "exterior_bot", name: "Ever Grande (Entrance)"  },
        },
        navelrock: {
            stairsleft:   {x: 74,  y: 76 },
            stairsright:  {x: 360, y: 76 },
            stairsbottom: {x: 184, y: 252},
        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["corridor",    0], ["dead_end", null], ["event",      0], ["center",      0], ["mart",        0], ["one_way", null]],
        [["normal",      0], ["fighting",    0], ["flying",      0], ["poison",     0], ["ground",      0], ["rock",        0], ["bug",        0], ["ghost",       0], ["fairy",       0]],
        [["steel",       0], ["fire",        0], ["water",       0], ["grass",      0], ["electric",    0], ["psychic",     0], ["ice",        0], ["dragon",      0], ["dark",        0]],
        [["1",           0], ["2",           0], ["3",           0], ["4",          0], ["5",           0], ["6",           0], ["7",          0], ["8",           0]],
        [["team_magma",  0], ["team_aqua",   0], ["",    undefined], ["masterball", 0], ["rayquaza",   0], ["e_legendary", 0], ["c_legendary", 0]],
        [["e_bush",      0], ["e_surf",      0], ["e_boulder",   0], ["e_darkness", 0], ["e_rock",      0], ["e_waterfall", 0], ["e_dive",     0], ["bike_needed", 0], ["e_trainer",   0]],
    ],
    progress: [
        [["stone_badge", 0], ["knuckle_badge", 0], ["dynamo_badge", 0], ["heat_badge",   0], ["balance_badge", 0], ["feather_badge", 0], ["mind_badge",    0], ["rain_badge", 0]],
        [["e_sidney",    0], ["e_phoebe",      0], ["e_glacia",     0], ["e_drake",      0], ["e_wallace",     0], ["",      undefined], ["",      undefined], ["e_steven",   0]],
        [["hm_cut",      0], ["hm_fly",        0], ["hm_surf",      0], ["hm_strength",  0], ["hm_flash",      0], ["hm_rocksmash",  0], ["hm_waterfall",  0], ["hm_dive",    0]],
        [["bike",        0], ["storage_key",   0], ["magma_emblem", 0], ["go_goggles",   0], ["devon_scope",   0]],
    ],
    modifiers: [
		[["#ce4069", 0], ["#ff9c54", 0], ["#f3d23b", 0], ["#743683", 0], ["#654321", 0], ["#014f01", 0]],
		[["#4d90d5", 0], ["#74cec0", 0], ["#90c12c", 0], ["#ec8fe6", 0], ["#5a5366", 0], ["#00146b", 0]],
	],
};