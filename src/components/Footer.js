import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Footer.css'

export class Footer extends React.Component {
    

   
	render() {
		return (
			<div className="footer-container">
				<div className="legal-container">
					<small>Copyright 2018</small>
				</div>
				<div className="jobs-link-container">
					<Link to="/jobs"><p className="jobs-link">JOBS</p></Link>
				</div>
			</div>
		)
	}
    
}

