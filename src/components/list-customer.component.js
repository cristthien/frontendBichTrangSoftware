import React, { Component } from 'react'
import '../css/list-customer.css';
import DropBox from './drop-box.component.js'
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class ListCustomer extends Component {
  constructor(props){
    super(props);

    this.onClickHandle = this.onClickHandle.bind(this);

    this.state=({
      customers:[]
    });
  
  }

  onClickHandle(e) {
    const ID = e.target.parentElement.id
    window.location.href = 'http://localhost:3000/customers/detail/'+ID;
  }

  componentDidMount() {

    axios.get('https://bich-trang-software.herokuapp.com/customers')
    .then(customerslist=>{
      this.setState({
        customers:customerslist.data
      })
    })
    .catch(err=> console.log(err))

  }
  render() {
    var customerList= this.state.customers;
    return (
        <div className='container-fluid container-wrapper'>

        <table className="table table-striped">
        <thead>
          <tr className='heading-row'>
            <th scope="col">Name</th>
            <th scope="col" className='d-none d-sm-table-cell'>Company</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map(customer => <TableRow customer={customer}  key={customer._id} onClickHandle={this.onClickHandle}  />)}
          <tr className='content-row kill-padding'>
            <th colSpan='100%' className='kill-padding'> <Link className='box-create' to="./create/"> + </Link></th>
          </tr>
        </tbody>
      </table>
      <DropBox />

    </div>
    )
  }
}
class TableRow extends Component {
  render() {
      var customer = this.props.customer;
      return (
          <tr className='content-row' id={customer._id} onClick={this.props.onClickHandle}  >
            <th scope="col"  >{customer.name}</th>
            <th scope="col" className='d-none d-sm-table-cell' >{customer.company}</th>
            <th scope="col"  >0{customer.phone}</th>

          </tr>
      )
  }
}

