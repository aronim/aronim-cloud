!function () {
    "use strict";

    define(["domReady", "jquery"],
        function (domReady, $) {
            domReady(function () {

                window.aronim = window.aronim || {};
                window.aronim.cloud = window.aronim.cloud || {};
                window.aronim.cloud.bootstrap = window.aronim.cloud.bootstrap || {};
                window.aronim.cloud.bootstrap.done = false;

                $("[data-aronim-cloud-module]").each(function (index, element) {

                    var $element = $(element);
                    var module = $element.attr("data-aronim-cloud-module");

                    var moduleName = module.substr(module.lastIndexOf("/") + 1);

                    require(["angular", module], function (angular) {
                        angular.bootstrap($element, [moduleName])
                    })
                });

                window.aronim.cloud.bootstrap.done = true;
            })
        }
    );
}();