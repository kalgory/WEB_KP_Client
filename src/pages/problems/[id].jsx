import { useRouter } from 'next/router';
import { Layout, PageHeader, Row, Col, Button } from 'antd';

import CodeEditor from 'src/components/atoms/CodeEditor';
import ProblemContent from 'src/components/atoms/ProblemContent';

import styles from 'src/styles/pages/problem/styles.module.css';

const { Footer } = Layout;

function Problem() {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <PageHeader onBack={() => router.back()} title='다리 건너기' subTitle='실버3' />
      <Row className={styles.main}>
        <Col span={8}>
          <ProblemContent />
        </Col>
        <Col span={16}>
          <CodeEditor />
        </Col>
      </Row>
      <Footer>
        <Row justify='end'>
          <Col>
            <Button>실행</Button>
            <Button type='primary'>제출</Button>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default Problem;
