import React from 'react';
import { Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryInformation = (props) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.flag} />
            <Card.Body>
            <Card.Title>{props.CountryName}PERU</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Alpha2Code: {props.alpha2Code}</ListGroupItem>
                <ListGroupItem>Capital: {props.capital}</ListGroupItem>
                <ListGroupItem>Region: {props.region}</ListGroupItem>
                <ListGroupItem>Sub Region: {props.subregion}</ListGroupItem>
                <ListGroupItem>Latitud-Longitud: {props.latlng}</ListGroupItem>
                <ListGroupItem>Lenguage: {props.lenguage}</ListGroupItem>
                <ListGroupItem>Currency: {props.currency}</ListGroupItem>
                <ListGroupItem>Currency Symbol: {props.currencySymbol}</ListGroupItem>
            </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default CountryInformation;
