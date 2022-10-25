import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';

function Editor(props) {

    const { language, displayName, value, onUpdate } = props;

    const onChange = React.useCallback((value, viewUpdate) => {
        onUpdate(value);
    }, [onUpdate]);

    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {displayName}
            </div>
            <CodeMirror
                className='code-mirror-wrapper'
                value={value}
                height="100%"
                extensions={language}
                theme={dracula}
                onChange={onChange}
            />
        </div>
    );
}
export default Editor;