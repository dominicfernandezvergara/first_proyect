import React, { Fragment } from "react";
import "./header.css";
import Drawer from "./drawer";
import MenuDesktop from "./menu-desktop/menu-desktop";

function Header() {
  return (
    <Fragment>
      <div className="header-responsive-small">
        <img
          className="logo-image-header-small"
          src="https://mooala.com/wp-content/uploads/2019/10/Mooala_Logo-1.png"
          alt="logo"
        />
        <div className="container-menu-button">
          <Drawer />
        </div>
      </div>
      <div className="header-responsive-Large">
        <MenuDesktop />
      </div>
    </Fragment>
  );
}

export default Header;
