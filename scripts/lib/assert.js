var fs = require("fs"),
    dom = require("xmldom").DOMParser,
    xpath = require("xpath");

var assert = {};

assert._errors = [];
assert._context = "";
assert.context = function (context) {
    if (context) {
        assert._context = context;
    }
    return assert._context;
};

assert.error = function (message) {
    assert._errors.push(assert._context + " " + message);
};

assert.fileExists = function (path, errorMessage) {

    if (!fs.existsSync(path)) {

        assert.error(errorMessage);
        return false;
    }

    return true;
};

assert.xmlFile = function (path) {

    var xmlString = fs.readFileSync(path, {}).toString();
    var doc = new dom().parseFromString(xmlString);
    var select = xpath.select;

    return {
        withNamespace: function (mappings) {

            select = xpath.useNamespaces(mappings);

            return this;
        },
        xpathEquals: function (xpathExpression, expected, errorMessage) {

            var result = select(xpathExpression, doc)[0];
            if (!result || result.nodeValue != expected) {
                assert.error(errorMessage);
            }

            return this;
        },
        xpathDoesNotExist: function (xpathExpression, errorMessage) {

            var result = select(xpathExpression, doc)[0];
            if (result) {
                assert.error(errorMessage);
            }

            return this;
        }
    }
};

assert.printErrors = function () {
    assert._errors.forEach(function (error) {
        console.error(error);
    });
};

module.exports = assert;