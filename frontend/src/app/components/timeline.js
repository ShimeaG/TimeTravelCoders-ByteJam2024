'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Timeline = () => {
  const router = useRouter();
  const { year } = router.query || {};
  const [rumble, setRumble] = useState(false);
  const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
  const [years, setYears] = useState([]); // Renamed to years

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/years');
      const result = await response.json();
      setYears(result); // Set the fetched data to the years state
    };

    fetchData();
  }, []);

  if (years) {
    years.sort((a, b) => a.event_year - b.event_year); // Sort by event_year
  }

  useEffect(() => {
    if (rumble) {
      document.body.classList.add('rumble');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('rumble');
      document.body.style.overflow = '';
    }
  }, [rumble]);

  return (
    <>
      {/* Background Image with Transition */}
      <div
        className={`fixed inset-0 w-full h-full transition-opacity duration-500 bg-cover bg-center bg-no-repeat ${
          year ? 'opacity-50' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
      />

      {/* Welcome Section */}
      <div
        id="welcome"
        className={`transition-opacity duration-1000 ${fadeOutWelcome ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Your welcome content goes here */}
      </div>

      {/* Timeline Navigation */}
      <nav
          className="z-30 shadow-inner shadow-gray-600 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg mx-auto bg-glass backdrop-blur-xl border-b border-gray-200 rounded-full py-12 px-8 overflow-hidden">
        {/* Glass Reflection */}
        <div
            className="absolute top-0 mt-[0px] w-[99%] left-1/2 transform -translate-x-1/2 h-1/4 bg-glassReflection backdrop-blur-3xl rounded-2xl rounded-b-xl"/>

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Bar */}
          <div className="w-full bg-white p-[1px] rounded-full h-[1px] relative"/>

          {/* Timeline Segments */}
          <div className="flex justify-between items-center relative w-full">
            {years &&
                years.map((yearData, index) => (
                    <div key={yearData.year_id} className="flex flex-col items-center relative mx-20">
                      {/* Year Marker Line */}
                      <div
                          className={`absolute w-[2px] h-4 bg-white ${
                              index % 2 === 0 ? 'bottom-0 translate-y-4' : 'top-0 -translate-y-4'
                          }`}
                      />
                      {/* Year Label with Clickable Button */}
                      <a
                          className={`text-center absolute ${
                              index % 2 === 0 ? 'top-6' : 'bottom-6'
                          } text-white`}

                          href={'/event?year=' + yearData.event_year}>
                        {yearData.event_year}
                      </a>
                    </div>
                ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Timeline;
