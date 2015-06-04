(function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/kdc.common",
            "text!user/template/kdc.user.login.html"],

        function ($, angular, kdc, kdcLoginTemplate) {

            var module = angular.module("kdc.user.login", []);

            module.factory("kdcUserLoginService",
                function ($rootScope, $q, $http, $window) {

                    return {
                        login: function (command) {

                            var deferred = $q.defer();

                            var headers = {
                                authorization: "Basic " + $window.btoa(command.emailAddress + ":" + command.password)
                            };

                            $http.get("/login", {headers: headers})
                                .success(function (data) {
                                    deferred.resolve(data);
                                }).error(function (data) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        }
                    };
                }
            );

            module.directive("kdcUserLoginForm",
                function ($window, $log, kdcUserLoginService) {
                    return {
                        scope: {},
                        restrict: "E",
                        template: kdcLoginTemplate,
                        controller: function ($scope) {

                            $scope.command = {};

                            $scope.login = function () {

                                kdcUserLoginService
                                    .login($scope.command)
                                    .then(function (user) {

                                        $window.location.href = "/";
                                        $rootScope.authenticated = user.authenticated;

                                    }, function (errorMessage) {

                                        $scope.errorMessage = errorMessage;
                                        $rootScope.authenticated = false;
                                    });
                            };
                        }
                    };
                }
            );
        }
    );
}());