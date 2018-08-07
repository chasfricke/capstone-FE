import React from 'react'
import '../css/Filter.css'
import { NannyCards } from './NannyCards'

export class Filter extends React.Component {
	constructor(props) {
		super(props)    

		this.state = {
			show_all: true,
			surfing: true, 
			kayaking: true, 
			snowboarding: true, 
			skiing: true, 
			mountain_biking: true,
			rock_climbing: true,
			hiking: true,
			skateboarding: true,
			first_aid: true,
			cpr: true,
			lifeguard: true
		};
	}

	render() {
		return (
			<div>
				<div className="container">
				<h3 className="nannies-title row">DENVER NANNIES</h3>
					<div className="filter-container row">
						<fieldset className="filter-background col-md-auto">
							<div>
								<h4>FILTERS</h4>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="show_all" name="show_all" checked={this.state.show_all} onChange={event => this.showAll()} />
								<label>Show All</label>
							</div>
						</fieldset>
						<fieldset className="col-md-auto">
						<legend>Mountain Sports</legend>
							<div className="checkbox-label-container">
								<input type="checkbox" id="snowboarding" name="snowboarding" checked={this.state.snowboarding} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.snowboarding}/>
								<label>Snowboarding</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="skiing" name="skiing" checked={this.state.skiing} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.skiing}/>
								<label>Skiing</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="mountain_biking" name="mountain_biking" checked={this.state.mountain_biking} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.mountain_biking}/>
								<label>Mountain Biking</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="rock_climbing" name="rock_climbing" checked={this.state.rock_climbing} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.rock_climbing}/>
								<label>Rock Climbing</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="hiking" name="hiking" checked={this.state.hiking} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.hiking}/>
								<label>Hiking</label>
							</div>
						</fieldset>
						<fieldset className="col-md-auto">
							<legend>Water Sports</legend>
							<div className="checkbox-label-container">
								<input type="checkbox" id="surfing" name="surfing" checked={this.state.surfing} onChange={event => this.onInputChange(event.target.value, event.target.name)} />
								<label>Surfing</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="kayaking" name="kayaking" checked={this.state.kayaking} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.kayaking}/>
								<label>Kayaking</label>
							</div>
						</fieldset>
						<fieldset className="col-md-auto">
							<legend>Other Sports</legend>
							<div className="checkbox-label-container">
								<input type="checkbox" id="skateboarding" name="skateboarding" checked={this.state.skateboarding} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.skateboarding}/>
								<label>Skateboarding</label>
							</div>
						</fieldset>
						<fieldset className="col-md-auto">
							<legend>Certifications</legend>
							<div className="checkbox-label-container">
								<input type="checkbox" id="first_aid" name="first_aid" checked={this.state.first_aid} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.first_aid}/>
								<label>First-Aid</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="cpr" name="cpr" checked={this.state.cpr} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.cpr}/>
								<label>CPR</label>
							</div>
							<div className="checkbox-label-container">
								<input type="checkbox" id="lifeguard" name="lifeguard" checked={this.state.lifeguard} onChange={event => this.onInputChange(event.target.value, event.target.name)} value={this.state.lifeguard}/>
								<label>Lifeguard</label>
							</div>
						</fieldset>
					</div>
					
				</div>
				<NannyCards filtersSelected={this.state} nannyData={this.props.nannyData} />
			</div>
		)
	}


	onInputChange(value, name) {
		if (this.state[name] === true) {
			this.setState( { [name]: false} )
		} else {
			this.setState( { [name]: true} )
		}
	}

	showAll() {
		if (this.state.show_all === true) {
			this.setState( {
				show_all: false,
				surfing: false, 
				kayaking: false, 
				snowboarding: false, 
				skiing: false, 
				mountain_biking: false,
				rock_climbing: false,
				hiking: false,
				skateboarding: false,
				first_aid: false,
				cpr: false,
				lifeguard: false
			} )
		} else {
			this.setState( {
				show_all: true,
				surfing: true, 
				kayaking: true, 
				snowboarding: true, 
				skiing: true, 
				mountain_biking: true,
				rock_climbing: true,
				hiking: true,
				skateboarding: true,
				first_aid: true,
				cpr: true,
				lifeguard: true
				}
			) 
		}
	}
}