import React from 'react';
import { useLoaderData } from 'react-router';
import CustomQuiz from '../CustomQuiz/CustomQuiz';

const Quiz = () => {
  const quiz =useLoaderData()

  return (
    <div className=''>
      <h1>Quiz in {quiz.data.name}</h1>
      
      {
        quiz.data.questions.map(ans =>  <CustomQuiz  key={ans.id} ans={ans}></CustomQuiz>)
      }
    </div>
  );
};

export default Quiz;