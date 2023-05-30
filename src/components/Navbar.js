import { Component } from "react";
import "./NavbarStyles.css";
import { link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-log">LIVEROOM STUDIOS</h1>
        <ul className="nav-menu">
          <li>
            <a>
              <i class="fa-solid fa-house-user"></i>HOME
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
