import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const ToastEditor = () => (
  <Editor
    initialValue="hello react editor world!"
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
);

export default ToastEditor;
