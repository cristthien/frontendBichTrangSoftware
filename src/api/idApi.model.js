import axios from "axios";


const getCustomer =  (id)=>{

    return  axios.get('http://localhost:5000/customers/detail/'+id)
    .then((response)=>{ 
        return  response.data;

        })
    .catch((err)=>{ console.log(err)})

}
export default getCustomer;