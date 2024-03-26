import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductSec from '../components/ProductSec'

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../public/Book.json')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])
  return (
    <div className='md:px-20 px-5 mt-10 w-full h-fit bg-white'>
      <Hero />
      <ProductSec data={data} />
    </div>
  )
}

export default Home