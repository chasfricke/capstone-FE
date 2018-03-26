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
			<div>
			<div className="filter-container">
				<div className="filter-title-container">
						<h4>REFINE SEARCH</h4>
				</div>
				<hr></hr>    
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
				<button>Search</button>
			</div>
			<NannyCards filtersSelected={this.state} nannyData={this.props.nannyData} />
		</div>
		)
	}


	onInputChange(value, name) {

		if (this.state[name] === true) {
			this.setState( { [name]: undefined} )

		}else {
			this.setState( { [name]: true} )
		}

	}
}