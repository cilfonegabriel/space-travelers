import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../Img/planet.png';

function Nav() {
  return (
    <nav>
      <img className="nav-logo" src={planet} alt="logo" />
      <h1 className="nav-h1">Space Travelers Hub</h1>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">
            Rockets
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/missions" />
          Missions
        </li>
        <li className="nav-li">
          <Link to="/myProfile">
            My Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
