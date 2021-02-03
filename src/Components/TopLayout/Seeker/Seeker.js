import React from "react";
import { Row, Col, Form, FormGroup, Button} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './Seeker.module.css';

const Seeker = (props)=> {
    return(
        <Form onSubmit = {props.OnSubmit}>
            <FormGroup >
                <Row className = {Classes.Seeker}>
                    <Col >
                        <Form.Control 
                            type = "text" 
                            placeholder = "Country" 
                            value = {props.Country}
                            onChange = {props.OnChange}
                        />
                    </Col>
                    <Col className = {Classes.SearchIcon}>
                        <Button type = 'submit' value='name'><Search /></Button> 
                    </Col>
                </Row>  
            </FormGroup>
        </Form>
    )
}
export default Seeker;