
import React from 'react';
import {useParams} from 'react-router-dom'; 
import '../css/single-customer.css'
function onClickHandlingDelete(e){
    var ID = e.target.id;
    window.location.href = 'https://bich-trang-webstie.herokuapp.com/delete/'+ID;

}
function onClickHandlingEdit(e){
    var ID = e.target.id;
    window.location.href = 'https://bich-trang-webstie.herokuapp.com/customers/edit/'+ID;


}

const  IDCustomer= (props)=>{
    const allCustomers =  props.customers.data;
    var selectedCustomer ={}
    const {id}= useParams();
    if(!!allCustomers){
        selectedCustomer= allCustomers.filter(customer=>customer._id === id )
        return (
        <div className='container-fluid mt-4 '>
            <ul className="list-group" >
                <li className="list-group-item">Name: {selectedCustomer[0].name} </li>
                <li className="list-group-item">Phone: 0{selectedCustomer[0].phone} </li>
                <li className="list-group-item">Company: {selectedCustomer[0].company}  </li>
                <li className="list-group-item">Address: {selectedCustomer[0].address}  </li>
                <li className="list-group-item">Zalo: 0{selectedCustomer[0].zalo}   </li>
                <li className="list-group-item">Website :  {selectedCustomer[0].website}  </li>
            </ul>
            <div className='mt-2 float-end '>
                <button type="button" className="btn btn-info btn-edit" id={id} onClick={onClickHandlingEdit}>Edit</button>
                <button type="button" className="btn btn-danger m-2 btn-delete" id={id} onClick={onClickHandlingDelete}>Delete</button>
            </div>
        </div>)

    };
    
}


export default IDCustomer;
