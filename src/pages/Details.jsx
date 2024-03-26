import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('../public/Book.json')
            .then(res => res.json())
            .then(res => setDetails(res.find(i => i.id === parseInt(id))))
    }, [id])

    return (
        <div className='flex md:flex-row flex-col items-center mx-[15%] justify-center mt-10' key={details.id}>
            <div className="img md:w-[200vh] flex items-center">
                <img src={details.image} alt="" />
            </div>

            <div>
                <h1 className='font-bold text-4xl'>{details.bookName}</h1>
                <h1 className='font-semibold text-lg py-2 border-b-2 border-dashed'>by {details.author}</h1>
                <h1 className='font-semibold text-lg py-2 border-b-2 border-dashed'>{details.category}</h1>
                <p className='py-5'>
                    <span className='font-semibold text-xl mr-2'>Review:</span>
                    <span className='font-semibold'>{details.review}</span>
                </p>
                <div className="tag flex items-center gap-10 border-b-2 border-dashed pb-3">
                    <h1 className='font-semibold text-xl'>Tag:</h1>
                    <div className='flex gap-2'>
                        {details.tags?.map(tag => (
                            <p className='text-[#23BE0A] bg-green-100 p-3 rounded-lg font-bold'>{tag}</p>
                        ))}

                    </div>
                </div>

                <div className='flex gap-8 mt-5'>
                    <div>
                        <h1 className='font-normal text-xl'>Number of Pages:</h1>
                        <h1 className='font-normal text-xl'>publisher:</h1>
                        <h1 className='font-normal text-xl'>Year of Publishing:</h1>
                        <h1 className='font-normal text-xl'>Rating:</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>{details.totalPages}</h1>
                        <h1 className='font-semibold text-xl'>{details.publisher}</h1>
                        <h1 className='font-semibold text-xl'>{details.yearOfPublishing}</h1>
                        <h1 className='font-semibold text-xl'>{details.rating}</h1>
                    </div>
                </div>

                <div className="btnsec flex gap-5 mt-5">
                    <button className='px-4 py-2 rounded-xl border-2'>Read</button>
                    <button className='px-4 py-2 rounded-xl bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Details