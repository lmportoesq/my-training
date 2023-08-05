import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/counterPage/CounterPage';
import AboutPage from './pages/AboutPage';
import TaskPage from './pages/TaskPage';

function Router(){
   return(
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/tasks' element={<TaskPage />} />
          </Routes>
       </BrowserRouter>
   )
}
export default Router;
