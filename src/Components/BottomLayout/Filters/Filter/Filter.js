import React, { useState } from 'react';
import { Nav} from 'react-bootstrap';
import '../../../../BottomLayout/CountryInformation/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Filter = (props) => {
    return (
        <Nav.Item>
                    <Nav.Link  disabled style={{ pointerEvents: 'none' }}>FILTERS</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="None">None</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="first">Lenguage</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="second">Currency</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link eventKey="third" >Region</Nav.Link>
                </Nav.Item>
    );
}

export default Filter;