import React from 'react'
import '../css/Filter.css'
import { NannyCards } from './NannyCards'

export class Filter extends React.Component {
	constructor(props) {
		super(props)    

		this.state = {};
	}

	render() {

		return (
			<div className="filter-list-container">
			<div className="filter-container">
				<div className="filter-title-container">
						<h4>REFINE SEARCH</h4>
				</div>
				<hr className="line_1"></hr>    
				<fieldset>
					<legend>Water Sports</legend>
					<div>
						<input type="checkbox" id="surfing" name="surfing" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.surfing} />
						<label>Surfing</label>
					</div>
					<div>
						<input type="checkbox" id="kayaking" name="kayaking" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.kayaking}/>
						<label>Kayaking</label>
					</div>
				</fieldset>
				<fieldset>
				<legend>Mountain Sports</legend>
					<div>
						<input type="checkbox" id="snowboarding" name="snowboarding" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.snowboarding}/>
						<label>Snowboarding</label>
					</div>
					<div>
						<input type="checkbox" id="skiing" name="skiing" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.skiing}/>
						<label>Skiing</label>
					</div>
					<div>
						<input type="checkbox" id="mountain_biking" name="mountain_biking" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.mountain_biking}/>
						<label>Mountain Biking</label>
					</div>
					<div>
						<input type="checkbox" id="rock_climbing" name="rock_climbing" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.rock_climbing}/>
						<label>Rock Climbing</label>
					</div>
					<div>
						<input type="checkbox" id="hiking" name="hiking" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.hiking}/>
						<label>Hiking</label>
					</div>
				</fieldset>
				<fieldset>
					<legend>Other</legend>
					<div>
						<input type="checkbox" id="skateboarding" name="skateboarding" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.skateboarding}/>
						<label>Skateboarding</label>
					</div>
				</fieldset>
				<br></br>
				<hr className="line_2"></hr>
				<fieldset>
					<legend>Certifications</legend>
					<div>
						<input type="checkbox" id="first_aid" name="first_aid" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.first_aid}/>
						<label>First-Aid</label>
					</div>
					<div>
						<input type="checkbox" id="cpr" name="cpr" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.cpr}/>
						<label>CPR</label>
					</div>
					<div>
						<input type="checkbox" id="lifeguard" name="lifeguard" onClick={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.lifeguard}/>
						<label>Lifeguard</label>
					</div>
				</fieldset>
			</div>
			<NannyCards filtersSelected={this.state} nannyData={this.props.nannyData} />
		</div>
		)
	}


	onInputChange(value, name) {
		if (this.state[name] === true) {
			this.setState( { [name]: undefined} )
		} else {
			this.setState( { [name]: true} )
		}
	}
}