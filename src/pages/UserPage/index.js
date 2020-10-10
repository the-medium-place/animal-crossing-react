import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-materialize';
import API from '../../utils/API';
import './style.css';
import Dashboard from '../../components/Dashboard';
import { useParams } from "react-router-dom";


export default function Index({ loggedInUser }) {
    const params = useParams();

    // const [userState, setUserState] = useState({
    //     username: '',
    //     user_id: '',
    //     userEmail: '',
    //     islandHemisphere: '',
    //     islandName: ''
    // });


    useEffect(() => {
        // console.log(params.id);
        // if (params.id) {
        //     // console.log(params.id);
        //     API.getUserInfo(params.id).then(res => {
        //         if (res.data) {
        //             console.log("api response: ", res.data);
        //             setUserState(res.data)
        //             // setUserState({
        //             //     username: res.data.username,
        //             //     user_id: res.data._id,
        //             //     userEmail: res.data.userEmail,
        //             //     islandHemisphere: res.data.islandHemisphere,
        //             //     islandName: res.data.islandName
        //             // });
        //             console.log("userState: ", userState)
        //         }
        //     })
        // } else {
        //     console.log("loading")
        // }
        // eslint-disable-next-line
    }, [])


    // const { username } = loggedInUser.user;
    // console.log(loggedInUser);
    // console.log(username);
    return (
        <div className="container green-text accent-3">
            <Row>
                <Col s={12}>
                    <h1 className="center-align"
                        style={{ "fontWeight": "bold" }}>
                        Welcome!
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col s={2}>
                    <img src="http://placekitten.com/50/50"
                        alt="test icon"
                        className="circle responsive-img" />
                </Col>
                <Col s={10}>
                    <h4 className="center-align">
                        TestUsername{(loggedInUser.username) ? ': ' + loggedInUser.username : ''}
                    </h4>
                </Col>

            </Row>

            {/* <SearchBar /> */}

            <Dashboard />
        </div>
    )
}
