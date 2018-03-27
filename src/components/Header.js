import React from 'react'
import '../css/Header.css'

export class Header extends React.Component {
  

   
    render() {
        return (
          <div className="header-container">
                <div className="title-container">
                    <h1>GNARLY NANNIES</h1>
                    <p>Your child deserves a life of adventure.</p>
                </div>
                <div className="nav-container">
                    <a href="">CITIES</a>
                    <a href="">OUR STORY</a>
                    <a href="">JOBS</a>
                </div>
          </div>
        )
    }
    
}

