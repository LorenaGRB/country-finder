import React from "react";
import { Tab, Nav, Button } from 'react-bootstrap';

const Filters = (props)=> {
    return(
        <Tab.Container defaultActiveKey="none">
                <Nav className="flex-column" className='pl-0'>
                    <Nav.Item><Button className='p-1' onClick={props.handleShowFilterModal}  variant='dark' value="languages"> Languages </Button ></Nav.Item>
                    <Nav.Item><Button  className='p-1' onClick={props.handleShowFilterModal} variant='dark' value="currencies"> Currencies </Button ></Nav.Item>
                    <Nav.Item><Button  className='p-1' onClick={props.handleShowFilterModal} variant='dark' value="region"> Region </Button ></Nav.Item>
                </Nav>
        </Tab.Container>
    );
}
export default Filters;