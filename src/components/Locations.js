import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Locations.css';

export class Locations extends React.Component {
    
	render() {
		return (
			<div className="locations-list">
				<h3>Colorado</h3>
				<ul>
					<Link className="locations-link" to="/locations/denver">Denver</Link>
					<li>Boulder (coming soon!)</li>
					<li>Golden (coming soon!)</li>
					<li>Colorado Springs (coming soon!)</li>
				</ul>
				
				<h3>California</h3>
				<ul>
					<li>San Diego (coming soon!)</li>
					<li>Los Angeles (coming soon!)</li>
					<li>San Francisco (coming soon!)</li>
				</ul>
			</div>
		)
	}  
}