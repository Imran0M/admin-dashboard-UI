import React from 'react'
import { useHistory } from 'react-router-dom';
import Dashboard from './Dashboard'

function Err() {
  const history= useHistory()
  return (
 <Dashboard>
    <div className="error">
   <h1>404 ERROR</h1>
   <h2>Page Not Found</h2>
   <button className='errortext' onClick={()=>history.push('/')}>back to dashboard</button>
    </div>
 </Dashboard>
  )
}

export default Err;