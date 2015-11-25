module.exports = function(config) {
  config.set({

    basePath: '../..',

    frameworks: ['ng-scenario'],

    reporters: [
        'progress',
        'junit',
        'coverage'
    ],

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: false,

    urlRoot: '/__karma/',

    junitReporter: {
        outputFile: './test_out/e2e.xml',
        suite: 'e2e'
    },

    coverageReporter: {
        type: 'html',
        dir: './test_out/unit/'
    }

  })
}
