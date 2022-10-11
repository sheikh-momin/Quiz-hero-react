import React from 'react';
import { useLoaderData } from 'react-router';
import CustomQuiz from '../CustomQuiz/CustomQuiz';

const Quiz = () => {
  const quiz =useLoaderData()

  return (
    <div className=''>
      {
        quiz.data.questions.map(ans => <CustomQuiz topicName={quiz.data.name} key={ans.id} ans={ans}></CustomQuiz>)
      }
    </div>
  );
};

export default Quiz;