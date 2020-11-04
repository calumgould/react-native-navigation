exports.config = {
  runner: 'local',
  port: 4723,
  maxInstances: 1,
  logLevel: 'info',
  baseUrl: 'http://the-internet.herokuapp.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      'appium',
      {
        command: 'appium',
      },
    ],
  ],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    helpers: [require.resolve('@babel/register')],
    requires: ['ts-node/register'],
    defaultTimeoutInterval: 60000,
  },
};
