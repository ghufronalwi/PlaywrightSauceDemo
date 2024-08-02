# Playwright SauceDemo

This repository contains a simple Playwright Automation Test using JavaScript that will test https://www.saucedemo.com/.

## Requirements

- Node.js and NPM
- Playwright (version 1.45.3)

>  I'm using Node.js version 22.5.1 and NPM version 10.8.2. In case there is an issue during the installation process or during the run process, it might be worth updating the npm version to match mine.

## How to run

### Prerequisites
Make sure you have Node.js and NPM installed in your device.

### Installation
From the root directory, run this command inside your terminal to install dependencies listed inside `package.json`:
```
npm install
```

### Running the test
After installation, run this command to start running the test:
```
npx playwright test
```
Please note that the test will run in 2 browsers (chrome and firefox). To run only for specific browser, use this command:
```dtd
npx playwright test --project=chromium
```
### Running specific test
To run specific test file, run this command:
```dtd
npx playwright test testLogin.spec.js
```

### Running the test in slow motion and headed mode
By default, the test will run in headless mode to save time during test run. To view the test run in slow motion follow this step:
1. Open `playwright.config.js`.
2. Go to line 28, you will find `launchOptions`. Remove comment for line 28 until 30 so it should look like this:
```dtd
    launchOptions: {
      slowMo: 1000 // define your time in miliseconds
    },
```
3. To run in headed mode, run this command:
```dtd
npx playwright test --project=chromium --headed
```

### Report
- To check the HTML report after running the test, navigate to `playwright-report/` directory, and open the `index.html` file from your browser.
- Alternatively, you can run this command to open the HTML report for your last test run:
```
npx playwright show-report
```

### Test Result Screenshot
![](https://github.com/ghufronalwi/FlipCypress/blob/master/screenshot-cypress-result-cli-report.png?raw=true)
![](https://github.com/ghufronalwi/FlipCypress/blob/master/screenshot-cypress-result-html-report.png?raw=true)
