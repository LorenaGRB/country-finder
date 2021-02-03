import React from 'react';
import {  ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterList = (props) =>{
    return(
        <ListGroup.Item>{props.filterContent}</ListGroup.Item>
    )
}
export default FilterList;
