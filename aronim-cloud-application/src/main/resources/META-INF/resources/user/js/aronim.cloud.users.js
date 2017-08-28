(function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/aronim.cloud.common",
            "text!user/template/aronim.cloud.users.html"],

        function ($, angular, aronim, aronimCloudUsersTemplate) {

            angular
                .module("aronim.cloud.users", [])
                .factory("acUserService", acUserService)
                .directive("acUsers", acUsers);

            function acUserService($q, $http) {
                return {
                    list: function () {

                        var deferred = $q.defer();

                        $http.get("/api/users")
                            .success(function (data) {
                                deferred.resolve(data);
                            }).error(function (data) {
                            deferred.reject(data.message);
                        });

                        return deferred.promise;
                    }
                };
            }

            function acUsersController ($scope, acUserService) {

                $scope.refreshUsers = function () {
                    acUserService
                        .list()
                        .then(function (users) {
                            $scope.users = users;
                        }, function (errorMessage) {
                            $scope.errorMessage = errorMessage;
                        });
                };

                $scope.refreshUsers();
            }

            function acUsers () {
                return {
                    scope: {},
                    restrict: "E",
                    template: aronimCloudUsersTemplate,
                    controller: acUsersController
                };
            }
        }
    );
}());