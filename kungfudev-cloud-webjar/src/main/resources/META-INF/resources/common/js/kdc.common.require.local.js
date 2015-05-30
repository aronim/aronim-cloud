!function () {
    "use strict";

    require.config({
        baseUrl: "",
        paths: {
            "angular": "http://cloud.kungfudev.com/webjars/angularjs/1.3.15/angular",
            "domReady": "http://cloud.kungfudev.com/webjars/requirejs-domready/2.0.1/domReady",
            "jquery": "http://cloud.kungfudev.com/webjars/jquery/2.1.4/jquery.min",
            "text": "http://cloud.kungfudev.com/webjars/requirejs-text/2.0.10-3/text",
            "common/js/kdc.common": "http://cloud.kungfudev.com/resources/common/js/kdc.common"
        },
        shim: {
            "angular": {deps: ["jquery"], exports: "angular"}
        },
        urlArgs: "1.0-SNAPSHOT",
        deps: ["http://cloud.kungfudev.com/resources/common/js/kdc.common.bootstrap.js"]
    })
}();