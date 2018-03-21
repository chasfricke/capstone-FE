import React from 'react'
import '../css/NannyCard.css'

export class NannyCards extends React.Component {
    constructor(props) {
        super(props)    
        this.createNannyCard = this.createNannyCard.bind(this);    
    }

    createNannyCard(item){
        return (
            <li>
                <div className="nanny-card-container">
                    <header className="nanny-card-header">
                        <img className="nanny-profile-img" src={item.photo_url} alt="profile picture" />
                        <button>MESSAGE</button>
                    </header>
                    <section className="nanny-card-dropdown">
                        <h4>{item.first_name + " " + item.last_name}</h4>
                        <p>{item.background}</p> 
                    </section>
                </div>
            </li>
        )
    }
   

    render() {
        console.log(this.props.nannyData);
        return (
          <section>
                <ul>
                    {this.props.nannyData.map(this.createNannyCard)}
                </ul>
          </section>
        )
    }
    
}

