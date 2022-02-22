import { useEffect, useState } from 'react';

function useDelayedState(state, delay) {
  const [delayedState, setDelayedState] = useState(false);

  useEffect(() => {
    let timer;
    if (state && !delayedState) {
      setDelayedState(true);
    } else if (!state && delayedState) {
      timer = setTimeout(() => {
        setDelayedState(false);
      }, delay);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [state, delay, delayedState]);

  return delayedState;
}

export default useDelayedState;
