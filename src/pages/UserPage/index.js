import React, { useState, useEffect } from 'react';
import { Row, Col, Autocomplete, Select, Button, Icon } from 'react-materialize';
import M from 'materialize-css';
import API from '../../utils/API';
import './style.css';
import Dashboard from '../../components/Dashboard';
import SearchBar from '../../components/SearchBar';


export default function Index() {


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
                        TestUsername
                    </h4>
                </Col>

            </Row>
            
            <SearchBar />

            <Dashboard />
        </div>
    )
}
