import React, { useState, useEffect } from 'react';
import marked from 'marked';
import hljs from "highlight.js";
marked.setOptions({
    highlight: function(code: string) {
        return hljs.highlightAuto( code ).value;
    }
});
const Boxmd: React.FC<{code: string}> = ({ code }) => {
    const [ descText, setDescText ] = useState('');
    useEffect(() => {
        console.log(code);
        let willChangeDescText = code.trim().replace(/@/g, '`');
        willChangeDescText = marked(willChangeDescText);
        setDescText(willChangeDescText);
    }, [code]);
    return (
        <div dangerouslySetInnerHTML={{ __html: descText}}></div>
    );
};
export default Boxmd;