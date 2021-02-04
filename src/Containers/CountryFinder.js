import React, {Component} from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopLayout from '../Components/TopLayout/TopLayout';
import BottomLayout from "../Components/BottomLayout/BottomLayout";
import CountriesList from '../Components/BottomLayout/CountriesList/CountriesList';
import CountryInfoModal from "../Components/BottomLayout/CountryInfoModal/CountryInfoModal";
import FilterModal from '../Components/TopLayout/Filters/FilterModal';
import FilterList from '../Components/TopLayout/Filters/FilterList';

class CountryFinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedCountry: '',
            countryInformation: [],
            modalIsShow: false,
            filterModalIsShow: false,
            filterTagValue: 'none',
            filterListAll: [],
            listOfCountriesIsShow: false,
            filterOfCountries: '',
            closeListOfCountries:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState( {wantedCountry: event.target.value} );
    }

    handleSubmit(event){
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.wantedCountry}?fullText=true`)
        .then(response=>{
            this.setState({countryInformation: response.data});
            this.setState({modalIsShow: true});
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
            this.setState({modalIsShow: false});
        }); 
        e.preventDefault();
    }
    handleCloseFilterModal= () => {
        this.setState({filterModalIsShow: false})
    }

    handleShowListByFilter= (e)=>{
        this.setState({listOfCountriesIsShow: true});
        this.setState({filterModalIsShow: false});
        this.setState({filterOfCountries: e.target.value});
        e.preventDefault();
    }

    render() {
        const countryinformation = this.state.countryInformation.map(info => {
            return (
                <CountryInfoModal 
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
//mapeamos a filterListAll que es lo obtenido en la peticion http,luego hacemos una pregunta si filterTagValue (el tipo de filtro seleccionado) 
//es igual a region, ya que en el response para obtener la region la ruta es info.region, pero para obtener lenguages y currencies la ruta es info.lenguages[0].name
//finalmente creamos un arreglo filterList que guarda por cada mapeo solamente la informacion que pide filterPath. ya sea region,lenguaje o currency
        const filterList = this.state.filterListAll.map(info=> {
            let filterPath = "";
            let filterList = [];
            this.state.filterTagValue === "region" ? filterPath="info.region": filterPath = "info."+this.state.filterTagValue+"[0].name";
            return (
                filterList = eval (filterPath)
            )
        })
//Como el arreglo anterior tiene valores repetidos, los filtramos y lo colocamos en filterListWithOutRep
        let filterListWithOutRep = filterList.filter((item,index)=>{
            return filterList.indexOf(item) === index;
        })
//Se mostraran los valores obtenidos 
        const filterListPrint = filterListWithOutRep.map(info=> {
            return (
                <FilterList filterContent={info} handleShowListByFilter={this.handleShowListByFilter}/>
            )
        })

        const ShowingListOfCountriesByFilter = this.state.filterListAll.map((info,index)=> {
            let countriesPath = "";
            let countriesList = [];
            (filterList[index] === this.state.filterOfCountries) ? countriesPath="info.name" : countriesPath=null  ;
            return(
                countriesList=eval(countriesPath)
            )
        })
        let listOfCountriesWithOutRep = ShowingListOfCountriesByFilter.filter((item,index)=>{
            return ShowingListOfCountriesByFilter.indexOf(item) === index;
        })
        const countriesListPrint = listOfCountriesWithOutRep.map(info=> {
            return (
                <CountriesList country={info} />
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
                <BottomLayout listOfCountriesIsShow={this.state.listOfCountriesIsShow} >
                    {countriesListPrint}
                </BottomLayout>
            </Container>
        );
    }
}
export default CountryFinder;