var crystal = {
    ready: false,
    name: "crystal",
    start_location: "cherrygrove",
    font: "Gameboy_Font",
    font_size: "22px",
    locations: {
        // Cities
        cherrygrove: {x: 83,  y: 72, w: 8,  h: 8,  scale: 1, name: "Cherrygrove City\nTest" },
        
        // Routes
        
        // Important locations
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
        cherrygrove: {
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
        [["hm_cut", 0], ["hm_fly", 0], ["hm_surf", 0], ["hm_strength", 0], ["hm_flash", 0], ["", undefined], ["hm_waterfall", 0], ["hm_rocksmash", 0]],
        [["bike",   0]],
    ],
    obtained: new Set()
};