import { useState } from 'react'
// import YellowButton from './components/YellowButton'
// import RedButton from './components/RedButton'


const App = () => {
  const [color, setColor] = useState("black")
  return (
    <>
      <div className='flex flex-center justify-center w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <h1 className='p-5 text-white text-3xl'>Color Switcher</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            {/* <YellowButton />
          <RedButton /> */}

            <button onClick={() => { setColor("yellow") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => { setColor("red") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => { setColor("green") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => { setColor("gray") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "gray" }}>Gray</button>
            <button onClick={() => { setColor("purple") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => { setColor("pink") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => { setColor("olive") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={() => { setColor("lavender") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-black shadow-lg' style={{ backgroundColor: "lavender" }}>Lavender</button>
            <button onClick={() => { setColor("crimson") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "crimson" }}>Crimson</button>
            <button onClick={() => { setColor("orange") }}
              className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App