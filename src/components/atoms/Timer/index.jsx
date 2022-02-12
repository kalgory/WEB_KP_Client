import useClock from 'src/hooks/useClock';
import { Label } from './styles';

function Timer() {
  const time = useClock();
  return <Label>{time.toLocaleTimeString('kr-KO', { hour12: true })}</Label>;
}

export default Timer;
