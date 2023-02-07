import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../Img/planet.png';

function Nav() {
  return (
    <nav>
      <img className="nav-logo" src={planet} alt="logo" />
      <h1 className="nav-h1">Space Travelers Hub</h1>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink to="/">
            Rockets
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/missions" />
          Missions
        </li>
        <li className="nav-li">
          <NavLink to="/myProfile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
