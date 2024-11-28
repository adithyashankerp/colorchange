import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("")
 

  return (
    <>
     <div className='  ' style={{minHeight:"100vh", backgroundColor: backgroundColor}} >
      <div className='align-items-center justify-content-center mt-5 ' style={{backgroundColor: backgroundColor}}><br /><br /><br /><br /><br /><br /><br />
        <h3 className='text-center' style={{backgroundColor: backgroundColor}} >Background Color Change</h3>
      </div>
      <div className='d-flex align-item-center justify-content-center mt-5' style={{backgroundColor: backgroundColor}}>
        <button onClick={()=>setBackgroundColor("red")} className='bg-danger me-3 border border-dark rounded' style={{width:"10%",height:"50px"}}>Red</button>
        <button onClick={()=>setBackgroundColor("green")} className='bg-success me-3 border-dark border rounded ' style={{width:"10%",height:"50px"}}>Green</button>
        <button onClick={()=>setBackgroundColor("blue")} className='bg-primary me-3 border-dark border rounded' style={{width:"10%",height:"50px"}}>Blue</button>

      </div>
      <div  className='d-flex align-item-center justify-content-center mt-4' style={{backgroundColor: backgroundColor}}>
        <input  onChange={(e) => setBackgroundColor(e.target.value)} className='form text-center border border-dark rounded w-20' type="text" placeholder="Enter a Color"/>
      </div>
         
     </div>
    </>
  )
}

export default App
