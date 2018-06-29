import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Locations.css';

export class Locations extends React.Component {
    
	render() {
		return (
			<div className="locations-list-container">
				<div className="div-header">
					<h3>CITIES</h3>
				</div>
				<div className="locations-list">
					<div className="location-container">
						<h4>Colorado</h4>
						<ul>
							<Link to="/locations/denver"><span className="locations-link">Denver</span></Link>
							<li>Boulder (coming soon!)</li>
							<li>Golden (coming soon!)</li>
							<li>Colorado Springs (coming soon!)</li>
						</ul>
					</div>
					<div className="location-container">
						<h4>California</h4>
						<ul>
							<li>San Diego (coming soon!)</li>
							<li>San Francisco (coming soon!)</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}  
}