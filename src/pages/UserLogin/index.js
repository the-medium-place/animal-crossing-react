import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { useHistory } from "react-router-dom"

import { TextInput, Button } from 'react-materialize';

// import { useSignIn } from 'react-auth-kit';


export default function Index(props) {

    // const [userName, setUserName] = useState();
    // const [password, setPassword] = useState();


    // function handleFormSubmit() {
    //     const userObj = {
    //         username: userName,
    //         password: password
    //     }
    //     API.login(userObj);
    // }

    const history = useHistory()
    // const signIn = useSignIn();

    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
    })

    const [ loggedInUser, setLoggedInUser ] = useState({
        isLoggdIn: false,
        user: null,
        token: null
    })

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token){
    //         console.log(token);
    //     } 
    // }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;

        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        // console.log(loginState);
        API.login(loginState).then(res => {

            if (res) {
                // console.log(res.data)
                localStorage.setItem("token", res.data.accessToken)
                props.submitHandler(res.data)
                history.push(`/users/${res.data.id}`);


            } else {
                // console.log(res.data)
                localStorage.removeItem('token');

                // let user know what went wrong
                // toast({
                //   message: res.data,
                //   type: "is-danger",
                //   position: "center",
                //   duration: 4000,
                //   dismissible: true
                // });
                // props.submitHandler(false)
            }
        }).catch((err) => console.log(err));
    }



    return (
        <div className="container">
            <h1>User Login</h1>
            <TextInput
                id="TextInput-4"
                label="Enter username!"
                s={12}
                name="username"
                // onChange={e => setUserName(e.target.value)}
                onChange={handleInputChange}
            />
            <TextInput
                id="TextInput-5"
                label="Enter Password!"
                password
                name="password"
                s={12}
                // onChange={e => setPassword(e.target.value)}
                onChange={handleInputChange}

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
