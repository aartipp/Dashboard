import React from 'react'
import { Link } from 'react-router-dom'


 function Help() {
  return  <div><p>this is help page</p>
    <Link to="/" className='underline'>
      go to dashboard</Link>
      </div>
  
}
export default Help;