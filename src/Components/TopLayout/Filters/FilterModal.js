import React from 'react';
import { ListGroup, Modal } from 'react-bootstrap';

const FilterModal= (props) =>{
    return(
        <Modal show={props.filterModalIsShow} onHide={props.handleCloseFilterModal}>
            <Modal.Header closeButton className= 'h4'>Filter type :{props.filterTagValue}</Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    {props.children}
                </ListGroup>
            </Modal.Body>
        </Modal>
    )
}

export default FilterModal;

