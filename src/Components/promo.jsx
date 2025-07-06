import React, { useState, useEffect } from 'react';
import Button2 from './button2';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 21,
    minutes: 46,
    seconds: 29
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="w-full  text-white  flex justify-evenly  items-center pl-4 sm:pl-0 z-40 backdrop-blur-lg bg-black/30 ">
       <div className="flex items-center gap-2">
        <div className="flex items-center sm:gap-1">
          <span className="text-white  text-sm sm:text-2xl font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-red-500 text-sm sm:text-xl">:</span>
          <span className="text-white text-sm sm:text-2xl font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-red-500 text-sm sm:text-xl">:</span>
          <span className="text-white text-sm sm:text-2xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-red-500 text-sm sm:text-xl">:</span>
          <span className="text-white text-sm sm:text-2xl font-bold">{formatNumber(timeLeft.seconds)}</span>
        </div>
        
        
      </div>
      {/* Left side - Promo text */}
      <div className="flex items-center ">
        <div>
          <span className="text-orange-500 font-bold text-sm sm:text-md pl-2  sm:pl-0">Use Code "PAYDAY"</span>
          <p className="text-gray-300 text-sm hidden sm:block">Premium Questions, Company Set and LLD comes with TUF+ now!</p>
        </div>
      </div>

      {/* Center - Countdown */}
     

      {/* Right side - CTA button */}
      
     <div className='pt-1  scale-70 sm:scale-90'> <Button2 text="Click Here"></Button2></div>
    </div>
  );
};

export default PromoBanner;