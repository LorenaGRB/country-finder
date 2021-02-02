import React, {Component} from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopLayout from '../Components/TopLayout/TopLayout';
import CountryList from '../Components/BottomLayout/CountriesList/CountriesList';
import CountryInformation from "../Components/BottomLayout/CountryInformation/CountryInformation";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class CountryFinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedCountry: '',
            countryInformation: [],
            modalIsShow: false
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
            this.setState({modalIsShow: true});
            console.log(this.state.countryInformation);
        });
        event.preventDefault();
    }
    handleClose = () => {
        this.setState({modalIsShow: false})
    }

    render() {
        const countryinformation = this.state.countryInformation.map(info => {
            return (
                <CountryInformation 
                modalIsShow = {this.state.modalIsShow}
                handleCloseModal = {this.handleClose}
                countryName = {info.name}
                flag = {info.flag}
                alpha2Code = {info.alpha2Code}
                capital = {info.capital}
                region = {info.region}
                subregion = {info.subregion}
                latlng = {info.latlng}
                lenguage = {info.languages[0].name}
                currency = {info.currencies[0].name}
                currencySymbol = {info.currencies[0].symbol}
            />)
        })

        return (
            <Container  className='p-0' fluid>
                <TopLayout 
                    SeekerOnSubmit = {this.handleSubmit}
                    SeekerOnChange = {this.handleChange}
                    SeekerCountry = {this.state.wantedCountry}
                />
                {countryinformation}
            </Container>
        );
        
    }
}
export default CountryFinder;