import React from 'react';
import { useLoaderData } from 'react-router';
import AllQuiz from '../AllQuiz/AllQuiz';

const Home = () => {
  const homes =useLoaderData()
  const allData =homes.data
  console.log(homes.data)
  return (
    <div>
      <h1>This is home: {homes.data.length}</h1>
      {
        allData.map(data => <AllQuiz key={allData.id} data={data}></AllQuiz>)
      }
      
    </div>
  );
};

export default Home;