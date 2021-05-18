module.exports = {
    verbose: true,
    // 模块使用的文件扩展名
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: [
        './tests/setupTests.js'
    ],
    // 测试文件匹配
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
    // 正则表达式到模块名称或模块名称数组的映射
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/tests/__mocks__/fileMock.js",
        'requestMain': '<rootDir>/tests/__mocks__/fileMock.js',
        'components': '<rootDir>/components'
    }
};
  