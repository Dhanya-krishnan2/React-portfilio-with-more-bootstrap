import React from 'react';
// import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../DhanyaLatest.png';
import '../App.css';
//react font awesome inports so that installed the dependancies for font awesome
 import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import {faBars} from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";

//  import { faBars } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return (
        
  
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

        <a className="navbar-brand" href="#">
            <img src={logo} className='dhanya-logo' alt="My Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <FontAwesomeIcon icon = {faBars} style={{color: "blue"}}/>
          {/* <i class="fas fa-bars"></i> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#">About me</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#">Services</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#">Experience</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#">Portfolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link active" href="#">Contact me</a>
            </li>
            
          </ul>
        </div>
        
       </div>
      </nav>
    
    
    
    
    );
}

export default NavBar;
