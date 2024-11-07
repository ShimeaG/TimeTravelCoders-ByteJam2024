"use client";

import { useState, useEffect } from "react";

export default function WelcomeMessage() {
  const [showFirstSpan, setShowFirstSpan] = useState(false);
  const [showSecondSpan, setShowSecondSpan] = useState(false);
  const [showArrow, setShowArrow] = useState(false); // New state for arrow visibility

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstSpan(true), 500);
    const timer2 = setTimeout(() => setShowSecondSpan(true), 2000);
    const timer3 = setTimeout(() => setShowArrow(true), 4000); // Delay arrow's appearance

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3); // Cleanup the timer
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-[3rem] text-shadow-lg">
        <span
          className={`[text-shadow:_2px_2px_2px_rgb(0_0_0_/_60%)] transform transition-all duration-[1s] ${
            showFirstSpan
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          } bg-gradient-to-r from-transparent via-bgBlurColor to-transparent bg-clip-text text-shadow-lg`}
        >
          Welcome to the past,
        </span>
        <span
          className={`[text-shadow:_2px_2px_2px_rgb(0_0_0_/_60%)] transform transition-all duration-[1s] ${
            showSecondSpan
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          } bg-gradient-to-r from-transparent via-bgBlurColor to-transparent bg-clip-text text-shadow-lg`}
        >
          <span> your new future.</span>
        </span>
      </h1>

      {/* Arrow and Text Section */}
      <div id="welcome" className={`bottom-32 position absolute flex flex-col items-center transition-opacity duration-1000 ${showArrow ? "opacity-100" : "opacity-0"} `}>
        <div className="flex flex-col items-center text-white">
          <p className="mb-4 text-2xl [text-shadow:_2px_2px_2px_rgb(0_0_0_/_60%)]">Click here to explore history</p>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                className={"shadow-2xl"}
                strokeWidth={2}
                d="M5 15l7 7 7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
