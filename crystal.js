var crystal = {
    name: "crystal",
    start_location: "cherrygrove",
    font: "GameBoy_Font",
    font_size: "22px",
    locations: {
        // Cities
        cherrygrove:   {x: 83,  y: 72, w: 8, h: 8, name: "Cherrygrove City"        },
        violet:        {x: 67,  y: 32, w: 8, h: 8, name: "Violet City"             },
        azalea_r33:    {x: 51,  y: 96, w: 8, h: 8, name: "Azalea Town\nRoute 33"   },
        goldenrod:     {x: 35,  y: 64, w: 8, h: 8, name: "Goldenrod City"          },
        ecruteak:      {x: 51,  y: 16, w: 8, h: 8, name: "Ecruteak City"           },
        olivine_r40:   {x: 19,  y: 32, w: 8, h: 8, name: "Olivine City\nRoute 40"  },
        cianwood:      {x: 3,   y: 72, w: 8, h: 8, name: "Cianwood City"           },
        mahogany_r44:  {x: 91,  y: 16, w: 8, h: 8, name: "Mahogany Town\nRoute 44" },
        blackthorn:    {x: 115, y: 16, w: 8, h: 8, name: "Blackthorn City"         },
        indigoplateau: {x: 155, y: 8,  w: 8, h: 8, name: "Indigo Plateau"          },

        pallet:       {x: 179, y: 80,  w: 8, h: 8, name: "Pallet Town"             },
        viridian_r22: {x: 179, y: 48,  w: 8, h: 8, name: "Viridian City\nRoute 22" },
        pewter:       {x: 179, y: 24,  w: 8, h: 8, name: "Pewter City"             },
        cerulean:     {x: 227, y: 24,  w: 8, h: 8, name: "Cerulean City"           },
        vermillion:   {x: 227, y: 56,  w: 8, h: 8, name: "Vermillion City"         },
        lavender:     {x: 259, y: 40,  w: 8, h: 8, name: "Lavender Town"           },
        celadon:      {x: 203, y: 40,  w: 8, h: 8, name: "Celadon City"            },
        saffron:      {x: 227, y: 40,  w: 8, h: 8, name: "Saffron City"            },
        fuchsia:      {x: 219, y: 88,  w: 8, h: 8, name: "Fuchsia City"            },
        cinnabar:     {x: 179, y: 104, w: 8, h: 8, name: "Cinnabar Island"         },
        
        // Routes
        r29_r45_r46:   {x: 107, y: 48,  w: 8,  h: 14, name: "Route 29\nRoute 45 / 46" },
        r30_r31:       {x: 83,  y: 44,  w: 8,  h: 14, name: "Route 30\nRoute 31"      },
        alphruins_r32: {x: 67,  y: 67,  w: 8,  h: 14, name: "Ruins of Alph\nRoute 32" },
        r34:           {x: 35,  y: 81,  w: 8,  h: 8,  name: "Route 34"                },
        r35_r36:       {x: 35,  y: 32,  w: 14, h: 8,  name: "Route 35\nRoute 36"      },
        r38_r39:       {x: 26,  y: 16,  w: 8,  h: 8,  name: "Route 38\nRoute 39"      },
        r41:           {x: 11,  y: 52,  w: 8,  h: 8,  name: "Route 41"                },
        ragelake_r43:  {x: 91,  y: 0,   w: 8,  h: 8,  name: "Lake of Rage\nRoute 43"  },
        r26_r27:       {x: 149, y: 66,  w: 14, h: 14, name: "Route 26\nRoute 27"      },
        
        r2:            {x: 179, y: 35,  w: 8,  h: 8,  name: "Route 2"                 },
        r19_r20:       {x: 195, y: 104, w: 8,  h: 8,  name: "Route 19\nRoute 20"      },
        r25:           {x: 243, y: 8,   w: 8,  h: 8,  name: "Route 25"                },

        // Important locations
        darkcave:               {x: 96,  y: 44, w: 8, h: 8,  name: "Dark Cave"                      },
        puzzlechambers:         {x: 58,  y: 42, w: 8, h: 8,  name: "Puzzle Chambers"                },
        unioncave:              {x: 67,  y: 96, w: 8, h: 8,  name: "Union Cave"                     },
        departmentstore:        {x: 46,  y: 57, w: 8, h: 8,  name: "Department Store"               },
        radiotower_underground: {x: 46,  y: 71, w: 8, h: 8,  name: "Radio Tower\nUnderground"       },
        tintower_burnedtower:   {x: 51,  y: 6,  w: 8, h: 8,  name: "Tin Tower\nBurned Tower"        },
        mtmortar_r42:           {x: 67,  y: 16, w: 8, h: 8,  name: "Mt. Mortar\nRoute 42"           },
        lighthouse:             {x: 22,  y: 44, w: 8, h: 8,  name: "Olivine's Lighthouse"           },
        ssaqua:                 {x: 213, y: 66, w: 8, h: 8,  name: "S.S. Aqua"                      },
        whirlislands:           {x: 11,  y: 64, w: 8, h: 8,  name: "Whirl Islands"                  },
        victoryroad_reception:  {x: 155, y: 34, w: 8, h: 14, name: "Victory Road\nLeague Reception" },
        
        mtmoon_r3_r4:           {x: 203, y: 24, w: 8, h: 8, name: "Mt. Moon\nRoute 3 / 4"           },
        mtsilver_r28:           {x: 131, y: 40, w: 8, h: 8, name: "Mt. Silver\nRoute 28"            },

    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        cherrygrove: {
            mart:   {x: 474, y: 22  },
			center: {x: 377, y: 84  },
			house1: {x: 280, y: 142 },
			house2: {x: 409, y: 177 },
			house3: {x: 504, y: 215 },
        },

        // Routes

        // Important locations
        
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",     0], ["center",      0], ["mart",        0], ["one_way",  null]],
        [["normal",  0], ["fighting",    0], ["flying",    0], ["poison",      0], ["ground",      0], ["rock",        0], ["bug",    0], ["ghost",       0], ["fairy",     0]],
        [["steel",   0], ["fire",        0], ["water",     0], ["grass",       0], ["electric",    0], ["psychic",     0], ["ice",    0], ["dragon",      0], ["dark",      0]],
        [["1",       0], ["2",           0], ["3",         0], ["4",           0], ["5",           0], ["6",           0], ["7",      0], ["8",           0]],
        [["c_bush",  0], ["c_surf",      0], ["c_boulder", 0], ["c_darkness",  0], ["c_whirlpool", 0], ["c_waterfall", 0], ["c_rock", 0], ["bike_needed", 0], ["c_trainer", 0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",    0], ["plain_badge",   0], ["fog_badge",     0], ["storm_badge", 0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge", 0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge",  0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["c_will",        0], ["c_koga",        0], ["c_bruno",       0], ["c_karen",       0], ["c_lance",     0]],
        [["hm_cut",        0], ["hm_fly",        0], ["hm_surf",       0], ["hm_strength",   0], ["hm_flash",    0], ["hm_whirlpool",  0], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["bike",          0], ["squirt_bottle", 0], ["basement_key",  0], ["card_key",      0], ["pass",        0], ["ss_ticket",     0]],
    ],
};