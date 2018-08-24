### Configure & Run tests

```
npm install
npm test
```

### Protractor expecting the default `update-config.json` to be present

```
I/launcher - Running 1 instances of WebDriver
E/local - Error code: 135
E/local - Error message: No update-config.json found. Run 'webdriver-manager update' to download binaries.
E/local - Error: No update-config.json found. Run 'webdriver-manager update' to download binaries.
at Local.addDefaultBinaryLocs_ (/Users/ram.pasala/coding/wdm-protractor/node_modules/protractor/built/driverProviders/local.js:39:23)
at Local.setupDriverEnv (/Users/ram.pasala/coding/wdm-protractor/node_modules/protractor/built/driverProviders/local.js:105:14)
at Local.setupEnv (/Users/ram.pasala/coding/wdm-protractor/node_modules/protractor/built/driverProviders/driverProvider.js:111:34)
```