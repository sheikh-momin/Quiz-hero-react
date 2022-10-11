import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <div className='rounded p-3 m-5 bg-info '>
        <h1>What is useRef?</h1>
        <p className='text-light'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
      </div>
      <div className='rounded p-3 m-5 bg-info '>
        <h1>What is the purpose of react router?</h1>
        <p className='text-light'> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
      </div>
      <div className='rounded p-3 m-5 bg-info'>
        <h1>How does context api works?</h1>
        <p className='text-light'>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
      </div>
    </div>
  );
};

export default Blog;