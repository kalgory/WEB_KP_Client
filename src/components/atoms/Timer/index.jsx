import useClock from '@/hooks/useClock';

import { formatHHMMSS } from '@/utils/moment';

import { Label } from './styles';

function Timer() {
  const now = useClock();
  return <Label>{formatHHMMSS(now)}</Label>;
}

export default Timer;
