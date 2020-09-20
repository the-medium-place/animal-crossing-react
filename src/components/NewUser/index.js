import React, { useState, useEffect } from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';

import API from '../../utils/API';



export default function Index() {

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
                <Col s={4}>
                    <div className="flex">
                        <img src="http://placekitten.com/200/200" alt="test image" className="circle responsive-img top-img " />
                    </div>
                </Col>
                <Col s={4}></Col>
            </Row>
            <Row>
                <Col s={12}>
                    <h3 className="center-align">NEW USER</h3>
                    <h3 className="center-align">REGISTRATION</h3>
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="Username"
                        s={12}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="Choose Password"
                        password
                        s={12}

                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="Confirm Password"
                        password
                        s={12}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="E-Mail Address"
                        email
                        error="Please enter a valid email address..."
                        success="Perfect 😆 "
                        validate
                        s={12}
                        onChange={e => setUserEmail(e.target.value)}

                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="What is your island name?"
                        s={12}
                        onChange={e => setUserIslandName(e.target.value)}

                    />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <TextInput
                        id="TextInput-4"
                        label="Island Hemisphere?"
                        s={12}
                        onChange={e => setUserIslandHemi(e.target.value)}

                    />
                </Col>
            </Row>
            <Row>
                <Button
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
            </Row>

        </div>
    )
}
