import React, { useState } from 'react';
import { data } from '../data/data.js';

function Task5() {
    const [products, setProducts] = useState(data);

    const allProducts = () => {
        setProducts(data);
    }

    const expensiveProducts = () => {
        const expensive = data.filter((res) => res.unitPrice >= 100);
        setProducts(expensive);
    }

    const cheapProducts = () => {
        const cheap = data.filter((res) => res.unitPrice <= 10);
        setProducts(cheap);
    }

    const deleteProducts = (id) => {
        const deleteProduct = products.filter((res) => res.id !== id);
        setProducts(deleteProduct)
    }

    const criticalStock = () => {
        const critical = data.filter((res) => res.unitsInStock <= 10);
        setProducts(critical);
    }

    return (
        <div className='w-screen'>
            <div className='bg-gray-500 p-2 font-bold text-white text-center sticky top-0'>
                <button className='mx-4 hover:text-green-400 duration-200' onClick={allProducts}>All</button>
                <button className='mx-4 hover:text-green-400 duration-200' onClick={expensiveProducts}>Expensive</button>
                <button className='mx-4 hover:text-green-400 duration-200' onClick={cheapProducts}>Cheap</button>
                <button className='mx-4 hover:text-green-400 duration-200' onClick={criticalStock}>Critical</button>
            </div>
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
                        {products.map((res) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.unitPrice}</td>
                                <td>{res.unitsInStock}</td>
                                <td><button onClick={() => deleteProducts(res.id)} className='font-bold text-red-600 hover:text-red-300'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Task5;