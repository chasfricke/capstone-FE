import React from 'react'
import '../css/SplashPage.css'

export class SplashPage extends React.Component {
   
    render() {
        return (
            <div className="row justify-content-center d-inline-block tagline-container">
                <div className="col">
                    <h1 className="tagline">Adventure.  On Demand.</h1>
                </div>    
            </div>
        )
    }
    
}