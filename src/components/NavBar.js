import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

export class NavBar extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark navbar-background">
        <Link to="/"><h1 className="logo">GNARLY NANNIES</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="header-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="header-link" to="/locations">CITIES</Link>
              </li>
              <li className="nav-item">
                <Link className="header-link" to="/jobs">JOBS</Link>
              </li>
              <li className="nav-item dropdown">
                  <a className=" dropdown-toggle header-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ACCOUNT
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/login">LOGIN</Link>
                  <a className="dropdown-item" href="#">MY ACCOUNT</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">LOGOUT</a>
                  </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-light btn-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
      </nav>
    
		)
	}
    
}
