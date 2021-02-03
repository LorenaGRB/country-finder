import React from "react";
import { Navbar , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seeker from './Seeker/Seeker';
import Filters from './Filters/Filters';

const TopLayout = (props) => {
    return(
        <Container fluid className='p-0'>
            <Navbar bg='dark' variant='dark' className="container-fluid">
                <Col sm={3}>
                    <Navbar.Brand>CountryFinder</Navbar.Brand>
                </Col>
                <Col sm={7}>
                    <Seeker 
                        OnSubmit = {props.SeekerOnSubmit}
                        OnChange = {props.SeekerOnChange}
                        Country = {props.SeekerCountry}
                    />
                </Col>
            </Navbar>
            <Navbar variant='light' bg='dark'>
                <Filters 
                    handleShowFilterModal = {props.handleShowFilterModal} 
                />
            </Navbar>
        </Container>
    );
}
export default TopLayout;