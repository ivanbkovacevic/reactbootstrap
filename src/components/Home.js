import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Jumbotron, Row, Col, Image, Button } from "react-bootstrap";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
               <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wraper">
                <Image src="assets/person-1.jpg" circle className="profile-pic" />
                <h3>Mikica</h3>
                <p>  lorem10 bla bla bla bla bla bla  </p>
                </Col>
                <Col xs={12} sm={4} className="person-wraper">
                <Image src="assets/person-2.jpg" circle className="profile-pic" />
                <h3>Frank</h3>
                <p>  lorem10 bla bla bla bla bla bla  </p>
                </Col>
                <Col xs={12} sm={4} className="person-wraper">
                <Image src="assets/person-3.jpg" circle className="profile-pic" />
                <h3>Zika</h3>
                <p>  lorem10 bla bla bla bla bla bla  </p>
                </Col>
               </Row>
            </Grid>
        );
    }
}

export default Home;