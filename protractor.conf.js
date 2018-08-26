const wdm = require('webdriver-manager-replacement');

// Set the log level for webdriver-manager. If this is not set, nothing will log.
wdm.setLogLevel('info');

// To run this in the test, run as detach must be set to true. If this is not
// set to true, the selenium server standalone process will not return, preventing
// tests from being executed.
const runAsDetach = true;
const options = wdm.initOptions(
  [wdm.Provider.ChromeDriver, wdm.Provider.Selenium],
  runAsDetach);
    
exports.config = {
  specs: [
    './test.js'
  ],
  capabilities: {
    maxInstances: 5,
    browserName: 'chrome'
  },
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'http://www.google.com',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    expectationResultHandler: function(passed, assertion) {}
  },
  onPrepare: function () {
    // update binaries and start the server.
    return wdm.update(options).then(() => {
      return wdm.start(options).then(() => {
        // wait for the server to start in detached mode.
      });
    });
  },
  onComplete: function () {
    // shutdown the standalone server.
    return wdm.shutdown(options).then(() => {
      // wait to shutdown the server.
    });
  }
}
