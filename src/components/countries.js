import React, { Component } from 'react';
import ReactPaginate from "react-paginate"
import axio from "axios"
import Spinner from './Spinner';
import {Link} from "react-router-dom"
class countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            countries: [],
            countriesdata: [],
            perPage:25,
            currentPage: 0,
            filters:''
        }
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getData()
        });
    };
    
    Search = (e) => {
        this.setState({filters: e.target.value})
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        axio.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                const data = res.data;
                const mydata = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    countries: res.data,
                    pageCount: Math.ceil(this.state.countries.length / this.state.perPage),
                    countriesdata: mydata
                })

            })
            .catch(error => {
                console.log(error)
         })
    }
    

    render() {
        const data = this.state.countriesdata;
        // eslint-disable-next-line array-callback-return
        const mydata = data.filter(country => {
            if (this.state.filters === "") {
                return country
            } else if (country.name.toLowerCase().includes(this.state.filters.toLowerCase())) {
                return country
               }
            })
            .map(country => {
            return (
                <div className="coutrylist">
                    <div class="coutrylistbox">
                        <div class="coutrylistimgBox">
                            <img src={country.flag}
                                alt="coutrylist_image" />
                        </div>
                        <div className="country_detail">
                            <h4>{country.name}</h4>
                            <Link to={{
                                pathname: `/countrydetail/${country.name}`,
                                state: { country: country.name}
                            }}>
                                <button className="country_detail_btn">Read More</button>
                            </Link>
                         
                        </div>
                    </div>
                </div>
            )
        })

        if (data === undefined || data.length === 0) {
            return <Spinner/>
        } else {
            return (
                <>
                    <div className="searches">
                        <input type="text" placeholder="Search Your Country" onChange={this.Search} />
                    </div>
                    <div className="coutrylist">
                        {mydata}
                    </div>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"...."}
                        breakClassName={"break-me"}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        pageCount={this.props.pageCount}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </>
            );
        }
    }
}
 
export default countries;