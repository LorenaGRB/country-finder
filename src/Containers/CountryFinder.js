import React, {Component} from "react";
import TopLayout from '../Components/TopLayout/TopLayout';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CountryFinder extends Component {
    constructor(props){
        super(props);
        this.state = {country: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState( {country: event.target.value} );
    }
    handleSubmit(event){
        alert('A country was submitted: ' + this.state.country);
        event.preventDefault();
    }

    render() {
        return (
            <Container  className='p-0' fluid>
                <TopLayout 
                    SeekerOnSubmit = {this.handleSubmit}
                    SeekerOnChange = {this.handleChange}
                    SeekerCountry = {this.state.country}
                />
                <div>Response: Lista de paises e informacion</div>
            </Container>
        );
        
    }
}
export default CountryFinder;