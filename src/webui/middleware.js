'use strict';
module.exports = function (connect, options) {

    var express = require('express');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var errorhandler = require('errorhandler');
    var routeService = require('./mocks/routes');

    var app = express();

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(errorhandler());
    app.use(express["static"](options.root));
    app.use(express.Router());
    routeService(app, options);

    return [connect(app)];
};
