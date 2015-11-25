module.exports = function(config) {
  config.set({

    basePath: '../..',

    frameworks: ['jasmine'],

    reporters: [
        'progress',
        'junit',
        'coverage'
    ],

    autoWatch: false,

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
