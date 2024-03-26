import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductSec({ data }) {
    return (
        <div className=' mt-10'>

            <h1 className='font-semibold text-4xl mb-10 flex items-center justify-center'>Books</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:gap-8 gap-5 xl:grid-cols-3'>
                {
                    data?.map((item, index) => {
                        return (
                            <NavLink to={`/details/${item.id}`}>
                                <div className="card lg:w-96 w-80 shadow-xl" key={index}>
                                    <div className="px-10 pt-10 flex items-center justify-center">
                                        <img src={item.image} alt="Shoes" className="rounded-xl md:w-[18vw] md:h-[18vw] w-[35vw] h-[35vw]  object-cover" />
                                    </div>
                                    <div className="card-body  text-center">
                                        <div className='flex gap-2 items-center'>
                                            {item.tags.map(tag => (
                                                <p className='text-[#23BE0A] bg-green-100 p-3 rounded-lg font-bold'>{tag}</p>
                                            ))}
                                        </div>
                                        <h2 className="card-title text-2xl mt-2">{item.bookName}</h2>
                                        <p className='card-title text-sm my-2 pb-2 border-b-2 border-dashed'>by  {item.author}</p>

                                        <div className='flex items-center justify-between '>
                                            <h1 className='font-semibold text-xl'>{item.category}</h1>
                                            <h1 className='font-semibold text-xl'>Rating: {item.rating}</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductSec