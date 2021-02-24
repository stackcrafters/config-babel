const { jsWithTs: tsjPreset } = require('ts-jest/presets');

module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: '(.*\\.test\\.(ts|js))$',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js)?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node']
};
