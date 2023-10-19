import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/** react router */
const router = createBrowserRouter([
{
  path : '/',
  element : <Main></Main>
},
{
  path : '/Quiz',
  element : <Quiz></Quiz>
},
{
  path : '/Result',
  element : <Result></Result>
},
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>  
  );
}

export default App;
