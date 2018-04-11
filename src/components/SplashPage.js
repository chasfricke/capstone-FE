import React from 'react'
import { Link } from 'react-router-dom';
import '../css/SplashPage.css'

export class SplashPage extends React.Component {
   
    render() {
        return (
          <div className="splash-page-container">
                <Link to="/locations"><button>ENTER</button></Link>
          </div>
        )
    }
    
}