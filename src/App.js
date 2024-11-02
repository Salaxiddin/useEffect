import React ,{useState ,useEffect}from 'react'
import "./App.css"
import List from './List'

export default function App() {
  const [visible,setVisibles]= useState(true)

  const toggle = ()=>{
    setVisibles((visible)=> !visible)
  }

  return (
   <div>
    <button onClick={toggle}>Open / Close</button>
     {visible && <List/>}
   </div>
  )
}

