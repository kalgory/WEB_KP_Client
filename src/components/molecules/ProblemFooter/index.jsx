import Button from '@/components/atoms/Button';

import { Wrapper } from './styles';

function ProblemFooter() {
  return (
    <Wrapper>
      <Button type='button'>실행</Button>
      <Button type='button'>제출</Button>
    </Wrapper>
  );
}

export default ProblemFooter;
