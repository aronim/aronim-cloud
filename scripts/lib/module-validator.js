var assert = require("./assert");

var validateModulePomFile = function (module) {

    var pomPath = module.path + "/pom.xml";
    var pomPathExists = assert.fileExists(pomPath, "pom file does not exist");

    if (pomPathExists) {

        var assertXmlFile = assert
            .xmlFile(pomPath)
            .withNamespace({pom: "http://maven.apache.org/POM/4.0.0"});

        if (module.type == "spring-boot-application") {

            assertXmlFile
                .xpathEquals("/pom:project/pom:parent/pom:groupId/text()", "com.aronim.cloud", "incorrect parent groupId")
                .xpathEquals("/pom:project/pom:parent/pom:artifactId/text()", "aronim-cloud-parent", "incorrect parent artifactId")
                .xpathEquals("/pom:project/pom:parent/pom:version/text()", "1.0-SNAPSHOT", "incorrect parent version")
                .xpathEquals("/pom:project/pom:properties/pom:start-class/text()", module.entryPoint, "incorrect start class")
                .xpathDoesNotExist("/pom:project/pom:groupId/text()", "module groupId element should not exist")
                .xpathDoesNotExist("/pom:project/pom:version/text()", "module version element should not exist");

        }
    }
};

var validateModuleExists = function (module) {

    assert.fileExists(module.path, "module does not exist");
};

var validateModule = function (project, module) {

    assert.context("module[" + module.name + "]");

    if (!module.path) {
        module.path = module.name;
    }

    module.path = project.path + module.path;

    validateModuleExists(module);

    validateModulePomFile(module);
};

module.exports = validateModule;