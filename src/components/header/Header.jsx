import { Link } from 'react-router-dom';
import './header.css';

function Header() {
   return (
      <div className="header">
         <img className='header__logo' src="./images/logo.png" alt="Logo" />
         <h1>My training page</h1>
         <Link to="/about" href="../about/About" className='header__about'>About me</Link>
         <img className='header__photo' src="./images/photo.jpg" alt="logo" />
      </div>
   )
}
export default Header;
