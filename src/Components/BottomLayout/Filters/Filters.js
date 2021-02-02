import React from "react";
import { Tab, Row, Col, Nav,Sonnet} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Filters = (props)=> {
    return(
                <Tab.Container defaultActiveKey="none">
        <Row>
            <Col xs={6}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link  disabled style={{ pointerEvents: 'none' }}>FILTERS</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="None">None</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link eventKey="first">Lenguage</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="second">Currency</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link eventKey="third">Region</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col xs={6}>
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
            </Col>
        </Row>
        </Tab.Container>
        // <DropdownButton title='Filter' variant='dark'>
        //     <Dropdown.Item >Languages</Dropdown.Item>
        //     <Dropdown.Item >Currency</Dropdown.Item>
        //     <Dropdown.Item >Region</Dropdown.Item>
        // </DropdownButton>
    );
}
export default Filters;