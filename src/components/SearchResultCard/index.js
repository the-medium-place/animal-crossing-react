import React from 'react';
import { Row, Col, Button, Icon, Table } from 'react-materialize';
// import BlatherPic from '';
import './style.css';

const currentDate = new Date();
const currentMonth = currentDate.getMonth()
const currentHour = currentDate.getHours();

console.log(currentDate, currentMonth, currentHour)

const monthObj = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

export default function Index(props) {

    const response = props['response-data'];
    // console.log(props.loggedInUser)

    // const handleSaveBtnClick = (event) => {
    //     console.log(event)
    // }



    return (
        <div className="green-text accent-5">
            {
                // FISH CARD
                (props.category === 'fish') ?
                    <Row className="results-card">
                        <Row>
                            <Col s={12} className="">
                                <img src={response.icon_uri} alt={response.name['name-USen']} className="col s3 responsive-img result-icon" />
                                <h1 className="col s9 center-align result-title">{response.name['name-USen']}</h1>
                            </Col>
                        </Row>
                        <Row className="museum-info">
                            <img src='../../../assets/images/blathersBook.png' className="col s5 blathers-pic" alt="It's Blathers!" />
                            <div className="speech-box col s7">
                                <p>{response['museum-phrase']}</p>
                            </div>

                        </Row>
                        <Row>
                            <Col s={2}></Col>
                            <img src={response.image_uri} alt={response.name['name-USen']} className="circle result-img col s8" />
                            <Col s={2}></Col>
                        </Row>

                        <Row>

                            <Col s={1}></Col>
                            <Col s={10}>
                                <Table className="responsive-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Catch Phrase:
                                            </span>
                                            </td>
                                            <td>
                                                ...{response['catch-phrase']}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Rarity:
                                            </span>
                                            </td>
                                            <td>
                                                {response.availability.rarity}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Selling Price:
                                            </span>
                                            </td>
                                            <td>
                                                {response.price + " "}
                                                <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" />

                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Selling Price (CJ):
                                            </span>
                                            </td>
                                            <td>
                                                {response['price-cj'] + " "}
                                                <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" />
                                            </td>


                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Northern Hemisphere Availability:
                                            </span>
                                            </td>
                                            <td>
                                                {`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Southern Hemisphere Availability:
                                            </span>
                                            </td>
                                            <td>
                                                {`${monthObj[response.availability['month-array-southern'][0]]} - ${monthObj[response.availability['month-array-southern'][response.availability['month-array-southern'].length - 1]]}`}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Time Availability:
                                                </span>
                                            </td>
                                            <td>
                                                {(response.availability.isAllDay) ?
                                                    <small>All Day!</small> :
                                                    <small>{response.availability.time}</small>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col s={1}></Col>
                        </Row>
                        <Row>
                            <Col s={2}></Col>
                            <Col s={8} className="save-btn">
                                {(props.loggedInUser.isLoggedIn) ?
                                    <Button
                                        className="green accent-5 save-button"
                                        // floating
                                        icon={<Icon>save</Icon>}
                                        large
                                        node="button"
                                        waves="light"
                                        id="fish"
                                        onClick={props.handleSaveBtnClick}
                                    /> : <p>Login to add to your collection!</p>
                                }
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                    </Row> : <></>
            }
            {
                // VILLAGER CARD
                // TODO: ADD SAVE BTN
                (props.category === 'villagers') ?
                    <Row className="results-card" style={{ backgroundColor: response['bubble-color'], color: response['text-color'], border: '3px solid gray' }}>
                        <Row>

                            <img src={response.icon_uri} alt={response.name['name-USen']} className="col s3" />
                            <h1 className="center-align col s9 villager-icon"> {response.name['name-USen']}</h1>
                        </Row>
                        <Row>

                            <Col s={2}></Col>
                            <Col s={8}>
                                <img src={response.image_uri} alt="bigger villager!" className="circle villager-img" />
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                        <Row>

                            <Col s={1}></Col>
                            <Col s={10}>
                                <Table className="responsive-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Birthday:
                                                </span>
                                            </td>
                                            <td>
                                                {response['birthday-string']}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Catch Phrase:
                                            </span>
                                            </td>
                                            <td>
                                                ...{response['catch-phrase']}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Gender:
                                            </span>
                                            </td>
                                            <td>
                                                {response.gender}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Hobby:
                                            </span>
                                            </td>
                                            <td>
                                                {response.hobby}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Personality:
                                            </span>
                                            </td>
                                            <td>
                                                {response.personality}
                                            </td>


                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-property">
                                                    Species:
                                            </span>
                                            </td>
                                            <td>
                                                {response.species}
                                            </td>

                                        </tr><tr>
                                            <td>
                                                <span className="table-property">
                                                    Favorite Saying:
                                            </span>
                                            </td>
                                            <td>
                                                {response.saying}
                                            </td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col s={1}></Col>
                        </Row>
                        <Row>
                            <Col s={2}></Col>
                            <Col s={8} className="save-btn">
                                {(props.loggedInUser.isLoggedIn) ?
                                    <Button
                                        className="green accent-5 save-button"
                                        icon={<Icon>save</Icon>}
                                        large
                                        node="button"
                                        waves="light"
                                        onClick={props.handleSaveBtnClick}
                                        id="villager"
                                    /> : <p>Login to add to your collection!</p>
                                }
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                    </Row> : <></>
            }
            {
                // TODO: BUGS CARD
                (props.category === 'bugs') ?
                <Row className="results-card">
                <Row>
                    <Col s={12} className="">
                        <img src={response.icon_uri} alt={response.name['name-USen']} className="col s3 responsive-img result-icon" />
                        <h1 className="col s9 center-align result-title">{response.name['name-USen']}</h1>
                    </Col>
                </Row>
                <Row className="museum-info">
                    <img src='../../../assets/images/blathersBook.png' className="col s5 blathers-pic" alt="It's Blathers!" />
                    <div className="speech-box col s7">
                        <p>{response['museum-phrase']}</p>
                    </div>

                </Row>
                <Row>
                    <Col s={2}></Col>
                    <img src={response.image_uri} alt={response.name['name-USen']} className="circle result-img col s8" />
                    <Col s={2}></Col>
                </Row>

                <Row>

                    <Col s={1}></Col>
                    <Col s={10}>
                        <Table className="responsive-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Catch Phrase:
                                    </span>
                                    </td>
                                    <td>
                                        ...{response['catch-phrase']}
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Rarity:
                                    </span>
                                    </td>
                                    <td>
                                        {response.availability.rarity}
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Selling Price:
                                    </span>
                                    </td>
                                    <td>
                                        {response.price + " "}
                                        <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" />

                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Selling Price (Flick):
                                    </span>
                                    </td>
                                    <td>
                                        {response['price-flick'] + " "}
                                        <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" />
                                    </td>


                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Northern Hemisphere Availability:
                                    </span>
                                    </td>
                                    <td>
                                        {`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Southern Hemisphere Availability:
                                    </span>
                                    </td>
                                    <td>
                                        {`${monthObj[response.availability['month-array-southern'][0]]} - ${monthObj[response.availability['month-array-southern'][response.availability['month-array-southern'].length - 1]]}`}
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <span className="table-property">
                                            Time Availability:
                                        </span>
                                    </td>
                                    <td>
                                        {(response.availability.isAllDay) ?
                                            <small>All Day!</small> :
                                            <small>{response.availability.time}</small>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col s={1}></Col>
                </Row>
                <Row>
                    <Col s={2}></Col>
                    <Col s={8} className="save-btn">
                        {(props.loggedInUser.isLoggedIn) ?
                            <Button
                                className="green accent-5 save-button"
                                // floating
                                icon={<Icon>save</Icon>}
                                large
                                node="button"
                                waves="light"
                                id="bug"
                                onClick={props.handleSaveBtnClick}
                            /> : <p>Login to add to your collection!</p>
                        }
                    </Col>
                    <Col s={2}></Col>
                </Row>
            </Row> : <></>

            }
            {
                // TODO: FOSSILS CARD
                (props.category === 'fossils') ?
                    <Row className="results-card">
                        {/* <h1>Fossils Card</h1> */}
                        <Col s={2}></Col>
                    <Col s={8} className="save-btn">
                        {(props.loggedInUser.isLoggedIn) ?
                            <Button
                                className="green accent-5 save-button"
                                // floating
                                icon={<Icon>save</Icon>}
                                large
                                node="button"
                                waves="light"
                                id="fossil"
                                onClick={props.handleSaveBtnClick}
                            /> : <p>Login to add to your collection!</p>
                        }
                    </Col>
                    <Col s={2}></Col>
                    </Row> : <></>
            }
            {
                // TODO: ITEM CARD
                (props.category === 'houseware' || props.category === 'wallmounted' || props.category === 'misc') ?
                    <Row className="results-card">
                        <h1> item card</h1>
                    </Row> : <></>
            }



        </div>
    )
}
