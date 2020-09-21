import React, { useState, useEffect } from 'react';
import { Row, Col, Autocomplete, Select, Button, Icon } from 'react-materialize';
import M from 'materialize-css';
import API from '../../utils/API';
import './style.css';
import Dashboard from '../Dashboard';

// ARRAY OF SEARCHABLE FISH NAMES FROM API
const fishNames = ["bitterling", "pale_chub", "crucian_carp", "dace", "carp", "koi", "goldfish", "pop-eyed_goldfish", "ranchu_goldfish", "killifish", "crawfish", "soft-shelled_turtle", "snapping_turtle", "tadpole", "frog", "freshwater_goby", "loach", "catfish", "giant_snakehead", "bluegill", "yellow_perch", "black_bass", "tilapia", "pike", "pond_smelt", "sweetfish", "cherry_salmon", "char", "golden_trout", "stringfish", "salmon", "king_salmon", "mitten_crab", "guppy", "nibble_fish", "angelfish", "betta", "neon_tetra", "rainbowfish", "piranha", "arowana", "dorado", "gar", "arapaima", "saddled_bichir", "sturgeon", "sea_butterfly", "sea_horse", "clownfish", "surgeonfish", "butterfly_fish", "napoleonfish", "zebra_turkeyfish", "blowfish", "puffer_fish", "anchovy", "horse_mackerel", "barred_knifejaw", "sea_bass", "red_snapper", "dab", "olive_flounder", "squid", "moray_eel", "ribbon_eel", "tuna", "blue_marlin", "giant_trevally", "mahi-mahi", "ocean_sunfish", "ray", "saw_shark", "hammerhead_shark", "great_white_shark", "whale_shark", "suckerfish", "football_fish", "oarfish", "barreleye", "coelacanth"]
const fishSearchObj = {};
const fishAutoComplete = {};

// LOOP OVER fishNames TO CREATE OBJECT FOR AUTOCOMPLETE FORM
// AND FOR PULLING SEARCH TEXT FROM USER INPUT
fishNames.forEach(fish => {
    fishSearchObj[fish.split("_").join(" ")] = fish;
    fishAutoComplete[fish.split("_").join(" ")] = null;
});

// AND FOSSILS
const fossilNames = ["acanthostega", "amber", "ammonite", "ankylo_skull", "ankylo_tail", "ankylo_torso", "anomalocaris", "archaeopteryx", "archelon_skull", "archelon_tail", "australopith", "brachio_chest", "brachio_pelvis", "brachio_skull", "brachio_tail", "coprolite", "deinony_tail", "deinony_torso", "dimetrodon_skull", "dimetrodon_torso", "dinosaur_track", "diplo_chest", "diplo_neck", "diplo_pelvis", "diplo_skull", "diplo_tail", "diplo_tail_tip", "dunkleosteus", "eusthenopteron", "iguanodon_skull", "iguanodon_tail", "iguanodon_torso", "juramaia", "left_megalo_side", "left_ptera_wing", "left_quetzal_wing", "mammoth_skull", "mammoth_torso", "megacero_skull", "megacero_tail", "megacero_torso", "myllokunmingia", "ophthalmo_skull", "ophthalmo_torso", "pachy_skull", "pachy_tail", "parasaur_skull", "parasaur_tail", "parasaur_torso", "plesio_skull", "plesio_tail", "plesio_torso", "ptera_body", "quetzal_torso", "right_megalo_side", "right_ptera_wing", "right_quetzal_wing", "sabertooth_skull", "sabertooth_tail", "shark-tooth_pattern", "spino_skull", "spino_tail", "spino_torso", "stego_skull", "stego_tail", "stego_torso", "trex_skull", "trex_tail", "trex_torso", "tricera_skull", "tricera_tail", "tricera_torso", "trilobite"]
const fossilSearchObj = {};
const fossilAutoComplete = {}

fossilNames.forEach(fossil => {
    fossilSearchObj[fossil.split("_").join(" ")] = fossil;
    fossilAutoComplete[fossil.split("_").join(" ")] = null;
});

// AND BUGS
const bugNames = ["common_butterfly", "yellow_butterfly", "tiger_butterfly", "peacock_butterfly", "common_bluebottle", "paper_kite_butterfly", "great_purple_emperor", "monarch_butterfly", "emperor_butterfly", "agrias_butterfly", "rajah_brookes_birdwing", "queen_alexandras_birdwing", "moth", "atlas_moth", "madagascan_sunset_moth", "long_locust", "migratory_locust", "rice_grasshopper", "grasshopper", "cricket", "bell_cricket", "mantis", "orchid_mantis", "honeybee", "wasp", "brown_cicada", "robust_cicada", "giant_cicada", "walker_cicada", "evening_cicada", "cicada_shell", "red_dragonfly", "darner_dragonfly", "banded_dragonfly", "damselfly", "firefly", "mole_cricket", "pondskater", "diving_beetle", "giant_water_bug", "stinkbug", "man-faced_stink_bug", "ladybug", "tiger_beetle", "jewel_beetle", "violin_beetle", "citrus_long-horned_beetle", "rosalia_batesi_beetle", "blue_weevil_beetle", "dung_beetle", "earth-boring_dung_beetle", "scarab_beetle", "drone_beetle", "goliath_beetle", "saw_stag", "miyama_stag", "giant_stag", "rainbow_stag", "cyclommatus_stag", "golden_stag", "giraffe_stag", "horned_dynastid", "horned_atlas", "horned_elephant", "horned_hercules", "walking_stick", "walking_leaf", "bagworm", "ant", "hermit_crab", "wharf_roach", "fly", "mosquito", "flea", "snail", "pill_bug", "centipede", "spider", "tarantula", "scorpion"]
const bugSearchObj = {};
const bugAutoComplete = {}

bugNames.forEach(bug => {
    bugSearchObj[bug.split("_").join(" ")] = bug;
    bugAutoComplete[bug.split("_").join(" ")] = null;
});

// AND SEA CREATURES
const seaCreatureNames = ["seaweed", "sea_grapes", "sea_cucumber", "sea_pig", "sea_star", "sea_urchin", "slate_pencil_urchin", "sea_anemone", "moon_jellyfish", "sea_slug", "pearl_oyster", "mussel", "oyster", "scallop", "whelk", "turban_shell", "abalone", "gigas_giant_clam", "chambered_nautilus", "octopus", "umbrella_octopus", "vampire_squid", "firefly_squid", "gazami_crab", "dungeness_crab", "snow_crab", "red_king_crab", "acorn_barnacle", "spider_crab", "tiger_prawn", "sweet_shrimp", "mantis_shrimp", "spiny_lobster", "lobster", "giant_isopod", "horseshoe_crab", "sea_pineapple", "spotted_garden_eel", "flatworm", "venus_flower_basket"];
const seaCreatureSearchObj = {};
const seaCreatureAutoComplete = {};

seaCreatureNames.forEach(seaCreature => {
    seaCreatureSearchObj[seaCreature.split("_").join(" ")] = seaCreature;
    seaCreatureAutoComplete[seaCreature.split("_").join(" ")] = null;
});

// AND VILLAGERS
const villagerNames = ["Cyrano", "Antonio", "Pango", "Anabelle", "Snooty", "Annalisa", "Olaf", "Teddy", "Pinky", "Curt", "Chow", "Nate", "Groucho", "Tutu", "Ursala", "Grizzly", "Paula", "Ike", "Charlise", "Beardo", "Klaus", "Megan", "Jay", "Robin", "Anchovy", "Twiggy", "Jitters", "Piper", "Admiral", "Midge", "Jacob", "Lucha", "Jacques", "Peck", "Sparro", "Angus", "Rodeo", "Stu", "T-Bone", "Coach", "Vic", "Bob", "Mitzi", "Rosie", "Olivia", "Kiki", "Tangy", "Punchy", "Purrl", "Moe", "Kabuki", "Kid Cat", "Monique", "Tabby", "Stinky", "Kitty", "Tom", "Merry", "Felicity", "Lolly", "Ankha", "Rudy", "Katt", "Raymond", "Bluebear", "Maple", "Poncho", "Pudge", "Kody", "Stitches", "Vladimir", "Murphy", "Olive", "Cheri", "June", "Pekoe", "Chester", "Barold", "Tammy", "Judy", "Goose", "Benedict", "Egbert", "Ava", "Becky", "Plucky", "Knox", "Broffina", "Ken", "Patty", "Tipper", "Norma", "Naomi", "Alfonso", "Alli", "Boots", "Del", "Sly", "Gayle", "Drago", "Fauna", "Bam", "Zell", "Bruce", "Deirdre", "Lopez", "Fuchsia", "Beau", "Diana", "Erik", "Goldie", "Butch", "Lucky", "Biskit", "Bones", "Portia", "Walker", "Daisy", "Cookie", "Maddie", "Bea", "Mac", "Marcel", "Benjamin", "Cherry", "Shep", "Bill", "Joey", "Pate", "Maelle", "Deena", "Pompom", "Mallary", "Freckles", "Derwin", "Drake", "Scoot", "Weber", "Miranda", "Ketchup", "Gloria", "Molly", "Quillson", "Opal", "Dizzy", "Big Top", "Eloise", "Margie", "Paolo", "Axel", "Ellie", "Tucker", "Tia", "Cyd", "Lily", "Ribbot", "Frobert", "Camofrog", "Drift", "Wart Jr.", "Puddles", "Jeremiah", "Tad", "Cousteau", "Huck", "Prince", "Jambette", "Raddle", "Gigi", "Croque", "Diva", "Henry", "Chevre", "Nan", "Billy", "Gruff", "Velma", "Kidd", "Pashmina", "Sherb", "Cesar", "Peewee", "Boone", "Louie", "Boyd", "Violet", "Al", "Rocket", "Hans", "Hamlet", "Apple", "Graham", "Rodney", "Soleil", "Clay", "Flurry", "Hamphrey", "Rocco", "Bubbles", "Bertha", "Biff", "Bitty", "Harry", "Hippeux", "Buck", "Victoria", "Savannah", "Elmer", "Roscoe", "Winnie", "Ed", "Cleo", "Peaches", "Annalise", "Clyde", "Colton", "Papi", "Julian", "Reneigh", "Yuka", "Alice", "Melba", "Sydney", "Gonzo", "Ozzie", "Canberra", "Lyman", "Eugene", "Kitt", "Mathilda", "Carrie", "Astrid", "Sylvia", "Walt", "Rooney", "Marcie", "Bud", "Elvis", "Rex", "Leopold", "Mott", "Rory", "Lionel", "Nana", "Simon", "Tammi", "Monty", "Elise", "Flip", "Shari", "Deli", "Dora", "Limberg", "Bella", "Bree", "Samson", "Rod", "Candi", "Rizzo", "Anicotti", "Broccolo", "Moose", "Bettina", "Greta", "Penelope", "Chadder", "Octavian", "Marina", "Zucker", "Queenie", "Gladys", "Sandy", "Sprocket", "Julia", "Cranston", "Phil", "Blanche", "Flora", "Phoebe", "Apollo", "Amelia", "Pierce", "Buzz", "Avery", "Frank", "Sterling", "Keaton", "Celia", "Aurora", "Roald", "Cube", "Hopper", "Friga", "Gwen", "Puck", "Wade", "Boomer", "Iggly", "Tex", "Flo", "Sprinkle", "Curly", "Truffles", "Rasher", "Hugh", "Lucy", "Spork", "Cobb", "Boris", "Maggie", "Peggy", "Gala", "Chops", "Kevin", "Pancetti", "Agnes", "Bunnie", "Dotty", "Coco", "Snake", "Gaston", "Gabi", "Pippy", "Tiffany", "Genji", "Ruby", "Doc", "Claude", "Francine", "Chrissy", "Hopkins", "O'Hare", "Carmen", "Bonbon", "Cole", "Mira", "Tank", "Rhonda", "Spike", "Hornsby", "Merengue", "Renée", "Vesta", "Baabara", "Eunice", "Stella", "Cashmere", "Willow", "Curlos", "Wendy", "Timbra", "Frita", "Muffy", "Pietro", "Dom", "Peanut", "Blaire", "Filbert", "Pecan", "Nibbles", "Agent S", "Caroline", "Sally", "Static", "Mint", "Ricky", "Cally", "Tasha", "Sylvana", "Poppy", "Sheldon", "Marshal", "Hazel", "Rolf", "Rowan", "Tybalt", "Bangle", "Leonardo", "Claudia", "Bianca", "Chief", "Lobo", "Wolfgang", "Whitney", "Dobie", "Freya", "Fang", "Vivian", "Skye", "Kyle", "Audie", "Cyrano", "Antonio", "Pango", "Anabelle", "Snooty", "Annalisa", "Olaf", "Teddy", "Pinky", "Curt", "Chow", "Nate", "Groucho", "Tutu", "Ursala", "Grizzly", "Paula", "Ike", "Charlise", "Beardo", "Klaus", "Megan", "Jay", "Robin", "Anchovy", "Twiggy", "Jitters", "Piper", "Admiral", "Midge", "Jacob", "Lucha", "Jacques", "Peck", "Sparro", "Angus", "Rodeo", "Stu", "T-Bone", "Coach", "Vic", "Bob", "Mitzi", "Rosie", "Olivia", "Kiki", "Tangy", "Punchy", "Purrl", "Moe", "Kabuki", "Kid Cat", "Monique", "Tabby", "Stinky", "Kitty", "Tom", "Merry", "Felicity", "Lolly", "Ankha", "Rudy", "Katt", "Raymond", "Bluebear", "Maple", "Poncho", "Pudge", "Kody", "Stitches", "Vladimir", "Murphy", "Olive", "Cheri", "June", "Pekoe", "Chester", "Barold", "Tammy", "Judy", "Goose", "Benedict", "Egbert", "Ava", "Becky", "Plucky", "Knox", "Broffina", "Ken", "Patty", "Tipper", "Norma", "Naomi", "Alfonso", "Alli", "Boots", "Del", "Sly", "Gayle", "Drago", "Fauna", "Bam", "Zell", "Bruce", "Deirdre", "Lopez", "Fuchsia", "Beau", "Diana", "Erik", "Goldie", "Butch", "Lucky", "Biskit", "Bones", "Portia", "Walker", "Daisy", "Cookie", "Maddie", "Bea", "Mac", "Marcel", "Benjamin", "Cherry", "Shep", "Bill", "Joey", "Pate", "Maelle", "Deena", "Pompom", "Mallary", "Freckles", "Derwin", "Drake", "Scoot", "Weber", "Miranda", "Ketchup", "Gloria", "Molly", "Quillson", "Opal", "Dizzy", "Big Top", "Eloise", "Margie", "Paolo", "Axel", "Ellie", "Tucker", "Tia", "Cyd", "Lily", "Ribbot", "Frobert", "Camofrog", "Drift", "Wart Jr.", "Puddles", "Jeremiah", "Tad", "Cousteau", "Huck", "Prince", "Jambette", "Raddle", "Gigi", "Croque", "Diva", "Henry", "Chevre", "Nan", "Billy", "Gruff", "Velma", "Kidd", "Pashmina", "Sherb", "Cesar", "Peewee", "Boone", "Louie", "Boyd", "Violet", "Al", "Rocket", "Hans", "Hamlet", "Apple", "Graham", "Rodney", "Soleil", "Clay", "Flurry", "Hamphrey", "Rocco", "Bubbles", "Bertha", "Biff", "Bitty", "Harry", "Hippeux", "Buck", "Victoria", "Savannah", "Elmer", "Roscoe", "Winnie", "Ed", "Cleo", "Peaches", "Annalise", "Clyde", "Colton", "Papi", "Julian", "Reneigh", "Yuka", "Alice", "Melba", "Sydney", "Gonzo", "Ozzie", "Canberra", "Lyman", "Eugene", "Kitt", "Mathilda", "Carrie", "Astrid", "Sylvia", "Walt", "Rooney", "Marcie", "Bud", "Elvis", "Rex", "Leopold", "Mott", "Rory", "Lionel", "Nana", "Simon", "Tammi", "Monty", "Elise", "Flip", "Shari", "Deli", "Dora", "Limberg", "Bella", "Bree", "Samson", "Rod", "Candi", "Rizzo", "Anicotti", "Broccolo", "Moose", "Bettina", "Greta", "Penelope", "Chadder", "Octavian", "Marina", "Zucker", "Queenie", "Gladys", "Sandy", "Sprocket", "Julia", "Cranston", "Phil", "Blanche", "Flora", "Phoebe", "Apollo", "Amelia", "Pierce", "Buzz", "Avery", "Frank", "Sterling", "Keaton", "Celia", "Aurora", "Roald", "Cube", "Hopper", "Friga", "Gwen", "Puck", "Wade", "Boomer", "Iggly", "Tex", "Flo", "Sprinkle", "Curly", "Truffles", "Rasher", "Hugh", "Lucy", "Spork", "Cobb", "Boris", "Maggie", "Peggy", "Gala", "Chops", "Kevin", "Pancetti", "Agnes", "Bunnie", "Dotty", "Coco", "Snake", "Gaston", "Gabi", "Pippy", "Tiffany", "Genji", "Ruby", "Doc", "Claude", "Francine", "Chrissy", "Hopkins", "O'Hare", "Carmen", "Bonbon", "Cole", "Mira", "Tank", "Rhonda", "Spike", "Hornsby", "Merengue", "Renée", "Vesta", "Baabara", "Eunice", "Stella", "Cashmere", "Willow", "Curlos", "Wendy", "Timbra", "Frita", "Muffy", "Pietro", "Dom", "Peanut", "Blaire", "Filbert", "Pecan", "Nibbles", "Agent S", "Caroline", "Sally", "Static", "Mint", "Ricky", "Cally", "Tasha", "Sylvana", "Poppy", "Sheldon", "Marshal", "Hazel", "Rolf", "Rowan", "Tybalt", "Bangle", "Leonardo", "Claudia", "Bianca", "Chief", "Lobo", "Wolfgang", "Whitney", "Dobie", "Freya", "Fang", "Vivian", "Skye", "Kyle", "Audie", "Cyrano"];
const villagerSearchObj = {
    Admiral: "brd06",
    "Agent S": "squ05",
    Agnes: "pig17",
    Al: "gor08",
    Alfonso: "crd00",
    Alice: "kal01",
    Alli: "crd01",
    Amelia: "pbr01",
    Anabelle: "ant03",
    Anchovy: "brd02",
    Angus: "bul00",
    Anicotti: "mus10",
    Ankha: "cat19",
    Annalisa: "ant08",
    Annalise: "hrs09",
    Antonio: "ant01",
    Apollo: "pbr00",
    Apple: "ham01",
    Astrid: "kgr05",
    Audie: "wol12",
    Aurora: "pgn00",
    Ava: "chn05",
    Avery: "pbr05",
    Axel: "elp06",
    Baabara: "shp01",
    Bam: "der01",
    Bangle: "tig03",
    Barold: "cbr16",
    Bea: "dog10",
    Beardo: "bea13",
    Beau: "der07",
    Becky: "chn09",
    Bella: "mus02",
    Benedict: "chn01",
    Benjamin: "dog16",
    Bertha: "hip03",
    Bettina: "mus15",
    Bianca: "tig06",
    Biff: "hip04",
    "Big Top": "elp02",
    Bill: "duk00",
    Billy: "goa02",
    Biskit: "dog03",
    Bitty: "hip05",
    Blaire: "squ01",
    Blanche: "ost08",
    Bluebear: "cbr00",
    Bob: "cat00",
    Bonbon: "rbt17",
    Bones: "dog04",
    Boomer: "pgn10",
    Boone: "gor02",
    Boots: "crd02",
    Boris: "pig09",
    Boyd: "gor05",
    Bree: "mus03",
    Broccolo: "mus12",
    Broffina: "chn12",
    Bruce: "der03",
    Bubbles: "hip02",
    Buck: "hrs00",
    Bud: "lon00",
    Bunnie: "rbt00",
    Butch: "dog01",
    Buzz: "pbr03",
    Cally: "squ11",
    Camofrog: "flg03",
    Canberra: "kal08",
    Candi: "mus08",
    Carmen: "rbt16",
    Caroline: "squ06",
    Carrie: "kgr02",
    Cashmere: "shp04",
    Celia: "pbr09",
    Cesar: "gor00",
    Chadder: "mus18",
    Charlise: "bea12",
    Cheri: "cbr10",
    Cherry: "dog17",
    Chester: "cbr15",
    Chevre: "goa00",
    Chief: "wol00",
    Chops: "pig14",
    Chow: "bea03",
    Chrissy: "rbt13",
    Claude: "rbt11",
    Claudia: "tig05",
    Clay: "ham05",
    Cleo: "hrs07",
    Clyde: "hrs10",
    Coach: "bul07",
    Cobb: "pig08",
    Coco: "rbt02",
    Cole: "rbt18",
    Colton: "hrs11",
    Cookie: "dog08",
    Cousteau: "flg10",
    Cranston: "ost06",
    Croque: "flg17",
    Cube: "pgn02",
    Curlos: "shp08",
    Curly: "pig00",
    Curt: "bea02",
    Cyd: "elp12",
    Cyrano: "ant00",
    Daisy: "dog07",
    Deena: "duk04",
    Deirdre: "der04",
    Del: "crd04",
    Deli: "mnk08",
    Derwin: "duk08",
    Diana: "der08",
    Diva: "flg18",
    Dizzy: "elp01",
    Dobie: "wol04",
    Doc: "rbt10",
    Dom: "shp15",
    Dora: "mus00",
    Dotty: "rbt01",
    Drago: "crd08",
    Drake: "duk09",
    Drift: "flg04",
    Ed: "hrs06",
    Egbert: "chn02",
    Elise: "mnk05",
    Ellie: "elp07",
    Elmer: "hrs03",
    Eloise: "elp03",
    Elvis: "lon01",
    Erik: "der09",
    Eugene: "kal10",
    Eunice: "shp02",
    Fang: "wol06",
    Fauna: "der00",
    Felicity: "cat17",
    Filbert: "squ02",
    Flip: "mnk06",
    Flo: "pgn13",
    Flora: "ost09",
    Flurry: "ham06",
    Francine: "rbt12",
    Frank: "pbr06",
    Freckles: "duk07",
    Freya: "wol05",
    Friga: "pgn04",
    Frita: "shp11",
    Frobert: "flg02",
    Fuchsia: "der06",
    Gabi: "rbt05",
    Gala: "pig13",
    Gaston: "rbt04",
    Gayle: "crd07",
    Genji: "rbt08",
    Gigi: "flg16",
    Gladys: "ost01",
    Gloria: "duk15",
    Goldie: "dog00",
    Gonzo: "kal04",
    Goose: "chn00",
    Graham: "ham02",
    Greta: "mus16",
    Grizzly: "bea09",
    Groucho: "bea06",
    Gruff: "goa04",
    Gwen: "pgn05",
    Hamlet: "ham00",
    Hamphrey: "ham07",
    Hans: "gor10",
    Harry: "hip08",
    Hazel: "squ18",
    Henry: "flg19",
    Hippeux: "hip09",
    Hopkins: "rbt14",
    Hopper: "pgn03",
    Hornsby: "rhn04",
    Huck: "flg11",
    Hugh: "pig03",
    Iggly: "pgn11",
    Ike: "bea11",
    Jacob: "brd11",
    Jacques: "brd16",
    Jambette: "flg13",
    Jay: "brd00",
    Jeremiah: "flg07",
    Jitters: "brd04",
    Joey: "duk01",
    Judy: "cbr19",
    Julia: "ost05",
    Julian: "hrs13",
    June: "cbr13",
    Kabuki: "cat09",
    Katt: "cat21",
    Keaton: "pbr08",
    Ken: "chn13",
    Ketchup: "duk13",
    Kevin: "pig15",
    "Kid Cat": "cat10",
    Kidd: "goa07",
    Kiki: "cat04",
    Kitt: "kgr00",
    Kitty: "cat14",
    Klaus: "bea14",
    Knox: "chn11",
    Kody: "cbr04",
    Kyle: "wol10",
    Leonardo: "tig04",
    Leopold: "lon04",
    Lily: "flg00",
    Limberg: "mus01",
    Lionel: "lon08",
    Lobo: "wol01",
    Lolly: "cat18",
    Lopez: "der05",
    Louie: "gor04",
    Lucha: "brd15",
    Lucky: "dog02",
    Lucy: "pig04",
    Lyman: "kal09",
    Mac: "dog14",
    Maddie: "dog09",
    Maelle: "duk03",
    Maggie: "pig10",
    Mallary: "duk06",
    Maple: "cbr01",
    Marcel: "dog15",
    Marcie: "kgr10",
    Margie: "elp04",
    Marina: "ocp01",
    Marshal: "squ17",
    Mathilda: "kgr01",
    Megan: "bea15",
    Melba: "kal02",
    Merengue: "rhn07",
    Merry: "cat16",
    Midge: "brd08",
    Mint: "squ09",
    Mira: "rbt19",
    Miranda: "duk12",
    Mitzi: "cat01",
    Moe: "cat08",
    Molly: "duk16",
    Monique: "cat11",
    Monty: "mnk04",
    Moose: "mus14",
    Mott: "lon06",
    Muffy: "shp12",
    Murphy: "cbr07",
    Nan: "goa01",
    Nana: "mnk01",
    Naomi: "cow07",
    Nate: "bea05",
    Nibbles: "squ04",
    Norma: "cow06",
    "O'Hare": "rbt15",
    Octavian: "ocp00",
    Olaf: "ant09",
    Olive: "cbr09",
    Olivia: "cat03",
    Opal: "elp00",
    Ozzie: "kal05",
    Pancetti: "pig16",
    Pango: "ant02",
    Paolo: "elp05",
    Papi: "hrs12",
    Pashmina: "goa08",
    Pate: "duk02",
    Patty: "cow00",
    Paula: "bea10",
    Peaches: "hrs08",
    Peanut: "squ00",
    Pecan: "squ03",
    Peck: "brd17",
    Peewee: "gor01",
    Peggy: "pig11",
    Pekoe: "cbr14",
    Penelope: "mus17",
    Phil: "ost07",
    Phoebe: "ost10",
    Pierce: "pbr02",
    Pietro: "shp13",
    Pinky: "bea01",
    Piper: "brd05",
    Pippy: "rbt06",
    Plucky: "chn10",
    Pompom: "duk05",
    Poncho: "cbr02",
    Poppy: "squ15",
    Portia: "dog05",
    Prince: "flg12",
    Puck: "pgn06",
    Puddles: "flg06",
    Pudge: "cbr03",
    Punchy: "cat06",
    Purrl: "cat07",
    Queenie: "ost00",
    Quillson: "duk17",
    Raddle: "flg15",
    Rasher: "pig02",
    Raymond: "cat23",
    Reneigh: "hrs16",
    Renée: "rhn08",
    Rex: "lon02",
    Rhonda: "rhn01",
    Ribbot: "flg01",
    Ricky: "squ10",
    Rizzo: "mus09",
    Roald: "pgn01",
    Robin: "brd01",
    Rocco: "hip00",
    Rocket: "gor09",
    Rod: "mus05",
    Rodeo: "bul01",
    Rodney: "ham03",
    Rolf: "tig00",
    Rooney: "kgr09",
    Rory: "lon07",
    Roscoe: "hrs04",
    Rosie: "cat02",
    Rowan: "tig01",
    Ruby: "rbt09",
    Rudy: "cat20",
    Sally: "squ07",
    Samson: "mus04",
    Sandy: "ost02",
    Savannah: "hrs02",
    Scoot: "duk10",
    Shari: "mnk07",
    Sheldon: "squ16",
    Shep: "dog18",
    Sherb: "goa09",
    Simon: "mnk02",
    Skye: "wol09",
    Sly: "crd06",
    Snake: "rbt03",
    Snooty: "ant06",
    Soleil: "ham04",
    Sparro: "brd18",
    Spike: "rhn02",
    Spork: "pig05",
    Sprinkle: "pgn14",
    Sprocket: "ost03",
    Static: "squ08",
    Stella: "shp03",
    Sterling: "pbr07",
    Stinky: "cat13",
    Stitches: "cbr05",
    Stu: "bul03",
    Sydney: "kal03",
    Sylvana: "squ14",
    Sylvia: "kgr06",
    "T-Bone": "bul05",
    Tabby: "cat12",
    Tad: "flg09",
    Tammi: "mnk03",
    Tammy: "cbr17",
    Tangy: "cat05",
    Tank: "rhn00",
    Tasha: "squ13",
    Teddy: "bea00",
    Tex: "pgn12",
    Tia: "elp10",
    Tiffany: "rbt07",
    Timbra: "shp10",
    Tipper: "cow01",
    Tom: "cat15",
    Truffles: "pig01",
    Tucker: "elp09",
    Tutu: "bea07",
    Twiggy: "brd03",
    Tybalt: "tig02",
    Ursala: "bea08",
    Velma: "goa06",
    Vesta: "shp00",
    Vic: "bul08",
    Victoria: "hrs01",
    Violet: "gor07",
    Vivian: "wol08",
    Vladimir: "cbr06",
    Wade: "pgn09",
    Walker: "dog06",
    Walt: "kgr08",
    "Wart Jr.": "flg05",
    Weber: "duk11",
    Wendy: "shp09",
    Whitney: "wol03",
    Willow: "shp07",
    Winnie: "hrs05",
    Wolfgang: "wol02",
    Yuka: "kal00",
    Zell: "der02",
    Zucker: "ocp02"
};
const villagerAutoComplete = {};
// console.log(villagerNames.length)
villagerNames.forEach(villager => {
    // villagerSearchObj[villager] = villager;
    villagerAutoComplete[villager.split("_").join(" ")] = null;
});

export default function Index() {

    const [searchInput, setSearchInput] = useState('');
    const [searchCategory, setSearchCategory] = useState();

    const [testArray, setTestArray] = useState();

    let autoCompleteObj;

    switch (searchCategory) {
        case "fish":
            autoCompleteObj = fishAutoComplete;
            break;
        case "fossils":
            autoCompleteObj = fossilAutoComplete;
            break;
        case "bugs":
            autoCompleteObj = bugAutoComplete;
            break;
        case "sea":
            autoCompleteObj = seaCreatureAutoComplete;
            break;
        case "villagers":
            autoCompleteObj = villagerAutoComplete;
            break;
        default:
            break;

    }

    // const objArr = {};
    // searchTest = (cat) => {
    //     API.testSearch(cat).then(res => {
    //         // console.log(Object.keys(res.data));
    //         console.log((res.data))
    //         // console.log(Object.keys(res.data))
    //         Object.keys(res.data).forEach(villager => {
    //             // console.log(res.data[villager]['file-name'], res.data[villager].name['name-USen'])
    //             objArr[res.data[villager].name['name-USen']] = res.data[villager]['file-name'];
    //         })
    //     })
    // }
    // TODO: CAPTURE NAMES ARRAY FOR villagers, houseware, wallmounted, misc


    // searchTest('villagers')
    // console.log(objArr);


    function handleClick(event) {
        // event.preventDefault();
        API.search(searchInput, searchCategory).then((res) => {
            console.log((res.data))
        })
    }

    function handleInputChange(event) {
        // setSearchInput(fishSearchObj[event.target.value]);
        switch (searchCategory) {
            case "fish":
                setSearchInput(fishSearchObj[event.target.value]);
                break;
            case "fossils":
                setSearchInput(fossilSearchObj[event.target.value]);
                break;
            case "bugs":
                setSearchInput(bugSearchObj[event.target.value]);
                break;
            case "sea":
                setSearchInput(seaCreatureSearchObj[event.target.value]);
                break;
            case "villagers":
                setSearchInput(villagerSearchObj[event.target.value]);
                break;
            default:
                break;

        }

    }

    function handleCategoryChange(event) {
        setSearchCategory(event.target.value)
    }



    return (
        <Row>
            <form className="col s12 m">
                <Row>
                    <div className="input-field col m5 s12">
                        {(!searchCategory) ? <>
                            <input disabled value="Select Category" id="disabled" type="text" className="validate col s12" />
                            {/* <label for="disabled">Disabled</label> */}
                        </> : <Autocomplete
                                id="Autocomplete-1"
                                options={{
                                    data: autoCompleteObj
                                }}
                                placeholder="Island Search!"
                                onChange={handleInputChange}
                                s={12}
                            />

                        }


                    </div>
                    <Select
                        id="Select-9"
                        m={4}
                        s={12}
                        multiple={false}
                        // onChange={function noRefCheck() { }}
                        onChange={handleCategoryChange}
                        options={{
                            classes: '',
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value=""
                    // className="col s6"
                    >
                        <option
                            disabled
                            value=""
                        >
                            Category
                            </option>
                        <option value="fish">
                            Fish
                            </option>
                        <option value="sea">
                            Sea Creatures
                            </option>
                        <option value="bugs">
                            Bugs
                            </option>
                        <option value="fossils">
                            Fossils
                            </option>
                        <option value="villagers">
                            Villagers
                            </option>
                        <option value="houseware">
                            Housewares
                            </option>
                        <option value="wallmounted">
                            Wall-Mounted
                            </option>
                        <option value="misc">
                            Miscellaneous
                            </option>
                    </Select>
                    <div className="input-field col m3 s12">

                        <Button
                            large
                            node="a"
                            waves="light"
                            onClick={handleClick}
                        >
                            Search!
                        <Icon right>
                                search
                        </Icon>
                        </Button>
                    </div>
                </Row>
            </form >
        </Row>
    )
}
