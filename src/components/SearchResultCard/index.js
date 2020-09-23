import React from 'react';
import { Row, Col } from 'react-materialize';

import './style.css';

const currentDate = new Date();
const currentMonth = currentDate.getMonth()
const currentHour = currentDate.getHours();

console.log(currentDate, currentMonth, currentHour)

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
                        <img src={response.icon_uri} alt="fish icon" className="col s3"/>
                        <h1 className="col s9 center-align">{response.name['name-USen']}</h1>
                        </Col>
                        </Row>
                        <Row>
                        <Col s={2}></Col>
                        <img src={response.image_uri} alt="fish image" className="circle result-img col s8" />
                        <Col s={2}></Col>

                        </Row>
                        <p>Catch Phrase: {response['catch-phrase']}</p>
                        <p>Museum Phrase: {response['museum-phrase']}</p>
                        <p>Rarity: {response.availability.rarity}</p>
                        <h5>Availability Month: <br />
                Northern: {(response.availability['month-array-northern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                            <br />
                Southern: {(response.availability['month-array-southern'].includes(currentMonth)) ? <small>Yes!</small> : <small>No!</small>}
                        </h5>
                        <br />
                        <h5>Availability Time: <br />
                Northern: {(response.availability['month-array-northern'].includes(currentHour)) ? <small>Yes!</small> : <small>No!</small>}
                            <br />
                        </h5>
                    </Row> : <></>}
            {
                // VILLAGER CARD
                (props.category === 'villagers') ?
                    <Row className="results-card">
                        <div style={{ backgroundColor: response['bubble-color'], color: response['text-color'], border: '3px solid gray' }}>
                
                            <img src={response.icon_uri} alt='villager!' className="col s3"/>
                            <h1 className="center-align col s9 villager-icon"> {response.name['name-USen']}</h1>
                            <img src={response.image_uri} alt="bigger villager!" className="circle"/>
                            <p>Brithday: {response['birthday-string']}</p>
                            <p></p>
                        </div>
                    </Row> : <></>}
            {

                // BUGS CARD
                (props.category === 'bugs') ?
                    <Row className="results-card">
                        <h1> bug card</h1>
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
                        <h1> sea creatures card</h1>
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
