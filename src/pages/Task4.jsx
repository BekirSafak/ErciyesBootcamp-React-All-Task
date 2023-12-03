import React, { useState } from 'react'

function Task4() {

    const arrNumbers = [];

    for (let index = 0; index < 20; index++) {
        let numbers;
        do {
            numbers = Math.floor(Math.random() * 20);
        } while (arrNumbers.includes(numbers));

        arrNumbers.push(numbers);
    }

    console.log(arrNumbers);

    const [numberbox, setNumbers] = useState(arrNumbers)


    let removeNumber = () => {
        const numbs = Math.floor(Math.random() * numberbox.length)
        const newArrNumbers = [...numberbox];
        const removeNumbs = newArrNumbers.splice(numbs, 1)[0];
        setNumbers((newArr) => {
            return newArr.filter((number) => number !== removeNumbs)
        })
        console.log(removeNumbs)
        console.log(numberbox)
        if (numberbox.length <= 0) {
            let btn = document.querySelector('.btnDisabled')
            btn.setAttribute('disabled', true)
            alert('Silinebilir Sayı Kalmadı!')
        }
    }

    let removeAllNumber = () => {
        setNumbers([]);
        if (numberbox.length <= 0) {
            let btn = document.querySelector('.btnDisabled')
            btn.setAttribute('disabled', true)
            alert('Silinebilir Sayı Kalmadı!')
        }
    }



    return (
        <div className='font-bold w-full mx-auto p-4 flex justify-center text-center'>
            <div className=''>
                <div className='flex gap-4'>
                    <button className='btnDisabled bg-teal-500 rounded-full p-2' onClick={removeNumber}>Remove Random Numbers</button>
                    <button className='btnDisabled bg-teal-200 rounded-full p-2' onClick={removeAllNumber}>Remove All Numbers</button>
                </div>
                <ul>
                    {numberbox.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Task4