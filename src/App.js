import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Filter } from './components/Filter';
import { SplashPage } from './components/SplashPage';
import { Locations } from './components/Locations';
import { JobsForm } from './components/Jobs';
import { NannyDetail } from './components/NannyDetail';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/locations/denver/:id" component={() => (<div><Header/><NannyDetail/><Footer/></div>)} /> 
            <Route path="/locations/denver" component={() => (<div><Header/><Filter nannyData={this.state.nannyData} /><Footer/></div>)} /> 
            <Route path="/jobs" component={() => (<div><Header/><JobsForm/><Footer/></div>)} />
            <Route path="/locations" component={() => (<div><Header/><Locations/><Footer/></div>)} />
            <Route path="/" component={() => (<div><Header/><SplashPage/><Footer/></div>)} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;