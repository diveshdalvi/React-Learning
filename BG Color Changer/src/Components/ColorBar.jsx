import React, { useState } from 'react'
const ColorBar = () => {
    const [color , setColor] = useState("white")
  return (
    <div className='flex lg:justify-end h-screen flex-col items-center w-ful sm:justify-start'
    style={{backgroundColor: color}}>
        <div className='bg-slate-900 flex flex-row justify-center  rounded-lg flex-wrap mb-7 shadow-2xl shadow-slate-700'>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-red-700 text-white active:bg-red-800' onClick={() => setColor("red") }>Red</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-green-700 text-white active:bg-green-800'onClick={() => setColor("green") }>Green</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-blue-700 text-white active:bg-blue-800'onClick={() => setColor("blue") }>Blue</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-lime-700 text-white active:bg-lime-900'onClick={() => setColor("#4d7c0f") }>Olive</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-slate-700 text-white active:bg-slate-800'onClick={() => setColor("#334155") }>Grey</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-yellow-500 text-white active:bg-yellow-600'onClick={() => setColor("#eab308") }>Yellow</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-pink-300 text-white active:bg-pink-400'onClick={() => setColor("#f9a8d4") }>Pink</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-purple-700 text-white active:bg-purple-800'onClick={() => setColor("#7e22ce") }>Purple</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg  text-center bg-purple-400 text-white active:bg-purple-500'onClick={() => setColor("#c084fc") }>Lavender</button>
      <button className=' p-2 m-3 border-2 border-black rounded-lg text-center bg-white text-black active:bg-slate-200'onClick={() => setColor("white") }>White</button>
      <button className=' p-2 m-3 border-2 border-white rounded-lg  text-center bg-black text-white 
      active:bg-gray-950'onClick={() => setColor("black") }>Black</button>
    </div>
    </div> 
  )
}

export default ColorBar;