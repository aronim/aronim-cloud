!function () {
    "use strict";

    define(["jquery",
            "angular",
            "application/js/kdc.applications"],

        function ($, angular) {

            var module = angular.module("kdc.web.admin", ["kdc.applications"]);

            module.controller("LogoutController", function ($scope, $http, $window) {

                $scope.logout = function () {
                    $http.post("/logout", {})
                        .success(function () {
                            $window.location.href = "/";
                        })
                        .error(function () {

                        });
                }
            });
        });
}();