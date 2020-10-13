import React from 'react';
import { Row, Col } from 'react-materialize';
import './style.css';

export default function Index({ loggedInUser }) {
    const userId = loggedInUser.id;
    console.log(userId);
    return (
        <>
            <Row>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">FISH</h5>
                        <a href={"/api/fish/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"

                            />
                        </a>

                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">SEA CREATURES</h5>
                        <a href={"/api/seacreatures/" + userId} className="card-link">
                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />
                        </a>


                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">BUGS</h5>

                        <a href={"/api/bugs/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />

                        </a>
                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">FOSSILS</h5>

                        <a href={"/api/fossils/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img card-img"
                            />
                        </a>

                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">VILLAGERS</h5>
                        <a href={"/api/villagers/"+userId} className="card-link">


                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />
                        </a>
                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">HOUSEWARES</h5>
                        <a href={"/api/housewares/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />
                        </a>
                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">
                        <h5 className="center-align green-text accent-3">WALL-MOUNTED</h5>
                        <a href={"/api/wallmounted/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />
                        </a>
                    </div>
                </Col>
                <Col
                    m={3}
                    s={6}
                >
                    <div className="white dash-card">

                        <h5 className="center-align green-text accent-3">MISC</h5>
                        <a href={"/api/misc/" + userId} className="card-link">

                            <img src="http://placekitten.com/150/150"
                                alt="test"
                                className="circle responsive-img"
                            />
                        </a>
                    </div>
                </Col>

            </Row>

        </>
    )
}
