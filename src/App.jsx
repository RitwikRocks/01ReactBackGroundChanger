import { useState } from 'react'
import './App.css'

function App() {
   const [color, setColor] = useState("olive");
  return (
    <div style={{backgroundColor:color}} className="w-full h-screen flex">
      <div className="text-white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-6" style={{backgroundColor:"red"}}
           onClick={()=> {
            return setColor("red");
           }}
           >Red</button>
          <button className="outline-none px-6" style={{backgroundColor:"blue"}}
           onClick={()=> setColor("blue")}
          >Blue</button>
          <button className="outline-none px-6" style={{backgroundColor:"green"}}
          onClick={()=> setColor("green")}
          >Green</button>
          <button className="outline-none px-6" style={{backgroundColor:"orange"}}
          onClick={()=> setColor("orange")}
          >Orange</button>
          <button className="outline-none px-6" style={{backgroundColor:"pink"}}
          onClick={()=> setColor("pink")}
          >Pink</button>
          <button className="outline-none px-6" style={{backgroundColor:"yellow"}}
          onClick={()=> setColor("yellow")}
          >Yellow</button>
          <button className="outline-none px-6" style={{backgroundColor:"cyan"}}
          onClick={()=> setColor("cyan")}
          >Cyan</button>
          <button className="outline-none px-6" style={{backgroundColor:"grey"}}
          onClick={()=> setColor("grey")}
          >Grey</button>
          <button className="outline-none px-6" style={{backgroundColor:"black"}}
          onClick={()=> setColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
