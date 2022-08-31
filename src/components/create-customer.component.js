import React, { Component } from 'react'
import '../css/create-customer.css'
import axios from 'axios';

export default class CreateCustomer extends Component {
    constructor(props){
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeZalo = this.onChangeZalo.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state= {
            name: '',
            company: '',
            phone: '',
            address: '',
            zalo: '',
            website:''
        }
    }
    onChangeName(e){
        this.setState({name:e.target.value});
    }
    onChangePhone(e){
        this.setState({phone:e.target.value});
    }
    onChangeCompany(e){
        this.setState({company:e.target.value});
    }
    onChangeAddress(e){
        this.setState({address:e.target.value});
    }
    onChangeZalo(e){
        this.setState({zalo:e.target.value});
    }
    onChangeWebsite(e){
        this.setState({website:e.target.value});
    }
    shouldComponentUpdate() {
        return true
    };
    onSubmit(e){
        e.preventDefault();
        const customer = {
            name:this.state.name,
            phone:this.state.phone,
            address:this.state.address,
            company:this.state.company,
            zalo:this.state.zalo,
            website:this.state.website
        }

        axios.post('https://bich-trang-webstie.herokuapp.com/customers/add', customer)
          .then(function (response) {
            if(response.status === 200){
                window.location.reload();
            }
        })
          .catch(function (error) {
            alert(`Error: ${error.message} of your server. Please require technicians` );
          });
    }
  render() {

    return (
      <div className='container-fluid'> 
        <form className="row g-3 mt-1" onSubmit={this.onSubmit}>
  <div className="col-md-6">
    <label  className="form-label">Name*</label>
    <input required type="text" className="form-control"  placeholder=" Nguyễn Văn A" onChange={this.onChangeName}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Company*</label>
    <input type="text" className="form-control" required placeholder="THHN Bích Trang" onChange={this.onChangeCompany} />
  </div>
  <div className="col-12">
    <label  className="form-label">Email*</label>
    <input type="email" className="form-control"   placeholder="abc@gmail.com" onChange={this.onChangeAddress}/>
  </div>
  <div className="col-6">
    <label  className="form-label"> Phone* </label>
    <input type="text" className="form-control" required placeholder="0977924456" onChange={this.onChangePhone} />
  </div>
  <div className="col-6">
    <label  className="form-label"> Zalo* </label>
    <input type="text" className="form-control" required  placeholder="0977924456" onChange={this.onChangeZalo} />
  </div>
  <div className="col-12">
    <label  className="form-label"> Website </label>
    <input type="text" className="form-control"  placeholder="https://www.google.com/"  onChange={this.onChangeWebsite}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary"> Create </button>
  </div>
</form>
      </div>
    )
  }
}
