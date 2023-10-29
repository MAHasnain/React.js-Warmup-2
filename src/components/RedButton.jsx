import React, { useState } from 'react'

const RedButton = () => {
    const [color, setColor] = useState("")
    return (
        <>

            {/* <div style={{backgroundColor:color}}> */}
            <button onClick={() => {
                setColor("red")
            }}
                className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
            {/* </div> */}
        </>
    )
}

export default RedButton



{/* <button className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button> */}