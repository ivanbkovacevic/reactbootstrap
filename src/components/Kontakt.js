import React, { Component } from 'react';
import { Grid, Jumbotron, Row, Col, Image, Button } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

class Kontakt extends Component {

    state = {
        value: ''
      };
    
  
    getValidationState=()=> {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange=(e)=> {
      this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={6}>
                    <p>k</p>
                    <p>k</p>
                    <p>k</p>
                    <p className="text-danger">.text-primary</p>
                     <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                            <ControlLabel>Working example with validation</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                            <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                        </FormGroup>
                  
                     </form>
                    </Col>
                   
                </Row> 
            </Grid>
            
        );
    }
}

export default Kontakt;