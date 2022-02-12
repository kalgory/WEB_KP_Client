import useClock from 'src/hooks/useClock';

import { formatHHMMSS } from 'src/utils/moment';

import { Label } from './styles';

function Timer() {
  const now = useClock();
  return <Label>{formatHHMMSS(now)}</Label>;
}

export default Timer;
