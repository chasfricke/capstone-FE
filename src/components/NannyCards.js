import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NannyCard.css'

export class NannyCards extends React.Component {
    constructor(props) {
        super(props) 
        this.state=""
        
        this.renderNannyList = this.renderNannyList.bind(this);    
    }

    renderNannyList(item){ 
        var filterMatches = 0;
        var filterNonMatches = 0;
        var matchPercentage = 0; 
        var skillArray = ["surfing", "kayaking", "snowboarding", "mountain_biking", "hiking", "rock_climbing", "skateboarding", "skiing", "first_aid", "cpr", "lifeguard"];
        skillArray.forEach((element) => {
            if (this.props.filtersSelected[element] && item[element] === true) {
                filterMatches += 1;
            } else { 
                if (this.props.filtersSelected[element] === true) {
                    filterNonMatches +=1
                }
            }
        })
        matchPercentage = Math.round(filterMatches / (filterMatches + filterNonMatches) * 100)
        if (filterMatches > 0) { 
            return (
                <div className="card-container col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to={`/locations/denver/${item.id}`}>
                <div className="card">
                    <div key={item.id} onClick={() => this.handleClick(item)}>
                        <p className="match-percentage text-right">{matchPercentage}% Match</p> 

                        <img className="profile-pic" src={item.photo_url} alt="profile" />
                        
                        
                        <div className="card-body">
                            <h4 className="card-title">{item.first_name + " " + item.last_name}</h4>
                            <p>{item.city + ", " + item.state}</p>
                            <br/>
                            <p>{item.background}</p>
                            <br/> 
                            <p className="hourly-rate">Hourly Rate: ${item.hourly_rate}</p> 
                        </div>    
                        
                    </div>
                    </div>
                </Link>
                </div>
            )
        }   
    }
    
    handleClick = (item) => {
    this.setState({item});
    window.scroll(0,0);
    }   

	render() {
        return (
            <section className="container">
                <div className="row">
                    {this.props.nannyData.map(this.renderNannyList)}
                </div>
            </section>
        )
    }
}


