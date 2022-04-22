var crystal = {
    ready: false,
    name: "crystal",
    start_location: "cherrygrove",
    font: "GameBoy_Font",
    font_size: "22px",
    locations: {
        // Cities
        cherrygrove: {x: 83,  y: 72, w: 8, h: 8, name: "Cherrygrove City" },
        violet:      {x: 67,  y: 32, w: 8, h: 8, name: "Violet City"      },
        azalea:      {x: 51,  y: 96, w: 8, h: 8, name: "Azalea Town"      },
        goldenrod:   {x: 35,  y: 64, w: 8, h: 8, name: "Goldenrod City"   },
        ecruteak:    {x: 51,  y: 16, w: 8, h: 8, name: "Ecruteak City"    },
        olivine:     {x: 19,  y: 32, w: 8, h: 8, name: "Olivine City"     },
        cianwood:    {x: 3,   y: 72, w: 8, h: 8, name: "Cianwood City"    },
        mahogany:    {x: 91,  y: 16, w: 8, h: 8, name: "Mahogany Town"    },
        blackthorn:  {x: 115, y: 16, w: 8, h: 8, name: "Blackthorn City"  },

        pallet:      {x: 179, y: 80,  w: 8, h: 8, name: "Pallet Town"     },
        viridian:    {x: 179, y: 48,  w: 8, h: 8, name: "Viridian City"   },
        pewter:      {x: 179, y: 24,  w: 8, h: 8, name: "Pewter City"     },
        cerulean:    {x: 227, y: 24,  w: 8, h: 8, name: "Cerulean City"   },
        vermillion:  {x: 227, y: 56,  w: 8, h: 8, name: "Vermillion City" },
        lavender:    {x: 259, y: 40,  w: 8, h: 8, name: "Lavender Town"   },
        celadon:     {x: 203, y: 40,  w: 8, h: 8, name: "Celadon City"    },
        saffron:     {x: 227, y: 40,  w: 8, h: 8, name: "Saffron City"    },
        fuchsia:     {x: 219, y: 88,  w: 8, h: 8, name: "Fuchsia City"    },
        cinnabar:    {x: 179, y: 104, w: 8, h: 8, name: "Cinnabar Island" },
        
        // Routes
        
        // Important locations
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        cherrygrove: {
            mart:   {x: 474, y: 50  },
			center: {x: 377, y: 83  },
			house1: {x: 280, y: 112 },
			house2: {x: 409, y: 147 },
			house3: {x: 504, y: 177 },
        },

        // Routes

        // Important locations
        
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
        [["zephyr_badge",  0], ["hive_badge",    0], ["plain_badge",   0], ["fog_badge",     0], ["storm_badge", 0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge", 0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge",  0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["hm_cut",        0], ["hm_fly",        0], ["hm_surf",       0], ["hm_strength",   0], ["hm_flash",    0], ["",      undefined], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["bike",          0]],
    ],
    obtained: new Set()
};