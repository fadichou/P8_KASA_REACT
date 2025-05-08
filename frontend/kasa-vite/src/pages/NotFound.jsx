import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;