import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import jsonlint from 'jsonlint';
import { JSHINT } from 'jshint';

import 'codemirror/addon/lint/lint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/edit/closebrackets';
import './JsonEditor.css';

import data from './data';

window.JSHINT = JSHINT;
window.jsonlint = jsonlint;

const JsonEditor = () => {
  const [code, setCode] = React.useState('');

  React.useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    setCode(data);
  };

  return (
    <CodeMirror
      value={code}
      options={{
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'rubyblue',
        lineNumbers: true,
        lineWrapping: true,
        autoCloseBrackets: true,
        lineHeight: 10,
        lint: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setCode(value);
      }}
      onChange={(editor, data, value) => {
        console.log('Value ', value);
      }}
    />
  );
};
export default JsonEditor;
