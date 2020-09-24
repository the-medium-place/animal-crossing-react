import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Row, Col, TextInput, Button, RadioGroup } from 'react-materialize';


export default function Index() {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();


    function handleFormSubmit() {
        const userObj = {
            username: userName,
            password: password
        }
        API.login(userObj);
    }


    return (
        <div>
            <h1>User Login</h1>
            <TextInput
                id="TextInput-4"
                label="Enter username!"
                s={12}
                onChange={e => setUserName(e.target.value)}
            />            
            <TextInput
                id="TextInput-5"
                label="Enter Password!"
                password
                s={12}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                // className="col s8"
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



        </div>
    )
}
