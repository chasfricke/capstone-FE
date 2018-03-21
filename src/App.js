import React, { Component } from 'react';
import './App.css';
import { NannyCards } from './components/NannyCards'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props) 
    this.state= {
      nannyData: [],
    }
  }
  
  componentDidMount() {
    this.getNannies()
  }

  getNannies = () => {
    return fetch('https://gnarly-nannies.herokuapp.com/nanny_acct_info')
      .then(response => response.json())
      .then(data => {
        var nannyData = data.nanny_acct_info;
        this.setState({nannyData: nannyData})
      })
    }

  
  
  render() {
    return (
      <div className="App">
        <Header />
        <NannyCards nannyData={this.state.nannyData} />
        <Footer />
      </div>
    );
  }
}

export default App;
