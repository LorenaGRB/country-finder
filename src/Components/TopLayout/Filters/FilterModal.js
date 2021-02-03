import React from 'react';
import { Card, ListGroup, ButtonGroup, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterModal= (props) =>{
    let filterTag = 'none';
    switch (props.filterTagValue) {
        case 'languages':
            filterTag = 'Languages';
            break;
        case 'currencies':
            filterTag = 'Currency';
            break;
        case 'region':
            filterTag = 'Region';
            break;
    }
    return(
        <Modal show={props.filterModalIsShow} onHide={props.handleCloseFilterModal}>
            <Modal.Header closeButton className= 'h4'>Filter type :{filterTag}</Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    {props.children}
                </ListGroup>
            </Modal.Body>
        </Modal>
    )
}

export default FilterModal;

