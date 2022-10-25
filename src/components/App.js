import { useState, useEffect } from 'react';
import Editor from './Editor';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <style>${cssCode}</style>
            </head>
            <body>
            ${htmlCode}
            <script>${jsCode}</script> 
            </body>
            </html>
        `);
    }, 1000);

    return () => clearTimeout(timeout);

  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      {/* upper section */}
      <div className="pane top-pane">
        <Editor
          language={html()}
          displayName="HTML"
          value={htmlCode}
          onUpdate={setHtmlCode} />
        <Editor
          language={css()}
          displayName="CSS"
          value={cssCode}
          onUpdate={setCssCode} />
        <Editor
          language={javascript()}
          displayName="JS"
          value={jsCode}
          onUpdate={setJsCode} />
      </div>

      {/* lower section */}
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;