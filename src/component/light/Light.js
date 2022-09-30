import React, { useState } from 'react'
import '../light/Light.css'
import {BsCircle} from 'react-icons'
const Light = () => {

  const [theme,setTheme] = useState('');



  return (
    <div className="Light">
        <button className='btn'>Light</button>
        <button className='btn'>Dark</button>
        <button className='btn'>Green</button>

    </div>
  )
}

export default Light