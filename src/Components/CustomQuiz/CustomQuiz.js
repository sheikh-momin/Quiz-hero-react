import React from 'react';

const CustomQuiz = ({ans}) => {
  const { options, question }=ans
  console.log(ans)
  return (
    <div className='container'>
      <div className='border p-3 m-5 rounded'>
        <div className='text-danger'>
          <h2>Question: {question}</h2>
        </div>
        <div className='d-flex justify-content-center align-center'>
          <input type="radio" name="radio-3" className="radio radio-secondary d-flex" /><p className='mx-4'>{options[0]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[1]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[2]}</p>
          <input type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomQuiz;