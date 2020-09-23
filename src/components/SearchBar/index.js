import React, { useState } from 'react';
import { Row, Autocomplete, Select, Button, Icon } from 'react-materialize';
import M from 'materialize-css';
import API from '../../utils/API';
import './style.css';
// import Dashboard from '../Dashboard';
import SearchResultCard from '../SearchResultCard';

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

// AND HOUSEWARES
const housewareNames = ["acoustic_guitar","air_circulator","alto_saxophone","anatomical_model","anchor_statue","angled_signpost","antique_bed","antique_bureau","antique_chair","antique_clock","antique_console_table","antique_mini_table","antique_table","antique_vanity","antique_wardrobe","apple_chair","Aquarius_urn","arcade_combat_game","arcade_fighting_game","arcade_mahjong_game","arcade_seat","Aries_rocking_chair","artisanal_bug_cage","asteroid","astronaut_suit","automatic_washer","baby_chair","bamboo_basket","bamboo_bench","bamboo_doll","bamboo_floor_lamp","bamboo_grass","bamboo_noodle_slide","bamboo_partition","bamboo_shelf","bamboo_speaker","bamboo_stool","bamboo_stopblock","barbecue","barbell","barrel","basic_teacher's_desk","basketball_hoop","bathroom_sink","beach_chair","beach_towel","beekeeper's_hive","bidet","big_festive_tree","billiard_table","birdbath","birdcage","birdhouse","birthday_sign","birthday_table","blossom-viewing_lantern","blue_corner","bonfire","bonsai_shelf","box_corner_sofa","box_sofa","Brake_Tapper","brick_oven","brick_well","bunk_bed","Bunny_Day_arch","Bunny_Day_bed","Bunny_Day_festive_balloons","Bunny_Day_merry_balloons","Bunny_Day_stool","Bunny_Day_table","Bunny_Day_vanity","Bunny_Day_wardrobe","butter_churn","cacao_tree","campfire","campfire_cookware","camping_cot","campsite_sign","Cancer_table","candy_machine","Capricorn_ornament","cardboard_bed","cardboard_chair","cardboard_sofa","cardboard_table","cat_tower","cello","chalkboard","champion's_pennant","changing_room","cherry-blossom_branches","cherry-blossom_pond_stone","cherry-blossom-petal_pile","clackercart","claw-foot_tub","clay_furnace","climbing_wall","clothes_closet","clothesline","clothesline_pole","colorful_wheel","cone","construction_sign","cosmos_shower","cotton-candy_stall","crescent-moon_chair","crewed_spaceship","cute_bed","cute_chair","cute_DIY_table","cute_floor_lamp","cute_sofa","cute_tea_table","cute_vanity","cute_wardrobe","cypress_bathtub","cypress_plant","dartboard","deer_scare","deluxe_washer","den_chair","den_desk","destinations_signpost","digital_scale","diner_chair","diner_counter_chair","diner_counter_table","diner_dining_table","diner_mini_table","diner_neon_sign","diner_sofa","director's_chair","DIY_workbench","DJ's_turntable","doghouse","double_sofa","double-door_refrigerator","drink_machine","drinking_fountain","drum_set","drying_rack","effects_rack","elaborate_kimono_stand","electric_bass","electric_guitar","electric_kick_scooter","elephant_slide","exercise_ball","exercise_bike","fan","fan_palm","festive_tree","fire_pit","fireplace","fish-drying_rack","fishing-rod_stand","flashy-flower_sign","flat_garden_rock","floor_lamp","floor_light","floor_seat","flower_stand","flying_saucer","folding_chair","folding_floor_lamp","foosball_table","fortune-cookie_cart","fountain","freezer","fresh_cooler","frozen_arch","frozen_bed","frozen_chair","frozen_counter","frozen_partition","frozen_pillar","frozen_sculpture","frozen_table","frozen_tree","futon","garbage_bin","garbage_can","garbage_pail","garden_bench","garden_faucet","garden_lantern","garden_rock","garden_wagon","gas_range","Gemini_closet","giant_teddy_bear","go_board","golden_casket","golden_seat","golden_toilet","golf_bag","gong","grand_Atlas_moth_model","grand_b._dragonfly_model","grand_piano","grand_Q._A._birdwing_model","grass_standee","green-leaf_pile","hammock","handcart","harp","hay_bed","hearth","hedge_standee","hi-fi_stereo","high-end_stereo","hose_reel","illuminated_present","illuminated_reindeer","illuminated_snowflakes","illuminated_tree","imperial_bed","imperial_chest","imperial_dining_chair","imperial_dining_table","imperial_low_table","imperial_partition","inflatable_sofa","iron_closet","iron_frame","iron_garden_bench","iron_garden_chair","iron_garden_table","iron_hanger_stand","iron_shelf","iron_worktable","ironing_board","ironwood_bed","ironwood_cart","ironwood_chair","ironwood_cupboard","ironwood_DIY_workbench","ironwood_dresser","ironwood_kitchenette","ironwood_low_table","ironwood_table","jail_bars","juicy-apple_TV","jukebox","kettle_bathtub","kimono_stand","kitchen_island","kitty_litter_box","kotatsu","large_cardboard_boxes","lawn_chair","lawn_mower","leaf_campfire","leaf_stool","lecture-hall_bench","lecture-hall_desk","lifeguard_chair","lighthouse","lily_record_player","loft_bed_with_desk","log_bed","log_bench","log_chair","log_decorative_shelves","log_dining_table","log_extra-long_sofa","log_garden_lounge","log_round_table","log_stakes","log_stool","long_bathtub","loom","low_screen","Luna's_bed","lunar_lander","lunar_rover","Mama_bear","Mama_panda","manhole_cover","maple-leaf_pond_stone","marimba","Market_Place_decoration","medium_cardboard_boxes","menu_chalkboard","mermaid_bed","mermaid_chair","mermaid_closet","mermaid_dresser","mermaid_lamp","mermaid_screen","mermaid_shelf","mermaid_sofa","mermaid_table","mermaid_vanity","mic_stand","mini_DIY_workbench","mini_fridge","moai_statue","modern_office_chair","monster_statue","monstera","moon","mossy_garden_rock","mountain_bike","mountain_standee","Mr._Flamingo","Mrs._Flamingo","mum_cushion","mush_lamp","mush_log","mush_low_stool","mush_parasol","mush_partition","mush_table","music_stand","natural_garden_chair","natural_garden_table","natural_square_table","neutral_corner","ocean_sunfish_model","office_desk","oil_barrel","oil-barrel_bathtub","OK_Motors_sign","old_sewing_machine","open-frame_kitchen","orange_end_table","outdoor_air_conditioner","outdoor_bath","outdoor_bench","outdoor_generator","outdoor_picnic_set","outdoor_table","pagoda","palm-tree_lamp","pansy_table","pants_press","Papa_bear","Papa_panda","paper_lantern","parabolic_antenna","park_clock","peach_chair","pear_bed","pear_wardrobe","pet_bed","phone_box","piano_bench","pile_of_leaves","pile_of_zen_cushions","pinball_machine","pirate_barrel","pirate-ship_cannon","pirate-ship_helm","pirate-treasure_chest","Pisces_lamp","plain_sink","plain_wooden_shop_sign","plastic_pool","playground_gym","podium","pond_stone","pool","poolside_bed","popcorn_machine","portable_toilet","public_bench","pull-up-bar_stand","punching_bag","pyramid","raccoon_figurine","rattan_armchair","rattan_bed","rattan_end_table","rattan_low_table","rattan_stool","rattan_vanity","rattan_wardrobe","rattan_waste_bin","red_corner","red-leaf_pile","refrigerator","retro_fan","retro_gas_pump","retro_stereo","robot_hero","rock_guitar","rocket","rocket_lamp","rocking_chair","rocking_horse","rodeo-style_springy_ride-on","rose_bed","round_space_heater","safe","sand_castle","sandbox","satellite","sauna_heater","scarecrow","scattered_papers","school_chair","school_desk","screen","server","serving_cart","shaded_floor_lamp","shell_arch","shell_bed","shell_fountain","shell_partition","shell_stool","shell_table","shower_booth","sideways_pirate_barrel","signpost","silo","silver_mic","simple_DIY_workbench","simple_panel","simple_well","skeleton","sleeping_bag","sleigh","small_cardboard_boxes","smoker","snack_machine","soccer_goal","soft-serve_lamp","solar_panel","South_Pole","space_shuttle","speed_bag","sphinx","spinning_wheel","springy_ride-on","squat_toilet","stadiometer","stall","standard_umbrella_stand","standing_toilet","Statue_of_Liberty","stone_arch","stone_lion-dog","stone_stool","stone_table","stone_tablet","Stonehenge","street_organ","street_piano","streetlamp","studio_spotlight","study_chair","study_desk","surfboard","swinging_bench","synthesizer","system_kitchen","table_with_cloth","tall_garden_rock","tall_lantern","tankless_toilet","tatami_bed","Taurus_bathtub","tea_table","teacup_ride","telescope","tennis_table","termite_mound","three-tiered_snowperson","throwback_dino_screen","throwback_hat_table","throwback_mitt_chair","throwback_race-car_bed","throwback_rocket","tiki_torch","tiny_library","tire_stack","tire_toy","toilet","toilet-cleaning_set","tool_cart","tool_shelf","tourist_telescope","Tower_of_Pisa","train_set","treadmill","tree_standee","tree's_bounty_arch","tree's_bounty_big_tree","tricycle","trophy_case","tulip_surprise_box","TV_camera","upright_locker","upright_piano","upright_vacuum","utility_pole","utility_sink","vacuum_cleaner","velvet_stool","video_camera","vintage_TV_tray","Virgo_harp","water_cooler","water_pump","wave_breaker","wedding_arch","wedding_bench","wedding_chair","wedding_flower_stand","wedding_head_table","wedding_pipe_organ","wedding_table","wedding_welcome_board","weight_bench","western-style_stone","wheelchair","whirlpool_bath","whiteboard","wild_log_bench","wind_turbine","wood-burning_stove","wooden_bookshelf","wooden_bucket","wooden_chair","wooden_chest","wooden_double_bed","wooden_end_table","wooden_full-length_mirror","wooden_low_table","wooden_mini_table","wooden_simple_bed","wooden_stool","wooden_table","wooden_wardrobe","wooden_waste_bin","wooden-block_bed","wooden-block_bench","wooden-block_bookshelf","wooden-block_chair","wooden-block_chest","wooden-block_stereo","wooden-block_stool","wooden-block_table","yellow-leaf_pile","yucca","zen_cushion","zen-style_stone"];
const housewareSearchObj = {};
const housewareAutoComplete = {};

housewareNames.forEach(houseware => {
    housewareSearchObj[houseware.split("_").join(" ")] = houseware;
    housewareAutoComplete[houseware.split("_").join(" ")] = null;
});

// AND WAL MOUNTED
const wallMountedNames = ["air_conditioner","antique_phone","autograph_cards","bamboo_wall_decoration","bathroom_towel_rack","blue_rose_wreath","bone_doorplate","boomerang","breaker","bronze_HHA_plaque","broom_and_dustpan","bug_plaque","Bunny_Day_glowy_garland","Bunny_Day_wall_clock","Bunny_Day_wreath","butterfly-fish_model","cherry_lamp","cherry-blossom_clock","chic_cosmos_wreath","chic_windflower_wreath","coconut_wall_planter","cool_hyacinth_wreath","cool_pansy_wreath","cool_windflower_wreath","corkboard","cosmos_wreath","crest_doorplate","cuckoo_clock","cute_wall-mounted_clock","dark_lily_wreath","dark_rose_wreath","dark_tulip_wreath","deer_decoration","diner_neon_clock","double-sided_wall_clock","exit_sign","fancy_lily_wreath","fancy_mum_wreath","fancy_rose_wreath","fish_doorplate","fish_plaque","fish_print","fishing-boat_flag","floral_swag","formal_paper","fossil_doorplate","fossil_plaque","fruit_wreath","gears","gold_HHA_plaque","gold_rose_wreath","golden_gears","grasshopper-head_model","hanging_scroll","hanging_terrarium","heart_doorplate","HHA_pennant","hyacinth_wreath","imperial_decorative_shelves","imperial_dining_lantern","intercom_monitor","iron_doorplate","iron_wall_lamp","iron_wall_rack","ironwood_clock","key_holder","Leo_sculpture","light_switch","lily_wreath","log_wall-mounted_clock","macrame_tapestry","magnetic_knife_rack","mantis-head_model","mermaid_wall_clock","mobile","Mom's_art","Mom's_embroidery","mounted_black_bass","mounted_blue_marlin","mum_wreath","mushroom_wreath","natural_mum_wreath","orange_wall-mounted_clock","ornament_mobile","ornament_wreath","pansy_wreath","party_garland","paw-print_doorplate","pendulum_clock","pennant","pot_rack","potted_ivy","pretty_cosmos_wreath","pretty_tulip_wreath","purple_hyacinth_wreath","retro_radiator","rose_wreath","Sagittarius_arrow","shell_wreath","shower_set","silver_HHA_plaque","skull_doorplate","snazzy_pansy_wreath","snowflake_wreath","spider_doorplate","spider_web","starry_garland","studio_wall_spotlight","study_poster","surveillance_camera","tapestry","throwback_wall_clock","timber_doorplate","tree_branch_wreath","tree's_bounty_mobile","tulip_wreath","ventilation_fan","wall_clock","wall_fan","wall-mounted_candle","wall-mounted_phone","wall-mounted_tool_board","wall-mounted_TV_(20_in.)","wall-mounted_TV_(50_in.)","wasp-head_model","wedding_decoration","windflower_wreath","wooden-block_wall_clock","wooden-plank_sign","world_map"];
const wallMountedSearchObj = {};
const wallMountedAutoComplete = {};

wallMountedNames.forEach(wallMounted => {
    wallMountedSearchObj[wallMounted.split("_").join(" ")] = wallMounted;
    wallMountedAutoComplete[wallMounted.split("_").join(" ")] = null;
});


// AND MISCELANEOUS
const miscNames = ["accessories_stand","ACNH_Nintendo_Switch","agrias_butterfly_model","aluminum_briefcase","amp","analog_kitchen_scale","anchovy_model","angelfish_model","ant_farm","ant_model","anthurium_plant","arapaima_model","aroma_pot","arowana_model","Baby_bear","Baby_panda","bagworm_model","ball","bamboo_candleholder","bamboo_drum","bamboo_lunch_box","bamboo_sphere","bamboo-shoot_lamp","barred_knifejaw_model","barreleye_model","beach_ball","bell_cricket_model","betta_model","bingo_wheel","birthday_cake","birthday_candles","bitterling_model","black_bass_model","blowfish_model","blue_marlin_model","blue_weevil_beetle_model","bluegill_model","board_game","book","book_stands","bottled_ship","brine-shrimp_aquarium","bronze_bug_trophy","bronze_fish_trophy","bronze_HHA_trophy","brown_cicada_model","Bunny_Day_basket","Bunny_Day_lamp","butterfly_fish_model","camp_stove","candle","cardboard_box","carp_model","cartoonist's_set","cassette_player","cat_grass","catfish_model","celebratory_candles","centipede_model","char_model","cherry_salmon_model","cherry_speakers","cherry-blossom_bonsai","chessboard","cicada_shell_model","citrus_long-horned_b._model","classic_pitcher","clown_fish_model","coconut_juice","coelacanth_model","coffee_cup","coffee_grinder","common_bluebottle_model","common_butterfly_model","cooler_box","cordless_phone","crawfish_model","cream_and_sugar","cricket_model","crucian_carp_model","cushion","cute_music_player","cutting_board","cyclommatus_stag_model","dab_model","dace_model","DAL_model_plane","DAL_mug","Dala_horse","damselfly_model","darner_dragonfly_model","decoy_duck","desk_mirror","desktop_computer","digital_alarm_clock","dinnerware","dish-drying_rack","diving_beetle_model","document_stack","dolly","dorado_model","drone_beetle_model","dung_beetle_model","earth-boring_dung_b._model","electronics_kit","emperor_butterfly_model","espresso_maker","essay_set","evening_cicada_model","fancy_violin","fax_machine","festive_top_set","film_projector","firefly_model","firewood","flea_model","floating-biotope_planter","floor_sign","fly_model","football","football_fish_model","fortune-telling_set","fragrance_diffuser","fragrance_sticks","freshwater_goby_model","frog_model","frozen-treat_set","fruit_basket","frying_pan","gar_model","garden_gnome","giant_cicada_model","giant_snakehead_model","giant_stag_model","giant_trevally_model","giant_water_bug_model","glass_holder_with_candle","globe","gold_bars","gold_bug_trophy","gold_fish_trophy","gold_HHA_trophy","golden_arowana_model","golden_candlestick","golden_dishes","golden_dung_beetle","golden_stag_model","golden_trout_model","goldfish_model","grand_giraffe_stag_model","grand_goliath_beetle_model","grand_h._hercules_model","grasshopper_model","great_purple_emperor_model","great_white_shark_model","guppy_model","hammerhead_shark_model","hamster_cage","handy_water_cooler","hermit_crab_model","holiday_candle","homework_set","honeybee_model","horned_atlas_model","horned_dynastid_model","horned_elephant_model","horse_mackerel_model","hourglass","hula_doll","humidifier","hyacinth_lamp","incense_burner","infused-water_dispenser","ironing_set","jewel_beetle_model","judge's_bell","katana","kettle","kettlebell","killifish_model","king_salmon_model","knife_block","koi_model","lab-experiments_set","ladybug_model","lantern","laptop","LCD_TV_(20_in.)","LCD_TV_(50_in.)","Libra_scale","life_ring","loach_model","long_locust_model","lucky_cat","lucky_gold_cat","M._sunset_moth_model","magazine","magazine_rack","magic_kit","mahi-mahi_model","man-faced_stink_bug_model","mantis_model","matryoshka","metal_can","metronome","microscope","microwave","migratory_locust_model","mini-cactus_set","mitten_crab_model","mixer","miyama_stag_model","modeling_clay","mole_cricket_model","Mom's_candle_set","Mom's_cushion","Mom's_homemade_cake","Mom's_pen_stand","Mom's_plushie","Mom's_tea_cozy","Mom's_tissue_box","monarch_butterfly_model","moray_eel_model","mosquito_model","moss_ball","moth_model","mug","nail-art_set","Napoleonfish_model","neon_tetra_model","Newton's_cradle","nibble_fish_model","Nintendo_Switch","nova_light","nutcracker","oarfish_model","oil_lamp","old-fashioned_alarm_clock","old-fashioned_washtub","olive_flounder_model","orchid_mantis_model","painting_set","pale_chub_model","paper_kite_butterfly_model","paper_tiger","peach_surprise_box","peacock_butterfly_model","pedal_board","pet_food_bowl","phonograph","picnic_basket","pike_model","pill_bug_model","pine_bonsai_tree","piranha_model","plasma_ball","plastic_canister","Pocket_modern_camper","Pocket_vintage_camper","pond_smelt_model","pondskater_model","pop-eyed_goldfish_model","pop-up_toaster","portable_radio","portable_record_player","pot","pro_tape_recorder","protein_shaker_bottle","puffer_fish_model","R._Brooke's_birdwing_model","rainbow_stag_model","rainbowfish_model","ranchu_goldfish_model","rattan_table_lamp","rattan_towel_basket","ray_model","record_box","recycled-can_thumb_piano","red_dragonfly_model","red_snapper_model","Reese_&_Cyrus_photo_plate","revolving_spice_rack","ribbon_eel_model","rice_cooker","rice_grasshopper_model","ring","ringtoss","robust_cicada_model","rosalia_batesi_beetle_model","rotary_phone","Rover's_briefcase","saddled_bichir_model","salmon_model","saw_shark_model","saw_stag_model","scarab_beetle_model","Scorpio_lamp","scorpion_model","sea_bass_model","sea_butterfly_model","sea_globe","sea_horse_model","sewing_machine","sewing_project","shaved-ice_maker","shell_lamp","shell_speaker","silver_bug_trophy","silver_fish_trophy","silver_HHA_trophy","simple_kettle","snail_model","snapping_turtle_model","snow_globe","soft-shelled_turtle_model","soup_kettle","spider_model","squid_model","stack_of_books","stacked_magazines","stand_mixer","star_clock","steamer-basket_set","stinkbug_model","stovetop_espresso_maker","stringfish_model","sturdy_sewing_box","sturgeon_model","succulent_plant","suckerfish_model","surgeonfish_model","sweetfish_model","table_lamp","table_setting","tabletop_festive_tree","tadpole_model","tape_deck","tarantula_model","tea_set","terrarium","thank-you_Dad_mug","thank-you_Mom_mug","throwback_container","throwback_gothic_mirror","throwback_skull_radio","throwback_wrestling_figure","tiger_beetle_model","tiger_butterfly_model","tilapia_model","tin_bucket","tissue_box","toolbox","toy_box","toy_centipede","toy_cockroach","traditional_balancing_toy","traditional_tea_set","trash_bags","tree's_bounty_lamp","tree's_bounty_little_tree","tuna_model","typewriter","ukulele","unfinished_puzzle","unglazed_dish_set","violin_beetle_model","walker_cicada_model","walking_leaf_model","walking_stick_model","wasp_model","wedding_cake","wedding_candle_set","whale_shark_model","wharf_roach_model","windflower_fan","wobbling_Zipper_toy","wooden_fish","wooden_table_mirror","wooden_toolbox","wooden-block_toy","yellow_butterfly_model","yellow_perch_model","zebra_turkeyfish_model"];
const miscSearchObj = {};
const miscAutoComplete = {};

miscNames.forEach(misc => {
    miscSearchObj[misc.split("_").join(" ")] = misc;
    miscAutoComplete[misc.split("_").join(" ")] = null;
});

export default function Index() {

    const [searchInput, setSearchInput] = useState('');
    const [searchCategory, setSearchCategory] = useState();

    const [responseObj, setResponseObj] = useState();

    const [testSearch, setTestSearch] = useState();

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
        case "houseware":
            autoCompleteObj = housewareAutoComplete;
            break;
        case "wallmounted":
            autoCompleteObj = wallMountedAutoComplete;
            break;
        case "misc":
            autoCompleteObj = miscAutoComplete;
        default:
            break;

    }

    const objArr = {};
    function searchTest(cat){
        API.testSearch(cat).then(res => {
            // console.log(Object.keys(res.data));
            // console.log((res.data))
            console.log(Object.keys(res.data))
            setTestSearch(Object.keys(res.data))
            // Object.keys(res.data).forEach(villager => {
            //     // console.log(res.data[villager]['file-name'], res.data[villager].name['name-USen'])
            //     objArr[res.data[villager].name['name-USen']] = res.data[villager]['file-name'];
            // })
        })
    }
    // TODO: CAPTURE NAMES ARRAY FOR villagers, houseware, wallmounted, misc


    // searchTest('misc')
    // console.log(objArr);


    function handleClick() {
        // event.preventDefault();
        API.search(searchInput, searchCategory).then((res) => {
            // console.log((res.data))
            setResponseObj(res.data);
        })
    }

    function handleInputChange(event) {
        // setSearchInput(fishSearchObj[event.target.value]);
        switch (searchCategory) {
            case "fish":
                (fishSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(fishSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case "fossils":
                (fossilSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(fossilSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case "bugs":
                (bugSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(bugSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case "sea":
                (seaCreatureSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(seaCreatureSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case "villagers":
                event.target.value = (event.target.value).replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
                villagerSearchObj[event.target.value] ? setSearchInput(villagerSearchObj[(event.target.value)]) : setSearchInput(event.target.value);
                break;
            case 'houseware':
                (housewareSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(housewareSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case 'wallmounted':
                (wallMountedSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(wallMountedSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            case 'misc':
                (miscSearchObj[(event.target.value).toLowerCase()]) ? setSearchInput(miscSearchObj[(event.target.value).toLowerCase()]) : setSearchInput(event.target.value);
                break;
            default:
                break;
        }
    }

    function handleAutoComplete(event) {
        // setSearchInput(fishSearchObj[event.target.value]);
        switch (searchCategory) {
            case "fish":
                (fishSearchObj[event]) ? setSearchInput(fishSearchObj[event]) : setSearchInput(event);
                break;
            case "fossils":
                (fossilSearchObj[event]) ? setSearchInput(fossilSearchObj[event]) : setSearchInput(event);
                break;
            case "bugs":
                (bugSearchObj[event]) ? setSearchInput(bugSearchObj[event]) : setSearchInput(event);
                break;
            case "sea":
                (seaCreatureSearchObj[event]) ? setSearchInput(seaCreatureSearchObj[event]) : setSearchInput(event);
                break;
            case "villagers":
                (villagerSearchObj[event]) ? setSearchInput((villagerSearchObj[event]).toLowerCase()) : setSearchInput(event);
                break;
            case "houseware":
                (housewareSearchObj[event]) ? setSearchInput((housewareSearchObj[event]).toLowerCase()) : setSearchInput(event);
                break;
            case 'wallmounted':
                (wallMountedSearchObj[event]) ? setSearchInput((wallMountedSearchObj[event]).toLowerCase()) : setSearchInput(event);
                break;
            case "misc":
                (miscSearchObj[event]) ? setSearchInput((miscSearchObj[event]).toLowerCase()) : setSearchInput(event);
                break;
            default:
                break;
        }
    }

    function handleCategoryChange(event) {
        setSearchCategory(event.target.value)
    }

    return (
        <>
        <Row>
            <form className="col s12 m">
                <Row>
                    <div className="input-field col m5 s12">
                        {(!searchCategory) ? <>
                            <input disabled value="Select Category" id="disabled" type="text" className="validate col s12" />
                        </> : <Autocomplete
                                id="Autocomplete-1"
                                options={{
                                    data: autoCompleteObj,
                                    onAutocomplete: handleAutoComplete
                                }}
                                placeholder="Island Search!"
                                onChange={handleInputChange}
                                s={12}
                                className="validate col s12"
                                />

                        }


                    </div>
                    <Select
                        id="Select-9"
                        m={4}
                        s={12}
                        multiple={false}
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
        {(responseObj) ? 
        <SearchResultCard response-data={responseObj} category={searchCategory}/> : <></>
    }
        </>
    )
}
