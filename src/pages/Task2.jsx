import React, { useState } from 'react'


function Task2() {
    const [randoms, setRandom] = useState([])

    const randomNumbers = () => {
        let numbers = Math.floor(Math.random() * 100)
        console.log(numbers)
        if (!randoms.includes(numbers)) {
            setRandom([...randoms, numbers]);
        }
    }

    return (
        <div className='font-bold w-full mx-auto p-4 flex justify-center text-center'>
            <div className=''>
                <button className='' onClick={randomNumbers}>Add Random Numbers</button>
                <ul>
                    {randoms.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Task2