import 'bootstrap/dist/css/bootstrap.css';
import InternDetails from './interns.jsx';
import { Route, Routes, useNavigate} from 'react-router-dom'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import Create from './create.jsx'
function App() {
  return (

<Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/lists" element={<InternDetails />} />
      <Route path="/create" element={<Create />} />


</Routes>
  )     
}


function DefaultView() {


   const navigate = useNavigate();
    return  <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h1>Welcome to DevOps Internship Program Details</h1>
      
      <button type="submit" className="btn btn-primary" onClick={()=>{
        navigate("/lists");
      }}>Show intern list</button>

      </>
}
export default App;