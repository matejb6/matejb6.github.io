module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-spec-reporter')
    ],
    files: ['./src/**/*.spec.js'],
    client: {
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    reporters: ['kjhtml', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
