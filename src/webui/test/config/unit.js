module.exports = function(config) {
  config.set({

    basePath: '../..',

    frameworks: ['jasmine'],

    files: [
        './src/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: [
        'progress',
        'junit',
        'coverage'
    ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    urlRoot: '/__karma/',

    junitReporter: {
        outputFile: './test_out/unit.xml',
        suite: 'unit'
    },

    coverageReporter: {
        type: 'html',
        dir: './test_out/unit/'
    }

  })
}
