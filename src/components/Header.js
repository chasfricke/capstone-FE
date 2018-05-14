import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.css'

export class Header extends React.Component {
  

   
	render() {
		return (
			<div className="header-container">
				<div className="title-container">
					<Link to="/"><h1 className="logo">GNARLY NANNIES</h1></Link>
				</div>
				<div className="nav-container">
					<div className="header-link-container">
						<Link className="header-link" to="/locations">LOCATIONS</Link>
					</div>   
					<div className="header-link-container">
						<Link to="/jobs" className="header-link">JOBS</Link>
					</div>
					<div className="header-link-container">
						<Link className="header-link" to="/login">LOGIN</Link>
					</div> 
				</div>
			</div>
		)
	}
    
}

