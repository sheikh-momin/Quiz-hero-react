import React from 'react';
import { useLoaderData } from 'react-router';
import CustomQuiz from '../CustomQuiz/CustomQuiz';

const Quiz = () => {
  const quiz =useLoaderData()
  console.log(quiz.data.questions)
  return (
    <div className=''>
      {
        quiz.data.questions.map(ans => <CustomQuiz key={ans.id} ans={ans}></CustomQuiz>)
      }
    </div>
  );
};

export default Quiz;