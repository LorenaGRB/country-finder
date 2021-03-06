import React from 'react';
import { Card, ListGroup,Toast} from 'react-bootstrap';


const CountriesList = (props) =>{
    return(
    <Toast show={props.listOfCountriesIsShow} >
        <Card>
            <Card.Header fluid >
            <strong className="mr-auto">Countries</strong>
            </Card.Header>
            <ListGroup variant="flush">
                {props.children}
            </ListGroup>
        </Card>
    </Toast>
)}

export default CountriesList;
