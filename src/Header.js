import React from 'react';

import  './App.css';
import {Link} from "react-router-dom";


export const Header = () => {
  let myStyle ={ 
    color:"white",
    fontSize: "1rem" 

  }
  let myStyle2= {
    color:"white",
    fontSize:"2.5rem"
  }
  
    
    return (

        <div>
            
            <nav  className="navbar navbar-expand-lg navbar-light bg-light"  >
  <div className="container-fluid"  >
    <Link className="navbar-brand" to="/"  style={myStyle2}>Calculator</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"   style ={myStyle}to="/">Home</Link>
        </li>
        <li>
        <Link className="nav-link"   style ={myStyle}to="/Suggestions">Suggestions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style ={myStyle} to="/About" >About</Link >
        </li>
        
      
      </ul>
      <h3 className="primaryHeading">
    This is a basic React Calculator!
</h3>
    </div>
  </div>
</nav>

            
        </div>
    )
}
