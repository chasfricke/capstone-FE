import React from 'react';

export class Login extends React.Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = {};

		this.handleInputChange = this.handleInputChange.bind(this)
		}

onLoginSubmit = event => {
	event.preventDefault()
	const data = this.state
	
	console.log(data)
	fetch('http://localhost:8080/login', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))		
}

handleInputChange(event) {
	const target = event.target;
	const value = target.value;
	const name = target.name;
	
	this.setState({[name]: value});
}
   
	render() {
		return (
			<div className="login-form">
				<h4>Login</h4>
					<form>
						<div>
							<input type="email" name="email_address" placeholder="email address" required onChange={this.handleInputChange} />
							<input type="password" name="password"  placeholder="password" required onChange={this.handleInputChange} />
							<button onClick={this.onLoginSubmit}>Login</button>
						</div>
					</form>			
			</div>
		)
	}
    
}

/* <h4>Signup</h4>
<form onSubmit={this.submitHandler}>
	<input type="text" name="email_address" placeholder="email address" onChange={this.handleInputChange} />
	<input type="text" name="password" placeholder="password" onChange={this.handleInputChange} />
	<button onClick={this.onSignupSubmit}>Submit</button>
</form> */