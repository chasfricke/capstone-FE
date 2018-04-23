import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Filter } from './components/Filter';
import { SplashPage } from './components/SplashPage';
import { Locations } from './components/Locations';
import { JobsForm } from './components/Jobs';
import { NannyDetail } from './components/NannyDetail';
import { Login } from './components/Login';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props) 
    this.state= { nannyData: null }
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
    if (this.state.nannyData === null) {
			return <div>Loading...</div>
		}
    return (
      
        <BrowserRouter>
        <div className="site-content">
          <div className="site-body">
            <div className="app-header">
              <Header />
            </div>
            <div className="main">
              <Switch>
                <Route path="/locations/denver/:id" component={() => (<div><NannyDetail/></div>)} /> 
                <Route path="/locations/denver" component={() => (<div><Filter nannyData={this.state.nannyData} /></div>)} /> 
                <Route path="/jobs" component={() => (<div><JobsForm/></div>)} />
                <Route path="/locations" component={() => (<div><Locations/></div>)} />
                <Route path="/login" component={() => (<div><Login/></div>)} />
                <Route path="/" component={() => (<div><SplashPage/></div>)} />
              </Switch>
            </div>
          </div>
          <Footer className="footer"/> 
        </div>
        </BrowserRouter>
      
      
    );
  }
}

export default App;