import React from 'react'
import { Link } from 'react-router-dom';

export class NannyDetail extends React.Component {
  
	constructor(props) {
		super(props)    
		this.state = null;
	}

	componentDidMount() {
		var url = window.location.pathname;
		var id = url.substring(url.lastIndexOf('/') + 1);
		this.getNanny(id)
	}
	
	  getNanny = (id) => {
		return fetch(`https://gnarly-nannies.herokuapp.com/nanny_account_info/${id}`)
		  .then(response => response.json())
		  .then(data => {
			this.setState(data.nanny_account_info)})
	}


	render() {
		if (this.state === null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<Link to="/locations/denver">
					<button>Back</button>
				</Link>
				<h4>{this.state.first_name + " " + this.state.last_name}</h4>
				<img src={this.state.photo_url} />
				<p>Location: {this.state.city}, {this.state.state}</p>
				<p>Experience: {this.state.years_experience} years</p>
				<p>Hourly Rate: ${this.state.hourly_rate}</p>
				<p>Background: {this.state.background}</p>
			</div>
			
		)
	}
    
}