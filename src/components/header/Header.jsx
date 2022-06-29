import {Link} from 'react-router-dom';
function Header(){
   return(
      <div className="header">
        <img  className='logo' src="./images/logo.png" alt="Logo"/>
        <h1>My training page</h1>
           <Link to="/about" href="../about/About" className='about'>About me</Link>
           <img className='photo' src="./images/photo.jpg" alt="Photo"/>
      </div>
   )
}
export default Header;
