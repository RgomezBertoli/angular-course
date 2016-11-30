var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    baseUrl: 'http://localhost:8081',

    multiCapabilities: [{
        browserName: 'chrome',
    },
    {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path
    }],

    suites: {
        home: 'e2e/home/*.spec.js'
    },

    jasmineNodeOpts: {
        showColors: true
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};