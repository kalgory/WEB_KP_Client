import { useRouter } from 'next/router';
import { PageHeader } from 'antd';

import CodeEditor from 'src/components/atoms/CodeEditor';
import ProblemContent from 'src/components/atoms/ProblemContent';
import ProblemResizer from 'src/components/molecules/ProblemResizer';

import styles from 'src/styles/pages/problem/styles.module.css';
import ProblemFooter from '../../components/molecules/ProblemFooter';

function Problem() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <PageHeader onBack={() => router.back()} title='다리 건너기' subTitle='실버3' />
      <main className={styles.main}>
        <div className={styles.problemContent}>
          <ProblemContent />
        </div>
        <div>
          <ProblemResizer />
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
