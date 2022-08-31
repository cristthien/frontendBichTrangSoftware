import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import axios from 'axios';
import {useEffect, useState}   from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/nav.component.js";
import ListCustomer from './components/list-customer.component.js';
import CreateCustomer from './components/create-customer.component.js';
import SingleCustomer from './components/id-customer.component';
import EditCustomer from './components/edit-customer.component';
import DeleteCustomer from './components/delete-customer.component';


function App() {
  const [customers, setCustomers]= useState([]);
  useEffect(()=>{
document.title = "Manager customers"
    async function  getData (){
      const res = await axios.get('https://bich-trang-software.herokuapp.com/customers');
      return res;
    }
    getData()
    .then(res => setCustomers(res))
    .catch(err =>  console.log(err))

  },[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/customers' element={<ListCustomer />}></Route>
        <Route path="/customers/create" element={<CreateCustomer />}></Route>
        <Route path="/customers/detail/:id" element={<SingleCustomer  customers= {customers}/>}></Route>
        <Route path="/customers/edit/:id" element={<EditCustomer  customers= {customers}/>}></Route>
        <Route path="/customers/delete/:id" element={<DeleteCustomer />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
