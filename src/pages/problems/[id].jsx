import CodeEditor from '@/components/atoms/CodeEditor';
import ProblemHeader from '@/components/molecules/ProblemHeader';
import ProblemContent from '@/components/atoms/ProblemContent';
import ProblemFooter from '@/components/molecules/ProblemFooter';
import ProblemResizer from '@/components/molecules/ProblemResizer';

import { Col, FixedScreen, Row } from '@/styles/common';

function Problem() {
  return (
    <FixedScreen backgroundColor='#1e1e1e'>
      <Col>
        <ProblemHeader title='다리 건너기' />
        <Row flexGrow={1}>
          <ProblemContent />
          <ProblemResizer />
          <CodeEditor />
        </Row>
        <ProblemFooter />
      </Col>
    </FixedScreen>
  );
}

export default Problem;
