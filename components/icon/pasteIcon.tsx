import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { IconProps } from './icon';

const Pasteicon: React.FC<PropsWithChildren<IconProps>> = (props) => {

    const [ isCopied, setIsCopied ] = useState(false);
    
    const pasteIconUnitStyle = {
        'margin': '0.75rem',
    };
    const getPasteIconStyle = (child: ReactElement) => {
        return Object.assign({}, pasteIconUnitStyle, child.props.style);
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
                        { React.cloneElement(child, { style: getPasteIconStyle(child) }) }
                        <span className="rjui-icon-desc">
                            { child.props.name }
                        </span>
                    </div>;
            }) }
            <style jsx>{`
                .rjui-icon-paste {
                    display: flex;
                    flex-wrap: wrap;
                }
                .rjui-icon-paste-unit {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 0.375rem;
                    margin: 1rem;
                    width: 4rem;
                    height: calc(4rem + 5px);
                    padding-bottom: 5px;
                    position: relative;
                }
                .rjui-icon-paste-unit:hover {
                    background-color: unset;
                    color: #fff;
                    cursor: pointer;
                }
                .rjui-icon-desc {
                    font-size: 0.75rem;
                }
                .rjui-icon-paste-unit:hover:before {
                    position: absolute;
                    content: '${isCopied ? '已复制' : '点击复制'}';
                    padding: 0.1rem;
                    top: 50%;
                    left: 50%;
                    font-size: 12px;
                    color: #fff;
                    z-index: 1;
                    width: 100%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    background: #9494949e;
                }
            `}</style>
            <style global jsx>{`
                .rjui-icon-paste-unit:hover .rjui-icon {
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