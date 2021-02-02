import React from "react";
import { Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = (props)=> {
    return(
        <DropdownButton title='Filter' variant='dark'>
            <Dropdown.Item >Languages</Dropdown.Item>
            <Dropdown.Item >Currency</Dropdown.Item>
            <Dropdown.Item >Region</Dropdown.Item>
        </DropdownButton>
    );
}
export default Filters;