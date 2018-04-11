import React from 'react'
// import { Link } from 'react-router-dom';
import '../css/Jobs.css'

export class JobsForm extends React.Component {
	constructor(props, context) {
    super(props, context)
    
    this.state = {}
		
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	onSubmit = event => {
		event.preventDefault()
		const data = this.state;
		this.addNannyFormData(data);
	}

	addNannyFormData = data => {
		console.log("fetch start")
		fetch('https://gnarly-nannies.herokuapp.com/nanny_account_info', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
	}

	handleInputChange(event) {
		event.preventDefault()
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({[name]: value});
	}

	submitHandler(event) {
    event.preventDefault();
}

	render() {
		return (
			<div>
			<h3>Nanny Application</h3>
			<form className="job-form" onSubmit={this.submitHandler}>
				
				<h4>Login</h4>
				<label>Username</label>
				<input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
				<label>Password</label>
				<input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />

				<h4>Personal</h4>
				<label>First Name</label>
				<input type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} />
				<label>Last Name</label>
				<input type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} />

				<label>Phone Number</label>
				<input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleInputChange} />

				<label>Email Address</label>
				<input type="text" name="email_address" value={this.state.email_address} onChange={this.handleInputChange} />

				<label>Age</label>
				<input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />

				<label>Gender</label>
				<input type="text" name="gender" value={this.state.gender} onChange={this.handleInputChange} />

				<label>Photo URL</label>
				<input type="text" name="photo_url" value={this.state.photo_url} onChange={this.handleInputChange} />

				<h4>Address</h4>
				<label>City</label>
				<input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />

				<label>State</label>
				<input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} />

				<h4>Skills</h4>
				<label>Surfing</label>
				<input type="checkbox" name="surfing" value={this.state.surfing} onChange={this.handleInputChange} />

				<label>Kayaking</label>
				<input type="checkbox" name="kayaking" value={this.state.kayaking} onChange={this.handleInputChange} />

				<label>Rock Climbing</label>
				<input type="checkbox" name="rock_climbing" value={this.state.rock_climbing} onChange={this.handleInputChange} />

				<label>Skateboarding</label>
				<input type="checkbox" name="skateboarding" value={this.state.skateboarding} onChange={this.handleInputChange} />

				<label>Hiking</label>
				<input type="checkbox" name="hiking" value={this.state.hiking} onChange={this.handleInputChange} />

				<label>Mountain Biking</label>
				<input type="checkbox" name="mountain_biking" value={this.state.mountain_biking} onChange={this.handleInputChange} />

				<label>Skiing</label>
				<input type="checkbox" name="skiing" value={this.state.skiing} onChange={this.handleInputChange} />

				<label>Snowboarding</label>
				<input type="checkbox" name="snowboarding" value={this.state.snowboarding} onChange={this.handleInputChange} />

				<h4>Experience</h4>
				<label>Years of Experience</label>
				<input type="text" name="years_experience" value={this.state.years_experience} onChange={this.handleInputChange} />

				<label>Background</label>
				<input type="text" name="background" value={this.state.background} onChange={this.handleInputChange} />

				<label>Education</label>
				<input type="text" name="education" value={this.state.education} onChange={this.handleInputChange} />

				<label>First-Aid</label>
				<input type="checkbox" name="first_aid" value={this.state.first_aid} onChange={this.handleInputChange} />

				<label>CPR</label>
				<input type="checkbox" name="cpr" value={this.state.cpr} onChange={this.handleInputChange} />

				<label>Lifeguard</label>
				<input type="checkbox" name="lifeguard" value={this.state.lifeguard} onChange={this.handleInputChange} />

				<label>Other Certs</label>
				<input type="text" name="other_certs" value={this.state.other_certs} onChange={this.handleInputChange} />

				<h4>Payment Details</h4>
				<label>Hourly Rate</label>
				<input type="text" name="hourly_rate" value={this.state.hourly_rate} onChange={this.handleInputChange} />

				<h4>Car Details</h4>
				<label>Car Make</label>
				<input type="text" name="car_make" value={this.state.car_make} onChange={this.handleInputChange} />

				<label>Car Model</label>
				<input type="text" name="car_model" value={this.state.car_model} onChange={this.handleInputChange} />

				<label>Car Year</label>
				<input type="text" name="car_year" value={this.state.car_year} onChange={this.handleInputChange} />
				<button onClick={this.onSubmit}>Submit</button>
			</form>
			</div>
		)
	} 
}