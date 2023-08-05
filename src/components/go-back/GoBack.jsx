import { Link } from 'react-router-dom';
import './goback.css';

function GoBack() {
    return (
        <div>
            <Link to="/" className="button button--verde button--absolute">
                <span className="button__texto">Go back</span>
                <i className="button__icono fas fa-arrow-right"></i>
            </Link>
        </div>
    )
}
export default GoBack;
