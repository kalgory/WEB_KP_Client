import { Button } from 'antd';

import { Wrapper } from './styles';

function ProblemFooter() {
  return (
    <Wrapper>
      <Button>실행</Button>
      <Button type='primary'>제출</Button>
    </Wrapper>
  );
}

export default ProblemFooter;
