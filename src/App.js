import React, { Component } from 'react';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Onama from "./components/Onama";

import CustomNavbar from './components/CustomNavbar';
import Reference from "./components/Reference";
import Kontakt from './components/Kontakt';

class App extends Component {
  render() {
    return (
        <div>
          <CustomNavbar/> 
          <Switch>  
            <Route exact path="/" component={Home}/>  
            <Route  path="/onama" component={Onama}/>
            <Route  path="/Reference" component={Reference}/>
            <Route  path="/Kontakt" component={Kontakt}/>  
            </Switch>  
         
        </div>
  
    );
  }
}

export default App;
