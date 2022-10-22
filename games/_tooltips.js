// Text to show as tooltips. It's divided by ~folders~ not by games
// null      = won't get a tooltip
// undefined = default name
const tooltips = {
    /* General marks */
    unknown:  "Unknown",
    corridor: "Unknown\nCorridor",
    dead_end: "Dead End",
    event:     undefined,
    center:   "Pokémon\nCenter",
    mart:     "Pokémon\nMart",
    one_way:   undefined,
    // Types left undefined
    1: null, 2: null, 3: null, 4: null,
    5: null, 6: null, 7: null, 8: null,
    "#ce4069": "Red",  "#ff9c54": "Orange", "#f3d23b": "Yellow", "#743683": "Purple", "#654321": "Brown", "#014f01": "Dark Green",
    "#4d90d5": "Blue", "#74cec0": "Cyan",   "#90c12c": "Green",  "#ec8fe6": "Pink",   "#5a5366": "Gray",  "#00146b": "Dark Blue",

    /* Crystal */
    team_rocket:  "Team\nRocket",
    c_rival:      "Silver\n(Rival)",
    c_gyarados:   "Red\nGyarados",
    c_legendary:  "Lugia\nHo-oh",
    burned_tower: "Burned\nTower",
    c_kurt:       "Kurt's\nHouse",
    c_unown:      "Unown\nRoom",
    c_train:      "Magnet\nTrain",
    dratini:      "Dragon's\nDen Room",
    c_bush:       "Blocked by\nCut",
    c_surf:       "Blocked by\nSurf",
    c_boulder:    "Blocked by\nStrength",
    c_darkness:   "Blocked by\nFlash",
    c_whirlpool:  "Blocked by\nWhirlpool",
    c_waterfall:  "Blocked by\nWaterfall",
    c_rock:       "Blocked by\nRock Smash",
    bike_needed:  "Blocked by\nBicycle Req.",
    c_trainer:    "Blocked by\nTrainer Fight",

    zephyr_badge:  "Zephyr Badge\n(Flash)",
    hive_badge:    "Hive Badge\n(Cut)",
    plain_badge:   "Plain Badge\n(Strength)",
    fog_badge:     "Fog Badge\n(Surf)",
    storm_badge:   "Storm Badge\n(Fly)",
    mineral_badge: undefined,
    glacier_badge: "Glacier Badge\n(Waterfall)",
    rising_badge:  "Rising Badge\n(Whirlpool)",
    c_will:  "Elite 4\nWill",
    c_koga:  "Elite 4\nKoga",
    c_bruno: "Elite 4\nBruno",
    c_karen: "Elite 4\nKaren",
    c_lance: "Champion\nLance",
    c_oak:   "Professor\nOak's Lab",
    c_red:   "Red\n(Post-Game)",
    hm_cut:       "HM 01\n(Cut)",
    hm_fly:       "HM 02\n(Fly)",
    hm_surf:      "HM 03\n(Surf)",
    hm_strength:  "HM 04\n(Strength)",
    hm_flash:     "HM 05\n(Flash)",
    hm_whirlpool: "HM 06\n(Whirlpool)",
    hm_waterfall: "HM 07\n(Waterfall)",
    crystal: {
        hm_rocksmash: "TM 08\n(Rock Smash)",
    },
    pokegear:       "Pokégear",
    radio_card:     undefined,
    expansion_card: undefined,
    squirt_bottle:  undefined,
    secret_potion:  undefined,
    card_key:       "Radio Tower\nCard Key",
    ss_ticket:      "S.S. Anne\nTicket",
    pass:           "Magnet Train\nPass",
    machine_part:   undefined,
    clear_bell:     undefined,
    rainbow_wing:   undefined,
    silver_wing:    undefined,
    basement_key:   undefined,
    lost_item:      undefined,
    red_scale:      undefined,
    mystery_egg:    undefined,
    pokedex:        "Pokédex",
    bike:           "Bicycle",
    blue_card:      "Buena's\nBlue Card",
    coin_case:      undefined,
    itemfinder:     undefined,
    old_rod:        undefined,
    good_rod:       undefined,
    super_rod:      undefined,

    /* Emerald */
    e_trainer:    "Blocked by\nTrainer Fight",
    e_legendary:  "Kyogre\nGroudon",
    e_bush:       "Blocked by\nCut",
    e_surf:       "Blocked by\nSurf",
    e_boulder:    "Blocked by\nStrength",
    e_darkness:   "Blocked by\nFlash",
    e_rock:       "Blocked by\nRock Smash",
    e_waterfall:  "Blocked by\nWaterfall",
    e_dive:       "Blocked by\nDive",

    stone_badge:   "Stone Badge\n(Cut)",
    knuckle_badge: "Knuckle Badge\n(Flash)",
    dynamo_badge:  "Dynamo Badge\n(Rock Smash)",
    heat_badge:    "Heat Badge\n(Strength)",
    balance_badge: "Balance Badge\n(Surf)",
    feather_badge: "Feather Badge\n(Fly)",
    mind_badge:    "Mind Badge\n(Dive)",
    rain_badge:    "Rain Badge\n(Waterfall)",
    e_sidney:  "Elite 4\nSidney",
    e_phoebe:  "Elite 4\nPhoebe",
    e_glacia:  "Elite 4\nGlacia",
    e_drake:   "Elite 4\nDrake",
    e_wallace: "Champion\nWallace",
    e_steven:  "Steven\n(Post-Game)",
    storage_key: "Abandoned Ship\nStorage Key",
    magma_emblem: undefined,
    go_goggles:  "Go-Goggles",
    devon_scope:  undefined,
    hm_rocksmash: "HM 06\n(Rock Smash)",
    hm_dive:      "HM 08\n(Dive)",

    /* Fire Red - Leaf Green */
    frlg_rival: "Blue\n(Rival)",
    safari:     "Safari Zone",
    masterball: "Top Floor\nSilph Co.",
    frlg_trainer:   "Blocked by\nTrainer Fight",
    frlg_bush:      "Blocked by\nCut",
    frlg_surf:      "Blocked by\nSurf",
    frlg_boulder:   "Blocked by\nStrength",
    frlg_darkness:  "Blocked by\nFlash",
    frlg_rock:      "Blocked by\nRock Smash",
    frlg_waterfall: "Blocked by\nWaterfall",
    frlg: {
        boulder_badge: "Boulder Badge\n(Flash)",
        cascade_badge: "Cascade Badge\n(Cut)",
        thunder_badge: "Thunder Badge\n(Fly)",
        rainbow_badge: "Rainbow Badge\n(Strength)",
        soul_badge:    "Soul Badge\n(Surf)",
        marsh_badge:   "Marsh Badge\n(Rock Smash)",
        volcano_badge: "Volcano Badge\n(Waterfall)",
        earth_badge:    undefined,
        card_key:   "Silph Co.\nCard Key",
        lift_key:   "Rocket's Hideout\nLift Key",
        secret_key: "Blaine's Gym\nSecret Key",
    },

    frlg_lorelei: "Elite 4\nLorelei",
    frlg_bruno:   "Elite 4\nBruno",
    frlg_agatha:  "Elite 4\nAgatha",
    frlg_lance:   "Elite 4\nLance",
    frlg_blue:    "Champion\nBlue",
    parcel: "Oak's Parcel",
    poke_flute: "PokéFlute",
    tea: undefined,
    silph_scope: undefined,
    gold_teeth: undefined,
    tri_pass: "Tri-Pass",

    /* Platinum */
    regis: "Regice Regirock\nRegisteel",
    p_trainer:   "Blocked by\nTrainer Fight",
    p_bush:      "Blocked by\nCut",
    p_surf:      "Blocked by\nSurf",
    p_boulder:   "Blocked by\nStrength",
    p_fog:       "Blocked by\nDefog",
    p_rock:      "Blocked by\nRock Smash",
    p_waterfall: "Blocked by\nWaterfall",
    p_rockywall: "Blocked by\nRock Climb",

    coal_badge:   "Coal Badge\n(Rock Smash)",
    forest_badge: "Forest Badge\n(Cut)",
    cobble_badge: "Cobble Badge\n(Fly)",
    fen_badge:    "Fen Badge\n(Surf)",
    relic_badge:  "Relic Badge\n(Defog)",
    mine_badge:   "Mine Badge\n(Strength)",
    icicle_badge: "Icile Badge\n(Rock Climb)",
    beacon_badge: "Beacon Badge\n(Waterfall)",
    p_aaron:   "Elite 4\nAaron",
    p_bertha:  "Elite 4\nBertha",
    p_flint:   "Elite 4\nFlint",
    p_lucian:  "Elite 4\nLucian",
    p_cynthia: "Champion\nCynthia",
    hm_defog: "HM 05\n(Defog)",
    hm_rockclimb: "HM 08\n(Rock Climb)",

    /* Heart Gold - Soul Silver */
    hgss_surf:       "Blocked by\nSurf",
    hgss_whirlpool:  "Blocked by\nWhirlpool",
    hgss_darkness:   "Blocked by\nFlash",
    hgss: {
        zephyr_badge:  "Zephyr Badge\n(Rock Smash)",
        glacier_badge: "Glacier Badge\n(Whirlpool)",
        rising_badge:  "Rising Badge\n(Waterfall)",
        earth_badge:   "Earth Badge\n(Rock Climb)",
        hm_whirlpool:  "HM 05\n(Whirlpool)",
        hm_rocksmash:  "HM 06\n(Rock Smash)",
        hm_flash:      "TM 70\n(Flash)",
    },
    hgss_will:  "Elite 4\nWill",
    hgss_koga:  "Elite 4\nKoga",
    hgss_bruno: "Elite 4\nBruno",
    hgss_karen: "Elite 4\nKaren",
    hgss_lance: "Champion\nLance",
    hgss_red:   "Red\n(Post-Game)",


    /* Black 2 - White 2 */
    w2_n: "N",
    w2_ghetsis: "Ghetsis",
    b2w2_legendary: "Kyurem\nReshiram Zekrom",
    w2_bush:       "Blocked by\nCut",
    w2_surf:       "Blocked by\nSurf",
    w2_boulder:    "Blocked by\nStrength",
    w2_waterfall:  "Blocked by\nWaterfall",
    basicbadge:  "Basic Badge",
    toxicbadge:  "Toxic Badge",
    insectbadge: "Insect Badge",
    boltbadge:   "Bolt Badge",
    quakebadge:  "Quake Badge",
    jetbadge:    "Jet Badge",
    legendbadge: "Legend Badge",
    wavebadge:   "Wave Badge",

    black2white2: {
        hm_waterfall: "HM 05\n(Waterfall)",
        hm_dive: "HM 06\n(Dive)",
    },

    bw_shauntal:  "Elite 4\nShauntal",
    bw_marshal:   "Elite 4\nMarshal",
    bw_grimsley:  "Elite 4\nGrimsley",
    bw_caitlin:   "Elite 4\nCaitlin",
    b2w2_iris:    "Champion\nIris",
    bw_N:         "N\n(Post-Game)",
    bw_alder:     "Alder\n(Post-Game)",
    bw_cynthia:   "Cynthia\n(Post-Game)",

    white2_a: {
        shauntal: "Elite 4\nShauntal",
        marshal:  "Elite 4\nMarshal",
        grimsley: "Elite 4\nGrimsley",
        catlin:   "Elite 4\nCaitlin",
        champ:    "Champion\nIris",
    },
}