module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "sourceType": "module"
    },
    "rules": {
        "indent": [1, "tab"],
        "linebreak-style": ["error", "unix"],
        "quotes": [1, "single"],
        "semi": [1, "never"],
        'linebreak-style': 'off',
        'no-unused-vars': [1, { 'varsIgnorePattern': 'h' }]
    }
};