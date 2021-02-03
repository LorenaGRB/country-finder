import React, {Component} from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopLayout from '../Components/TopLayout/TopLayout';
import CountriesList from '../Components/BottomLayout/CountriesList/CountriesList';
import CountryInformation from "../Components/BottomLayout/CountryInformation/CountryInformation";
import FilterModal from '../Components/TopLayout/Filters/FilterModal';
import FilterList from '../Components/TopLayout/Filters/FilterList';
import { Info } from "react-bootstrap-icons";

class CountryFinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedCountry: '',
            countryInformation: [],
            modalIsShow: false,
            filterModalIsShow: false,
            filterTagValue: 'none',
            filterListAll: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState( {wantedCountry: event.target.value} );
    }

    handleSubmit(event){
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.wantedCountry}`)
        .then(response=>{
            this.setState({countryInformation: response.data});
            this.setState({modalIsShow: true});
            console.log(this.state.countryInformation);
        });
        event.preventDefault();
    }
    handleCloseSearch = () => {
        this.setState({modalIsShow: false})
    }

    handleShowFilterModal = (e)=>{
        this.setState({filterTagValue: e.target.value});

        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(response=>{ 
            this.setState({filterListAll: response.data});
            this.setState({filterModalIsShow: true});
            this.setState({modalIsShow: true});
        }); 
        e.preventDefault();
    }
    handleCloseFilterModal= () => {
        this.setState({filterModalIsShow: false})
    }

    render() {
        const countryinformation = this.state.countryInformation.map(info => {
            return (
                <CountryInformation 
                modalIsShow = {this.state.modalIsShow}
                handleCloseModal = {this.handleCloseSearch}
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

        const filterList = this.state.filterListAll.map(info=> {
            let variable="";
            this.state.filterTagValue === "region" ? variable="info.region": variable = "info."+this.state.filterTagValue+"[0].name";
            let variableArray = []
            return (
                variableArray = eval (variable)
            )
        })
        let result = filterList.filter((item,index)=>{
            return filterList.indexOf(item) === index;
        })
        const filterListPrint = result.map(info=> {
            return (
                <FilterList filterContent={info}/>
            )
        })
        return (
            <Container  className='p-0' fluid>
                <TopLayout 
                    SeekerOnSubmit = {this.handleSubmit}
                    SeekerOnChange = {this.handleChange}
                    SeekerCountry = {this.state.wantedCountry}
                    handleShowFilterModal = {this.handleShowFilterModal}
                />
                {countryinformation}
                <FilterModal
                    filterModalIsShow = {this.state.filterModalIsShow} 
                    filterTagValue = {this.state.filterTagValue}
                    handleCloseFilterModal = {this.handleCloseFilterModal}
                >
                    {filterListPrint}
                </FilterModal>
            </Container>
        );
        
    }
}
export default CountryFinder;