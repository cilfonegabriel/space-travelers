import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApiRockets } from './Redux/rockets/Rocket';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';
import './App.css';
import planet from './Img/planet.png';

function App() {
  const dispatch = useDispatch();
  dispatch(getApiRockets());

  return (
    <div className="root">
      <nav className="nav" id="flex">
        <img src={planet} className="d-inline-block" width="60" height="60" alt="React Bootstrap logo" />
        <h1 className="navtitle">Space Travelers Hub</h1>
        <ul className="navlist" id="flex">
          <li className="listItem"><Link className="listLink1" to="/">Rockets</Link></li>
          <li className="listItem"><Link className="listLink2" to="/Pages/Missions">Missions</Link></li>
          <li className="listItem"><Link className="listLink2" to="/Pages/MyProfile">My profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Pages/Missions" element={<Missions />} />
        <Route path="/Pages/Missions" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
