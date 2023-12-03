import React from 'react'
import { Route, Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-green-200 font-bold w-full mx-auto p-4'>
            <nav className='flex justify-between content-center gap-4 text-lime-900'>
                <div className='h-56 grid grid-cols-3 gap-4 content-center'>
                    <div className='cursor-pointer'>LogoImg</div>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li><Link to={'/'}>1.useState-BoxSizeChange</Link></li>
                        <li><Link to={'/task2'}>2.useState-AddRandomNumbers</Link></li>
                        <li><Link to={'/task3'}>3.useState-ChangeBG</Link></li>
                        <li><Link to={'/task4'}>4.useState-RemoveRandomNumber</Link></li>
                        <li><Link to={'/task5'}>5.useState-ProductFetch</Link></li>
                        <li><Link to={'/task6'}>6.useState-ProdectDetails</Link></li>
                        <li><Link to={'/task7'}>7.useState&useReducer-FilterUsersPosts</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
