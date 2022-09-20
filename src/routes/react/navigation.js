import React from "react";

import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


var Navigation = props =>  (
	
	
	    <Nav className="secondary-nav">
	      <Nav.Item><NavLink to="/react/step">Stepbar</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/react/form">Form</NavLink></Nav.Item>
		  <Nav.Item><NavLink to="/react/token">Tokenizer</NavLink></Nav.Item>   
        </Nav>
			
)	


export default Navigation;