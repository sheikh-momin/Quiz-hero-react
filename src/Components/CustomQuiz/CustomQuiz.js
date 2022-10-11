import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './CustomQuiz.css'

const CustomQuiz = ({ans}) => {
  const { options, question, correctAnswer }=ans
  const [rightAns, setRightAns] =useState('')
  const showAnswer =()=>{
    setRightAns(correctAnswer)
  }

  return (
    <div className='container'>
      <div className='border p-3 m-5 rounded'>
        <button class='icon' onClick={showAnswer}><EyeIcon  ></EyeIcon></button>
        <div className='text-danger'>
          <h2>Question: {question}</h2>
        </div>
        
        <div className='d-flex justify-content-center align-center'>
          <input type="radio" name="radio-3" className="radio radio-secondary d-flex" /><p className='mx-4'>{options[0]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[1]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[2]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[3]}</p>
        </div>
        <div className='text-center mt-5 bg-secondary rounded p-3'>
            <h3>Answer: {rightAns}</h3> 
        </div>
      </div>
    </div>
  );
};

export default CustomQuiz;