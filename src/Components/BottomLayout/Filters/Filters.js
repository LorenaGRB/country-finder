import React from "react";
import { Tab, Row, Col, Nav, Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Filters = (props)=> {
    return(
        <Tab.Container defaultActiveKey="none">
            <Col>
                <Nav variant="pills" className="flex-column" className='pl-0'>
                    <DropdownButton title='Filter' variant='dark' className='w-100'>
                        <Dropdown.Item eventKey="none">None</Dropdown.Item>
                        <Dropdown.Item eventKey="first">Languages</Dropdown.Item>
                        <Dropdown.Item eventKey="second">Currency</Dropdown.Item>
                        <Dropdown.Item eventKey="third">Region</Dropdown.Item>
                    </DropdownButton>
                    
                </Nav>
        
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <div>1"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <div>2"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <div>3"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                    </Tab.Pane>
                </Tab.Content>
            </ Col>
        </Tab.Container>
        // <DropdownButton title='Filter' variant='dark'>
        //     <Dropdown.Item >Languages</Dropdown.Item>
        //     <Dropdown.Item >Currency</Dropdown.Item>
        //     <Dropdown.Item >Region</Dropdown.Item>
        // </DropdownButton>
    );
}
export default Filters;