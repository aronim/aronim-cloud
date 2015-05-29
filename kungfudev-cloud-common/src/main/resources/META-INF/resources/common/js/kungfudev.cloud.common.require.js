!function () {
    "use strict";

    require.config({
        baseUrl: "resources/",
        paths: {
            "angular": "/webjars/angularjs/1.3.15/angular.min",
            "domReady": "/webjars/requirejs-domready/2.0.1/domReady",
            "jquery": "/webjars/jquery/2.1.4/jquery.min",
            "text": "/webjars/requirejs-text/2.0.10-3/text"
        },
        shim: {
            "angular": {deps: ["jquery"], exports: "angular"}
        },
        urlArgs: "1.0-SNAPSHOT",
        deps: ["common/js/kungfudev.cloud.common.bootstrap"]
    })
}();