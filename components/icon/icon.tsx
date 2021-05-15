import React from 'react';
// # https://webpack.js.org/guides/dependency-management/ & @types/webpack-env
const iconfiles = require.context("assets/svg/", true, /\.svg$/);
iconfiles.keys().forEach(iconfiles);

const Icon = () => {
    return (
        <span>
            <svg>
                <use xlinkHref="#user"></use>
            </svg>
            <svg>
                <use xlinkHref="#good"></use>
            </svg>
        </span>
    );
};
export default React.memo(Icon);