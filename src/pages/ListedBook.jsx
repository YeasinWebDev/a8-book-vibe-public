import React, { useEffect, useState } from 'react'
import { getDataFromLocalStorage } from '../utlies/LocalStorage'

function ListedBook() {
  const [nav, setNav] = useState(true);

  const [readData, setReadData] = useState([]);
  const [wishData, setWishData] = useState([]);

  console.log(readData);
  console.log(wishData);


  useEffect(() => {
    try {
      const storedReadData = getDataFromLocalStorage('read');
      const storedWishData = getDataFromLocalStorage('wish');
      setWishData(storedWishData || [])
      setReadData(storedReadData || []);
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
  }, []);


  return (
    <div className='px-10'>
      <h1 className='font-bold md:text-2xl text-xl flex items-center justify-center bg-[#f3f3f3] py-5 mt-8 rounded-xl'>Books</h1>


      <div className=" flex gap-5 mt-5">
        <a rel="noopener noreferrer" onClick={() => setNav(!nav)} href="#" className={`${nav ? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600" : "px-5 py-2"}`}>Read Books</a>
        <a rel="noopener noreferrer" onClick={() => setNav(!nav)} href="#" className={`${!nav ? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600" : "px-5 py-2"}`}>Wishlist Books</a>
      </div>

      {
        nav && <div>
          {/* {
            readData && readData.map((item, index) => {
              <h1>rreadet: {readData.length}</h1>
            })
          } */}
        </div>
      }

    </div>
  )
}

export default ListedBook