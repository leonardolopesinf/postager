const common = require('./jest.common.config')
const path = require('path');

module.exports = {
  projects: [
    {
      ...common,
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: [path.resolve(__dirname, './electron/**/*.(spec|test).ts')]
    },
    {
      ...common,
      runner: '@jest-runner/electron',
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: [path.resolve(__dirname, './src/**/*.(spec|test).tsx')]
    }
  ]
}