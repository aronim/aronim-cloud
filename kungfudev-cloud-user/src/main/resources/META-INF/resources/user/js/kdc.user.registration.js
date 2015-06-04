(function () {
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
                        userWithEmailAddressExists: function (emailAddress) {

                            var deferred = $q.defer();

                            $http
                                .get("/api/users/exists", {params: {emailAddress: emailAddress}})
                                .success(function (data, status, headers, config) {
                                    deferred.resolve(data);
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        },
                        register: function (command) {

                            var deferred = $q.defer();

                            $http
                                .put("/api/users/register", command)
                                .success(function (data, status, headers, config) {
                                    deferred.resolve();
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        }
                    };
                }
            );

            module.directive("kdcUserRegistrationForm",
                function ($window, $log, kdcUserRegistrationService) {
                    return {
                        scope: {},
                        restrict: "E",
                        template: userRegistationFormTemplate,
                        controller: function ($scope) {

                            $scope.command = {
                                id: kdc.common.guid()
                            };

                            $scope.$watch("command.emailAddress", function(emailAddress) {

                                if (angular.isUndefined(emailAddress)) {
                                    $scope.errorMessage = undefined;
                                    return;
                                }

                                kdcUserRegistrationService
                                    .userWithEmailAddressExists(emailAddress)
                                    .then(function(userWithEmailAddressExists) {

                                        if (userWithEmailAddressExists) {
                                            $scope.errorMessage = "User with email address already exists";
                                        } else {
                                            $scope.errorMessage = undefined;
                                        }
                                    });
                            });

                            $scope.register = function () {

                                kdcUserRegistrationService
                                    .register($scope.command)
                                    .then(function () {
                                        $log.debug("Registration Successful!");
                                    }, function (errorMessage) {
                                        $scope.errorMessage = errorMessage;
                                    });
                            };
                        }
                    };
                }
            );
        }
    );
}());