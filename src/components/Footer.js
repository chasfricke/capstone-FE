import React from 'react'
import '../css/Footer.css'

export class Footer extends React.Component {
    constructor(props) {
        super(props)    
    }

   
    render() {
        return (
          <div className="footer-container">
                <span><small>Copyright 2018</small></span>
          </div>
        )
    }
    
}
