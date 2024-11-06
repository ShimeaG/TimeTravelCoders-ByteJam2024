'use client';

import { useRouter } from 'next/navigation';

const Timeline = ({ events }) => {
  const router = useRouter();
  const { year } = router.query || {};

  if (events) {
    events.sort((a, b) => a.year - b.year);
  }

  return (
    <>
      {/* Background Image with Transition */}
      <div
        className={`fixed inset-0 w-full h-full transition-opacity duration-500 bg-cover bg-center bg-no-repeat ${
          year ? 'opacity-50' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
      />

      {/* Timeline Navigation */}
      <nav className="shadow-inner shadow-gray-600 fixed bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg mx-auto bg-glass backdrop-blur-md border-b border-gray-200 rounded-full py-12 px-8 overflow-hidden z-10">
        {/* Glass Reflection */}
        <div className="absolute top-0 mt-[0px] w-[99%] left-1/2 transform -translate-x-1/2 h-1/4 bg-glassReflection opacity-20 rounded-2xl z-15 rounded-b-xl" />

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Bar */}
          <div className="w-full bg-white p-[1px] rounded-full h-[1px] relative" />

          {/* Timeline Segments */}
          <div className="flex justify-between items-center relative w-full">
            {events && events.map((event, index) => (
              <div key={index} className="flex flex-col items-center relative mx-20">
                {/* Year Marker Line */}
                <div
                  className={`absolute w-[2px] h-4 bg-white ${
                    index % 2 === 0 
                      ? 'bottom-0 translate-y-4' 
                      : 'top-0 -translate-y-4'
                  }`}
                />

                {/* Year Label */}
                <div
                  className={`text-center absolute ${
                    index % 2 === 0 
                      ? 'top-6' 
                      : 'bottom-6'
                  }`}
                >
                  <p className="text-white">{event.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Timeline;