!function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/kdc.common",
            "text!authentication/template/kdc.authentication.login.html"],

        function ($, angular, kdc, kdcLoginTemplate) {

            var module = angular.module("kdc.authentication.login", []);

            module.factory("kdcLoginService",
                function ($q, $http) {

                    return {
                        login: function (command) {

                            var deferred = $q.defer();

                            $http({
                                method: "POST",
                                url: "/login",
                                data: $.param(command),
                                headers: {"Content-Type": "application/x-www-form-urlencoded"}
                            })
                                .success(function (data, status, headers) {
                                    deferred.resolve();
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        }
                    }
                }
            );

            module.controller("KdcLoginController",
                function ($scope, $window, $log, kdcLoginService) {

                    $scope.command = {};

                    $scope.login = function () {

                        kdcLoginService
                            .login($scope.command)
                            .then(function () {
                                $window.location.href = "/";
                            }, function (errorMessage) {
                                $scope.errorMessage = errorMessage;
                            });
                    };
                }
            );

            module.directive("kdcLoginForm",
                function () {
                    return {
                        restrict: "E",
                        template: kdcLoginTemplate,
                        controller: "KdcLoginController"
                    }
                }
            );
        }
    );
}();