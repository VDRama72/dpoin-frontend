// File: src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard {role ? `(${role.toUpperCase()})` : ''}</h1>
      {/* Tambahkan komponen berdasarkan peran: CEO, Admin, CS, dll */}
    </div>
  );
};

export default Dashboard;
