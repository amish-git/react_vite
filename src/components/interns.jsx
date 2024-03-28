
import { useEffect, useState } from 'react';
import axios from 'axios';
import  Navbar from './layout'
import InternForm from './create';


function InternDetails() {

    const [content, setContent] = useState(<InternList showForm={showForm}/>);

    function showList(){
        setContent(<InternList showForm={showForm} />)

    }

    function showForm(){
         setContent(<InternForm showList={showList} />)
     }


    return (
        
       <div className='container'>
           <Navbar />
            {content}
            </div>
         
        
    )

}

 function InternList(props){
    
    const [interns,setIntern] = useState([]);
   
    useEffect(() => {  
    const fetchInterns = async () => {
            try {
                const response = await axios.get('http://localhost:3000/internMembers');
                setIntern(response.data);
            } catch (error) {
                console.error('Error fetching interns:', error);
            }
        };

        fetchInterns();
    }, []);
    

    return( 
     <>
        <h2 className="text-center mb-3">Intern Lists</h2>
 
        <table className='table table-bordered'>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                        <th>Selection Status</th>
                        <th>Action</th>
                     </tr>
            </thead>
            
            <tbody>
                {interns.map((intern) => {
                 return (
                    <tr key={intern.id}>
                 
                        <td>{intern.name}</td>
                        <td>{intern.address}</td>
                        <td>{intern.dateOfBirth}</td>
                        <td>
                            {intern.selectionStatus ? (
                                <h6><span className="text-white bg-success border rounded p-1">Selected</span></h6>
                            ) : (
                                <h6><span className="text-white bg-warning border rounded p-1">Not Selected</span></h6>
                            )}
                        </td>
                        <td style={{width: "10px", whiteSpace:"nowrap"}}>
                            <button type="button" className='btn btn-primary btn-sm me-2'>Edit</button>
                            <button type="button" className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                     </tr>
                    )}
                )}  
            </tbody>
        </table>

<button onClick={() => props.showForm()} type="button" className="btn btn-outline-primary">Add Intern</button>

</>
)};

   




export default InternDetails;