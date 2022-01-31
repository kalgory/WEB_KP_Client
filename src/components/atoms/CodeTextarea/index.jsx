import { useState } from 'react';
import Editor from 'react-simple-code-editor';

function CodeTextarea() {
  const [value, setValue] = useState('');
  return (
    <Editor
      value={value}
      onValueChange={(code) => setValue(code)}
      highlight={(code) => code}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }}
    />
  );
}

export default CodeTextarea;
