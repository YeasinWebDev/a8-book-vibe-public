import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer, Tooltip  } from 'recharts';
import { getDataFromLocalStorage } from '../utlies/LocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  const [datapai, setDataPai] = useState([]);

  useEffect(() => {
    const res = getDataFromLocalStorage('read');
    setDataPai(res.flat());
  }, []);

  if (datapai.length === 0) {
    return <div className='flex items-center justify-center md:text-4xl text-xl font-semibold h-[50vh]'>You Have to Read a Book First</div>;
  }
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <h1 className='text-xl mb-8 font-semibold'> The List of Book you Read and There Page Number</h1>
      <ResponsiveContainer width="90%" height={500}>
        <BarChart
          data={datapai}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {datapai.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

