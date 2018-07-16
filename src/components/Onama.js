import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

class O_nama extends Component {
    render() {
        return (
            <div>
                <div>
                    <Image src="assets/dog-people.jpg" className="header-image" />
                    <Grid>
                        <Col xs={12} sm={8} smOffset={2}>
                       
                        <h3>Frank tenk</h3>
                        <p> Lorem10 kniiebirej kjvnwivniwndddddddddddddddddddddddddddddddddi kvwniknviwn  </p>
                        </Col>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default O_nama;