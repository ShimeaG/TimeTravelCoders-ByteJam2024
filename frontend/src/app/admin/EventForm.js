'use client';
import { useState, useEffect } from 'react';

export default function AdminForm() {
    const [eventId, setEventId] = useState('');
    const [yearId, setYearId] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventImage, setEventImage] = useState('');
    const [years, setYears] = useState([]);  // State for storing fetched years
    const [message, setMessage] = useState('');

    // Fetch years when the component mounts
    useEffect(() => {
        async function fetchYears() {
            try {
                const response = await fetch('http://localhost:5000/years');
                const data = await response.json();
                setYears(data);  // Store fetched years in state
            } catch (error) {
                setMessage('Error fetching years');
            }
        }
        fetchYears();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/submitEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventId, yearId, eventTitle, eventDesc, eventImage }),
            });
            const data = await response.json();

            if (response.ok) {
                // Trigger confirmation message on success
                setMessage('Event added successfully!');
                // Reload the page after successful submission
                setTimeout(() => {
                    window.location.reload(); // Reload the page
                }, 1500);  // Delay reload to let the confirmation message display
            } else {
                setMessage(data.error || 'Error submitting form');
            }
        } catch (error) {
            setMessage('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-3 p-6 bg-glass backdrop-blur-lg border-b-2 border-gray-50 shadow-inner shadow-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-50">Event Form</h2>
            <div className="mb-4">
                <label htmlFor="yearId" className="block text-gray-50 font-medium mb-2">Year:</label>
                <select
                    id="yearId"
                    value={yearId}
                    onChange={(e) => setYearId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
                >
                    <option value="">Select a year</option>
                    {years.map((year) => (
                        <option key={year.year_id} value={year.event_year}>
                            {year.event_year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="eventTitle" className="block text-gray-50 font-medium mb-2">Event Title:</label>
                <input
                    type="text"
                    id="eventTitle"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="eventDesc" className="block text-gray-50 font-medium mb-2">Event Description:</label>
                <textarea
                    id="eventDesc"
                    value={eventDesc}
                    onChange={(e) => setEventDesc(e.target.value)}
                    className="max-h-82 min-h-32 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
                    rows="4"
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="eventImage" className="block text-gray-50 font-medium mb-2">Event Image URL:</label>
                <input
                    type="text"
                    id="eventImage"
                    value={eventImage}
                    onChange={(e) => setEventImage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
                Submit
            </button>
            {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        </form>
    );
}
