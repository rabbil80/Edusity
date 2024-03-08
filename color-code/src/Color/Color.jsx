import { useState } from 'react'
import './Color.css'

const Color = () => {
    const [color, setColor] = useState()
  return (
    <div style={{backgroundColor: color}}>
        <div>
            <div><button onClick={ () => setColor("black")}>Black</button></div>
        </div>
    </div>
  )
}

export default Color