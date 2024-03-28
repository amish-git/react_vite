import React,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from "axios";

function InternForm(props){
        
        const [name, setName] = useState('')
        const [address, setAddress] = useState('')
        const [date, setDate] = useState('');
        const [selection, setSelectionStatus] = useState(false);
        

        const postData = () => {
                console.log(name);
                console.log(address);
                console.log(date);
                console.log(selection);

                axios.post(`http://localhost:3000/internMembers`,{
                        name,
                        address,
                        date,
                        selection
                })

        }
 
 
        return( 
        <>
             
        <h2 className="text-center mb-3">Create new intern</h2>
     
         <div className="row">
                <div className="col-lg-6 mx-auto">

                <Form className="create-form">  
                        <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Name :</label>
                                <div className="col-sm-8">
                                        <input type="text" placeholder="Enter name" className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                                </div>  
                        </div>

                        <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Address :</label>
                                <div className="col-sm-8">
                                        <input type="text" placeholder="Enter address" className="form-control" name="address" onChange={(e) => setAddress(e.target.value)} />
                                </div>  
                        </div>

                        <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Date of Birth:</label>
                                <div className="col-sm-8">
                                        <input type="date" placeholder="Enter address" className="form-control" name="address" onChange={(e) => setDate(e.target.value)} />
                                </div>  
                        </div>
               
                       
                        <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                       
                                <Checkbox label='I agree to the Terms and Conditions' onChange={() => setSelectionStatus(!selection)} />
                                <Button onClick={postData} type='submit'>Submit</Button>

                        </div>

                                 <div className="col-sm-4 d-grid">

                                        <button onClick={() => props.showList()} type="button" className="btn btn-secondary">Cancel</button>

                                </div>
                        </div>

                 </Form> 

        </div>
     </div>

     </>
     
 )}

 export default InternForm;