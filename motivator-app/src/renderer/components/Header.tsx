import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Header() {
  return (
    <div className="header__container">
      <div className="header__title">
        <Link to="/">MotivatorApp</Link>
      </div>
      <div className="header__settings">
        <Link to="/settings">
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
