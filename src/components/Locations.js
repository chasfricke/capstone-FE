import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Locations.css';

export class Locations extends React.Component {
    
	render() {
		return (
			<div className="container col-9 col-sm-8 col-md-6 col-lg-4">
				<br/>
				<div className="card ">
					<div className="card-header">
						<h3>CITIES</h3>
					</div>
					<div className="card-body">
						<div className="locations-list">
							<div className="location-container">
								<h4>Colorado</h4>
								<ul>
									<li><Link to="/locations/denver" className="locations-link">Denver</Link></li>
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
				</div>
            </div>
		)
	}  
}