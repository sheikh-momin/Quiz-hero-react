import React from 'react';
import { useLoaderData } from 'react-router';
import CustomQuiz from '../CustomQuiz/CustomQuiz';

const Quiz = () => {
  const quizes =useLoaderData()
  console.log(quizes)
  return (
    <div>
      {
        quizes.map(quiz =><CustomQuiz></CustomQuiz>)
      }
    </div>
  );
};

export default Quiz;