import React, { useState } from 'react'

function ListedBook() {
  const [nav, setNav] = useState(true)
  const handelNav =() =>{
    setNav(!nav)
  }
  return (
    <div className='px-10'>
      <h1 className='font-bold md:text-2xl text-xl flex items-center justify-center bg-[#f3f3f3] py-5 mt-8 rounded-xl'>Books</h1>

    
        <div className=" flex gap-5 mt-5">
          <a rel="noopener noreferrer" onClick={handelNav} href="#" className={`${nav? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600" : "px-5 py-2"}`}>Read Books</a>
          <a rel="noopener noreferrer" onClick={handelNav} href="#" className={`${!nav ? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600":"px-5 py-2"}`}>Wishlist Books</a>
        </div>
      
        <div>
          {
            nav && <div>
              
            </div>
          }
        </div>
    </div>
  )
}

export default ListedBook