import React, { useState } from 'react'

function Task1() {
    const [size, setSize] = useState({
        width: 200,
        height: 200,
    })

    const changeBoxSize = () => {
        setSize({
            width: size.width + 10,
            height: size.height + 10,
        })
    }

    return (
        <div className='font-bold w-full mx-auto p-4 flex justify-center text-center'>
            <div className='flex items-center justify-center' style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
                marginTop: '20px',
                backgroundColor: 'green',
            }}>
                <button className='text-white' onClick={changeBoxSize}>Change Size</button>
            </div>

        </div>
    )
}

export default Task1