module.exports = function(config) {
  config.set({

    basePath: '../..'

    frameworks: [''],

    files: [
        './src/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9877,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    urlRoot: '/__karma/'

  })
}
