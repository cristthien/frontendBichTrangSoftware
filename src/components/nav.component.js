import React, { Component } from 'react'
import logo from '../img/logo.png';
import '../css/nav.css' 

export default class nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand img-wrapper" href="/customers">
            <img src={logo} alt='thien'></img>
          </a>  

        </div>
      </nav>
    )
  }
}