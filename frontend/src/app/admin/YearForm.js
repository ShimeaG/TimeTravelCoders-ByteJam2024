'use client';
import { useState } from 'react';

const AdminYearForm = () => {
  const [eventYear, setEventYear] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/yearSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventYear }),
      });

      if (!response.ok) {
        throw new Error('Error submitting form');
      }

      const data = await response.json();
      setEventYear('');
      setMessage('Form submitted successfully');
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-3 p-6 bg-glass backdrop-blur-lg border-b-2 border-gray-50 shadow-inner shadow-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-50">Add Event Year</h2>
      <div className="mb-4">
        <label htmlFor="eventYear" className="block text-gray-50 font-medium mb-2">Event Year:</label>
        <input
          type="number"
          id="eventYear"
          value={eventYear}
          onChange={(e) => setEventYear(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
      {message && <p className={`text-center mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
    </form>
  );
};

export default AdminYearForm;
