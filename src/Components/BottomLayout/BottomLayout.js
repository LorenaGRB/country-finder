import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryInformation from './CountryInformation/CountryInformation';
import CountriesList from './CountriesList/CountriesList';

const BottomLayout =() => {
    return(
        <Container fluid>
            <Row>
                <Col sm={4}>
                <CountriesList />
                </Col>
                
                <Col sm={6}>
                <CountryInformation />
                </Col>

                
            </Row>
        </Container>

    )
}
export default BottomLayout;