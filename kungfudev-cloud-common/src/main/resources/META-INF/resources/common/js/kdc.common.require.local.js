!function () {
    "use strict";

    require.config({
        baseUrl: "/resources/",
        paths: {
            "angular": "http://localhost:9000/webjars/angularjs/1.3.15/angular",
            "domReady": "http://localhost:9000/webjars/requirejs-domready/2.0.1/domReady",
            "jquery": "http://localhost:9000/webjars/jquery/2.1.4/jquery.min",
            "text": "http://localhost:9000/webjars/requirejs-text/2.0.10-3/text",
            "common/js/kdc.common": "http://localhost:9000/resources/common/js/kdc.common"
        },
        shim: {
            "angular": {deps: ["jquery"], exports: "angular"}
        },
        urlArgs: "1.0-SNAPSHOT",
        deps: ["http://localhost:9000/resources/common/js/kdc.common.bootstrap.js"]
    })
}();