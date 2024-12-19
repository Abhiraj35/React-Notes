import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, newColor] = useState("olive")

  return (
      <div className="h-screen w-full bg-black" style={{backgroundColor: color}}>
        <div className='px-2 h-10 bg-white left-1/2 bottom-0 absolute translate-x-[-50%] translate-y-[-50%] rounded-full flex justify-evenly align-center gap-4 duration-200'>

          <button onClick={() => newColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-500 my-1'>red</button>

          <button onClick={() => newColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 my-1'>Green</button>

          <button onClick={() => newColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 my-1'>Blue</button>

          <button onClick={() => newColor("violet")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-violet-500 my-1'>Voilet</button>

          <button onClick={() => newColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-purple-500 my-1'>Purple</button>

          <button onClick={() => newColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 my-1'>Orange</button>

          <button onClick={() => newColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 my-1'>Yellow</button>
        </div>
        <h1 className='text-white text-4xl text-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] font-bold'>{color.toUpperCase()}</h1>
      </div>
  )
}

export default App
