import CodeEditor from '@/components/atoms/CodeEditor';
import ProblemHeader from '@/components/molecules/ProblemHeader';
import ProblemContent from '@/components/atoms/ProblemContent';
import ProblemFooter from '@/components/molecules/ProblemFooter';
import ProblemResizer from '@/components/molecules/ProblemResizer';

import { Col, Full, Row } from '@/styles/common';

function Problem() {
  return (
    <Full backgroundColor='#1e1e1e'>
      <Col>
        <ProblemHeader title='다리 건너기' />
        <Row flexGrow={1}>
          <ProblemContent />
          <ProblemResizer />
          <CodeEditor />
        </Row>
        <ProblemFooter />
      </Col>
    </Full>
  );
}

export default Problem;
