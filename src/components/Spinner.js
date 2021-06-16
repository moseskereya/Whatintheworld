import React, { Component } from 'react';
import spinner from "./images/spinner.gif"
class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <img
                src={spinner}
                alt="Loading..."
            />
         );
    }
}
 
export default Spinner;