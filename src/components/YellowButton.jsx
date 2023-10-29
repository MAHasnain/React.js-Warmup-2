import React, { useState } from 'react'

const YellowButton = () => {
    const [color, setColor] = useState("")
    return (
        <>
            <button onClick={() => {
                setColor("yellow")
            }}
                className='outline-none bg-yellow-400 px-2 py-1 rounded-full text-lg text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
        </>
    )
}

export default YellowButton