module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error",
                    "log",
                    "dir",
                    "table"
                ]
            }
        ]
    },
    "globals": {
        "IBMCore": false,
        "Mustache": false
    }
};
