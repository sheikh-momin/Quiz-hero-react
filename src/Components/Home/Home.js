import React from 'react';
import { useLoaderData } from 'react-router';
import About from '../About/About';
import AllQuiz from '../AllQuiz/AllQuiz';

const Home = () => {
  const homes =useLoaderData()
  const allData =homes.data
  console.log(homes.data)
  return (
    <div className='container'>
      <About></About>
      <div className='row row-cols-4'>
        {
          allData.map(data => <AllQuiz key={allData.id} data={data}></AllQuiz>)
        }

      </div>
    </div>
  );
};

export default Home;