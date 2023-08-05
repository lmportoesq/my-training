import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css';

function Footer() {
   return (
      <div className="footer">
         <h3>Designed by Luis Miguel Porto Esquivel | all rigths reserved &copy</h3>
         <div className='footer__item'>
            <GitHubIcon color="primary" />
            <Link className="footer__text" to="https://github.com/lmportoesq">https://github.com/lmportoesq</Link>
         </div>
         <div className='footer__item'>
            <LinkedInIcon color="primary" />
            <Link className="footer__text" to="www.linkedin.com/in/lmportoesq">www.linkedin.com/in/lmportoesq</Link>
         </div>
         <div className='footer__item'>
            <EmailIcon color="primary" />
            <Link className="footer__text" to="https://gmail.com">lmportoesq@gmail.com</Link>
         </div>
      </div>
   )
}
export default Footer;
