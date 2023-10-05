import { useState } from 'react';
import './style.css'
function App() {

  let [counterValue , setCounterValue ] = useState(10)
  const addValue  = () => {
    setCounterValue(counterValue+1)
  }
  const minusValue = () => {
    setCounterValue(counterValue - 1)
  }
  return (
    <>
    <div className=' bg-slate-950 h-screen flex justify-center align-middle items-center'>
    <div className='bg-slate-400 border-2 border-slate-700 flex flex-col  text-center ml-10 mt-10 p-10 text-xl rounded-lg text-white h-fit' >
    <h1>Counter Value : {counterValue}</h1>
    <button className='bg-slate-900 text-white border-2 border-slate-200 m-5 rounded-lg p-2 active:bg-slate-800'  onClick={addValue}>Increase Value</button>
    <button className='bg-slate-900 text-white border-2 border-slate-200 m-5 rounded-lg p-2 active:bg-slate-800' onClick={minusValue}>Decrease Value</button>
    </div>

    </div>
    
    </>
  )
}

export default App
