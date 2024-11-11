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
        <div className={'fixed top-3 left-3 flex items-center'}>
          <a href={'/'} className="flex items-center hover:underline">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Present
          </a>
        </div>
        <div className={"pb-32 flex items-center justify-center pt-2 min-h-screen w-full flex-col flex-wrap"}>
          {/* Map over the events array to render each Card with dynamic data */}
          {events.length > 0 ? (
              events.map((event) => (
                  <div key={event.event_id} className={"w-full flex justify-center"}>
                    <Card
                        name={event.event_name}
                        desc={event.event_desc}
                        img={event.event_img}
                    />
                  </div>
              ))
          ) : (
              <div className={'text-center'}>
                <p>No events found for this year</p>
                <a className={'hover:underline'} href={'/admin'}>{'Add your own \u2192'}</a>
              </div>
          )}
        </div>
      </>
  );
}
