"use client"
import { useState } from 'react';

export default function AdminForm() {
    const [eventId, setEventId] = useState('');
    const [yearId, setYearId] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventImage, setEventImage] = useState('');
      const [message, setMessage] = useState('');  // Initialize message state

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({eventId, yearId, eventTitle, eventDesc, eventImage}),
            });
            const data = await response.json();
            setEventId(data.eventID);
            setYearId(data.yearId);
            setEventTitle(data.eventTitle);
            setEventDesc(data.eventDesc);
            setEventImage(data.eventImage)
        } catch (error) {
            setMessage('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="eventId">Event Id:</label>
                <input type="number" id="eventId" value={eventId} onChange={(e) => setEventId(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="yearId">Year Id:</label>
                <input type="number" id="yearId" value={yearId} onChange={(e) => setYearId(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="eventTitle">Event Title:</label>
                <input type="textarea" id="eventTitle" value={eventTitle}
                       onChange={(e) => setEventTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="eventDesc">Event Description:</label>
                <input type="textarea" id="eventDesc" value={eventDesc} onChange={(e) => setEventDesc(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="eventImage">Event Image Url:</label>
                <input type="textarea" id="eventImage" value={eventImage}
                       onChange={(e) => setEventImage(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
}