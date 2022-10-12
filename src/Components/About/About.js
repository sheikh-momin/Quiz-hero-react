import React from 'react';
import img from './quiz2.jpg';

const About = () => {
  return (
    <div className='d-flex  bg-info rounded-3 p-5 mb-5'>
      <div>
        <img className='w-100 rounded me-5' src={img} alt="" />
      </div>
      <div className='mt-5'>
        <h5 className='align-center mt-5 '>Online questionaires: start for free, get high completion rates & thoughtful responses. Create beautiful surveys with Typeform for free. Easy-to-use online survey creator. 3rd Party Integrations. Forms. Questionnaires. Interactive Experience. Beautiful UX. No Coding Necessary. Polls. Easy To Use.</h5>
      </div>
    </div>
  );
};

export default About;