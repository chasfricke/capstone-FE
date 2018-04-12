import React from 'react';
import { Link } from 'react-router-dom';

export class Locations extends React.Component {
    
	render() {
		return (
			<div className="locations-List">
				<h3>Colorado</h3>
				<ul>
				<Link to="/locations/denver">Denver</Link>
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