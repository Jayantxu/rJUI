import React from 'react';
// # https://webpack.js.org/guides/dependency-management/ & @types/webpack-env
const iconfiles = require.context("assets/svg/", true, /\.svg$/);
iconfiles.keys().forEach(iconfiles);

export interface IconProps {
    className: string
    name: string
    size: string
    rotate: number
    spin: boolean
    style: React.CSSProperties
    width: string | number,
    height: string | number,
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <span role="img" aria-label={props.name} 
            className={`rjui-icon ${props.className} ${props.spin ? 'rjui-icon-spin' : ''}`}
            style={props.style}
        >
            <svg width={props.width ? props.width : "1em"} 
                height={props.height ? props.height : "1em"} 
                fill="currentColor"
                style={{ transform: `rotate(${props.rotate}deg)` }}
                >
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
            <style jsx>{`
                .rjui-icon {
                    font-size: 36px;
                    margin: 12px 0 8px;
                    color: inherit;
                    display: inline-block;
                    font-style: normal;
                    line-height: 0;
                    text-align: center;
                    text-rendering: optimizeLegibility;
                    text-transform: none;
                    vertical-align: -.125em;
                }
                .rjui-icon-spin {
                    animation: iconSpin 1.5s infinite linear
                }
                @keyframes iconSpin {
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </span>
    );
};
Icon.defaultProps = {
    className: '',
    name: '',
    size: 'default',
    rotate: 0,
    spin: false,
    style: {},
    width: '',
    height: '',
};
export default React.memo(Icon);