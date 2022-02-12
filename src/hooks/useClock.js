import { useEffect, useRef, useState } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());
  const id = useRef(null);

  useEffect(() => {
    const step = () => {
      setTime((prevTime) => {
        const newTime = new Date();
        if (prevTime.getSeconds() !== newTime.getSeconds()) {
          return newTime;
        }
        return prevTime;
      });
      id.current = requestAnimationFrame(step);
    };
    id.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(id.current);
    };
  }, []);
  return time;
}

export default useClock;
