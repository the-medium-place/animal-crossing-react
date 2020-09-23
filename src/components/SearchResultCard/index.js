import React from 'react';
import { Row, Col } from 'react-materialize';
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

    const response = props['response-data']
    console.log(response)

    return (
        <div>
            {
                // FISH CARD
                (props.category === 'fish') ?
                    <Row className="results-card">
                        <Row>
                            <Col s={12}>
                                <img src={response.icon_uri} alt="fish icon" className="col s3" />
                                <h1 className="col s9 center-align">{response.name['name-USen']}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <img src='../../../assets/images/blathersBook.png' className="col s7 blathers-pic"/>
                            <h4 className="col s5">Blathers Says: <br /><small>{response['museum-phrase']}</small></h4>

                        </Row>

                        <Row>
                            <h5 className="col s12">Catch Phrase: <br /><small>{response['catch-phrase']}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s12">Rarity: <small>{response.availability.rarity}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s6">Availability Month: <br />
                                Northern:
                                <small>{`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                </small>
                                <br />
                                Southern:
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
                            <Col s={12}>
                                <img src={response.icon_uri} alt="bug icon" className="col s3" />
                                <h1 className="col s9 center-align">{response.name['name-USen']}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="col s12">Blathers Says: <br /><small>{response['museum-phrase']}</small></h4>

                        </Row>

                        <Row>
                            <h5 className="col s12">Catch Phrase: <br /><small>{response['catch-phrase']}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s12">Rarity: <small>{response.availability.rarity}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s6">Availability Month: <br />
                                Northern:
                                <small>{`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                </small>
                                <br />
                                Southern:
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
                    </Row> : <></>}
            {

                // // FOSSILS CARD
                (props.category === 'fossils') ?
                    <Row className="results-card">
                        <h1> fossil card</h1>
                    </Row> : <></>}
            {

                // // SEA CREATURES CARD
                (props.category === 'sea') ?
                    <Row className="results-card">
                        <Row>
                            <Col s={12}>
                                <img src={response.icon_uri} alt="fish icon" className="col s3" />
                                <h1 className="col s9 center-align">{response.name['name-USen']}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="col s12">Blathers Says: <br /><small>{response['museum-phrase']}</small></h4>

                        </Row>

                        <Row>
                            <h5 className="col s12">Catch Phrase: <br /><small>{response['catch-phrase']}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s12">Rarity: <small>{response.availability.rarity}</small></h5>
                        </Row>
                        <Row>
                            <h5 className="col s6">Availability Month: <br />
                                Northern:
                                <small>{`${monthObj[response.availability['month-array-northern'][0]]} - ${monthObj[response.availability['month-array-northern'][response.availability['month-array-northern'].length - 1]]}`}
                                </small>
                                <br />
                                Southern:
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
