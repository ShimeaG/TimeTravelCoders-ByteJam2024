'use client'
import { useState } from 'react';

export default function AdminForm() {
  const [yearId, setYearId] = useState('');
  const [eventYear, setEventYear] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  yearId, eventYear,}),
      });
      const data = await response.json();
      setYearId(data.yearId);
      setEventYear(data.eventYear);
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="yearId">Year Id:</label>
        <input type="number" id="yearId" value={yearId} onChange={(e) => setYearId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="eventYear">Event Year:</label>
        <input type="number" id="eventYear" value={eventYear} onChange={(e) => setEventYear(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}