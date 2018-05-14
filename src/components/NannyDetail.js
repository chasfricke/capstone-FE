import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NannyDetail.css'
import checkIcon from '../images/x_check_icons/check-circle.png'
import xIcon from '../images/x_check_icons/x-circle.png'

export class NannyDetail extends React.Component { 
	constructor(props) {
		super(props)    
		this.state = null;

		this.handleChange = this.handleChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
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
			// this.setState(data.nanny_account_info)})
			this.setState({nannyData: data.nanny_account_info})})
			// this.setState({nannyData: nannyData})
	}

	renderSports = () => {
		const sports = ['surfing', 'kayaking', 'rock_climbing', 'skateboarding', 'hiking', 'mountain_biking', 'skiing', 'snowboarding']		
		const results = sports.filter(sport => this.state.nannyData[sport] === true) 
		const resultListItem = results.map(result => <li key={result} className="check-skill-container"><img className="check-icon" src={checkIcon} alt="yes"/>{result}</li>)
		return (
			<ul>
				{resultListItem}
			</ul>
		)	
	}

	renderSkills = () => {
		const skills = ['first_aid', 'cpr', 'lifeguard']
		const skillsList = skills.map((skill) => {
			
			if (this.state.nannyData[skill]) {
				return <li key={skill}><img src={checkIcon} alt="yes" className="check-icon" />{skill}</li>
			} else {
				return <li key={skill}><img src={xIcon} alt="yes" className="x-icon" />{skill}</li>
			}
		})  
		return (
			<ul>
				{skillsList}
			</ul>			
		)
	}

	renderOtherCerts = () => {
		if (this.state.nannyData.other_certs !== "") {
			return <p>Other: {this.state.nannyData.other_certs}</p>
		} 
	}


	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	//Nodemailer Post 

	handleSubmit(e) {
		e.preventDefault()
		window.scroll(0,0)
		this.setState({"submit": "Email sent!"})
		fetch('https://gnarly-nannies.herokuapp.com/api/form', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(response => response.json())
			.catch(error => console.error('Error:', error))
	}

	render() {
		if (this.state === null) {
			return <div>Loading...</div>
		}
		return (
			<div className="detail-form-container">
			<div className="detail-container">
				<Link to="/locations/denver" >
					<button className="back-button">Back</button>
				</Link>
				<h4 className="submit-success">{this.state.submit}</h4>
				<div className="nanny-detail-main">
					<img className="nanny-detail-img" src={this.state.nannyData.photo_url} alt="profile img"/>
					<div className="basic-info-container">
						<div className="basic-info">
							<div>
								<h4>{this.state.nannyData.first_name + " " + this.state.nannyData.last_name}</h4>
								<p>{this.state.nannyData.city}, {this.state.nannyData.state}</p>
								<p>Hourly Rate: ${this.state.nannyData.hourly_rate}</p>
								<p>Experience: {this.state.nannyData.years_experience} years</p>
							</div>
							<div className="skills-list">
								<h4>Trips Offered</h4>
								<ul>
									{this.renderSports()}
								</ul>
							</div>
							<div className="skills-list">
								<h4>Training</h4>
								<ul>
									{this.renderSkills()}
								</ul>
								<div className="other-certs-container">{this.renderOtherCerts()}</div>
								<hr/>
								<p>Education: {this.state.nannyData.education}</p>
							</div>
							<div className="skills-list-end">
								<h4>Car Info</h4>
								<p>Make: {this.state.nannyData.car_make}</p>
								<p>Model: {this.state.nannyData.car_model}</p>
								<p>Year: {this.state.nannyData.car_year}</p>
							</div>
						</div>
						<div className="background">
							<h4>About Me</h4>
							<p>{this.state.nannyData.background}</p>
						</div>
					</div>
				</div>
			</div>
			
			{/* Email Form */}
			<div>
			<form onSubmit={this.handleSubmit} className="nanny-email-form">
			<h4>Email {this.state.nannyData.first_name}</h4>
				<div className = "nanny-email-input-container">
					<label>Your Name</label>
					<input
						type="text"
						name="user_name"
						onChange={this.handleChange} />
				</div>
				<div className = "nanny-email-input-container">
					<label>Your Email</label>
					<input
						type="email"
						name="user_email"
						onChange={this.handleChange} />
				</div>
				<div className = "nanny-email-input-container">
					<label>Subject Line</label>
					<input
						type="text"
						name="user_subject"
						onChange={this.handleChange} />
				</div>
				<div className = "nanny-email-input-container">
					<label>Message</label>
					<textarea
						name="user_message"
						onChange={this.handleChange} />
				</div>
				<button className="email-submit-button">Send</button>
			</form>
			</div>
			</div>
			
		)
	}
}


	