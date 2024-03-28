import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/root.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />  </React.StrictMode>,
)
