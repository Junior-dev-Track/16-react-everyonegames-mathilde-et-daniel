// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1 className='logo'>Games</h1>
        <input className='search-bar' type="search" placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;