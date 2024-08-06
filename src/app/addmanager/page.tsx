'use client'
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [points, setPoints] = useState<number | undefined>(undefined);
  const [logo, setLogo] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!logo) {
      setMessage('Please select a logo file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('symbol', symbol);
    formData.append('points', points ? points.toString() : '');
    formData.append('logo', logo);

    try {
      const response = await axios.post(`${apiUrl}/api/manager/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message || 'Manager added successfully!');
    } catch (error) {
      setMessage('Error uploading data.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-24 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Manager</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbol">
            Symbol:
          </label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="points">
            Points:
          </label>
          <input
            type="number"
            id="points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
            Logo:
          </label>
          <input
            type="file"
            id="logo"
            onChange={handleFileChange}
            required
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Country
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default UploadForm;
