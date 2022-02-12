import { useRef } from 'react';
// import { useRouter } from 'next/router';

import CodeEditor from 'src/components/atoms/CodeEditor';
import ProblemContent from 'src/components/atoms/ProblemContent';
import ProblemFooter from 'src/components/molecules/ProblemFooter';
import ProblemResizer from 'src/components/molecules/ProblemResizer';

function Problem() {
  // const router = useRouter();
  const problemContentContainerRef = useRef(null);

  const adjustSize = (contentWidth) => {
    problemContentContainerRef.current.style.width = `${contentWidth}px`;
  };

  return (
    <div>
      {/* <PageHeader onBack={() => router.back()} title='다리 건너기' subTitle='실버3' /> */}
      <main>
        <div ref={problemContentContainerRef}>
          <ProblemContent />
        </div>
        <div>
          <ProblemResizer onResize={adjustSize} />
        </div>
        <div>
          <CodeEditor />
        </div>
      </main>
      <ProblemFooter />
    </div>
  );
}

export default Problem;
