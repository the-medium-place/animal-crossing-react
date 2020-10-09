import React, { useState } from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';
import M from 'materialize-css';
import API from '../../utils/API';

import './style.css';

export default function Index() {

    M.AutoInit();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userIslandName, setUserIslandName] = useState();
    const [userIslandHemi, setUserIslandHemi] = useState();

    function handleFormSubmit(event) {
        event.preventDefault();
        const newUserObj = {
            username: username,
            password: password,
            userEmail: userEmail,
            islandName: userIslandName,
            islandHemisphere: userIslandHemi
        }

        API.addUser(newUserObj)

    }

    return (
        <div className="container section green-text accent-3">
            <Row>
                <Col s={4}></Col>
                    <img src="http://placekitten.com/200/200" 
                    alt="test image" 
                    className="circle responsive-img top-img col s4" 
                    />
                <Col s={4}></Col>
            </Row>
            <Row>
                <Col s={12}>
                    <h3 className="center-align">NEW USER</h3>
                    <h3 className="center-align">REGISTRATION</h3>
                </Col>
            </Row>


            {/* BEGIN INPUT FIELD */}
            <form className="col s12">
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="Pick a username!"
                        s={12}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-5"
                        label="Choose a password!"
                        password
                        s={12}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-6"
                        label="E-Mail Address"
                        email
                        error="Please enter a valid email address..."
                        success="Valid 😆"
                        validate
                        s={12}
                        onChange={e => setUserEmail(e.target.value)}

                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-7"
                        label="What is your island name?"
                        s={12}
                        onChange={e => setUserIslandName(e.target.value)}

                    />
                </Col>
            </Row>
            <Row>
                <Col s={2}></Col>
                <Col s={8}>
                    <p className="col s4 center-align" style={{borderRight: "3px solid green"}}>Island Hemisphere</p>
                    <p className="col s4 center-align">
                        <label>
                            <input class="with-gap" name="hemisphereGroup" type="radio"  value="northern" onChange={e => setUserIslandHemi(e.target.value)}/>
                            <span>Northern</span>
                        </label>
                    </p>
                    <p className="col s4 center-align">
                        <label>
                            <input class="with-gap" name="hemisphereGroup" type="radio"  value="southern" onChange={e => setUserIslandHemi(e.target.value)}/>
                            <span>Southern</span>
                        </label>
                    </p>
                </Col>
                <Col s={2}></Col>

            </Row>
            <Row>
                <Col s={2}></Col>
                <Button
                    className="col s8"
                    large
                    node="a"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                    onClick={handleFormSubmit}
                >
                    Submit!
                </Button>
                <Col s={2}></Col>
            </Row>
            </form>
            {/* END INPUT FIELD */}

        </div>
    )
}
