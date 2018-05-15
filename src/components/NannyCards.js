import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NannyCard.css'

export class NannyCards extends React.Component {
    constructor(props) {
        super(props) 
        
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
                <Link key={item.id} to={`/locations/denver/${item.id}`}>
                <li key={item.id} onClick={() => this.handleClick(item)}>
                    <div className="nanny-card-container">
                        <header className="nanny-card-header">
                            <img className="nanny-profile-img" src={item.photo_url} alt="profile" />
                        </header>
                        <section className="nanny-info">
                            <div className="nanny-info-header">
                                <h4>{item.first_name + " " + item.last_name}</h4>
                                <p className="match-percentage">{matchPercentage}% Match</p>
                            </div>
                            <p>{item.city + ", " + item.state}</p>
                            <p>{item.background}</p>
                            <p>Hourly Rate: ${item.hourly_rate}</p> 
                        </section>
                    </div>
                </li>
                </Link>
            )
        }   
    }
		handleClick = (item) => {
        this.setState({item});
        window.scroll(0,0);
		}   

		render() {
        return (
          <section className="nanny-list">
                <ul>
                    {this.props.nannyData.map(this.renderNannyList)}
                </ul>
          </section>
        )
    }
    
}


