import React from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
// import BlatherPic from '';
import './style.css';

const currentDate = new Date();
const currentMonth = currentDate.getMonth()
const currentHour = currentDate.getHours();

// console.log(currentDate, currentMonth, currentHour)

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

    const response = props['response-data']
    console.log(props.loggedInUser)

    return (
        <div className="green-text accent-5">
            {
                // FISH CARD
                (props.category === 'fish') ?
                    <Row className="results-card">
                        <Row>
                            <Col s={12} className="">
                                <img src={response.icon_uri} alt="fish icon" className="col s3 responsive-img result-icon" />
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
                            <h5 className="col s12">Catch Phrase: <br /><small>{response['catch-phrase']}</small></h5>
                        </Row>
                        <Row>
                            <div className="col s4">
                                <h5 className="col s12">Rarity: <small>{response.availability.rarity}</small></h5>
                            </div>
                            <div className="col s4">
                                <h5>Selling Price: <small>{response.price} <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" /></small></h5>
                            </div>
                            <div className="col s4">
                                <h5>Price (CJ): <small>{response['price-cj']} <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" /></small></h5>
                            </div>

                        </Row>
                        <Row>
                            <h5 className="col s6">Availability Month: <br />
                                Northern: <br />
                                <small>{`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                </small>
                                <br />
                                Southern: <br />
                                <small>{`${monthObj[response.availability['month-array-southern'][0]]} - ${monthObj[response.availability['month-array-southern'][response.availability['month-array-southern'].length - 1]]}`}
                                </small>
                            </h5>

                            <h5 className="col s6">Time Availability: <br />
                                {(response.availability.isAllDay) ?
                                    <small>All Day!</small> :
                                    <small>{response.availability.time}</small>
                                }

                            </h5>
                        </Row>

                        {/* <Row>
                            <h5 className="col s6">Availability Month: <br />
                        Northern: {(response.availability['month-array-northern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                                <br />
                        Southern: {(response.availability['month-array-southern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                            </h5>
                            <br />
                            <h5 className="col s6">Time Availability: <br />
                                {(response.availability['month-array-northern'].includes(currentHour)) ? <small>Yes!</small> : <small>No!</small>}
                                <br />
                            </h5>
                        </Row> */}
                        <Row>
                            <Col s={2}></Col>
                            <img src={response.image_uri} alt="fish image" className="circle result-img col s8" />
                            <Col s={2}></Col>
                        </Row>
                        <Row>
                            <Col s={11}></Col>
                            <Col s={1}>
                                {(props.loggedInUser.isLoggedIn) ?
                                    <Button
                                        className="green accent-5 nav-button"
                                        floating
                                        icon={<Icon>save</Icon>}
                                        large
                                        node="button"
                                        waves="light"
                                    /> : <p>Login to add to your collection!</p>
                                }
                            </Col>
                        </Row>
                    </Row> : <></>}
            {
                // VILLAGER CARD
                (props.category === 'villagers') ?
                    <Row className="results-card">
                        <div style={{ backgroundColor: response['bubble-color'], color: response['text-color'], border: '3px solid gray' }}>

                            <img src={response.icon_uri} alt='villager!' className="col s3" />
                            <h1 className="center-align col s9 villager-icon"> {response.name['name-USen']}</h1>
                            <img src={response.image_uri} alt="bigger villager!" className="circle" />
                            <p>Brithday: {response['birthday-string']}</p>
                            <p></p>
                        </div>
                    </Row> : <></>}
            {

                // BUGS CARD
                (props.category === 'bugs') ?
                    <Row className="results-card">
                        <Row>
                            <Col s={12} className="">
                                <img src={response.icon_uri} alt="bug icon" className="col s3 responsive-img result-icon" />
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
                            <h5 className="col s12">Catch Phrase: <br /><small>{response['catch-phrase']}</small></h5>
                        </Row>
                        <Row>
                            <div className="col s4">
                                <h5 className="col s12">Rarity: <small>{response.availability.rarity}</small></h5>
                            </div>
                            <div className="col s4">
                                <h5>Selling Price: <small>{response.price} <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" /></small></h5>
                            </div>
                            <div className="col s4">
                                <h5>Price (Flick): <small>{response['price-flick']} <img src="../../../assets/images/bellPouch.png" alt="bell pouch!" className="bell-pouch" /></small></h5>
                            </div>

                        </Row>
                        <Row>
                            <h5 className="col s6">Availability Month: <br />
                        Northern: <br />
                                <small>{`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                </small>
                                <br />
                        Southern: <br />
                                <small>{`${monthObj[response.availability['month-array-southern'][0]]} - ${monthObj[response.availability['month-array-southern'][response.availability['month-array-southern'].length - 1]]}`}
                                </small>
                            </h5>

                            <h5 className="col s6">Time Availability: <br />
                                {(response.availability.isAllDay) ?
                                    <small>All Day!</small> :
                                    <small>{response.availability.time}</small>
                                }

                            </h5>
                        </Row>
                        {/* <Row>
                    <h5 className="col s6">Availability Month: <br />
                Northern: {(response.availability['month-array-northern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                        <br />
                Southern: {(response.availability['month-array-southern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                    </h5>
                    <br />
                    <h5 className="col s6">Time Availability: <br />
                        {(response.availability['month-array-northern'].includes(currentHour)) ? <small>Yes!</small> : <small>No!</small>}
                        <br />
                    </h5>
                </Row> */}
                        <Row>
                            <Col s={2}></Col>
                            <img src={response.image_uri} alt="bug image" className="circle result-img col s8" />
                            <Col s={2}></Col>
                        </Row>
                    </Row> : <></>}
            {
                // // ITEM CARD
                (props.category === 'houseware' || props.category === 'wallmounted' || props.category === 'misc') ?
                    <Row className="results-card">
                        <h1> item card</h1>
                    </Row> : <></>
            }



        </div>
    )
}
