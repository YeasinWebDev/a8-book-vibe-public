import React, { useEffect, useState } from 'react'

function Author() {
    const [authorData, setAuthorData] = useState([])

    useEffect(() => {
        fetch('./Authors.json')
            .then(res => res.json())
            .then(res => setAuthorData(res))
    }, [])

    return (
        <div>
            <h1 className='flex items-center justify-center text-3xl font-semibold mt-10'>Our Authors</h1>
            <div className=' md:px-20 px-2'>
                {
                    authorData.map(author => {
                        return (
                            <div key={author.id} className='flex flex-col md:flex-row items-center mt-10 gap-5 border-2 px-5 py-3 rounded-2xl'>
                                <img src={author.image} alt={author.name} className='w-40 h-40' />
                                <div>
                                    <h1 className='text-3xl font-semibold mt-10'>{author.name}</h1>
                                    <div className='flex gap-5 my-3 flex-col md:flex-row'>
                                        <p className='text-gray-600 text-xl'>BirthDate: <span className='font-semibold'>{author.birthDate}</span></p>
                                        <p className='text-gray-600 text-xl'>DeathDate:  <span className='font-semibold'>{author.deathDate}</span></p>
                                    </div>
                                    <p className='text-gray-600 text-xl mb-3'>BirthPlace:  <span className='font-semibold'>{author.birthPlace}</span></p>
                                    <div className="tag flex md:items-center md:gap-10 gap-2 pb-3 flex-col lg:flex-row">
                                        <h1 className='font-semibold text-xl'>FamousBooks :</h1>
                                        <div className='flex gap-2'>
                                            {author.famousBooks?.map(tag => (
                                                <p className='text-[#23BE0A] bg-green-100 p-3 rounded-lg font-bold'>{tag}</p>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Author