import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css';

function Footer() {
   return (
      <div className="footer">
         <h3>Designed by Luis Miguel Porto Esquivel | all rigths reserved &copy</h3>
         <div className='icon-container'>
            <GitHubIcon color="primary" />
            <Link className="icons-text" to="https://github.com/lmportoesq">https://github.com/lmportoesq</Link>
         </div>
         <div className='icon-container'>
            <LinkedInIcon color="primary" />
            <Link className="icons-text" to="www.linkedin.com/in/lmportoesq">www.linkedin.com/in/lmportoesq</Link>
         </div>
         <div className='icon-container'>
            <EmailIcon color="primary" />
            <Link className="icons-text" to="https://gmail.com">lmportoesq@gmail.com</Link>
         </div>
      </div>
   )
}
export default Footer;
