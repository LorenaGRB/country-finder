import React, {Component} from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopLayout from '../Components/TopLayout/TopLayout';
import BottomLayout from '../Components/BottomLayout/BottomLayout';

class CountryFinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedCountry: '',
            countryInformation: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState( {wantedCountry: event.target.value} );
    }
    handleSubmit(event){
        alert('A country was submitted: ' + this.state.wantedCountry);
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.wantedCountry}`)
        .then(response=>{
            this.setState({countryInformation: response.data});
            console.log(this.state.countryInformation);
        });
        event.preventDefault();
    }

    render() {
        return (
            <Container  className='p-0' fluid>
                <TopLayout 
                    SeekerOnSubmit = {this.handleSubmit}
                    SeekerOnChange = {this.handleChange}
                    SeekerCountry = {this.state.wantedCountry}
                />
                <BottomLayout />
            </Container>
        );
        
    }
}
export default CountryFinder;