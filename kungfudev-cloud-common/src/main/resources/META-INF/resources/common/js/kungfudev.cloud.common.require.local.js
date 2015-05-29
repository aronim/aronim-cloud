!function () {
    "use strict";

    require.config({
        baseUrl: "resources/",
        paths: {
            "angular": "http://cdn.jsdelivr.net/webjars/org.webjars/angularjs/1.3.15/angular",
            "domReady": "http://cdn.jsdelivr.net/webjars/org.webjars/requirejs-domready/2.0.1/domReady",
            "jquery": "http://cdn.jsdelivr.net/webjars/org.webjars/jquery/2.1.4/jquery.min",
            "text": "http://cdn.jsdelivr.net/webjars/org.webjars/requirejs-text/2.0.10-3/text"
        },
        shim: {
            "angular": {deps: ["jquery"], exports: "angular"}
        },
        urlArgs: "1.0-SNAPSHOT",
        deps: ["../../../../../../kungfudev-cloud-common/src/main/resources/META-INF/resources/common/js/kungfudev.cloud.common.bootstrap"]
    })
}();