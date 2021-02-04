import React from "react";
import { Navbar , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seeker from './Seeker/Seeker';
import Filters from './Filters/Filters';
import Classes from './TopLayout.module.css';

const TopLayout = (props) => {
    return(
        <Container fluid className='p-0'>
            <Navbar bg='dark' variant='dark' className="container-fluid">
                <Row className={Classes.Fluid}>
                <Col md={3}>
                    <Navbar.Brand className={Classes.Logo}>CountryFinder</Navbar.Brand>
                </Col>
                <Col md={8}>
                    <Seeker 
                        OnSubmit = {props.SeekerOnSubmit}
                        OnChange = {props.SeekerOnChange}
                        Country = {props.SeekerCountry}
                    />
                </Col></Row>
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