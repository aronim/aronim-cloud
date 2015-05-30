!function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/kdc.common",
            "text!application/template/kdc.applications.html"],

        function ($, angular, kdc, kdcApplicationsTemplate) {

            var module = angular.module("kdc.applications", []);

            module.factory("kdcApplicationsService",
                function ($q, $http) {

                    return {
                        list: function () {

                            var deferred = $q.defer();

                            $http
                                .get("/api/applications")
                                .success(function (data, status, headers, config) {
                                    deferred.resolve(data);
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        },
                        restart: function (instance) {

                            var deferred = $q.defer();

                            $http
                                .post("/api/applications/restart?hostname=" + instance.ipAddr + "&port=" + instance.port.$, {})
                                .success(function (data, status, headers, config) {
                                    deferred.resolve(data);
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        },
                        shutdown: function (instance) {

                            var deferred = $q.defer();

                            $http
                                .post("/api/applications/shutdown?hostname=" + instance.ipAddr + "&port=" + instance.port.$, {})
                                .success(function (data, status, headers, config) {
                                    deferred.resolve(data);
                                })
                                .error(function (data, status, headers, config) {
                                    deferred.reject(data.message);
                                });

                            return deferred.promise;
                        }
                    }
                }
            );

            module.directive("kdcApplications",
                function ($window, $log, kdcApplicationsService) {

                    return {
                        restrict: "E",
                        template: kdcApplicationsTemplate,
                        controller: function ($scope) {

                            $scope.restart = function (instance) {

                                kdcApplicationsService
                                    .restart(instance)
                                    .then(function () {
                                        refreshApplications();
                                    }, function () {

                                    });
                            };

                            $scope.shutdown = function (instance) {
                                kdcApplicationsService
                                    .shutdown(instance)
                                    .then(function () {
                                        refreshApplications();
                                    }, function () {

                                    });
                            };

                            var refreshApplications = function () {
                                kdcApplicationsService
                                    .list()
                                    .then(function (applications) {
                                        $scope.applications = applications;
                                    }, function (errorMessage) {
                                        $scope.errorMessage = errorMessage;
                                    });
                            };

                            refreshApplications();
                        }
                    }
                }
            );
        }
    );
}();