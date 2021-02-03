import React from 'react';
import { Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountriesList = (props) =>{
    return(
        <ListGroup.Item>{props.country}</ListGroup.Item>
    )
}

export default CountriesList;
