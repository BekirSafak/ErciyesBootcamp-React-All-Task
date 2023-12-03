import React, { useState } from 'react'

function Task3() {

    const [color, setColor] = useState(['green'])

    const colors = ['green', 'red', 'black', 'yellow', 'purple', 'orange', 'tomato', 'pink', 'gray', 'blue']

    const changeColors = () => {
        let colorsIndex = Math.floor(Math.random() * colors.length)
        if (colors[colorsIndex] != color) {
            setColor(colors[colorsIndex]);
        }
    }

    return (
        <div className='font-bold w-full mx-auto p-4 flex justify-center text-cente'>
            <div className='flex items-center justify-center' style={{
                width: '200px',
                height: '200px',
                marginTop: '20px',
                backgroundColor: `${color}`,
            }}>
                <button className='text-white' onClick={changeColors}>Change Size</button>
            </div>

        </div>
    )
}

export default Task3