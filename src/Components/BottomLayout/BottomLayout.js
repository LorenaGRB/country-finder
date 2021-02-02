import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CountryInformation from './CountryInformation/CountryInformation';
import CountriesList from './CountriesList/CountriesList';
import Filter from './Filters/Filters';

const BottomLayout =() => {
    return(
        <Container fluid>
                <Row>
                    <Filter />
                </Row>
            <Row>
                <Col sm={4}>
                    <CountriesList />
                </Col>

                <Col sm={5}>
                    <CountryInformation />
                </Col>

                
            </Row>
        </Container>

    )
}
export default BottomLayout;