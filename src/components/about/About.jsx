import { Link } from 'react-router-dom';
import './about.css';

function About() {
   /*function handleClickBack() {
      window.location.href = '/';
   }*/

   return (
      <div className='about'>
         <div>
            <h1>About me</h1>
            <hr />
         </div>
         <div id="about__information">
            <img src="./images/about-photo.jpg" alt="logo" />
            <div id='about__information-text'>
               <h2>Luis Miguel Porto Esquivel</h2>
               <p>
                  I'm a professional in analysis and programming computers,
                  with more than 15 years of experience in the programming field.

                  Completely passionate about my profession, creative, easily adaptable to different works environments,
                  with the ability to lead, make decisions and work as a team.
               </p>
            </div>
            <div>
               <Link to="/" className="button button--absolute">
                  <span className="button__texto">Go back</span>
                  <i className="button__icono fas fa-arrow-right"></i>
               </Link>
            </div>
         </div>
      </div>
   )
}
export default About;

//<button className='button-back' onClick={handleClickBack}>Go back</button>