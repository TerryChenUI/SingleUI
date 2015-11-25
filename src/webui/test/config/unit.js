module.exports = function(config) {
  config.set({

    basePath: '../..',

    frameworks: ['jasmine'],

    files: [
        './src/**/*.spec.js'
    ],

    preprocessors: {
        'test/**/*.spec.js': 'coverage',
    },

    port: 9877,

    background: true,

    runnerPort: 9102,

    autoWatch: true,

    browsers: ['PhantomJS'],

    urlRoot: '/__karma/',

    reporters: [
        'progress',
        'junit',
        'coverage'
    ],

    junitReporter: {
        outputFile: './test_out/junit/unit.xml',
        suite: 'unit',
        useBrowserName: false
    },

    coverageReporter: {
        type: 'html',
        dir: './test_out/coverage/'
    }
    
  })
}
