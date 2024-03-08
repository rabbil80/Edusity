
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState()

  const click = color =>{
    setColor(color)
  }
  useEffect(() =>{
    document.body.style.backgroundColor= color
  },[color])
 

  return (
   <div style={{backgroundColor: color}}>
    <div className='container'>
    <div>  <button className='black' onClick={ () => click("black")}>Black</button></div>
    <div>  <button className='rad' onClick={ () => setColor("red")}>Red</button></div>
    <div>  <button className='green' onClick={ () => setColor("green")}>Green</button></div>
    <div>  <button className='tomato' onClick={ () => setColor("tomato")}>Tomato</button></div>
    <div>  <button className='orange' onClick={ () => setColor("orange")}>orange</button></div>
    <div>  <button className='violet' onClick={ () => setColor("violet")}>Violet</button></div>
    <div>  <button className='gray' onClick={ () => setColor("gray")}>Gray</button></div>
    <div>  <button className='blue' onClick={ () => setColor("blue")}>Blue</button></div>
    <div>  <button className='White' onClick={ () => setColor("white")}>White</button></div>
    </div>
   </div>
  )
}

export default App
