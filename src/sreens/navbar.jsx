import { NavLink } from "react-router-dom";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Menu from '../assets/menu.png';
import Close from '../assets/close.png';

function NavScreen() {
    function CloseMenu() {
        document.getElementById("navbar-mob").style.display = "none";
        document.getElementById("open-menu").style.display = "block";
        document.getElementById("close-menu").style.display = "none";
      }
      function OpenMenu() {
        document.getElementById("navbar-mob").style.display = "initial";
        document.getElementById("close-menu").style.display = "block";
        document.getElementById("open-menu").style.display = "none";
      }

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <h1>
          <NavLink to="/">AdeDevs</NavLink>
        </h1>
        <img id="open-menu" onClick={OpenMenu} src={Menu} alt="" />
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/works">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="navbar-mob">
        <ul>
          <li onClick={CloseMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={CloseMenu}>
            <NavLink to="/works">Portfolio</NavLink>
          </li>
          <li onClick={CloseMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        <img id="close-menu" onClick={CloseMenu} src={Close} alt="" />
        </ul>
      </nav>

      <div className="socials">
        <ul>
          <li>
            <a href="https://github.com/AdeDevs"><img src={Github} alt="github" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adedevs/"><img src={LinkedIn} alt="linkedin" /></a>
          </li>
          <li>
            <a href="https://twitter.com/adedevs"><img src={Twitter} alt="twitter" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavScreen;
