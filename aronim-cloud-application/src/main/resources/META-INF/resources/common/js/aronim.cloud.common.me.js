(function () {
    "use strict";

    define(["jquery",
            "angular",
            "common/js/aronim.cloud.common",
            "text!common/template/aronim.cloud.common.me.html"],

        function ($, angular, aronim, acMeTemplate) {

            angular
                .module("aronim.cloud.common.me", [])
                .factory("acMeService", acMeService)
                .directive("acMe", acMe);

            function acMeService($q, $http) {
                return {
                    whoAmI: function () {

                        var deferred = $q.defer();

                        $http.get("/api/users/me")
                            .success(function (data) {
                                deferred.resolve(data);
                            }).error(function (data) {
                            deferred.reject(data.message);
                        });

                        return deferred.promise;
                    }
                };
            }

            function acMeController($scope, acMeService) {

                acMeService
                    .whoAmI()
                    .then(function (me) {
                        $scope.me = me;
                    })
            }

            function acMe() {
                return {
                    replace: true,
                    scope: {},
                    restrict: "E",
                    template: acMeTemplate,
                    controller: acMeController
                };
            }
        }
    );
}());