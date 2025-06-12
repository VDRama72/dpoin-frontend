// File: src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">D'PoIN</Link>
      <div className="space-x-4">
        {!token && <Link to="/login" className="hover:underline">Login</Link>}
        {token && <Link to="/dashboard" className="hover:underline">Dashboard</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
