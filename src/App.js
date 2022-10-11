import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Main from './Components/Main/Main';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/home', 
          element:<Home></Home>,
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/topics', element:<Topics></Topics>
        },
        {
          path: '/statistics', element: <Statistics></Statistics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/blog', element:<Blog></Blog>
        },
        {
          path: '/quiz/:quizId', element:<Quiz></Quiz>,
          loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
