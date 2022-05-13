var hgss = {
	debug: true,
    name: "hgss",
    start_location: "newbark",
    font: "NDS_Font",
    font_size: "38px",

    // Config texts
	config_name: "HeatGold/SoulSilver",
	config_randomizer_author: "Adrienn Tindall",
	config_randomizer_link: "https://github.com/adrienntindall/hgss-map-randomizer/releases",
	//config_tracker_author: "", 
	//config_tracker_link: "",

	// Tracker information
    locations: {
        // Cities
        newbark: {x: 155, y: 93, w: 12, h: 12, name: "New Bark Town\nTest" },
        
        // Routes
        
        // Important locations
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        newbark: {
			left:  {x: 114, y: 234 },
			right: {x: 292, y: 324 },
        },

        // Routes

        // Important locations
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",     0], ["center", 0], ["mart",     0], ["one_way",  null]],
        [["normal",  0], ["fighting",    0], ["flying",    0], ["poison", 0], ["ground",   0], ["rock",        0], ["bug",         0], ["ghost",       0], ["fairy",     0]],
        [["steel",   0], ["fire",        0], ["water",     0], ["grass",  0], ["electric", 0], ["psychic",     0], ["ice",         0], ["dragon",      0], ["dark",      0]],
        [["1",       0], ["2",           0], ["3",         0], ["4",      0], ["5",        0], ["6",           0], ["7",           0], ["8",           0]],
        [["p_bush",  0], ["p_surf",      0], ["p_boulder", 0], ["p_fog",  0], ["p_rock",   0], ["p_waterfall", 0], ["p_rockywall", 0], ["bike_needed", 0], ["p_trainer", 0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",     0], ["plain_badge",   0], ["fog_badge",     0], ["storm_badge", 0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge",  0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge",  0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["c_will",        0], ["c_koga",         0], ["c_bruno",       0], ["c_karen",       0], ["c_lance",     0]],
        [["hm_cut",        0], ["hm_fly",         0], ["hm_surf",       0], ["hm_strength",   0], ["hm_flash",    0], ["hm_whirlpool",  0], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["radio_card",    0], ["expansion_card", 0], ["squirt_bottle", 0], ["secret_potion", 0], ["card_key",    0], ["ss_ticket",     0], ["pass",          0]],
        [["bike",          0], ["clear_bell",     0], ["rainbow_wing",  0], ["basement_key",  0]],
    ],
};