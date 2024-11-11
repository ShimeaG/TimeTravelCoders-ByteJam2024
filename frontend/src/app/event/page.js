'use client'
import { useEffect, useState } from 'react';
import Card from "@/app/event/card";

export default function Event() {
  // Define state to store events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(window.location.search);
        const year = urlParams.get('year');
        // Use correct query parameter for year
        const response = await fetch('http://127.0.0.1:5000/getEvents?year=' + year);
        const result = await response.json();

        // Update the state with fetched events
        setEvents(result);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this runs once on component mount

  return (
    <>
      <div className={"flex items-center justify-center h-screen w-full flex-col flex-wrap"}>
        {/* Map over the events array to render each Card with dynamic data */}
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className={"w-full flex justify-center"}>
              <Card
                name={event.event_name}
                desc={event.event_desc}
                date={event.event_date}
                img={event.event_img}
              />
            </div>
          ))
        ) : (
          <p>No events found for this year.</p>
        )}
      </div>
    </>
  );
}
