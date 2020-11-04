const { config } = require('./wdio.shared.conf');
const { join } = require('path');

// ============
// Specs
// ============
config.specs = ['./appium/specs/*.spec.js'];

config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    'appium:deviceName': 'iPhone 12 Pro',
    'appium:platformVersion': '14.1',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': join(
      process.cwd(),
      '/playground/ios/DerivedData/playground/Build/Products/Debug-iphonesimulator/playground.app'
    ),
    'appium:noReset': false,
    'appium:newCommandTimeout': 240,
    'appium:autoAcceptAlerts': true,
  },
];

exports.config = config;
