import './index.css'
function App() {
  return (
    <>
   
      <div className=' bg-slate-900 h-screen w-screen flex flex-col'>
      <h1 className=' text-white text-5xl p-8 justify-center'>Password Generator</h1>
      <div className='flex  bg-slate-700 border-white border-2 p-6 justify-center flex-col'>
        <div>
        <input type="text" className=" h-8 text-orange-600 text-center" />
          <button className='text-white bg-orange-600 p-0.5 border-white border-2 rounded-lg ml-4 active:bg-orange-700'>Generate</button>
        </div>
          <div>
          <input type="range" min="8" max="20" value="8" class="slider" id="myRange"/>
          </div>
      </div>
      </div>
    </>
  )
}
export default App;