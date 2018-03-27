import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Filter } from './components/Filter';


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
    return fetch('https://gnarly-nannies.herokuapp.com/nanny_account_info')
      .then(response => response.json())
      .then(data => {
        var nannyData = data.nanny_account_info;
        this.setState({nannyData: nannyData})
      })
    }

  
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Filter nannyData={this.state.nannyData} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
