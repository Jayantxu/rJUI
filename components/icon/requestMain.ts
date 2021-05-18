export const requestSvg = () => {
    // # https://webpack.js.org/guides/dependency-management/ & @types/webpack-env
    const iconfiles = require.context("assets/svg/", true, /\.svg$/);
    iconfiles.keys().forEach(iconfiles);
};