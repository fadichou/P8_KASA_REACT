import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
    <div className="logo">
      <Link to="/">
          <img src="/images/LOGO.png" alt="Kasa logo" className="logo-img" />
          </Link>
    </div>
    <nav>
      <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          </ul>
    </nav>
  </div>
    </header>
  );
}

export default Header;