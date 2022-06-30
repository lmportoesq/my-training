import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CounterPage from '../../pages/CounterPage';
import AboutPage from '../../pages/AboutPage';

function Router(){
   return(
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
       </BrowserRouter>
   )
}
export default Router;
