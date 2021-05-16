const rehypePrism = require('rehype-highlight'); // # needThemeCss
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)?$/,
    options: {
      rehypePlugins: [rehypePrism],
    },
});


const nextConfig = {
    
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

    compress: true,
    
    // #redirects https://www.nextjs.cn/docs/api-reference/next.config.js/redirects
    async redirects() {
        return [
            {
                source: '/',
                permanent: true, // 永久
                destination: '/guide'
            },
            {
                source: '/guide',
                permanent: true,
                destination: '/guide/introduction'
            }
        ];
    },

    webpack: function(config) {
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-sprite-loader'
        });
        return config;
    }
};

module.exports = withMDX(nextConfig);