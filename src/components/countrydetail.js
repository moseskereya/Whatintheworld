import React, { Component } from 'react';
import axios from "axios"
import Spinner from './Spinner';
import {Link} from "react-router-dom"
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: []
         }
    }

    componentDidMount = () => {
        const countryname = this.props.location.state.country
        axios.get(`https://restcountries.eu/rest/v2/name/${countryname}`)
            .then(res => {
                this.setState({ country: res.data[0]})
                console.log(this.state.country)
            })
            .catch(err => {
            console.log(err)
        })
    }

    render() {
        const data = this.state.country
        if (data === undefined || data.length === "") {
            return (
                <Spinner />
              )
        } else {
            return (
                <div className="country_detail_container">
                    <section style={{backgroundImage: `url(${data.flag})` }} className="country_flag">
                        <h4>{data.name}</h4>
                    </section>
                    <section className="map">
                        <h4>Country Name <span>{data.name}</span></h4>
                        <h5>Capital city: <span>{data.capital}</span></h5>
                        <p>Region {data.region}</p>
                        <p>subregion {data.subregion}</p>
                        <p>Calling code {data.callingCodes}</p>
                        <p>TimeZone {data.timezones}</p>
                        <p>Population {data.population}</p>
                        <Link to="/countries">
                            <button  className="goback">Go back</button>
                        </Link>
                    </section>
                </div>
            );
        }
    }
}
 
export default Detail;