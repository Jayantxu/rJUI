import React from 'react';
// # https://webpack.js.org/guides/dependency-management/ & @types/webpack-env
const iconfiles = require.context("assets/svg/", true, /\.svg$/);
iconfiles.keys().forEach(iconfiles);

export interface IconProps extends React.SVGAttributes<SVGElement> {
    className: string
    name: string
    size: string | number
    rotate: number
    spin: boolean
    style: React.CSSProperties
    width: string | number,
    height: string | number,
    color: string
}

const Icon: React.FC<IconProps> = (props) => {
    const getStyle = (styleProps: IconProps) => {
        const style: React.CSSProperties = {};
        styleProps.rotate && (style.transform = `rotate(${styleProps.rotate}deg)`);
        styleProps.size && (style.fontSize = `${styleProps.size}px`);
        styleProps.color && (style.color = `${styleProps.color}`);
        return style;
    };

    return (
        <span role="img" aria-label={props.name} 
            className={`rjui-icon  ${props.spin ? 'rjui-icon-spin' : ''}`}
            style={props.style}
        >
            <svg width={props.width ? props.width : "1em"} 
                height={props.height ? props.height : "1em"} 
                fill="currentColor"
                style={ getStyle(props) }
                onClick={ props.onClick }
                onMouseEnter = { props.onMouseEnter }
                onMouseLeave = { props.onMouseLeave }
                >
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
            <style jsx>{`
                .rjui-icon {
                    font-size: 30px;
                    margin: 12px 0 8px;
                    color: inherit;
                    display: inline-block;
                    font-style: normal;
                    line-height: 0;
                    text-align: center;
                    text-rendering: optimizeLegibility;
                    text-transform: none;
                    vertical-align: -.125em;
                    color: #314659;
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
    size: '',
    rotate: 0,
    spin: false,
    style: {},
    width: '',
    height: '',
    color: '',
};
export default React.memo(Icon);