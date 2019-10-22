module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
    },
    setupTestFrameworkScriptFile: "<rootDir>__tests__/setupTests.js"
  };