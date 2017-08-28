(function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/aronim.cloud.common",
            "text!common/template/aronim.cloud.common.login.html"],

        function ($, angular, aronim, acLoginTemplate) {

            angular
                .module("aronim.cloud.common.login", [])
                .factory("acLoginService", acLoginService)
                .directive("acLoginForm", acLoginForm);

            function acLoginService($q, $http, $window) {
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

            function acLoginFormController ($scope, $window, acLoginService) {

                $scope.command = {};

                $scope.login = function () {
                    acLoginService
                        .login($scope.command)
                        .then(function () {
                            $window.location.href = "/";
                        }, function (errorMessage) {
                            $scope.errorMessage = errorMessage;
                        });
                };
            }

            function acLoginForm () {
                return {
                    scope: {},
                    restrict: "E",
                    template: acLoginTemplate,
                    controller: acLoginFormController
                };
            }
        }
    );
}());