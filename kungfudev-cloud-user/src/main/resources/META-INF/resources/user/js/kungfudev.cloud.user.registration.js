!function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/kungfudev.cloud.common",
            "text!user/template/kungfudev.cloud.user.registration.html"],

        function ($, angular, kdc, userRegistationFormTemplate) {

            var module = angular.module("kungfudev.cloud.user.registration", []);

            module.factory("kdcUserRegistrationController",
                function ($q, $http) {

                    return {
                        register: function (command) {

                            var deferred = $q.defer();

                            $http
                                .put("/users/register", command)
                                .success(function(data, status, headers, config) {
                                    deferred.resolve();
                                })
                                .error(function(data, status, headers, config) {
                                    deferred.reject(data);
                                });

                            return deferred.promise;
                        }
                    }
                }
            );

            module.controller("KdcUserRegistrationController",
                function ($scope, $window, $log, kdcUserRegistrationController) {

                    $scope.command = {
                        id: kdc.common.guid()
                    };

                    $scope.register = function () {

                        kdcUserRegistrationController
                            .register($scope.command)
                            .then(function () {
                                $log.debug("Registration Successful!");
                            }, function (error) {
                                $log.error("Registration Failed: " + error);
                            });
                    };
                }
            );

            module.directive("kdcUserRegistrationForm",
                function () {
                    return {
                        restrict: "E",
                        template: userRegistationFormTemplate,
                        controller: "KdcUserRegistrationController"
                    }
                }
            );
        }
    );
}();