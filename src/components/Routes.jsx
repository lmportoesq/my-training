import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Counter from './Counter';
//import About from '../about/About';

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/counter' element={<Counter />} />
         </Routes>
      </BrowserRouter>
   )
}
export default Router;

//<Route path='/about' element={<About />} />