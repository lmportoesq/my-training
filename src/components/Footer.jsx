import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
   return (
      <div className="footer">
         <h3>Designed by Luis Miguel Porto Esquivel | all rigths reserved &copy</h3>
         <div id='github'>
            <GitHubIcon color="primary" />
            <Link className="icons-text" to="https://github.com/lmportoesq">https://github.com/lmportoesq</Link>
         </div>
         <div id='linkedin'>
            <LinkedInIcon color="primary" />
            <Link className="icons-text" to="https://linkedin.com">https://linkedin.com</Link>
         </div>
         <div id='email'>
            <EmailIcon color="primary" />
            <Link className="icons-text" to="https://gmail.com">lmportoesq@gmail.com</Link>
         </div>
      </div>
   )
}
export default Footer;
