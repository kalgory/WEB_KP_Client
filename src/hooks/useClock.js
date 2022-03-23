import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';

function useClock({ format }) {
  const [time, setTime] = useState(dayjs());
  const id = useRef(null);

  useEffect(() => {
    const step = () => {
      const newTime = dayjs();
      setTime((prevTime) => (prevTime.second() === newTime.second() ? prevTime : newTime));
      id.current = requestAnimationFrame(step);
    };
    id.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id.current);
  }, []);

  return { formattedTime: time.format(format) };
}

export default useClock;
