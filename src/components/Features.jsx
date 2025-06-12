// File: src/components/Features.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/features`)
      .then(res => setFeatures(res.data))
      .catch(err => setError('Gagal memuat fitur'));
  }, []);

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Layanan Kami</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
