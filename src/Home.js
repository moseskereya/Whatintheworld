import React, { Component } from 'react';
import Countries from './components/countries';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from './components/Nav'
import Error from "./components/notfound"
import Countrydetail from "./components/countrydetail"
import Banner from './Banner';
import Footer from './components/Footer';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <Router>
            <Nav/>
                <>
                <Switch>
                 <Route path="/" exact component={Banner} />
                 <Route path="/countries" component={Countries} />
                 <Route path="/countrydetail/:id"
                     component={Countrydetail} />
                <Route path='*' component={Error} />
            </Switch>
            <Footer/>
                </>
            </Router>
         );
    }
}
 
export default Home;