import { Button } from 'antd';
import { PauseOutlined } from '@ant-design/icons';

import { Wrapper, Divider } from './styles';

function ProblemResizer() {
  return (
    <Wrapper>
      <Divider />
      <Button icon={<PauseOutlined />} shape='circle' />
      <Divider />
    </Wrapper>
  );
}

export default ProblemResizer;
