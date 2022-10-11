import React from 'react';
import { useLoaderData } from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const data = useLoaderData()
  const allData = data.data
  const quizNumber = allData.map(data => data)
  console.log(allData)
  return (
    <div>
      <h1 className='text-center text-danger'>Quiz Chart</h1>
      <div className='container d-flex justify-content-center'>
        
        <LineChart className='bg-info  rounded' width={500} height={400} data={quizNumber}>
          <Line type="monotone" dataKey="id" stroke="#8884d8"></Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>

      </div>
    </div>
  );
};

export default Statistics;