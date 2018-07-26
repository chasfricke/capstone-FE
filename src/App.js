import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Filter } from './components/Filter';
import { SplashPage } from './components/SplashPage';
import { Locations } from './components/Locations';
import { JobsForm } from './components/Jobs';
import { NannyDetail } from './components/NannyDetail';
import { LoginCard } from './components/LoginCard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = { nannyData: null }
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
        <div className="site-content">
          <div className="site-background">
            <div className="site-body">
              <NavBar />
              <div className="main">
                <Switch>
                  <Route path="/locations/denver/:id" component={() => (<div><NannyDetail/></div>)} /> 
                  <Route path="/locations/denver" component={() => (<div><Filter nannyData={this.state.nannyData} /></div>)} /> 
                  <Route path="/jobs" component={() => (<div><JobsForm/></div>)} />
                  <Route path="/locations" component={() => (<div><Locations/></div>)} />
                  <Route path="/login" component={() => (<div><LoginCard/></div>)} />
                  <Route path="/" component={() => (<div className="container text-center"><SplashPage/></div>)} />
                </Switch>
              </div>
            </div>
            <Footer /> 
          </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;