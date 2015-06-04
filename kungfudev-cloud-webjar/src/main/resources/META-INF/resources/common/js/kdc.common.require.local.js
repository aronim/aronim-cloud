!function () {
    "use strict";

    require.config({
        baseUrl: "",
        paths: {
            "angular": "/webjars/angularjs/1.3.15/angular",
            "domReady": "/webjars/requirejs-domready/2.0.1/domReady",
            "jquery": "/webjars/jquery/2.1.4/jquery.min",
            "text": "/webjars/requirejs-text/2.0.10-3/text",
            "common/js/kdc.common": "/resources/common/js/kdc.common"
        },
        shim: {
            "angular": {deps: ["jquery"], exports: "angular"}
        },
        urlArgs: "1.0-SNAPSHOT",
        deps: ["/resources/common/js/kdc.common.bootstrap.js"]
    })
}();