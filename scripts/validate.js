#!/usr/bin/env node

var fs = require("fs"),
    assert = require("./lib/assert"),
    validateModule = require("./lib/module-validator");

var project = {
    path: process.cwd() + "/../"
};

var modulesData = fs.readFileSync("./modules.json", {});

var modules = JSON.parse(modulesData);

modules.forEach(function (module) {

    validateModule(project, module);
});

assert.printErrors();