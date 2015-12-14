#!/usr/bin/env node

var exec = require("child_process").exec;

var modules = [
    {
        name: "kungfudev-cloud-configuration",
        code: "KDC_CFG",
        testUrl: "http://localhost:8888/health"
    },
    {
        name: "kungfudev-cloud-registry",
        code: "KDC_REG",
        testUrl: "http://localhost:8761/health",
        dependencies: ["kungfudev-cloud-configuration"]
    },
    {
        name: "kungfudev-cloud-metric",
        code: "KDC_MTC",
        dependencies: ["kungfudev-cloud-configuration"]
    },
    {
        name: "kungfudev-cloud-account",
        code: "KDC_ACC",
        dependencies: ["kungfudev-cloud-configuration", "kungfudev-cloud-registry"]
    },
    {
        name: "kungfudev-cloud-company",
        code: "KDC_CPY",
        dependencies: ["kungfudev-cloud-configuration", "kungfudev-cloud-registry"]
    },
    {
        name: "kungfudev-cloud-component",
        code: "KDC_CMP",
        dependencies: ["kungfudev-cloud-configuration", "kungfudev-cloud-registry"]
    },
    {
        name: "kungfudev-cloud-gateway",
        code: "KDC_GTW",
        dependencies: ["kungfudev-cloud-configuration", "kungfudev-cloud-registry"]
    },
    {
        name: "kungfudev-cloud-user",
        code: "KDC_USR",
        dependencies: ["kungfudev-cloud-configuration", "kungfudev-cloud-registry"]
    }
];

var baseDir = "/Users/kevin/projects/kungfudev/kungfudev-cloud";

var childProcesses = {};

modules.forEach(function (module) {

    if (module.dependencies) {
        module.dependencies.forEach(function(dependency) {

        })
    }

    var cmd = "cd " + baseDir + "/" + module.name + "/build/libs && java -Xmx128m -Xms128m -jar " + module.name + "*.jar";
    childProcesses[module.name] = exec(cmd);
    childProcesses[module.name].stdout.on("data", function(data) {
        console.log("[" + module.code + "] " + data.substr(0, data.length - 2));
    });

    childProcesses[module.name].stderr.on("data", function(data) {
        console.error("[" + module.code + "] " + data.substr(0, data.length - 2));
    });

    childProcesses[module.name].on("close", function(code) {
        console.error("[" + module.code + "] " + code);
        childProcesses[module.name] = exec(cmd);
    });
});

