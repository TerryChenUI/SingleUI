"use strict";
var fs = require("fs");

registerTasks('/config/');
registerTasks('/tasks/');

function registerTasks(folder) {
    var task = fs.readdirSync(__dirname + folder);
    task.forEach(function (task) {
        require(__dirname + folder + task);
    });
}

