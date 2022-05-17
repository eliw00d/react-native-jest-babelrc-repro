module.exports = {
  displayName: 'mobile',
  preset: 'react-native', // comment this to see the console.log from .babelrc.js
  transform: {
    '^.+\\.(js|ts|tsx)$': ['babel-jest', {cwd: __dirname, rootMode: 'upward'}],
  },
};
