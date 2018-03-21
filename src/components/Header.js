import React from 'react'
import '../css/Header.css'

export class Header extends React.Component {
    constructor(props) {
        super(props)    
    }

   
    render() {
        return (
          <div className="header-container">
                <h1>GNARLY NANNIES</h1>
          </div>
        )
    }
    
}

