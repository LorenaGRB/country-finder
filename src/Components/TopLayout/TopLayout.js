import React from "react";
import { Navbar , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seeker from './Seeker/Seeker';


const TopLayout = (props) => {
        return(
            <Row>
                <Navbar bg='dark' variant='dark' className="container-fluid">
                    <Col sm={3}>
                        <Navbar.Brand >CountryFinder</Navbar.Brand>
                    </Col>
                    <Col sm={7}>
                        <Seeker 
                            OnSubmit = {props.SeekerOnSubmit}
                            OnChange = {props.SeekerOnChange}
                            Country = {props.SeekerCountry}
                        />
                    </Col>
                </Navbar>
            </Row>
        );
    
}
export default TopLayout;