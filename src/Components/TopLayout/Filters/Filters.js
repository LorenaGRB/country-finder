import React from "react";
import { Tab, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = (props)=> {
    return(
        <Tab.Container defaultActiveKey="none">
                <Nav className="flex-column" className='pl-0'>
                    {/* <Nav.Item><Button  variant='dark'>None</Button ></Nav.Item> */}
                    <Nav.Item><Button  onClick={props.handleShowFilterModal}  variant='dark' value="languages">Languages</Button ></Nav.Item>
                    <Nav.Item><Button  onClick={props.handleShowFilterModal} variant='dark' value="currencies">Currencies</Button ></Nav.Item>
                    <Nav.Item><Button  onClick={props.handleShowFilterModal} variant='dark' value="region">Region</Button ></Nav.Item>
                </Nav>
        </Tab.Container>
    );
}
export default Filters;