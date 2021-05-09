module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    // 可解析jsx语法
    "parserOptions": {
        "project": ["./tsconfig.json"],
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    //自动发现React的版本，从而进行规范react代码
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    // 运行环境
    "env": {
        "browser": true,
        "node": true
    },
    //使用推荐的React代码检测规范
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        'indent': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        "no-var-requires": 0,
        'eqeqeq': ["error", "always"],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-empty-function': [
            0,
        ],
        'semi': ["warn", "always"]
    }
}