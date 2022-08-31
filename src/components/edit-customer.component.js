import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const EditCustomer =(props) => {
    const {id}= useParams();
    const allCustomers =  props.customers.data;
    var selectedCustomer ={}

    function onChangeName(e){
        selectedCustomer[0].name = e.target.value;
    }
    function onChangePhone(e){
        selectedCustomer[0].phone = e.target.value;
    }
    function onChangeCompany(e){
        selectedCustomer[0].company = e.target.value;
    }
    function onChangeAddress(e){
        selectedCustomer[0].address = e.target.value;
    }
    function onChangeZalo(e){
        selectedCustomer[0].zalo = e.target.value;
    }
    function onChangeWebsite(e){
        selectedCustomer[0].website = e.target.value;
    }
    function onSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:5000/customers/update/'+id, selectedCustomer[0])
        .then(function (response) {
          if(response.status === 200){
              window.location.href='http://localhost:3000/customers';
          }
      })
        .catch(function (error) {
          alert(`Error: ${error.message} of your server. Please require technicians` );
        });
    }
    if(!!allCustomers){
        selectedCustomer= allCustomers.filter(customer=>customer._id === id )
        return (
            
                <div className='container-fluid'> 
                  <form className="row g-3 mt-1" onSubmit={onSubmit}>
            <div className="col-md-6">
              <label  className="form-label">Name*</label>
              <input required type="text" className="form-control" defaultValue={selectedCustomer[0].name}   placeholder=" Nguyễn Văn A" onChange={onChangeName} />
            </div>
            <div className="col-md-6">
              <label  className="form-label">Company*</label>
              <input type="text" className="form-control" defaultValue={selectedCustomer[0].company} required placeholder="THHN Bích Trang" onChange={onChangeCompany} />
            </div>
            <div className="col-12">
              <label  className="form-label">Email*</label>
              <input type="email" className="form-control"  defaultValue={selectedCustomer[0].address} placeholder="abc@gmail.com" onChange={onChangeAddress} />
            </div>
            <div className="col-6">
              <label  className="form-label"> Phone* </label>
              <input type="text" className="form-control" defaultValue={selectedCustomer[0].phone} required placeholder="0977924456"  onChange={onChangePhone}/>
            </div>
            <div className="col-6">
              <label  className="form-label"> Zalo* </label>
              <input type="text" className="form-control" required defaultValue={selectedCustomer[0].zalo}  placeholder="0977924456" onChange={onChangeZalo}  />
            </div>
            <div className="col-12">
              <label  className="form-label"> Website </label>
              <input type="text" className="form-control"  defaultValue={selectedCustomer[0].website} placeholder="https://www.google.com/" onChange={onChangeWebsite}  />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary"> Complete </button>
            </div>
          </form>
                </div>
              )

}
}
export default EditCustomer;