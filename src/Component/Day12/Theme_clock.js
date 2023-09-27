import React, { useState, useEffect } from 'react';
import './Theme.css';

export default function ClockTheme() {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getFormattedTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  const getFormattedDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December',
    ];

    const day = days[time.getDay()];
    const month = months[time.getMonth()];
    const date = time.getDate();

    return `${day}, ${month} ${date}`;
  };

  const clockStyle = {
    transform: `translate(-50%, -100%) rotate(${(time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30}deg)`,
  };

  return (
    <div className={`clock-theme ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <div className="clock-container">
        <div className="clock">
          <div className="needle hour" style={clockStyle}></div>
          <div className="needle minute" style={clockStyle}></div>
          <div className="needle second" style={clockStyle}></div>
          <div className="center-point"></div>
        </div>
        <div className="time">{getFormattedTime()}</div>
        <div className="date">{getFormattedDate()}</div>
      </div>
    </div>
  );
}
