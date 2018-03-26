import React from 'react'
import '../css/Filter.css'

export class Filter extends React.Component {
	constructor(props) {
		super(props)    

		this.state = {
			surfing: false,
			kayaking: false,
			snowboarding: false,
			mountainbiking: false,
		}
	}


	
	render() {
		return (
			<div className="filter-container">
				<div className="filter-title-container">
						<h4>REFINE SEARCH</h4>
				</div>
				<hr></hr>    
				<fieldset>
					<legend>Water Sports</legend>
					<div>
						<input type="checkbox" id="surfing" name="surfing" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.surfing} />
						<label for="surfing">Surfing</label>
					</div>
					<div>
						<input type="checkbox" id="kayaking" name="kayaking" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.kayaking}/>
						<label for="kayaking">Kayaking</label>
					</div>
				</fieldset>
					<div>
						<input type="checkbox" id="snowboarding" name="snowboarding" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.snowboarding}/>
						<label for="snowboarding">Snowboarding</label>
					</div>
					<div>
						<input type="checkbox" id="mountainbiking" name="mountainbiking" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.mountainbiking}/>
						<label for="mountainbiking">Mountain Biking</label>
					</div>
				<button>Search</button>
			</div>
		)
	}

	onInputChange(value, name) {
		if (this.state[name] === true) {
			this.setState( { [name]: false} )
		}else {
			this.setState( { [name]: true} )
		}
	}
}