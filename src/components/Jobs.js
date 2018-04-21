import React from 'react'
import { Link } from 'react-router-dom';
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

	onInputChange(value, name) {
		if (this.state[name] === true) {
			this.setState( { [name]: false} )
		} else {
			this.setState( { [name]: true} )
		}
	}

	render() {
		return (
		<div>
		<h3>Nanny Application</h3>
		<form className="job-form" onSubmit={this.submitHandler}>
			<div className="form-section">	
				<h4>Login</h4>
				<div>
					<label>Username</label>
					<input type="text" className="text-box" name="username" value={this.state.username} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Password</label>
					<input type="password" className="text-box" name="password" value={this.state.password} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Password</label>
					<input type="password" className="text-box" placeholder="verify" />
				</div>
			</div>
			<div className="form-section">
				<h4>Personal</h4>
				<div>
					<label>First Name</label>
					<input type="text" className="text-box" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Last Name</label>
					<input type="text" className="text-box" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Phone Number</label>
					<input type="text" className="text-box" name="phone_number" value={this.state.phone_number} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Email Address</label>
					<input type="text" className="text-box" name="email_address" value={this.state.email_address} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Age</label>
					<input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Gender</label>
					<input type="text" className="text-box" name="gender" value={this.state.gender} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Photo URL</label>
					<input type="text" className="text-box" name="photo_url" size="50" value={this.state.photo_url} onChange={this.handleInputChange} />
				</div>
				<div className="about-me">
					<label>About Me</label>
					<textarea className="text-box" rows="10" cols="50" name="background" value={this.state.background} onChange={this.handleInputChange}></textarea>
				</div>

			</div>
			<div className="form-section">
				<h4>Address</h4>
				<div>
					<label>City</label>
					<input type="text" className="text-box" name="city" value={this.state.city} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>State</label>
					<input type="text" className="text-box" name="state" value={this.state.state} onChange={this.handleInputChange} />
				</div>
			</div>
			<div className="form-section">
				<h4>I'd Like To Lead The Following Trips</h4>
				<div>
					<input type="checkbox" name="surfing" checked={this.state.surfing} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Surfing</label>
				</div>
				<div>
					<input type="checkbox" name="kayaking" checked={this.state.kayaking} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Kayaking</label>	
				</div>
				<div>
					<input type="checkbox" name="rock_climbing" checked={this.state.rock_climbing} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Rock Climbing</label>
				</div>
				<div>
					<input type="checkbox" name="skateboarding" checked={this.state.skateboarding} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Skateboarding</label>
				</div>
				<div>
					<input type="checkbox" name="hiking" checked={this.state.hiking} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Hiking</label>
				</div>
				<div>
					<input type="checkbox" name="mountain_biking" checked={this.state.mountain_biking} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Mountain Biking</label>
				</div>
				<div>
					<input type="checkbox" name="skiing" checked={this.state.skiing} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Skiing</label>
				</div>
				<div>
					<input type="checkbox" name="snowboarding" checked={this.state.snowboarding} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Snowboarding</label>
				</div>
			</div>
			<div className="form-section">
				<h4>Experience</h4>
				<div>
					<label>Childcare Experience</label>
					<input type="text" className="text-box" name="years_experience" placeholder="years" value={this.state.years_experience} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Education</label>
					<input type="text" className="text-box" name="education" value={this.state.education} onChange={this.handleInputChange} />
				</div>
				<hr />
				<div>
					<input type="checkbox" name="first_aid" checked={this.state.first_aid} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>First-Aid</label>
				</div>
				<div>
					<input type="checkbox" name="cpr" checked={this.state.cpr} onChange={event => this.onInputChange(event.target.value, event.target.name)} />	
					<label>CPR</label>
				</div>
				<div>
					<input type="checkbox" name="lifeguard" checked={this.state.lifeguard} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
					<label>Lifeguard</label>
				</div>
				<div>
					<label>Other Certs</label>
					<input type="text" className="text-box" name="other_certs" value={this.state.other_certs} onChange={this.handleInputChange} />
				</div>
				
			</div>
			<div className="form-section">
				<h4>Payment Details</h4>
				<label>Hourly Rate</label>
				<input type="text" className="text-box" name="hourly_rate" value={this.state.hourly_rate} onChange={this.handleInputChange} />
			</div>
			<div className="form-section">
				<h4>Car Details</h4>
				<div>
					<label>Car Make</label>
					<input type="text" className="text-box" name="car_make" value={this.state.car_make} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Car Model</label>
					<input type="text" className="text-box" name="car_model" value={this.state.car_model} onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Car Year</label>
					<input type="text" className="text-box" name="car_year" value={this.state.car_year} onChange={this.handleInputChange} />
				</div>
			</div>
				<Link to="/locations/denver" >
					<button onClick={this.onSubmit} >Submit</button>
				</Link>
		</form>
		</div>
		)
	} 
}