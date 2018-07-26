import React from 'react';
import '../css/LoginCard.css'

export class LoginCard extends React.Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = {};

		this.handleInputChange = this.handleInputChange.bind(this)
		}

onLoginSubmit = event => {
	event.preventDefault()
	const data = this.state
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



    render (){
        return (
            <div className="container col-9 col-sm-8 col-md-6 col-lg-4">
            <br/>
            <div className="card ">
                <div className="card-header">
                    <h3>LOGIN</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email_address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className="button-container">
                            <button type="submit" onClick={this.onLoginSubmit} className="btn btn-outline-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>




        )
    }

}