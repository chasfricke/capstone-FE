import React from 'react'
import '../css/NannyCard.css'

export class NannyCards extends React.Component {
    constructor(props) {
        super(props)    
        this.renderNannyList = this.renderNannyList.bind(this);    
    }

    renderNannyList(item){
        var FT = this.props.filtersSelected
       
        if ((FT.surfing === true & FT.surfing === item.surfing) || 
        (FT.kayaking === true & FT.kayaking === item.kayaking) || 
        (FT.snowboarding === true & FT.snowboarding === item.snowboarding) ||
        (FT.mountain_biking === true & FT.mountain_biking === item.mountain_biking) ||
        (FT.hiking === true & FT.hiking === item.hiking) ||
        (FT.rock_climbing === true & FT.rock_climbing === item.rock_climbing) ||
        (FT.skateboarding === true & FT.skateboarding === item.skateboarding) ||
        (FT.skiing === true & FT.skiing === item.skiing) ||
        (FT.first_aid === true & FT.first_aid === item.first_aid) ||
        (FT.cpr === true & FT.cpr === item.cpr) ||
        (FT.lifeguard === true & FT.lifeguard === item.lifeguard)

        )
        { 

            return (
                <li key={item.first_name + item.last_name + item.phone_number} >
                    <div className="nanny-card-container">
                        <header className="nanny-card-header">
                            <img className="nanny-profile-img" src={item.photo_url} alt="profile" />
                            <button>MESSAGE</button>
                        </header>
                        <section className="nanny-card-dropdown">
                            <h4>{item.first_name + " " + item.last_name}</h4>
                            <p>{item.city + ", " + item.state}</p>
                            <p>{item.background}</p>
                            <p>Hourly Rate: ${item.hourly_rate}</p> 
                        </section>
                    </div>
                </li>
            )
        }   
    }
   
    render() {
        return (
          <section>
            <h3>AVAILABLE NANNIES</h3>
                <ul>
                    {this.props.nannyData.map(this.renderNannyList)}
                </ul>
          </section>
        )
    }
    
}

