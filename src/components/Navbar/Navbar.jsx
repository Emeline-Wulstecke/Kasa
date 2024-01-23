import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo de Kasa écrit en rouge avec une maison à la place du premier A" className="logo" />
      <ul>
        <li>
          <Link to="/" className="nav-active">Accueil</Link>
        </li>
        <li>
          <Link to="/About"> A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;