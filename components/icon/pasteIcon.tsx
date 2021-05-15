import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { IconProps } from './icon';

const Pasteicon: React.FC<PropsWithChildren<IconProps>> = (props) => {

    const [ isCopied, setIsCopied ] = useState(false);
    
    const pasteIconUnitStyle = {
        'margin': '0.75rem',
    };
    const clearText = (event: React.MouseEvent, child: ReactElement) => {
        event.stopPropagation();
        event.preventDefault();
        let codeStr = `<Icon `;
        Object.keys(child.props).forEach((propUnit) => {
            let attrStr = child.props[propUnit];
            if(typeof attrStr === 'object') {
                attrStr = `{${JSON.stringify(attrStr)}}`;
            } else {
                attrStr = `"${attrStr}"`;
            }
            codeStr += `${propUnit}=${attrStr} `;
        });
        codeStr += `/>`;
        copyHandler.call(this, codeStr);
    };
    const copyHandler = (codeStr: string) => {
        const el = document.createElement('div');
        document.body.appendChild(el);
        el.setAttribute('id', Math.random().toString(32).slice(2,7));
        const selection = window.getSelection();
        el.style.whiteSpace = 'pre';
        el.textContent = codeStr;
        const range = window.document.createRange();
        selection && selection.removeAllRanges();
        range.selectNode(el);
        selection && selection.addRange(range);
        try {
            window.document.execCommand('copy');
        } catch (e) {
            console.log(`%cIcon复制出错, code: ${codeStr}`, 'background: red; color: white');
        }
        selection && selection.removeAllRanges();
        document.body.removeChild(el);
        setIsCopied(true);
    };
    return (
        <div className="rjui-icon-paste">
            { React.Children.map(props.children, (child: React.ReactElement) => {
                return <div className="rjui-icon-paste-unit" 
                        onMouseLeave={ () => setIsCopied(false) }
                        onClick={ (e) => clearText(e, child)}>
                        { React.cloneElement(child, { style: pasteIconUnitStyle, className: 'rjui-icon-hover' }) }
                        <span className="rjui-icon-desc">
                            { child.props.name }
                        </span>
                    </div>;
            }) }
            <style jsx>{`
                .rjui-icon-paste {
                    display: flex;
                }
                .rjui-icon-paste-unit {
                    color: #314659;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 0.375rem;
                    margin: 0 1rem;
                    width: 5rem;
                    height: calc(5rem + 5px);
                    padding-bottom: 5px;
                    position: relative;
                }
                .rjui-icon-paste-unit:hover {
                    background-color: #1890ff;
                    color: #fff;
                    cursor: pointer;
                }
                .rjui-icon-desc {
                    font-size: 0.875rem;
                }
                .rjui-icon-paste-unit:hover:before {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    content: '${isCopied ? '已复制' : '点击复制'}';
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                    font-size: 12px;
                    background: #8c8c8c30;
                }
            `}</style>
            <style global jsx>{`
                .rjui-icon-paste-unit:hover .rjui-icon-hover {
                    transition: transform .3s ease-in-out;
                    transform: scale(1.4);
                }
                .rjui-icon-paste-unit:hover .rjui-icon-spin {
                    animation: unset;
                }
            `}</style>
        </div>
    );
};
export default Pasteicon;