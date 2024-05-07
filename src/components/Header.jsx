// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1 className='logo'><img className='logo-picto' src="src/assets/img/logo-1.svg" alt="Logo" />CyberGames</h1>
        <input className='search-bar' type="search" placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;