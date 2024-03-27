import React, { useEffect, useState } from 'react'
import { getDataFromLocalStorage } from '../utlies/LocalStorage'
import CommonData from '../components/CommonData';
function ListedBook() {
  const [nav, setNav] = useState(true);

  const [readData, setReadData] = useState([]);
  const [wishData, setWishData] = useState([]);

  const handleSort = (name) => {
    if (name === 'Rating') {
      const sortedData = [...readData].sort((a, b) => b.rating - a.rating);
      const sortedDataWish = [...wishData].sort((a, b) => b.rating - a.rating);
      setReadData(sortedData);
      setWishData(sortedDataWish);
    }
    else if(name === 'pages'){
      const sortedData = [...readData].sort((a, b) => b.totalPages - a.totalPages);
      const sortedDataWish = [...wishData].sort((a, b) => b.totalPages - a.totalPages);
      setReadData(sortedData);
      setWishData(sortedDataWish);
    }
    else {
      const sortedData = [...readData].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      const sortedDataWish = [...wishData].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setReadData(sortedData);
      setWishData(sortedDataWish);
    }

  }


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
    <div className='md:px-10 px-5 min-h-screen bg-white'>
      <h1 className='font-bold md:text-2xl text-xl flex items-center justify-center bg-[#f3f3f3] py-5 mt-8 rounded-xl'>Books</h1>


      {/* dropdown */}
      <div className='flex items-center justify-center mt-5 mb-20'>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23be0a] border-none hover:bg-[#23be0a] text-white">Sort By</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#f3f3f3] text-black rounded-box w-52">
            <li onClick={() => handleSort("Rating")}><a> Rating </a></li>
            <li onClick={() => handleSort("pages")}><a> Number of pages </a></li>
            <li onClick={() => handleSort("year")}><a> Publisher year </a></li>
          </ul>
        </div>
      </div>

      <div className=" flex gap-5 mt-5">
        <a rel="noopener noreferrer" onClick={() => setNav(!nav)} href="#" className={`${nav ? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600" : "px-5 py-2"}`}>Read Books</a>
        <a rel="noopener noreferrer" onClick={() => setNav(!nav)} href="#" className={`${!nav ? "flex flex-shrink-0 px-5 py-2 border-b-4 dark:border-green-300 dark:text-green-600" : "px-5 py-2"}`}>Wishlist Books</a>
      </div>

      {
        nav && <div className='mt-10 md:px-8 px-2'>
          {
            readData.map((item, index) => (
              <CommonData key={item.id} data={item} />
            ))
          }
        </div>
      }

      {
        !nav && <div className='mt-10 md:px-8 px-2'>
          {
            wishData.map((item, index) => (
              <CommonData key={item.id} data={item} />
            ))
          }
        </div>
      }

    </div>
  )
}

export default ListedBook