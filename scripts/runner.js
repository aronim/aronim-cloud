#!/usr/bin/env node

var exec = require("child_process").exec;

var modules = [
    {
        name: "aronim-cloud-configuration",
        code: "KDC_CFG",
        testUrl: "http://localhost:8888/health"
    },
    {
        name: "aronim-cloud-registry",
        code: "KDC_REG",
        testUrl: "http://localhost:8761/health",
        dependencies: ["aronim-cloud-configuration"]
    },
    {
        name: "aronim-cloud-metric",
        code: "KDC_MTC",
        dependencies: ["aronim-cloud-configuration"]
    },
    {
        name: "aronim-cloud-account",
        code: "KDC_ACC",
        dependencies: ["aronim-cloud-configuration", "aronim-cloud-registry"]
    },
    {
        name: "aronim-cloud-company",
        code: "KDC_CPY",
        dependencies: ["aronim-cloud-configuration", "aronim-cloud-registry"]
    },
    {
        name: "aronim-cloud-component",
        code: "KDC_CMP",
        dependencies: ["aronim-cloud-configuration", "aronim-cloud-registry"]
    },
    {
        name: "aronim-cloud-gateway",
        code: "KDC_GTW",
        dependencies: ["aronim-cloud-configuration", "aronim-cloud-registry"]
    },
    {
        name: "aronim-cloud-user",
        code: "KDC_USR",
        dependencies: ["aronim-cloud-configuration", "aronim-cloud-registry"]
    }
];

var baseDir = "/Users/kevin/projects/aronim/aronim-cloud";

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

