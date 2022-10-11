import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './CustomQuiz.css'

const CustomQuiz = ({ ans, topicName }) => {
  const { options, question, correctAnswer }=ans
  const [rightAns, setRightAns] =useState('')
  const showAnswer =()=>{
    
    setRightAns(correctAnswer)
  }




  const handleChange = event => {
    if (event.target.value === correctAnswer) {
      alert('Correct Answer')
    }
    else {
      alert('Wrong answer');
    }
  };

  return (
    <div className='container'>
      <div><h1>Quiz in {topicName}</h1></div>
      <div className='border p-3 m-5 rounded shadow'>
        <button class='icon' onClick={showAnswer}><EyeIcon  ></EyeIcon></button>
        <div className='text-danger'>
          <h2>Question: {question}</h2>
        </div>
        
        <div className='d-flex justify-content-center align-center'>
          <input onClick={handleChange} value={options[0]}  type="radio" name="radio-3" className="radio radio-secondary d-flex" /><p className='mx-4'>{options[0]}</p>
          <input onClick={handleChange}  type="radio" value={options[1]} name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[1]}</p>
          <input onClick={handleChange} value={options[2]}  type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[2]}</p>
          <input onClick={handleChange} value={options[3]}  type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[3]}</p>
        </div>
        <div className='text-center text-light mt-5 bg-secondary rounded p-3'>
            <h3>Answer: {rightAns}</h3> 
        </div>
      </div>
    </div>
  );
};

export default CustomQuiz;