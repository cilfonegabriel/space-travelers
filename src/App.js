import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { getRocketsApi } from './Redux/rockets/Rocket';
import { getMissionsApi } from './Redux/missions/Mission';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfilepage';
import './App.css';
import planet from './Img/planeta.png';
import store from './Redux/configureStore';

function App() {
  useEffect(() => {
    store.dispatch(getRocketsApi());
    store.dispatch(getMissionsApi());
  }, []);

  return (

    <div className="root">
      <nav className="nav" id="flex">
        <div className="navleft" id="flex">
          <img src={planet} className="planet" width="60" height="60" alt="React Bootstrap logo" />
          <h1 className="navtitle">Space Travelers&apos; Hub</h1>
        </div>
        <ul className="navlist" id="flex">
          <li className="listItem"><Link className="listLinkOne" to="/">Rockets</Link></li>
          <div className="vert-div1" />
          <li className="listItem"><Link className="listLinkTwo" to="/Pages/Missions">Missions</Link></li>
          <div className="vert-div2" />
          <li className="listItem"><Link className="listLinkThree" to="/Pages/MyProfilepage">My profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Pages/Missions" element={<Missions />} />
        <Route path="/Pages/MyProfilepage" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
