import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NannyDetail.css'
import check from '../images/checked.png'

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

		renderSports = () => {
			const sports = ['surfing', 'kayaking', 'rock_climbing', 'skateboarding', 'hiking', 'mountain_biking', 'skiing', 'snowboarding']		
			const results = sports.filter(sport => this.state[sport] === true) 
			// const sportsLabels = ['Surfing', 'Kayaking', 'Rock Climbing', 'Skateboarding', 'Hiking', 'Mountain Biking', 'Skiing', 'Snowboarding'];
			console.log (results)
			const resultListItem = results.map(result => <li className="check-skill-container"><img className="check" src={check} alt="check"/>{result}</li>)
			return (
				<ul>
					{resultListItem}
				</ul>
			)	
		}

	render() {
		if (this.state === null) {
			return <div>Loading...</div>
		}
		return (
			<div className="detail-container">
				<Link to="/locations/denver" >
					<button className="back-button">Back</button>
				</Link>
				<div className="nanny-detail-main">
					<img className="nanny-detail-img" src={this.state.photo_url} alt="profile img"/>
					<div className="basic-info-container">
						<div className="basic-info">
							<div>
								<h4>{this.state.first_name + " " + this.state.last_name}</h4>
								<p>{this.state.city}, {this.state.state}</p>
								<p>Hourly Rate: ${this.state.hourly_rate}</p>
								<p>Experience: {this.state.years_experience} years</p>
							</div>
							<div className="skills-list">
								<h4>Trips Offered:</h4>
								<ul>
									{this.renderSports()}
								</ul>
							</div>
						</div>
						<div className="background">
							<h4>About Me</h4>
							<p>{this.state.background}</p>
						</div>
						
					</div>
					
					
				</div>
				
			</div>
		)
	}
}


	