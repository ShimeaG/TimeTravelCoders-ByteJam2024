'use client'
import { useState } from 'react';

const AdminYearForm = () => {
  const [yearId, setYearId] = useState('');
  const [eventYear, setEventYear] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ yearId, eventYear }),
      });

      if (!response.ok) {
        throw new Error('Error submitting form');
      }

      const data = await response.json();
      setYearId(data.yearId);
      setEventYear(data.eventYear);
      setMessage('Form submitted successfully');
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl p-6">
      <div className="mb-4">
        <label htmlFor="yearId" className="block text-gray-800 font-bold mb-2">
          Year Id:
        </label>
        <input
          type="number"
          id="yearId"
          value={yearId}
          onChange={(e) => setYearId(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventYear" className="block text-gray-800 font-bold mb-2">
          Event Year:
        </label>
        <input
          type="number"
          id="eventYear"
          value={eventYear}
          onChange={(e) => setEventYear(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      {message && (
        <p
          className={`mt-4 text-sm ${
            message.includes('Error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default AdminYearForm;