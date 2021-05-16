import React, { useState } from 'react';
import Boxmd from './boxMd';
interface CodeProps {
    code: string,
    padStatus: number
}
const boxCode: React.FC<CodeProps> = ({ code, padStatus }) => {
    const [ codeShow, setCodeShow ] = useState(false);
    const codeFoldHandler = () => {
        setCodeShow(!codeShow);
    };
    const changeAsMdCode = (originCode: string): string => {
        let mdCode = originCode.trim();
        /** conversion func */
        mdCode = mdCode.replace(/(\r)+/g, '\n');
        mdCode = mdCode.replace(/(\t)/g, '\t');
        return '```\n' + mdCode + '\n```';
    };
    return (
        <>
            <div className="rjui-code-box-icon">
                <span className="rjui-code-icon" onClick={() => codeFoldHandler()}></span>
            </div>
            <div className="rjui-code-content">
                <Boxmd code={changeAsMdCode(code)}/>
            </div>
            <style jsx>{`
                .rjui-code-box-icon {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 0;
                    border-bottom: ${ codeShow ? '1px dashed #e9e9e9' : 0};
                }
                .rjui-code-icon {
                    width: 1rem;
                    height: 1rem;
                    background: url("/images/code_icon.png") no-repeat;
                    background-size: 100% 100%;
                    cursor: pointer;
                }
                .rjui-code-content {
                    height: ${ codeShow ? 'auto' : '0'};
                    padding: ${ codeShow ? padStatus : 0}rem;
                    overflow: hidden;
                }
            `}</style>
        </>
    );
};
export default boxCode;