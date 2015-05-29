!function () {
    "use strict";

    define(["jquery",
            "angular",
            "user/js/kdc.user.registration",
            "authentication/js/kdc.authentication.login"],

        function ($, angular) {

            angular.module("kdc.app.index", ["kdc.user.registration", "kdc.authentication.login"]);

        });
}();
