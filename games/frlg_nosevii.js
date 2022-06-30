var frlg_nosevii = {
    debug: false,
    name: "frlg_nosevii",
    folder: "frlg",
    start_location: "viridian",
    font: "GameBoy_Font",
    font_size: "22px",

    // Config texts
    config_name: "FireRed/LeafGreen (No Sevii Islands)",
    config_randomizer_author: "Pointcrow",
    config_randomizer_link: "https://www.reddit.com/r/pokemon/comments/qel5h4/i_created_a_mod_that_randomizes_the_entire_map_of/",
    config_tracker_author: "SaltContainer", 
    config_tracker_link: "https://saltcontainer.github.io",

    // Tracker information
    locations: {
        // Cities
        viridian:         {x: 24,  y: 64,  w: 8,  h: 8,  name: "Viridian City\nRoute 22",       link_name: "Viridian City"   },
        pewter:           {x: 24,  y: 32,  w: 8,  h: 8,  name: "Pewter City"                                                 },
        cerulean:         {x: 104, y: 24,  w: 8,  h: 8,  name: "Cerulean City\nRoutes 5 & 25",  link_name: "Cerulean City"   },
        vermilion:        {x: 104, y: 72,  w: 8,  h: 8,  name: "Vermilion City\nRoutes 6 & 11", link_name: "Vermilion City"  },
        lavender:         {x: 136, y: 48,  w: 8,  h: 8,  name: "Lavender Town\nRoute 8",        link_name: "Lavender Town"   },
        celadon:          {x: 80,  y: 48,  w: 8,  h: 8,  name: "Celadon City\nRoutes 7 & 16",   link_name: "Celadon City"    },
        saffron:          {x: 104, y: 48,  w: 8,  h: 8,  name: "Saffron City"                                                },
        fuchsia:          {x: 88,  y: 96,  w: 8,  h: 8,  name: "Fuchsia City\nRoutes 15 & 18",  link_name: "Fuchsia City"    },
        cinnabar:         {x: 24,  y: 112, w: 8,  h: 8,  name: "Cinnabar Island"                                             },
        indigo:           {x: 8,   y: 24,  w: 8,  h: 8,  name: "Indigo Plateau"                                              },

        // Routes
        r2:               {x: 24,  y: 48,  w: 8,  h: 8,  name: "Route 2"                                                     },
        r10:              {x: 136, y: 32,  w: 8,  h: 8,  name: "Route 10"                                                    },
        r12:              {x: 136, y: 72,  w: 8,  h: 8,  name: "Route 12"                                                    },

        // Important locations
        cerulean_cave:    {x: 96,  y: 16,  w: 8,  h: 8,  name: "Cerulean Cave"                                               },
        department_store: {x: 80,  y: 40,  w: 8,  h: 8,  name: "Department Store"                                            },
        cinnabar_mansion: {x: 16,  y: 112, w: 8,  h: 8,  name: "Cinnabar Mansion"                                            },
        mt_moon:          {x: 64,  y: 24,  w: 8,  h: 8,  name: "Mt. Moon\nRoute 4",             link_name: "Mt. Moon"        },
        navel_rock:       {x: 136, y: 112, w: 8,  h: 8,  name: "Navel Rock"                                                  },
        rocket_hideout:   {x: 80,  y: 56,  w: 8,  h: 8,  name: "Rocket Hideout"                                              },
        seafoam_islands:  {x: 56,  y: 112, w: 8,  h: 8,  name: "Seafoam Islands\nRoute 20",     link_name: "Seafoam Islands" },
        silph_1:          {x: 112, y: 48,  w: 8,  h: 8,  name: "Silph Co.\n1F to 5F",           link_name: "Silph Co."       },
        silph_2:          {x: 112, y: 40,  w: 8,  h: 8,  name: "Silph Co.\n6F to 11F",          link_name: "Silph Co."       },
        ss_anne:          {x: 104, y: 80,  w: 8,  h: 8,  name: "SS Anne"                                                     },
        victory_road:     {x: 8,   y: 32,  w: 8,  h: 8,  name: "Victory Road"                                                },
        gates:            {x: 64,  y: 8,   w: 8,  h: 8,  name: "Gates",                         link_name: "Gate"            },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        celadon: {
            r16_top:            {x: 92,   y: 212, name: "R16 (Celadon)"       },
            r16_bottom:         {x: 92,   y: 323, name: "R16 (Celadon)"       },
            dept_left:          {x: 263,  y: 213, name: "Celadon City"        },
            dept_right:         {x: 329,  y: 163, name: "Celadon City"        },
            n_front:            {x: 566,  y: 129, name: "Celadon City"        },
            n_back:             {x: 568,  y: 34,  name: "Celadon City"        },
            center:             {x: 853,  y: 126, name: "Celadon City"        },
            gym:                {x: 276,  y: 425, name: "Celadon City"        },
            casino_left:        {x: 631,  y: 321, name: "Celadon City"        },
            casino_right:       {x: 708,  y: 272, name: "Celadon City"        },
            sw:                 {x: 676,  y: 457, name: "Celadon City"        },
            s:                  {x: 749,  y: 400, name: "Celadon City"        },
            se:                 {x: 878,  y: 457, name: "Celadon City"        },
            r7_underground:     {x: 992,  y: 337, name: "R7 (Celadon)"        },
            r7_gate:            {x: 1104, y: 259, name: "R7 (Celadon)"        },
        },
        cerulean: {
            nw:                 {x: 169,  y: 150, name: "Cerulean City"       },
            n:                  {x: 286,  y: 149, name: "Cerulean City"       },
            c:                  {x: 247,  y: 243, name: "Cerulean City"       },
            center:             {x: 358,  y: 278, name: "Cerulean City"       },
            gym:                {x: 506,  y: 310, name: "Cerulean City"       },
            ne_front:           {x: 511,  y: 176, name: "Cerulean City"       },
            ne_back:            {x: 509,  y: 106, name: "Cerulean City"       },
            bike:               {x: 218,  y: 429, name: "Cerulean City"       },
            s:                  {x: 375,  y: 413, name: "Cerulean City"       },
            mart:               {x: 481,  y: 464, name: "Cerulean City"       },
            r25_bill:           {x: 775,  y: 44,  name: "R25 (Cerulean)"      },
            r5_daycare:         {x: 774,  y: 474, name: "R5 (Cerulean)"       },
            r5_gate:            {x: 799,  y: 617, name: "R5 (Cerulean)"       },
            r5_underground:     {x: 905,  y: 558, name: "R5 (Cerulean)"       },
        },
        cerulean_cave: {
            w:                  {x: 86,   y: 230 },
            nw:                 {x: 169,  y: 45  },
            c:                  {x: 391,  y: 193 },
            e:                  {x: 489,  y: 143 },
            ne:                 {x: 554,  y: 48  },
            entrance:           {x: 534,  y: 339 },
        },
        cinnabar: {
            mansion:            {x: 135,  y: 32,  name: "Cinnabar Island"     },
            gym:                {x: 321,  y: 40,  name: "Cinnabar Island"     },
            lab:                {x: 131,  y: 131, name: "Cinnabar Island"     },
            center:             {x: 219,  y: 158, name: "Cinnabar Island"     },
            mart:               {x: 313,  y: 139, name: "Cinnabar Island"     },
            lab_entrance:       {x: 70,   y: 483, name: "Cinnabar Lab"        },
            lab_w:              {x: 214,  y: 390, name: "Cinnabar Lab"        },
            lab_c:              {x: 311,  y: 446, name: "Cinnabar Lab"        },
            lab_e:              {x: 410,  y: 383, name: "Cinnabar Lab"        },
        },
        cinnabar_mansion: {
            _1f_entrance_w:     {x: 134,  y: 671, name: "Mansion 1F"          },
            _1f_stairs_n:       {x: 159,  y: 363, name: "Mansion 1F"          },
            _1f_stairs_s:       {x: 386,  y: 570, name: "Mansion 1F"          },
            _1f_entrance_e:     {x: 553,  y: 666, name: "Mansion 1F"          },
            _1f_landing:        {x: 335,  y: 477, name: "Mansion 1F"          },
            _2f_stairs_sw:      {x: 74,   y: 269, name: "Mansion 2F"          },
            _2f_stairs_se:      {x: 188,  y: 199, name: "Mansion 2F"          },
            _2f_stairs_n:       {x: 142,  y: 33,  name: "Mansion 2F"          },
            _2f_landing:        {x: 401,  y: 67,  name: "Mansion 2F"          },
            _3f_stairs_n:       {x: 447,  y: 222, name: "Mansion 3F"          },
            _3f_stairs_se:      {x: 859,  y: 465, name: "Mansion 3F"          },
            _3f_drop_w:         {x: 611,  y: 454, name: "Mansion 3F"          },
            _3f_drop_e:         {x: 709,  y: 506, name: "Mansion 3F"          },
        },
        department_store: {
            _1f_entrance_w:     {x: 38,   y: 478 },
            _1f_entrance_e:     {x: 168,  y: 479 },
            _1f_stairs:         {x: 53,   y: 271 },
            _2f_stairs_w:       {x: 33,   y: 66  },
            _2f_stairs_e:       {x: 172,  y: 10  },
            _4f_stairs_w:       {x: 257,  y: 83  },
            _4f_stairs_e:       {x: 402,  y: 22  },
            _3f_stairs_w:       {x: 252,  y: 339 },
            _3f_stairs_e:       {x: 394,  y: 290 },
            _5f_stairs_w:       {x: 481,  y: 340 },
            _5f_stairs_e:       {x: 630,  y: 290 },
        },
        fuchsia: {
            r18_gate:           {x: 88,   y: 299, name: "R18 (Fuchsia)"       },
            mart:               {x: 302,  y: 219, name: "Fuchsia City"        },
            safari:             {x: 523,  y: 61,  name: "Fuchsia City"        },
            c:                  {x: 587,  y: 240, name: "Fuchsia City"        },
            gym:                {x: 276,  y: 467, name: "Fuchsia City"        },
            sw1:                {x: 369,  y: 501, name: "Fuchsia City"        },
            sw2:                {x: 452,  y: 457, name: "Fuchsia City"        },
            center:             {x: 535,  y: 503, name: "Fuchsia City"        },
            se1:                {x: 670,  y: 468, name: "Fuchsia City"        },
            se2:                {x: 759,  y: 502, name: "Fuchsia City"        },
            r15_left:           {x: 859,  y: 303, name: "R15 (Fuchsia)"       },
            r15_right:          {x: 968,  y: 349, name: "R15 (Route)"         },
        },
        gates: {
            r11_w:              {x: 42,   y: 74,  name: "Gate (Route 11)"     },
            r11_e:              {x: 188,  y: 70,  name: "Gate (Route 11)"     },
            r11_stairs:         {x: 153,  y: 144, name: "Gate (Route 11)"     },
            r12_n:              {x: 310,  y: 37,  name: "Gate (Route 12)"     },
            r12_s:              {x: 311,  y: 181, name: "Gate (Route 12)"     },
            r12_stairs:         {x: 355,  y: 143, name: "Gate (Route 12)"     },
            r15_w:              {x: 435,  y: 75,  name: "Gate (Route 15)"     },
            r15_e:              {x: 584,  y: 75,  name: "Gate (Route 15)"     },
            r15_stairs:         {x: 565,  y: 145, name: "Gate (Route 15)"     },
            r16_w:              {x: 42,   y: 293, name: "Gate (Route 16)"     },
            r16_e:              {x: 187,  y: 290, name: "Gate (Route 16)"     },
            r16_stairs:         {x: 153,  y: 357, name: "Gate (Route 16)"     },
            r18_w:              {x: 247,  y: 314, name: "Gate (Route 18)"     },
            r18_e:              {x: 403,  y: 307, name: "Gate (Route 18)"     },
            r18_stairs:         {x: 376,  y: 371, name: "Gate (Route 18)"     },
        },
        indigo: {
            stairs:             {x: 45,   y: 200 },
            e4:                 {x: 69,   y: 35  },
            entrance:           {x: 181,  y: 254 },
        },
        lavender: {
            r8_gate:            {x: 54,   y: 145, name: "R8 (Lavender)"       },
            r8_underground:     {x: 158,  y: 52,  name: "R8 (Lavender)"       },
            center:             {x: 361,  y: 66,  name: "Lavender Town"       },
            tower:              {x: 553,  y: 75,  name: "Lavender Town"       },
            c:                  {x: 422,  y: 153, name: "Lavender Town"       },
            sw:                 {x: 343,  y: 231, name: "Lavender Town"       },
            s:                  {x: 427,  y: 260, name: "Lavender Town"       },
            mart:               {x: 575,  y: 221, name: "Lavender Town"       },
        },
        mt_moon: {
            ladder_nw:          {x: 89,   y: 89,  name: "Mt. Moon"            },
            ladder_n:           {x: 309,  y: 216, name: "Mt. Moon"            },
            ladder_ne:          {x: 500,  y: 242, name: "Mt. Moon"            },
            entrance:           {x: 296,  y: 589, name: "Mt. Moon"            },
            r4_center:          {x: 358,  y: 58,  name: "Route 4"             },
            r4_entrance_w:      {x: 494,  y: 83,  name: "Route 4"             },
            r4_entrance_e:      {x: 679,  y: 59,  name: "Route 4"             },
        },
        navel_rock: {
            ladder_s:           {x: 221,  y: 213 },
            ladder_ne:          {x: 53,   y: 34  },
            ladder_nw:          {x: 424,  y: 44  },
        },
        pewter: {
            sw:                 {x: 161,  y: 475 },
            center:             {x: 276,  y: 384 },
            gym:                {x: 245,  y: 231 },
            museum_w:           {x: 280,  y: 89  },
            museum_e:           {x: 408,  y: 50  },
            ne:                 {x: 540,  y: 166 },
            mart:               {x: 445,  y: 275 },
        },
        r10: {
            cave_n:             {x: 133,  y: 112 },
            center:             {x: 232,  y: 155 },
            power_plant:        {x: 119,  y: 348 },
            power_plant_side:   {x: 40,   y: 292 },
            cave_s:             {x: 133,  y: 574 },
        },
        r12: {
            house:              {x: 215,  y: 200, name: "R12 (Route)"         },
            gate_s:             {x: 158,  y: 105, name: "R12 (Route)"         },
            gate_n:             {x: 158,  y: 24,  name: "R12 (Lavender)"      },
            r11_gate:           {x: 38,   y: 217, name: "R12 (Route)"         },
        },
        r2: {
            p_gate_w:           {x: 93,   y: 211, name: "R2 (Pewter)"         },
            p_cave:             {x: 272,  y: 162, name: "R2 (Pewter)"         },
            p_house:            {x: 264,  y: 336, name: "R2 (Pewter)"         },
            p_gate_e:           {x: 307,  y: 654, name: "R2 (Pewter)"         },
            v_gate_w:           {x: 491,  y: 101, name: "R2 (Viridian)"       },
            v_gate_e:           {x: 698,  y: 27,  name: "R2 (Viridian)"       },
        },
        rocket_hideout: {
            b1f_stairs_w:       {x: 178,  y: 69,  name: "Rocket Hideout B1F"  },
            b1f_stairs_e:       {x: 297,  y: 23,  name: "Rocket Hideout B1F"  },
            b2f_stairs_nw:      {x: 797,  y: 65,  name: "Rocket Hideout B2F"  },
            b2f_stairs_ne:      {x: 917,  y: 31,  name: "Rocket Hideout B2F"  },
            b2f_stairs_s:       {x: 837,  y: 200, name: "Rocket Hideout B2F"  },
        },
        saffron: {
            gate_w:             {x: 47,   y: 376 },
            gate_n:             {x: 463,  y: 59  },
            gate_e:             {x: 823,  y: 389 },
            gate_s:             {x: 465,  y: 687 },
            center:             {x: 294,  y: 545 },
            se:                 {x: 601,  y: 543 },
            silph:              {x: 443,  y: 414 },
            w:                  {x: 341,  y: 267 },
            mart:               {x: 542,  y: 272 },
            e:                  {x: 675,  y: 267 },
            nw:                 {x: 269,  y: 156 },
            dojo:               {x: 549,  y: 141 },
            gym:                {x: 647,  y: 100 },
        },
        seafoam_islands: {
            _1f_entrance:       {x: 102,  y: 334, name: "Seafoam Islands 1F"  },
            _1f_ladder_nw:      {x: 156,  y: 78,  name: "Seafoam Islands 1F"  },
            _1f_hole_w:         {x: 324,  y: 116, name: "Seafoam Islands 1F"  },
            _1f_hole_e:         {x: 475,  y: 160, name: "Seafoam Islands 1F"  },
            _1f_ladder_ne:      {x: 498,  y: 42,  name: "Seafoam Islands 1F"  },
            b1f_ladder_nw:      {x: 135,  y: 421, name: "Seafoam Islands B1F" },
            b1f_ladder_w:       {x: 143,  y: 517, name: "Seafoam Islands B1F" },
            b1f_ladder_c:       {x: 253,  y: 597, name: "Seafoam Islands B1F" },
            b1f_landing_w:      {x: 313,  y: 504, name: "Seafoam Islands B1F" },
            b1f_hole_w:         {x: 360,  y: 564, name: "Seafoam Islands B1F" },
            b1f_hole_e:         {x: 463,  y: 505, name: "Seafoam Islands B1F" },
            b1f_landing_e:      {x: 501,  y: 561, name: "Seafoam Islands B1F" },
            b1f_ladder_ne:      {x: 524,  y: 437, name: "Seafoam Islands B1F" },
            b2f_ladder_nw:      {x: 676,  y: 50,  name: "Seafoam Islands B2F" },
            b2f_ladder_sw:      {x: 665,  y: 208, name: "Seafoam Islands B2F" },
            b2f_ladder_se:      {x: 978,  y: 252, name: "Seafoam Islands B2F" },
            b2f_ladder_c:       {x: 813,  y: 160, name: "Seafoam Islands B2F" },
            b2f_landing_w:      {x: 860,  y: 32,  name: "Seafoam Islands B2F" },
            b2f_hole_w:         {x: 910,  y: 114, name: "Seafoam Islands B2F" },
            b2f_hole_e:         {x: 1020, y: 55,  name: "Seafoam Islands B2F" },
            b2f_landing_e:      {x: 1080, y: 116, name: "Seafoam Islands B2F" },
            b2f_ladder_ne:      {x: 1097, y: 20,  name: "Seafoam Islands B2F" },
            b3f_hole_w:         {x: 703,  y: 561, name: "Seafoam Islands B3F" },
            b3f_hole_e:         {x: 797,  y: 605, name: "Seafoam Islands B3F" },
            b3f_ladder_w:       {x: 745,  y: 498, name: "Seafoam Islands B3F" },
            b3f_ladder_n:       {x: 820,  y: 413, name: "Seafoam Islands B3F" },
            b3f_ladder_se:      {x: 1124, y: 527, name: "Seafoam Islands B3F" },
            b4f_ladder_w:       {x: 490,  y: 678, name: "Seafoam Islands B4F" },
            b4f_ladder_e:       {x: 608,  y: 721, name: "Seafoam Islands B4F" },
            r20_cave_w:         {x: 777,  y: 704, name: "R20 (Seafoam)"       },
            r20_cave_e:         {x: 964,  y: 806, name: "R20 (Seafoam)"       },
        },
        silph_1: {
            _1f_entrance:       {x: 58,   y: 742, name: "Silph Co. 1F"        },
            _1f_stairs:         {x: 58,   y: 651, name: "Silph Co. 1F"        },
            _2f_nw:             {x: 58,   y: 387, name: "Silph Co. 2F"        },
            _2f_sw:             {x: 102,  y: 567, name: "Silph Co. 2F"        },
            _2f_n:              {x: 220,  y: 389, name: "Silph Co. 2F"        },
            _2f_se:             {x: 456,  y: 568, name: "Silph Co. 2F"        },
            _2f_stairs_w:       {x: 362,  y: 326, name: "Silph Co. 2F"        },
            _2f_stairs_e:       {x: 435,  y: 373, name: "Silph Co. 2F"        },
            _3f_sw:             {x: 66,   y: 266, name: "Silph Co. 3F"        },
            _3f_w:              {x: 56,   y: 182, name: "Silph Co. 3F"        },
            _3f_nw:             {x: 78,   y: 75,  name: "Silph Co. 3F"        },
            _3f_c:              {x: 197,  y: 182, name: "Silph Co. 3F"        },
            _3f_se:             {x: 435,  y: 270, name: "Silph Co. 3F"        },
            _3f_e:              {x: 407,  y: 177, name: "Silph Co. 3F"        },
            _3f_ne:             {x: 455,  y: 90,  name: "Silph Co. 3F"        },
            _3f_stairs_w:       {x: 359,  y: 57,  name: "Silph Co. 3F"        },
            _3f_stairs_e:       {x: 442,  y: 11,  name: "Silph Co. 3F"        },
            _4f_sw:             {x: 552,  y: 736, name: "Silph Co. 4F"        },
            _4f_nw:             {x: 673,  y: 581, name: "Silph Co. 4F"        },
            _4f_ne:             {x: 759,  y: 528, name: "Silph Co. 4F"        },
            _4f_c:              {x: 763,  y: 647, name: "Silph Co. 4F"        },
            _4f_stairs_w:       {x: 871,  y: 476, name: "Silph Co. 4F"        },
            _4f_stairs_e:       {x: 947,  y: 526, name: "Silph Co. 4F"        },
            _5f_sw:             {x: 541,  y: 432, name: "Silph Co. 5F"        },
            _5f_s:              {x: 654,  y: 401, name: "Silph Co. 5F"        },
            _5f_n:              {x: 716,  y: 236, name: "Silph Co. 5F"        },
            _5f_stairs_w:       {x: 872,  y: 195, name: "Silph Co. 5F"        },
            _5f_stairs_e:       {x: 946,  y: 157, name: "Silph Co. 5F"        },
            _5f_ne:             {x: 946,  y: 234, name: "Silph Co. 5F"        },
        },
        silph_2: {
            _6f_w:              {x: 44,   y: 722, name: "Silph Co. 6F"        },
            _6f_stairs_w:       {x: 215,  y: 652, name: "Silph Co. 6F"        },
            _6f_stairs_e:       {x: 423,  y: 665, name: "Silph Co. 6F"        },
            _6f_e:              {x: 478,  y: 739, name: "Silph Co. 6F"        },
            _7f_stairs_w:       {x: 288,  y: 391, name: "Silph Co. 7F"        },
            _7f_stairs_e:       {x: 454,  y: 336, name: "Silph Co. 7F"        },
            _7f_s:              {x: 411,  y: 579, name: "Silph Co. 7F"        },
            _8f_stairs_w:       {x: 247,  y: 24,  name: "Silph Co. 8F"        },
            _8f_stairs_e:       {x: 443,  y: 64,  name: "Silph Co. 8F"        },
            _8f_w:              {x: 34,   y: 175, name: "Silph Co. 8F"        },
            _8f_sw:             {x: 55,   y: 262, name: "Silph Co. 8F"        },
            _8f_c:              {x: 193,  y: 143, name: "Silph Co. 8F"        },
            _8f_n:              {x: 167,  y: 79,  name: "Silph Co. 8F"        },
            _9f_nw:             {x: 582,  y: 481, name: "Silph Co. 9F"        },
            _9f_stairs_w:       {x: 671,  y: 510, name: "Silph Co. 9F"        },
            _9f_stairs_e:       {x: 752,  y: 436, name: "Silph Co. 9F"        },
            _9f_s:              {x: 795,  y: 707, name: "Silph Co. 9F"        },
            _10f_stairs_w:      {x: 582,  y: 126, name: "Silph Co. 10F"       },
            _10f_stairs_e:      {x: 660,  y: 178, name: "Silph Co. 10F"       },
            _10f_e:             {x: 757,  y: 246, name: "Silph Co. 10F"       },
            _10f_sw:            {x: 666,  y: 320, name: "Silph Co. 10F"       },
            _10f_se:            {x: 757,  y: 398, name: "Silph Co. 10F"       },
            _11f_stairs:        {x: 581,  y: 29,  name: "Silph Co. 11F"       },
        },
        ss_anne: {
            _1f_entrance:       {x: 315,  y: 39,  name: "SS Anne 1F"          },
            _1f_stairs_w:       {x: 30,   y: 107, name: "SS Anne 1F"          },
            _1f_room_1:         {x: 40,   y: 200, name: "SS Anne 1F"          },
            _1f_room_2:         {x: 110,  y: 150, name: "SS Anne 1F"          },
            _1f_room_3:         {x: 170,  y: 200, name: "SS Anne 1F"          },
            _1f_room_4:         {x: 230,  y: 150, name: "SS Anne 1F"          },
            _1f_room_5:         {x: 290,  y: 200, name: "SS Anne 1F"          },
            _1f_room_6:         {x: 350,  y: 150, name: "SS Anne 1F"          },
            _1f_room_7:         {x: 420,  y: 200, name: "SS Anne 1F"          },
            _1f_door_s:         {x: 38,   y: 288, name: "SS Anne 1F"          },
            _1f_stairs_e:       {x: 448,  y: 253, name: "SS Anne 1F"          },
            _2f_stairs_nw:      {x: 69,   y: 435, name: "SS Anne 2F"          },
            _2f_stairs_sw:      {x: 33,   y: 582, name: "SS Anne 2F"          },
            _2f_room_1:         {x: 100,  y: 490, name: "SS Anne 2F"          },
            _2f_room_2:         {x: 160,  y: 540, name: "SS Anne 2F"          },
            _2f_room_3:         {x: 235,  y: 490, name: "SS Anne 2F"          },
            _2f_room_4:         {x: 295,  y: 540, name: "SS Anne 2F"          },
            _2f_room_5:         {x: 370,  y: 490, name: "SS Anne 2F"          },
            _2f_room_6:         {x: 430,  y: 540, name: "SS Anne 2F"          },
            _2f_stairs_ne:      {x: 497,  y: 360, name: "SS Anne 2F"          },
            b1f_room_1:         {x: 25,   y: 680, name: "SS Anne B1F"         },
            b1f_room_2:         {x: 100,  y: 635, name: "SS Anne B1F"         },
            b1f_room_3:         {x: 160,  y: 680, name: "SS Anne B1F"         },
            b1f_room_4:         {x: 235,  y: 635, name: "SS Anne B1F"         },
            b1f_room_5:         {x: 295,  y: 680, name: "SS Anne B1F"         },
            b1f_stairs:         {x: 323,  y: 715, name: "SS Anne B1F"         },
        },
        vermilion: {
            nw:                 {x: 154,  y: 67,  name: "Vermilion City"      },
            center:             {x: 262,  y: 121, name: "Vermilion City"      },
            fan_club:           {x: 203,  y: 239, name: "Vermilion City"      },
            c:                  {x: 310,  y: 282, name: "Vermilion City"      },
            mart:               {x: 459,  y: 251, name: "Vermilion City"      },
            gym:                {x: 236,  y: 372, name: "Vermilion City"      },
            se:                 {x: 461,  y: 358, name: "Vermilion City"      },
            harbor:             {x: 381,  y: 568, name: "Vermilion City"      },
            r6_gate:            {x: 657,  y: 54,  name: "R6 (Vermilion)"      },
            r6_underground:     {x: 771,  y: 190, name: "R6 (Vermilion)"      },
            r11_cave:           {x: 655,  y: 405, name: "R11 (Vermilion)"     },
            r11_gate:           {x: 986,  y: 447, name: "R11 (Vermilion)"     },
        },
        victory_road: {
            _2f_ladder_nw:      {x: 67,   y: 55,  name: "Victory Road 2F"     },
            _2f_ladder_w:       {x: 41,   y: 145, name: "Victory Road 2F"     },
            _2f_ladder_e:       {x: 540,  y: 158, name: "Victory Road 2F"     },
            _2f_ladder_se:      {x: 595,  y: 274, name: "Victory Road 2F"     },
            _2f_landing:        {x: 532,  y: 323, name: "Victory Road 2F"     },
            _3f_ladder_nw:      {x: 96,   y: 419, name: "Victory Road 3F"     },
            _3f_ladder_n:       {x: 535,  y: 505, name: "Victory Road 3F"     },
            _3f_ladder_e:       {x: 614,  y: 545, name: "Victory Road 3F"     },
            _3f_ladder_se:      {x: 645,  y: 632, name: "Victory Road 3F"     },
            _3f_hole:           {x: 532,  y: 680, name: "Victory Road 3F"     },
        },
        viridian: {
            n:                  {x: 418,  y: 150, name: "Viridian City"       },
            gym:                {x: 586,  y: 126, name: "Viridian City"       },
            s:                  {x: 416,  y: 263, name: "Viridian City"       },
            mart:               {x: 587,  y: 278, name: "Viridian City"       },
            center:             {x: 421,  y: 388, name: "Viridian City"       },
            r22:                {x: 135,  y: 50,  name: "R22 (Viridian)"      },
        },        
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["dead_end",  null], ["event",        0], ["center",        0], ["mart",      0], ["one_way",     null]],
        [["normal",      0], ["fighting",     0], ["flying",       0], ["poison",        0], ["ground",    0], ["rock",           0], ["bug",    0], ["ghost",  0], ["fairy", 0]],
        [["steel",       0], ["fire",         0], ["water",        0], ["grass",         0], ["electric",  0], ["psychic",        0], ["ice",    0], ["dragon", 0], ["dark",  0]],
        [["1",           0], ["2",            0], ["3",            0], ["4",             0], ["5",         0], ["6",              0], ["7",      0], ["8",      0]],
        [["bike_needed", 0], ["frlg_trainer", 0], ["team_rocket",  0], ["safari",        0]],
        [["frlg_bush",   0], ["frlg_surf",    0], ["frlg_boulder", 0], ["frlg_darkness", 0]],
    ],
    progress: [
        [["boulder_badge", 0], ["cascade_badge", 0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge", 0], ["marsh_badge",  0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["frlg_lorelei",  0], ["frlg_bruno",    0], ["frlg_agatha",   0], ["frlg_lance",    0], ["frlg_blue",  0], ["",     undefined], ["",      undefined], ["",     undefined]],
        [["hm_cut",        0], ["hm_fly",        0], ["hm_surf",       0], ["hm_strength",   0], ["hm_flash",   0], ["",     undefined], ["",      undefined], ["",     undefined]],
        [["bike_voucher",  0], ["bike",          0], ["",      undefined], ["parcel",        0], ["poke_flute", 0], ["tea",          0], ["silph_scope",   0], ["gold_teeth",   0]],
        [["card_key",      0], ["lift_key",      0], ["secret_key",    0], ["",      undefined], ["",   undefined], ["",     undefined], ["",      undefined], ["ss_ticket",    0]],
    ],
};