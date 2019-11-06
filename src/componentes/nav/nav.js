import React from 'react';
import './nav.scss';


function Nav() {
  return (
    <div className="navigation-bar">
      <nav className="container-navs">
        <button className="nav-button active">
          Area of Focus
        </button>

        <button className="nav-button">
          Activity
        </button>

        <button className="nav-button">
          Intensity
        </button>

      </nav>
    </div>
  );
}

export default Nav;