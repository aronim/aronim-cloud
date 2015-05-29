!function () {
    "use strict";

    define(["domReady", "jquery"],
        function (domReady, $) {
            domReady(function () {

                $("[data-kdc-module]").each(function (index, element) {

                    var $element = $(element);
                    var module = $element.attr("data-kdc-module");

                    var moduleName = module.substr(module.lastIndexOf("/") + 1);

                    require(["angular", module], function (angular) {
                        angular.bootstrap($element, [moduleName])
                    })
                });
            })
        }
    );
}();