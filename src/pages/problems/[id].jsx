import { useRef } from 'react';
import { useRouter } from 'next/router';
import { PageHeader } from 'antd';

import CodeEditor from 'src/components/atoms/CodeEditor';
import ProblemContent from 'src/components/atoms/ProblemContent';
import ProblemFooter from 'src/components/molecules/ProblemFooter';
import ProblemResizer from 'src/components/molecules/ProblemResizer';

import styles from 'src/styles/pages/problem/styles.module.css';

function Problem() {
  const router = useRouter();
  const problemContentContainerRef = useRef(null);

  const adjustSize = (contentWidth) => {
    problemContentContainerRef.current.style.width = `${contentWidth}px`;
  };

  return (
    <div className={styles.wrapper}>
      <PageHeader onBack={() => router.back()} title='다리 건너기' subTitle='실버3' />
      <main className={styles.main}>
        <div className={styles.problemContent} ref={problemContentContainerRef}>
          <ProblemContent />
        </div>
        <div>
          <ProblemResizer onResize={adjustSize} />
        </div>
        <div className={styles.codeEditor}>
          <CodeEditor />
        </div>
      </main>
      <ProblemFooter />
    </div>
  );
}

export default Problem;
