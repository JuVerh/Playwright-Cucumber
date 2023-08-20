const reporter = require ('cucumber-html-reporter')

const options = {
    theme:'bootstrap',
    jsonFile: 'cucumber_report.json',
    output:'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenatioTimestamp: true,
    launchReport: false,
    metadata:{
        "App Version":"2.0.0",
        "Test Env":"STAGING",
        Browser:'Chrome',
        Platform:'MacOs'
    }
}

reporter.generate(options)