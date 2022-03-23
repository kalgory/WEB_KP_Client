import useClock from '@/hooks/useClock';

import { Label } from './styles';

function Timer() {
  const { formattedTime } = useClock({ format: 'HH:mm:ss' });
  return <Label>{formattedTime}</Label>;
}

export default Timer;
