import React from 'react';
import './header.css';


function Header() {
  const Title = 'Choose a Working';
  return (
    <div className="header">
      <div className="header_title">
        {Title}
      </div>
    </div>
  );
}

export default Header;