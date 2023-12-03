import React, { useState } from 'react';
import { data } from '../data/data.js';
import { Link, useParams } from 'react-router-dom';

function Task6details() {

    const { id } = useParams();
    const taskDetails = data.find(q => q.id == id)
    const details = [taskDetails];


    return (
        <div className='w-screen'>
            <div className='text-center font-bold text-lg mt-4'>Total: {details.length}</div>
            <div className='flex mx-auto justify-center w-full text-center'>
                <table className='w-4/5 mt-4'>
                    <thead className=''>
                        <tr className=''>
                            <th className=''>ID</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody className='p-4'>
                        <tr>
                            <td className='text-green-600 font-bold hover'>{taskDetails.id}</td>
                            <td>{taskDetails.name}</td>
                            <td>{taskDetails.unitPrice}</td>
                            <td>{taskDetails.unitsInStock}</td>
                            <td><button className='font-bold text-red-600 hover:text-red-300'><Link to='/task6'>Back Task6</Link></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Task6details;