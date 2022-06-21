import {Link} from 'react-router-dom';
function Header(){
   return(
      <div className="header">
        <img src="./images/logo.png" alt="Logo"/>
        <h1>My training page</h1>
           <Link to="/about" href="../about/About" className='about'>About me</Link>
           <img className='photo' src="./images/logo.png" alt="Logo"/>
      </div>
   )
}
export default Header;
