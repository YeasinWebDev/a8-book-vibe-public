import { TiLocationOutline } from "react-icons/ti";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

function CommonData({ data }) {
  return (
    <div className='flex items-center flex-col md:flex-row gap-5 border-2 mb-5 md:px-2 py-10 rounded-xl'>
      <div className="img w-40 h-40">
        <img src={data.image} alt="image" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl">{data.bookName}</h1>
        <p className="my-2">By {data.author}</p>
        <div>
          <div className="tag flex items-center gap-2 flex-col md:flex-row">
            <h1 className="font-semibold text-xl">Tag:</h1>
            {data.tags.map(tag => (
              <p className='text-[#23BE0A] bg-green-100 p-2 rounded-lg font-bold'>{tag}</p>
            ))}
            <h1 className="flex items-center gap-2 text-xl"><TiLocationOutline /> Year of Publishing: {data.yearOfPublishing}</h1>
          </div>
        </div>
        <div className="border-b-2 pb-2 border-dashed flex gap-5 mt-4 flex-col md:flex-row items-center">
          <h1 className="flex  items-center gap-3 text-xl "><BsPeople /> Publisher: <span className="font-semibold">{data.publisher}</span></h1>

          <h1 className="flex  items-center gap-3 text-xl "><MdOutlineContactPage /> page: <span>{data.totalPages}</span></h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-3 mt-5  items-center px-auto md:px-0">
          <div className="bg-[#e0eeff] w-fit p-2 rounded-2xl">
            <h1 className="text-[#328EFF] whitespace-nowrap">Category : {data.category}</h1>
          </div>
          <div className="bg-[#fff3e0] w-fit p-2 rounded-2xl">
            <h1 className="text-[#FFAC33]">Ration : {data.rating}</h1>
          </div>
          <div className="bg-[#23BE0A] w-fit p-2 rounded-2xl">
            <Link to={`/details/${data.id}`}>
              <h1 className="text-white">View Details</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonData