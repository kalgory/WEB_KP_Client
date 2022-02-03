import { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [value, setValue] = useState('');
  return (
    <Editor
      theme='vs-dark'
      defaultLanguage='javascript'
      value={value}
      onChange={(newValue) => setValue(newValue)}
      options={{ fontSize: 16, tabSize: 2 }}
    />
  );
}

export default CodeEditor;
