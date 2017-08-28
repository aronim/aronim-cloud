!function () {
    "use strict";

    define(["jquery",
            "angular",
            "text!common/template/aronim.cloud.common.logout.html"],

        function ($, angular, acLogoutTemplate) {

            var module = angular.module("aronim.cloud.common.logout", []);

            module
                .directive("acLogout", acLogout);

            function acLogoutController($scope, $http, $window) {
                $scope.logout = function () {
                    $http.post("/logout", {})
                        .success(function () {
                            $window.location.href = "/";
                        })
                        .error(function () {

                        });
                }
            }

            function acLogout() {
                return {
                    replace: true,
                    scope: {},
                    restrict: "E",
                    template: acLogoutTemplate,
                    controller: acLogoutController
                };
            }
        });
}();