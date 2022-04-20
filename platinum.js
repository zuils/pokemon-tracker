var platinum = {
    ready: false,
    name: "platinum",
    start_location: "sandgem",
    font: "NDS_Font",
    font_size: "38px",
    locations: {
        // Cities
        sandgem:      {x: 36,  y: 143, w: 8,  h: 8,  scale: 1, name: "Sandgem Town"   },
        jubilife:     {x: 29,  y: 122, w: 15, h: 15, scale: 1, name: "Jubilife City"  },
        oreburgh:     {x: 57,  y: 122, w: 15, h: 15, scale: 1, name: "Oreburgh City"  },
        floaroma:     {x: 36,  y: 94,  w: 8,  h: 15, scale: 1, name: "Floaroma Town"  },
        eterna:       {x: 64,  y: 73,  w: 15, h: 15, scale: 1, name: "Eterna City"    },
        hearthome:    {x: 99,  y: 108, w: 15, h: 15, scale: 1, name: "Hearthome City" },
        solaceon:     {x: 120, y: 101, w: 15, h: 8,  scale: 1, name: "Solaceon Town"  },
        veilstone:    {x: 148, y: 87,  w: 15, h: 15, scale: 1, name: "Veilstone City" },
        pastoria:     {x: 127, y: 136, w: 15, h: 15, scale: 1, name: "Pastoria City"  },
        celestic:     {x: 100, y: 73,  w: 8,  h: 8,  scale: 1, name: "Celestic Town"  },
        canalave:     {x: 8,   y: 115, w: 8,  h: 15, scale: 1, name: "Canalave City"  },
        snowpoint:    {x: 78,  y: 3,   w: 8,  h: 15, scale: 1, name: "Snowpoint City" },
        sunyshore:    {x: 183, y: 122, w: 15, h: 15, scale: 1, name: "Sunyshore City" },
        league:       {x: 183, y: 80,  w: 8,  h: 8,  scale: 1, name: "Pokémon League" },
        fightarea:    {x: 134, y: 52,  w: 15, h: 8,  scale: 1, name: "Fight Area"     },
        survivalarea: {x: 141, y: 31,  w: 8,  h: 8,  scale: 1, name: "Survival Area"  },
        resortarea:   {x: 176, y: 59,  w: 8,  h: 8,  scale: 1, name: "Resort Area"    },
        
        // Routes
        route201:          {x: 22,  y: 143, w: 8,  h: 8,  scale: 1, name: "Route 201"                        },
        oreburghgate_r203: {x: 47,  y: 122, w: 8,  h: 8,  scale: 1, name: "Oreburgh Gate\nRoute 203"         },
        route204:          {x: 36,  y: 111, w: 8,  h: 8,  scale: 1, name: "Route 204"                        },
        windworks:         {x: 50,  y: 101, w: 8,  h: 8,  scale: 1, name: "Valley Windworks"                 },
        ironworks_meadow:  {x: 36,  y: 81,  w: 8,  h: 8,  scale: 1, name: "Fuego Ironworks\nFloaroma Meadow" },
        r212_mansion:      {x: 99,  y: 136, w: 15, h: 15, scale: 1, name: "Route 212\nPokémon Mansion"       },
        route214:          {x: 155, y: 108, w: 8,  h: 8,  scale: 1, name: "Route 214"                        },
        valorlakefront:    {x: 148, y: 122, w: 15, h: 15, scale: 1, name: "Valor Lakefront\nRoute 213"       },
        route206:          {x: 64,  y: 94,  w: 8,  h: 15, scale: 1, name: "Route 206"                        },
        route207_route208: {x: 78,  y: 115, w: 8,  h: 8,  scale: 1, name: "Route 207\nRoute 208"             },
        route209:          {x: 120, y: 115, w: 8,  h: 8,  scale: 1, name: "Route 209"                        },
        route210_route215: {x: 120, y: 80,  w: 15, h: 15, scale: 1, name: "Route 210\nRoute 215"             },
        route211:          {x: 85 , y: 73,  w: 8,  h: 8,  scale: 1, name: "Route 211"                        },
        route216_route217: {x: 64,  y: 18,  w: 8,  h: 15, scale: 1, name: "Route 216\nRoute 217"             },
        route221:          {x: 49,  y: 157, w: 15, h: 8,  scale: 1, name: "Route 221"                        },
        route222:          {x: 170, y: 129, w: 8,  h: 8,  scale: 1, name: "Route 222"                        },
        route225:          {x: 134, y: 41,  w: 8,  h: 8,  scale: 1, name: "Route 225"                        },
        route226_route227: {x: 162, y: 24,  w: 8,  h: 15, scale: 1, name: "Route 226\nRoute 227"             },
        route228:          {x: 169, y: 45,  w: 8,  h: 8,  scale: 1, name: "Route 228"                        },
        
        // Important locations
        jubilifetv_poketch: {x: 24,  y: 111, w: 8, h: 8,  scale: 1, name: "Jubilife TV\nPokétch Company" },
        eternagalactic:     {x: 64,  y: 60,  w: 8, h: 8,  scale: 1, name: "Galactic Eterna"              },
        coronet:            {x: 78,  y: 94,  w: 8, h: 15, scale: 1, name: "Mt. Coronet"                  },
        solaceonruins:      {x: 138, y: 103, w: 8, h: 8,  scale: 1, name: "Solaceon Ruins"               },
        departmentstore:    {x: 145, y: 74,  w: 8, h: 8,  scale: 1, name: "Department Store"             },
        galactichq:         {x: 158, y: 74,  w: 8, h: 8,  scale: 1, name: "Team Galactic HQ"             },
        coronetsummit:      {x: 85,  y: 52,  w: 8, h: 15, scale: 1, name: "Mt. Coronet Summit"           },
        ironisland:         {x: 22,  y: 66,  w: 8, h: 8,  scale: 1, name: "Iron Island"                  },
        victoryroad:        {x: 183, y: 92,  w: 8, h: 8,  scale: 1, name: "Victory Road"                 },
        eternaforest_r205:  {x: 50,  y: 73,  w: 8, h: 8,  scale: 1, name: "Eterna Forest\nRoute 205"     },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        /*oldale: {
            left:   {x: 88,  y: 99 },
            mart:   {x: 232, y: 82 },
            center: {x: 103, y: 243},
            right:  {x: 248, y: 242},
        },*/

        /*lavaridge: {
            center:      {x: 100, y: 78 , name: "Lavaridge (Outside)"},
            mart:        {x: 199, y: 61 , name: "Lavaridge (Outside)"},
            gym:         {x: 42,  y: 218, name: "Lavaridge (Outside)"},
            herbs:       {x: 140, y: 215, name: "Lavaridge (Outside)"},
            house:       {x: 230, y: 215, name: "Lavaridge (Outside)"},
            center_top:  {x: 325, y: 24 , name: "Lavaridge (Center)" },
            center_left: {x: 313, y: 99 , name: "Lavaridge (Center)" },
            center_bot:  {x: 398, y: 149, name: "Lavaridge (Center)" },
        },*/

        // Routes

        // Important locations
        departmentstore: {
            one:   {x: 100, y: 50  },
            two:   {x: 100, y: 100 },
            three: {x: 100, y: 150 },
        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",  0], ["center", 0], ["mart",     0], ["one_way", null]],
        [["normal",  0], ["fighting",    0], ["flying", 0], ["poison", 0], ["ground",   0], ["rock",       0], ["bug",  0], ["ghost",   0], ["fairy", 0]],
        [["steel",   0], ["fire",        0], ["water",  0], ["grass",  0], ["electric", 0], ["psychic",    0], ["ice",  0], ["dragon",  0], ["dark",  0]],
        [["1",       0], ["2",           0], ["3",      0], ["4",      0], ["5",        0], ["6",          0], ["7",    0], ["8",       0]],
    ],
    progress: [
        [["coal_badge", 0], ["forest_badge", 0], ["cobble_badge", 0], ["fen_badge",   0], ["relic_badge", 0], ["mine_badge",   0], ["icicle_badge", 0], ["beacon_badge", 0]],
        [["e4_bug",     0], ["e4_ground",    0], ["e4_fire",      0], ["e4_psychic",  0], ["p_champion",  0]],
        [["hm_cut",     0], ["hm_fly",       0], ["hm_surf",      0], ["hm_strength", 0], ["hm_defog",    0], ["hm_rocksmash", 0], ["hm_waterfall", 0], ["hm_rockclimb", 0]],
        [["bike",       0]],
    ],
    obtained: new Set()
};