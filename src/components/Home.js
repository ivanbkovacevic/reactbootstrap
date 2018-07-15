import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Jumbotron, Row, col, Image, Button } from "react-bootstrap";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to code life</h2>
                    <p>This is how to build web site with react, tract router and ract bootstrap</p>

                </Jumbotron>
                <Link to="/about">
                <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}

export default Home;