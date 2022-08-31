import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DeleteCustomer = ()=> {
    const {id} = useParams();
    function HandlingDelete () {
        axios.delete('http://localhost:5000/customers/delete/'+id)
        .then(res=> {window.location.href='http://localhost:3000/customers';})
        .catch(err=> {console.log(err)})
    }
    
    return (
        <div className="container-fluid">
            <h2> Are you sure </h2>
            <button type="button" className="btn btn-danger" onClick={HandlingDelete} >Delete</button>
        </div>
    )
}
export default DeleteCustomer