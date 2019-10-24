const { defaults } = require('jest-config');

module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: [
        'tsx',
        ...defaults.moduleFileExtensions
    ],
    setupTestFrameworkScriptFile: "<rootDir>__tests__/setupTests.js",
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!react-native|react-navigation)"]
};