import React from 'react'
import '../css/Filter.css'

export class Filter extends React.Component {
    constructor(props) {
        super(props)    
    }

   
    render() {
        return (
            <div className="filter-container">
                <div className="filter-title-container">
                    <h4>REFINE SEARCH</h4>
                </div>
                <hr></hr>    
            </div>
        )
    }
    
}