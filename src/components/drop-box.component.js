import React, { Component } from 'react'

export default class DropBox extends Component {
  render() {
    return (    
    <div className="dropdown-menu">
    <a className="dropdown-item" href="/">Action</a>
    <a className="dropdown-item" href="/">Another action</a>
    <a className="dropdown-item" href="/">Something else here</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="/">Separated link</a>
    </div>
    )    
  }
}
