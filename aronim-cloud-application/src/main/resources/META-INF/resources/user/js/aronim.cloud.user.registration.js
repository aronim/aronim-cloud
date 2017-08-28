(function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/aronim.cloud.common",
            "text!user/template/aronim.cloud.user.registration.html",
            "common/js/aronim.cloud.common.login"],

        function ($, angular, ac, acUserRegistationFormTemplate) {

            angular.module("aronim.cloud.user.registration", ["aronim.cloud.common.login"])
                .factory("acUserRegistrationService", acUserRegistrationService)
                .directive("acUserRegistrationForm", acUserRegistrationForm);

            function acUserRegistrationService($q, $http) {
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

            function acUserRegistrationForm($window,
                                            acUserRegistrationService,
                                            acLoginService) {
                return {
                    scope: {},
                    restrict: "E",
                    template: acUserRegistationFormTemplate,
                    controller: function ($scope) {

                        $scope.command = {
                            id: ac.common.guid()
                        };

                        $scope.$watch("command.emailAddress", function (emailAddress) {

                            if (angular.isUndefined(emailAddress)) {
                                $scope.errorMessage = undefined;
                                return;
                            }

                            acUserRegistrationService
                                .userWithEmailAddressExists(emailAddress)
                                .then(function (userWithEmailAddressExists) {

                                    if (userWithEmailAddressExists) {
                                        $scope.errorMessage = "User with email address already exists";
                                    } else {
                                        $scope.errorMessage = undefined;
                                    }
                                });
                        });

                        $scope.register = function () {

                            acUserRegistrationService
                                .register($scope.command)
                                .then(function () {

                                    acLoginService
                                        .login($scope.command)
                                        .then(function () {
                                            $window.location.href = "/";
                                        }, function (errorMessage) {
                                            $scope.errorMessage = errorMessage;
                                        });

                                }, function (errorMessage) {
                                    $scope.errorMessage = errorMessage;
                                });
                        };
                    }
                };
            }
        }
    );
}());