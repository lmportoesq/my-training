import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
//import Counter from '../counter/Counter';
//import About from '../about/About';

function Router(){
   return(
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
       </BrowserRouter>
   )
}
export default Router;

//<Route path='/counter' element={<Counter />} />
//<Route path='/about' element={<About />} />