import React, { useState, useEffect } from "react";
function LiveTime() {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <p className="main-content">
      The current time is: {dateTime.time} and date: {dateTime.date}
    </p>
  );
}
export default LiveTime;
