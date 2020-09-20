import React, { useState, useEffect } from 'react';
import { Row, Col, Autocomplete, Select, Button, Icon } from 'react-materialize';
import API from '../../utils/API';
import './style.css';

// const fishNames = {
//     "bitterling": "bitterling",
//     "pale chub": "pale_chub",
//     "crucian carp": "crucian_carp",
//     "dace": "dace",
//     "carp": "carp",
//     "koi": "koi",
//     "goldfish": "goldfish",
//     "pop-eyed goldfish": "pop-eyed_goldfish",
//     "ranchu goldfish": "ranchu_goldfish",
//     "killifish": "killifish",
//     "crawfish": "crawfish",
//     "soft-shelled turtle": "soft-shelled_turtle",
//     "snapping turtle": "snapping_turtle",
//     "tadpole": "tadpole",
//     "frog": "frog",
//     "freshwater goby": "freshwater_goby",
//     "loach": "loach",
//     "catfish": "catfish",
//     "giant snakehead": "giant_snakehead",
//     "bluegill": "bluegill",
//     "yellow perch": "yellow_perch",
//     "black bass": "black_bass",
//     "tilapia": "tilapia",
//     "pike": "pike",
//     "pond smelt": "pond_smelt",
//     "sweetfish": "sweetfish",
//     "cherry salmon": "cherry_salmon",
//     "char": "char",
//     "golden trout": "golden_trout",
//     "stringfish": "stringfish",
//     "salmon": "salmon",
//     "king salmon": "king_salmon",
//     "mitten crab": "mitten_crab",
//     "guppy": "guppy",
//     "nibble fish": "nibble_fish",
//     "angelfish": "angelfish",
//     "betta": "betta",
//     "neon tetra": "neon_tetra",
//     "rainbowfish": "rainbowfish",
//     "piranha": "piranha",
//     "arowana": "arowana",
//     "dorado": "dorado",
//     "gar": "gar",
//     "arapaima": "arapaima",
//     "saddled bichir": "saddled_bichir",
//     "sturgeon": "sturgeon",
//     "sea butterfly": "sea_butterfly",
//     "sea horse": "sea_horse",
//     "clownfish": "clownfish",
//     "surgeonfish": "surgeonfish",
//     "butterfly fish": "butterfly_fish",
//     "napoleonfish": "napoleonfish",
//     "zebra turkeyfish": "zebra_turkeyfish",
//     "blowfish": "blowfish",
//     "puffer fish": "puffer_fish",
//     "anchovy": "anchovy",
//     "horse mackerel": "horse_mackerel",
//     "barred knifejaw": "barred_knifejaw",
//     "sea bass": "sea_bass",
//     "red snapper": "red_snapper",
//     "dab": "dab",
//     "olive flounder": "olive_flounder",
//     "squid": "squid",
//     "moray eel": "moray_eel",
//     "ribbon eel": "ribbon_eel",
//     "tuna": "tuna",
//     "blue marlin": "blue_marlin",
//     "giant trevally": "giant_trevally",
//     "mahi-mahi": "mahi-mahi",
//     "ocean sunfish": "ocean_sunfish",
//     "ray": "ray",
//     "saw shark": "saw_shark",
//     "hammerhead shark": "hamerhead_shark",
//     "great white shark": "great_white_shark",
//     "whale shark": "whale_shark",
//     "suckerfish": "suckerfish",
//     "football fish": "football_fish",
//     "oarfish": "oarfish",
//     "barreleye": "barreleye",
//     "coelacanth": "coelacanth"
// }
const fishNames = ["bitterling", "pale_chub", "crucian_carp", "dace", "carp", "koi", "goldfish", "pop-eyed_goldfish", "ranchu_goldfish", "killifish", "crawfish", "soft-shelled_turtle", "snapping_turtle", "tadpole", "frog", "freshwater_goby", "loach", "catfish", "giant_snakehead", "bluegill", "yellow_perch", "black_bass", "tilapia", "pike", "pond_smelt", "sweetfish", "cherry_salmon", "char", "golden_trout", "stringfish", "salmon", "king_salmon", "mitten_crab", "guppy", "nibble_fish", "angelfish", "betta", "neon_tetra", "rainbowfish", "piranha", "arowana", "dorado", "gar", "arapaima", "saddled_bichir", "sturgeon", "sea_butterfly", "sea_horse", "clownfish", "surgeonfish", "butterfly_fish", "napoleonfish", "zebra_turkeyfish", "blowfish", "puffer_fish", "anchovy", "horse_mackerel", "barred_knifejaw", "sea_bass", "red_snapper", "dab", "olive_flounder", "squid", "moray_eel", "ribbon_eel", "tuna", "blue_marlin", "giant_trevally", "mahi-mahi", "ocean_sunfish", "ray", "saw_shark", "hammerhead_shark", "great_white_shark", "whale_shark", "suckerfish", "football_fish", "oarfish", "barreleye", "coelacanth"]

const fishSearchObj = {};
const fishAutoComplete = {};

fishNames.forEach(fish => {
    fishSearchObj[fish.split("_").join(" ")] = fish;
    fishAutoComplete[fish.split("_").join(" ")] = null;
})

console.log(fishSearchObj)
console.log(fishAutoComplete)

export default function Index() {

    const [searchInput, setSearchInput] = useState(null);
    const [searchCategory, setSearchCategory] = useState(null);

    function handleClick(event) {
        API.search(searchInput, searchCategory).then((res) => {
            console.log((res.data))
        })
    }
    // handleClick();

    function handleInputChange(event) {
        setSearchInput(fishSearchObj[event.target.value]);

    }

    function handleCategoryChange(event) {
        setSearchCategory(event.target.value)
    }


    return (
        <div className="container green-text accent-3">
            <Row>
                <Col s={12}>
                    <h1 className="center-align" style={{ "fontWeight": "bold" }}>Welcome!</h1>
                </Col>
            </Row>
            <Row>
                <Col s={2}>
                    <img src="http://placekitten.com/50/50" alt="test icon" />
                </Col>
                <Col s={10}>
                    <h4 className="center-align">
                        TestUsername
                    </h4>
                </Col>

            </Row>
            <Row>
                <Col sm={1} className="teal"></Col>
                <form className="col s10 m">
                    <Row>
                        <div className="input-field col s6">
                            {/* <input placeholder="Search" id="search-input" type="text" className="validate" /> */}
                            <Autocomplete
                                id="Autocomplete-1"
                                options={{
                                    data: fishAutoComplete
                                }}
                                placeholder="Island Search!"
                                onChange={handleInputChange}
                            />
                        </div>

                        <Select
                            id="Select-9"
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
                            className="col s6">
                            <option
                                disabled
                                value=""
                            >
                                Search category
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
                        <Button
                            large
                            node="a"
                            waves="light"
                            onClick={handleClick}
                        >
                            Button
                        <Icon right>
                                cloud
                        </Icon>
                        </Button>
                    </Row>
                </form >
                <Col sm={1} className="teal"></Col>
            </Row>
        </div>
    )
}
