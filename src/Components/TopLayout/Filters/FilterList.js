import React from 'react';
import {  ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterList = (props) =>{
    return(
        <ListGroup.Item><Button onClick={props.handleShowListByFilter}  value={props.filterContent} variant= 'light' fluid>{props.filterContent}</Button></ListGroup.Item>
    )
}
export default FilterList;
