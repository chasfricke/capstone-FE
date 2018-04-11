import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.css'

export class Header extends React.Component {
  

   
    render() {
        return (
          <div className="header-container">
                <div className="title-container">
                    <Link to="/"><h1>GNARLY NANNIES</h1></Link>
                    <p>Your child deserves a life of adventure.</p>
                </div>
                <div className="nav-container">
                    <Link to="/locations">CITIES</Link>   
                    <a href="">OUR STORY</a>
                    <Link to="/jobs">JOBS</Link>  
                </div>
          </div>
        )
    }
    
}

