!function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/kdc.common",
            "text!user/template/kdc.user.registration.html"],

        function ($, angular, kdc, userRegistationFormTemplate) {

            var module = angular.module("kdc.user.registration", []);

            module.factory("kdcUserRegistrationService",
                function ($q, $http) {

                    return {
                        login: function (command) {

                            var deferred = $q.defer();

                            $http
                                .put("/api/users/register", command)
                                .success(function(data, status, headers, config) {
                                    deferred.resolve();
                                })
                                .error(function(data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        }
                    }
                }
            );

            module.controller("KdcUserRegistrationController",
                function ($scope, $window, $log, kdcUserRegistrationService) {

                    $scope.command = {
                        id: kdc.common.guid()
                    };

                    $scope.register = function () {

                        kdcUserRegistrationService
                            .login($scope.command)
                            .then(function () {
                                $log.debug("Registration Successful!");
                            }, function (errorMessage) {
                                $scope.errorMessage = errorMessage;
                            });
                    };
                }
            );

            module.directive("kdcUserRegistrationForm",
                function () {
                    return {
                        scope: {},
                        restrict: "E",
                        template: userRegistationFormTemplate,
                        controller: "KdcUserRegistrationController"
                    }
                }
            );
        }
    );
}();