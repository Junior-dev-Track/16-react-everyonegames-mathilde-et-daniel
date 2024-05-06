//import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>acceuil</li>
        </NavLink>
        <NavLink to="/About">
          <li>Liste de jeux</li>
        </NavLink>
        <NavLink to="/Dernier">
          <li>Les dernières sorties</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
